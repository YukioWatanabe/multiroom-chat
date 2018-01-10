module.exports.iniciaChat = (app, req, res) => {
    req.assert('username', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('username', 'Nome ou apelido deve ter entre 3 e 15 caracteres').len(3,15);

    const errors   = req.validationErrors();
    const username = req.body;

    if(errors){
        app.src.controllers.index.index(app, req, res, { errors });
        return;
    }
    
    res.render("chat");
}

module.exports.chat = (app, req, res) => {
    res.render("chat");
}