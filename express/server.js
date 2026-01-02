const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let student = [
  { id: 1, name: "ss" },
  { id: 2, name: "uuu" },
];

app.get("/", (req, res) => {
  res.render("home", { studentlist: student });
});

app.post("/insertData", (req, res) => {
  const { id, name } = req.body;
  student.push({ id: Number(id), name });
  res.redirect("/");
});

app.post("/deleteData", (req, res) => {
  const { id } = req.body;
  student = student.filter((stu) => stu.id !== Number(id));
  res.redirect("/");
});

app.post("/updateData", (req, res) => {
  const { id, name } = req.body;

  for (let i = 0; i < student.length; i++) {
    if (student[i].id === Number(id)) {
      student[i].name = name;
      break;
    }
  }

  res.redirect("/");
});

app.listen(7890, () => {
  console.log("Server is running on port 7890");
});
