const express = require("express")
const fs = require("fs")
const app = express()
const port = 3000


function replaceTemplates(base1, data, type) {
  return base1.replace(`{{${type}}}`, data.toString())
}

app.use(express.static('public'))
let base;
fs.readFile("public/index.html", (err, p) => {
  base = p.toString()
  app.get("/", (req, res) => {
    console.log("hell")
    return res.redirect("/home")
  })

  app.get("/home", (req, res) => {
    res.set({ 'Content-Type': 'text/html' })
    fs.readFile("public/home.html", function(err, data) {
      let base1 = base
      base1 = replaceTemplates(base1, data, "home")
      base1 = replaceTemplates(base1, "", "download")
      base1 = replaceTemplates(base1, "", "login")
      base1 = replaceTemplates(base1, "", "signup")
      res.send(base1)
    })
  })

  app.get("/download", (req, res) => {
    res.set({ 'Content-Type': 'text/html' })
    fs.readFile("public/download.html", function(err, data) {
      let base1 = base
      base1 = replaceTemplates(base1, "", "home")
      base1 = replaceTemplates(base1, data, "download")
      base1 = replaceTemplates(base1, "", "login")
      base1 = replaceTemplates(base1, "", "signup")

      res.send(base1)
    })

  })

  app.get("/login", (req, res) => {
    res.set({ 'Content-Type': 'text/html' })
    fs.readFile("public/login.html", function(err, data) {
      let base1 = base
      base1 = replaceTemplates(base1, "", "home")
      base1 = replaceTemplates(base1, "", "download")
      base1 = replaceTemplates(base1, data, "login")
      base1 = replaceTemplates(base1, "", "signup")

      res.send(base1)
    })

  })

    app.get("/signup", (req, res) => {
    res.set({ 'Content-Type': 'text/html' })
    fs.readFile("public/signup.html", function(err, data) {
      let base1 = base
      base1 = replaceTemplates(base1, "", "home")
      base1 = replaceTemplates(base1, "", "download")
      base1 = replaceTemplates(base1, "", "login")
      base1 = replaceTemplates(base1, data, "signup")

      res.send(base1)
    })

  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
