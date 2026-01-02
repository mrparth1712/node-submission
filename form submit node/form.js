//aama direct from banavyu chene data male che bey aalag aalag che

const http = require("http");
const qs = require("querystring");

http
  .createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
      <html>
        <body>
          <h1>Form Submission</h1>
          <form method="POST" action="/submit">
            <input type="text" name="name" placeholder="Enter your name"><br><br>
            <input type="email" name="email" placeholder="Enter your email"><br><br>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
      res.end();
    } else if (req.url === "/submit" && req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString(); // collect all chunks
      });

      req.on("end", () => {
        console.log("Raw data:", body);

        const parsedData = qs.parse(body);
        console.log("Parsed data:", parsedData);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
        <h1>Form Submitted</h1>
        <p>Name: ${parsedData.name}</p>
        <p>Email: ${parsedData.email}</p>
      `);
        res.end();
      });
    }
  })
  .listen(3500, () => {
    console.log("Server running on http://localhost:3500");
  });

//html file aalag che eene aama bind karine data lidho che
// const http = require("http");
// const fs = require("fs");

// http
//   .createServer((req, res) => {
//     fs.readFile("html/form.html", "utf-8", (error, data) => {
//       if (error) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Internal Server Error");
//         return;
//       }

//       res.writeHead(200, { "Content-Type": "text/html" });

//       if (req.url === "/") {
//         res.write(data);
//       } else if (req.url === "/submit" && req.method === "POST") {
//         res.write("<h1>Form submitted successfully!</h1>");
//       }

//       res.end();
//     });
//   })
//   .listen(3500);
