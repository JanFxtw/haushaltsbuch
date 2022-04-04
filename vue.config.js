module.exports = {
    publicPath: './',
    transpileDependencies: [
        'vuetify'
    ],
    productionSourceMap: false,
    chainWebpack: (config) =>
    {
        config.plugin('html').tap((args) =>
        {
            args[0].title = 'Haushaltsbuch';
            return args;
        });
    }
};
