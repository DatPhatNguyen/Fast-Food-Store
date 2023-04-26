class SiteController {
    index(req, res) {
        res.json('Welcome to my food store');
    }
    search(req, res) {
        res.json(`Search Page`);
    }
}
module.exports = new SiteController;