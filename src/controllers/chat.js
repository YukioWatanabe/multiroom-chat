module.exports.iniciaChat = (app, req, res) => {
    req.assert('username', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('username', 'Nome ou apelido deve ter entre 3 e 15 caracteres').len(3,15);

    const errors   = req.validationErrors();
    const username = req.body.username;
    const io = app.get('io');

    if(errors){
        app.src.controllers.index.index(app, req, res, { errors });
        return;
    }

    io.emit('user-connected', { username });
    
    res.render("chat", { username });
}

module.exports.chat = (app, req, res) => {
    res.render("chat");
}