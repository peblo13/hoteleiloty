const http = require("node:http")
const fs = require("node:fs")
const path = require("node:path")

const root = __dirname
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
}

const server = http.createServer((request, response) => {
  const requestPath = decodeURIComponent((request.url || "/").split("?")[0])
  const relativePath = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "")
  const filePath = path.resolve(root, relativePath)

  if (!filePath.startsWith(root + path.sep)) {
    response.writeHead(403)
    response.end("Forbidden")
    return
  }

  fs.stat(filePath, (error, stats) => {
    const resolvedPath = !error && stats.isDirectory() ? path.join(filePath, "index.html") : filePath
    fs.readFile(resolvedPath, (readError, content) => {
      if (readError) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
        response.end("Nie znaleziono strony")
        return
      }
      response.writeHead(200, { "Content-Type": mimeTypes[path.extname(resolvedPath)] || "application/octet-stream" })
      response.end(content)
    })
  })
})

const port = Number(process.env.PORT || 3000)
server.listen(port, "0.0.0.0", () => console.log(`[hoteleiloty] Serwer działa na porcie ${port}`))
