const Blank = require("./src/_includes/components/Blank.js");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "./src/_includes/assets/": "./src/assets" });
    eleventyConfig.addPassthroughCopy({ "./src/_includes/js/": "./src/js" });
    eleventyConfig.addPassthroughCopy({ "./src/_includes/css/": "./src/css" });

    eleventyConfig.addWatchTarget("./src/_includes/css");
    eleventyConfig.addWatchTarget("./src/_includes/js");

    eleventyConfig.addShortcode("Blank", Blank);

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEgnine: 'njk',
        dataTemplateEgnine: 'njk',
    };
}