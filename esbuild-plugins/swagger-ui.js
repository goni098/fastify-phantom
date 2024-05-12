const { cp } = require("node:fs/promises");
const path = require("node:path");

function esbuildPluginFastifySwaggerUi() {
  return {
    name: "@fastify/swagger-ui",
    setup(build) {
      const { outdir } = build.initialOptions;
      const fastifySwaggerUi = path.dirname(
        require.resolve("@fastify/swagger-ui")
      );
      const source = path.join(fastifySwaggerUi, "static");
      const dest = path.join(outdir, "static");

      build.onEnd(async () => cp(source, dest, { recursive: true }));
    }
  };
}

module.exports = esbuildPluginFastifySwaggerUi;
