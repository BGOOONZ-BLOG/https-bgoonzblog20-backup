module.exports = [{
      plugin: require('../node_modules/gatsby-remark-prismjs-copy-button/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-code-buttons/gatsby-browser.js'),
      options: {"plugins":[],"buttonContainerClass":"customButtonContainerClass","buttonClass":"customButtonClass","buttonText":"customButtonText","svgIconClass":"customSvgIconClass","svgIcon":"customSvgIcon","tooltipText":"customTooltipText","toasterClass":"customToasterClass","toasterTextClass":"customToasterTextClass","toasterText":"customToasterText","toasterDuration":5000},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
