/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line prettier/prettier
'use strict'
const Hapi = require('hapi')
const Boom = require('boom')

const server = new Hapi.Server()
server.connection({ port: 8000 })

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply){
    reply(Boom.notFound())
  }
})

server.start(() => {})