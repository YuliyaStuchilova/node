const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const pathJSON = path.join(__dirname, "countPage.json");

const countPage = [
  {
    page: "/",
    count: 0,
  },
  {
    page: "/about",
    count: 0,
  },
];
fs.writeFileSync(pathJSON, JSON.stringify(countPage, null, 2));

app.get("/", (req, res) => {
  fs.readFile(pathJSON, "utf-8", (error, data) => {
    if (error) return console.log(error);
    let dataPage = JSON.parse(data, "utf-8");
    dataPage[0].count += 1;
    fs.writeFileSync(pathJSON, JSON.stringify(dataPage, null, 2));
    res.send(`
         <h1>Корневая страница</h1>
         <p>Просмотров ${dataPage[0].count}</p>
         <a href="/about">Ссылка на страницу /about</a>
      `);
  });
});

app.get("/about", (req, res) => {
  fs.readFile(pathJSON, "utf-8", (error, data) => {
    if (error) return console.log(error);
    let dataPage = JSON.parse(data, "utf-8");
    dataPage[1].count += 1;
    fs.writeFileSync(pathJSON, JSON.stringify(dataPage, null, 2));
    res.send(`
         <h1>Страница about</h1>
         <p>Просмотров ${dataPage[1].count}</p>
         <a href="/">Ссылка на страницу /</a>
      `);
  });
});

app.listen(3000);
