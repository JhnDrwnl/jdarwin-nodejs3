const main = {
    index:(req, res) => {
        res.render('index');
    },
    shop:(req, res) => {
        res.render('shop');
    },
    main:(req, res) => {
        res.render('main');
    },
    about:(req, res) => {
        res.render('about');
    },
    shopdetails:(req, res) => {
        res.render('shopdetails');
    },
    shoppingcart:(req, res) => {
        res.render('shoppingcart');
    },
    checkout:(req, res) => {
        res.render('checkout');
    },
    blogdetails:(req, res) => {
        res.render('blogdetails');
    },
    blog:(req, res) => {
        res.render('blog');
    },
    contact:(req, res) => {
        res.render('contact');
    },
    home:(req, res) => {
        res.render('home');
    },
}


module.exports = main;