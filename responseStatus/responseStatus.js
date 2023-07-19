const requestListener = (request, response) => {
    // memberitahu client bahwa request yang diminta tidak ada
    response.statusCode = 404;

    // 404 defaultnya adalah 'not found'
    response.statusMessage = 'User is not found';
}