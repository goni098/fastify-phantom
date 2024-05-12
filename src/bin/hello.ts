import { sleep } from "@root/utils/sleep"

async function run() {
  while (true) {
    console.log("hello kitty")
    await sleep(1000)
  }
}

run()
