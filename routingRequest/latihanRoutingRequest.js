const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const { method, url } = request;

    if(url === '/') {
        // TODO 2: logika respons bila url bernilai '/'
    } else if (url === '/about') {
        // TODO 3: logika respons bila url bernilai 'about'
    } else {
        // TODO 1: logika respons bila url bukan '/' atau '/about'
        response.end('<h1>Halaman tidak ditemukan</h1>');
    }

    // if (method === 'GET') {
    // response.end('<h1>Hello!</h1>');
    //}

    // if (method === 'POST') {
     //   let body = [];

       // request.on('data', (chunk) => {
       //     body.push(chunk);
       // });

        // request.on('end', () => {
        // body = Buffer.contact(body).toString();
        // const { name } = JSON.parse(body);
       // });
    //}
};