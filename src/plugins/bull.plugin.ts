import type { Job } from "bullmq"
import { Queue, Worker } from "bullmq"
import type { FastifyPluginAsync } from "fastify"
import fastifyPlugin from "fastify-plugin"

import { redis } from "@root/infrastrutures/redis"

const bull: FastifyPluginAsync<{
  queueName: string
  processor: (job: Job) => Promise<void>
}> = async (self, { queueName, processor }) => {
  const queue = new Queue(queueName, { connection: redis })

  const worker = new Worker(queueName, processor, {
    connection: redis,
    concurrency: 3
  })

  worker.on("completed", job => {
    console.log(`${job.name}:${job.id} has completed!`)
  })

  worker.on("error", error => {
    console.error(`error on queue: ${queueName}`)
    console.error(error)
  })

  self.decorate("queue", queue)
}

export const bullPlugin = fastifyPlugin(bull)
