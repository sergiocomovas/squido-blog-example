const config = {
    development: {
        name: 'squido',
        description: 'This is the blog description',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        templateEngine: 'hbs',
        templateConfig: {},
        sourceDir: 'source',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
    },
    production: {
        name: 'COMOVAS |『CØMO』『VAS』.ES | ',
        description: '¿Cómo vas? Nosotros vamos tirando con NWO, GAMING, TECH, SALSEO, PODCASTS y mucho más...',
        twitterHandle: '@sergiocomovas',
        baseUrl: 'https://sergiocomovas.github.io',
        sourcesExt: 'markdown',
        templateEngine: 'hbs',
        templateConfig: {},
        sourceDir: 'source',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8,
        postBuild: [
            {
                name: 'zip',
                options: {}
            }
        ]
    }
};

module.exports = config;