module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "src/assets/styles/variables.scss";
          @import "src/assets/styles/vase.scss";
        `
      }
    }
  }
}