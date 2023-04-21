class SiteController {
    index(req, res) {
        res.json('Welcome to my food store');
    }
    show(req, res) {
        res.json('Detail Page');
    }
}

module.exports = new SiteController;