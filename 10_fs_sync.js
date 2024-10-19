const { readFileSync, writeFileSync } = require("fs")
const first = readFileSync("./content/firsttext.txt", "utf8")
const second = readFileSync("./content/secondtext.txt", "utf8")

console.log(first)
console.log(second)

writeFileSync(
    "./content/results_sync.txt",
    `Hello Sync this is my results: ${first}  ${second}`,
    { flag: "a" }
)
