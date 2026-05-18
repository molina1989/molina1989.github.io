const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/molina1989.github.io/' // ⚠️ Nombre exacto del repo en GitHub
    : '/'
})
