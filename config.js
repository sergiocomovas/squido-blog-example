const config = {
    production: {
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
    development: {
        name: 'COMOVAS |『CØMO』『VAS』.ES |',
        description: '¿Cómo vas? Nosotros vamos tirando con NWO, GAMING, TECH, SALSEO y PODCASTS',
        twitterHandle: '@mrvautin',
        baseUrl: 'https://web.comovas.es',
        sourcesExt: 'markdown',
        sourceDir: 'source',
        buildDir: 'docs',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
    }
};

module.exports = config;
