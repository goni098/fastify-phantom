const esbuild = require("esbuild");

function main() {
  esbuild
    .build({
      platform: "node",
      target: "node20",
      bundle: true,
      minify: true,
      sourcemap: true,
      format: "cjs",
      entryPoints: ["./src/main.ts"],
      external: ["@fastify/swagger-ui"],
      outdir: "target"
    })
    .then(() => console.log("bundle finished"));
}

main();
