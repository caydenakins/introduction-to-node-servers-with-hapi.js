/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line prettier/prettier
'use strict'
const Hapi = require('hapi')
const Path = require('path')

const server = new Hapi.Server()
server.connection({ port: 8000 })

server.register(require('inert'), () => {



  server.start(() => console.log(`Started at: ${server.info.uri}`))
})

