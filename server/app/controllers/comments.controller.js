const db = require("../models");
const Comments = db.comments;
const Op = db.Sequelize.Op;

// Create and Save a new comment
exports.create = (req, res) => {
    // Validate request
    if (!req.body.comments) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a comment
    const Comments = {
        id: req.body.id,
        comments: req.body.comments,
        Userid: req.body.Userid
    
    };

    // Save a comment in the database
    Comments.create(comments)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the comment."
            });
        });

};

// Retrieve all comments from the database. ?????
exports.findAll = (req, res) => {
    const Userid = req.query.Userid;
    var condition = Userid ? { Userid: { [Op.like]: `%${name}%` } } : null;

    Userid.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving patients."
            });
        });
};





// Delete a comment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Comments.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Comment was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete comment with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete comment with id=" + id
            });
        });
};

// Delete all comments from the database.
exports.deleteAll = (req, res) => {
    Comments.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Comments were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Comments."
            });
        });
};

