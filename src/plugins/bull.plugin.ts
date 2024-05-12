// import Queue from "bull";
// import type { FastifyPluginAsync } from "fastify";
// import fastifyPlugin from "fastify-plugin";
// import { intoError } from "@root/utils/into-error";

// export type Queues = Readonly<{
//   email: ["send_r_mail", "send_t_mail"];
//   notification: ["send_r_notification", "send_t_notification"];
// }>;

// type QueueConfig<Q extends keyof Queues> = {
//   name: Q;
//   job: Queues[Q][number];
//   consumer: (args: Queue.Job<NonNullable<unknown>>) => Promise<void>;
//   opts?: Queue.QueueOptions;
// };

// const bull: FastifyPluginAsync<QueueConfig<any>> = async (
//   self,
//   { consumer, job, name, opts }
// ) => {
//   const queue = new Queue(name, opts);

//   queue.process(job, async (job, done) => {
//     try {
//       await consumer(job);
//       done();
//     } catch (error) {
//       done(intoError(error));
//     }
//   });

//   self.decorate("queue", queue).decorate("job", job);
// };

// export const bullPlugin = fastifyPlugin(bull);
