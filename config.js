module.exports = {
    source: 'src/scss',
    destination: 'dist/styleguide/',
    css: [
        '../css/main.min.css',
        '..css/styleguide.min.css'
    ]
    homepage: 'index.md',
    placeholder: '{modifier}',
    title: 'Styleguide',
    template: __dirname+'/styleguide-template'
};
