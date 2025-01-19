const express = require("express");
const cors = require("cors");
const app = express();


const supplier = [
  { material: "Cement", category: "Construction", organization: "BuildCo", rating: 4.5 },
  { material: "Pipes", category: "Plumbing", organization: "FlowMaster", rating: 4.2 },
  { material: "Bricks", category: "Construction", organization: "BrickMakers Inc.", rating: 4.7 },
  { material: "Steel Rods", category: "Construction", organization: "MetalWorks", rating: 4.8 },
  { material: "Paint", category: "Decor", organization: "ColorWave", rating: 4.3 },
  { material: "Tiles", category: "Flooring", organization: "TileXpress", rating: 4.6 },
  { material: "Electrical Cables", category: "Electrical", organization: "PowerLine", rating: 4.4 },
  { material: "Wooden Beams", category: "Woodwork", organization: "WoodCrafts", rating: 4.1 },
  { material: "Glass Sheets", category: "Windows", organization: "ClearView", rating: 4.5 },
  { material: "PVC Fittings", category: "Plumbing", organization: "FlowMaster", rating: 4.2 },
];


app.use(cors());
app.use(express.json());


app.post("/", (req, res) => {
  const search = req.body.search.toLowerCase();
  const output = supplier.filter((item) =>
    item.material.toLowerCase().includes(search)
  );
  res.status(200).json({ data: output });
});


app.listen(3006, () => console.log("Server running on port 3006"));
