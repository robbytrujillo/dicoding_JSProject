const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});