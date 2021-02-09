import path from 'path'
import Fastify, { FastifyInstance } from 'fastify'
import fastifyStatic from 'fastify-static'
// import Morgan from 'morgan-body'

const app: FastifyInstance = Fastify({ logger: true })

const port = process.env.PORT || 8080
app.register(fastifyStatic, {
  root: path.join(__dirname, '../frontend/dist'),
  prefix: '/public/', // optional: default '/'
})

app.listen(port).then(e => {
  console.log(`Listening on port ${port} @ http://127.0.0.1:${port} or https://friends.fleepy.tv`)
})