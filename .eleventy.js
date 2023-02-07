const path = require("path");

const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItEleventyImg = require('markdown-it-eleventy-img');

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginEmbedYouTube = require("eleventy-plugin-youtube-embed");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [320, 640, 1280, 1920],
    formats: ["webp", "jpeg"],
    outputDir: "_site/static/img",
    urlPath: '/static/img',
    filenameFormat: function (hash, src, width, format, options) {
      const { name } = path.parse(src);
      return `${name}-${width}.${format}`;
    }
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  // Copy the `static` folders to the output
  eleventyConfig.addPassthroughCopy("./src/static/font");

  // Copy Netlify CMS `config.yml` fil to the output
  eleventyConfig.addPassthroughCopy("./src/admin/config.yml");

  // Copy favicon to route of /_site
  // eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginEmbedYouTube, {
    lite: true,
    modestBranding: true,
    recommendSelfOnly: true,
  });

  // Add a shortcode image
  eleventyConfig.addAsyncShortcode("image", imageShortcode);

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if(!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    linkify: true,
    langPrefix: 'language-',
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "direct-link",
      symbol: "#"
    }),
    level: [1,2,3,4],
    slugify: eleventyConfig.getFilter("slugify")
  }).use(markdownItEleventyImg, {
    imgOptions: {
      widths: [320, 640, 1280, 1920],
      formats: ["webp", "jpeg"],
      outputDir: "_site/static/img",
      urlPath: '/static/img',
      filenameFormat: function (hash, src, width, format, options) {
        const { name } = path.parse(src);
        return `${name}-${width}.${format}`;
      }
    }, globalAttributes: {
      loading: "lazy",
      decoding: "async",
      sizes: "100vw"
    }, renderImage(image, attributes) {
      const [ Image, options] = image;
      const [ src, attrs ] = attributes;

      Image(src, options);

      const metadata = Image.statsSync(src, options);
      const imageMarkup = Image.generateHTML(metadata, attrs, { whitespaceMode: "inline" });

      return `<figure>${imageMarkup}${attrs.title ? `<figcaption>${attrs.title}</figcaption>` : ""}</figure>`;
    }
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    // Control which files Eleventy will process
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // Optional (default is shown)
    pathPrefix: "/",
    // -----------------------------------------------------------------

    // These are all optional (defaults are shown):
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};