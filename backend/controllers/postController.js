const Post = require('../models/index').postSchema
const paginate = require('../config/paginatePages')
const welcome = (req, res) => {
    res.send('<h1>Welcome to the server side!</h1>')
}
const getAllPosts = (req, res) => {
    Post.find()
        .then((data) => {
            paginate(req, res, data)
        })
        .catch((err) => {console.log(err)})
}

const getById = (req, res) => {
    const id = req.params.id
    Post.findById({_id: id})
        .then((data) => {
            if (!data) res.status(404).send({ message: "Not found with id " + id })
            else res.send(data)
        })
        .catch((err) => {
            res.status(500).send({message: 'Error retrieving with id ' + id})
            console.log(err)})
}

const createPost = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Post to be created can not be empty!'
        })
    }
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body,
    })
    post.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Some errors occurred"})
        })
}

const deleteOne = (req, res) => {
    const id = req.params.id
    Post.findByIdAndRemove({_id: id})
        .then((data) => {
            if (!data) res.status(404).send({message: 'Not found with id ' + id})
            else console.log('Deleted with ' + id + ' successfully!')
        })
        .catch((err) => {
            res.status(500).send({message: 'Error deleting with id ' + id})
        })
}

const updateOne = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    Post.findByIdAndUpdate({_id: id}, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else res.send({ message: "Tutorial was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
}

const deleteAll = (req, res) => {
    Post.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} posts were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({message: "Some error occurred while removing all tutorials."});
        });
};
////////////////////////////////////////////////
module.exports = {
    welcome,
    getAllPosts,
    getById,
    createPost,
    deleteOne,
    updateOne,
    deleteAll
}