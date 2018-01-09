module.exports = (app) => {
    app.get('/chat', (req, res) => {
        app.src.controllers.chat.chat(app, req, res);
    });

    app.post('/chat', (req, res) => {
        app.src.controllers.chat.iniciaChat(app, req, res);
    });
}