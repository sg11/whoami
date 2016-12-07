module.exports = function(app){
    app.get('/whoami',function(req,res){
        res.send({
            "ipaddress":req.headers['x-forwarded-for'],
            "language":req.headers['accept-language'].split(',')[0],
            "software":req.headers['user-agent'].split('(')[1].split(')')[0]});
    });    
};