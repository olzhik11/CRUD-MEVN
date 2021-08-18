const paginate = (req, res, data) => {
    if (!data) res.status(404).send({message: "There are no posts"})
    else {
        const currentPage = parseInt(req.query.page)
        const pageSize = parseInt(req.query.limit)
        const initial = (currentPage*pageSize) - pageSize
        const final = currentPage*pageSize
        const totalSize = data.length
        const paginatedPosts = data.slice(initial, final)
        res.json({paginatedPosts: paginatedPosts, totalSize: totalSize, posts: data})
    }
}
module.exports = paginate