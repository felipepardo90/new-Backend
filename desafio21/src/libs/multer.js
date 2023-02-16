import multer from "multer";
const upload = multer({ dest: "./public/uploads/" });

app.get("/prueba", (req, res) => {
    res.render("prueba");
  });
  app.post("/prueba", upload.single("avatar"), (req, res) => {
    const file = req.file;
    res.send({
      error: false,
      msg: "File upload succesfully!!!",
      "original name": file.originalname,
      destination: file.destination,
      filename: file.filename,
    });
  });