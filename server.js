const express    =   require('express');
const path       =   require('path');
const port       =   3000;
const app        =   express();
const router     =   require('./routes/index');
const bodyParser =   require('body-parser');

// Rendu des fichier js/css en static et mis en place de moteur de template
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, './views'));

// Déclaration du router racine
app.use('/', router);

// Geston d'erreur
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).render('pages/errorPage', { pageTitle: 'Projet Iscod' });
})

// Lancement du serveur NodeJs sur la constante port
app.listen(port, () => console.log(`Le serveur est démarré sur le port: ${port}`));