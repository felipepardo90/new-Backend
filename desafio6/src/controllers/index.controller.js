const controller = {};

controller.index = (req, res) => { //FIXME Arreglame porfa
  res.status(200).render("index");
};

module.exports = controller;
