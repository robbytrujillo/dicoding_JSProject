// curl -X POST http://localhost:5000
// // output: <h1> Halo HTTP Server!</h1>
// curl -X PUT http://localhost:5000
// // output: <h1> Halo HTTP Server!</h1>
// curl -X DELETE http://localhost:5000
// // output: <h1> Halo HTTP Server!</h1>
// curl -X GET http://localhost:5000
// // output: <h1> Halo HTTP Server!</h1>

// request method
const requestListener = (request, response) => {
    const method = request.method;
    // const { method } = request;

    if (method === 'GET') {
        // response ketika GET
    }

    if (method === 'POST') {
        // response ketika POST
    }

    // Anda bisa mengevaluasi tipe method lainnya
};




