const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

const CsvParser = require("json2csv").Parser;

exports.download = (req, res) => {
  Tutorial.findAll().then((objs) => {
    let tutorials = [];

    objs.forEach((obj) => {
      const { ano, grupo, description, published } = obj;
      tutorials.push({ ano, grupo, description, published });
    });

    const csvFields = ["Ano", "grupo", "Description", "Published"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(tutorials);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=tutorials.csv");

    res.status(200).end(csvData);
  });
};


// Create and Save a new Tutorial
exports.create = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // Valanoate request
  if (!req.body.grupo) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const tutorial = {
    grupo: req.body.grupo,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const grupo = req.query.grupo;
  var condition = grupo ? { grupo: { [Op.like]: `%${grupo}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an ano
exports.findOne = (req, res) => {
  const ano = req.params.ano;

  Tutorial.findByPk(ano)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with ano=${ano}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with ano=" + ano
      });
    });
};

// Update a Tutorial by the ano in the request
exports.update = (req, res) => {
  const ano = req.params.ano;

  Tutorial.update(req.body, {
    where: { ano: ano }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with ano=${ano}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with ano=" + ano
      });
    });
};

// Delete a Tutorial with the specified ano in the request
exports.delete = (req, res) => {
  const ano = req.params.ano;

  Tutorial.destroy({
    where: { ano: ano }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with ano=${ano}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with ano=" + ano
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
