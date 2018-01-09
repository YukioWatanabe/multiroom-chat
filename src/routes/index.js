module.exports = (app) => {
    app.get('/', (req, res) => {
        app.src.controllers.index.index(app, req, res);
    });
}