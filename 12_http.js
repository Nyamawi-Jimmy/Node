const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Welcome to our Home Page...");
        return; // Stop further execution
    }

    if (req.url === "/about") {
        res.end("Here is something brief about our history page...");
        return; // Stop further execution
    }

    // This will be executed if none of the above conditions match
    res.end(
        `<h1>Ooooooops</h1>
        <p>This page is not found</p>
        <a href="/">Back</a>`
    );
});

server.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});
