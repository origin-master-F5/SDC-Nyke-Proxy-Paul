app.all("/api/shoe/*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: serverTwo});
});

app.all("/api/shoes/*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: serverTwo});
});

app.all("/api/products/*", function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: serverThree}, (err) => {
        console.log(err);
    });
});