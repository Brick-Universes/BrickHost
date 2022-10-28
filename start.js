const buserver = require('buhost2')

buserver.startServer({
    hostKey: "key",

    gameId: 8,

    port: 51815,

    local: false,

    mapDirectory: './games/',

    map: 'awards.bup',

    scripts: './user_scripts',

    modules: [
    ]
})
