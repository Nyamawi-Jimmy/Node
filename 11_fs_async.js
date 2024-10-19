const { readFile, writeFile } = require("fs")

readFile(
    "./content/firsttext.txt", "utf8", (err, results) => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log(results)
            var first = results

            readFile(
                "./content/secondtext.txt", "utf8", (err, results) => {
                    if (err) {
                        console.log(err)
                        return
                    } else {
                        var second = results
                        console.log(results)

                        writeFile(
                            "./content/async_results.txt", `Hello my async: ${first} ${second}`, (err, results) => {

                                if (err) {
                                    console.log(err)
                                } else {
                                    console.log(results)
                                }
                            }
                        )
                    }
                }
            )
        }
    }
)
