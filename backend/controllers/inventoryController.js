const getInventory = (req, res) => {
  const data = [
    { id: 1, name: "Notebook A5", stock: 120, category: "Stationery" },
    { id: 2, name: "Ballpoint Pen", stock: 340, category: "Stationery" },
    { id: 3, name: "Desk Lamp", stock: 45, category: "Electronics" }
  ];

  res.json({
    success: true,
    count: data.length,
    items: data
  });
};

module.exports = { getInventory };
