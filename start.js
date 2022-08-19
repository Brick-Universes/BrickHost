const buserver = require('buhost')

buserver.startServer({
    hostKey: "key",

    gameId: 41755,

    port: 51815,

    local: false,

    mapDirectory: './games/',

    map: 'awards.bup',

    scripts: './user_scripts',

    modules: [
    ]
})
