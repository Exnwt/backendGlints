const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
app.use(cors({origin:true}));

app.get("/", (req, res) => {
    res.json({
      response:200,
      data:{
          namaBarang:"troley",
          harga:2000,
          qty:123,
      }
    })
  });
  //testing



