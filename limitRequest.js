

const limitRequests = ( defaultOptions) => {
    const maxConcurrentRequests=defaultOptions;// Merge default options with user-provided options

    let activeRequests = 0;

    return (req, res, next) => {
        if (activeRequests >= maxConcurrentRequests) {
            res.status(503).send('Server is busy. Please try again later.');
            return;
        }

        activeRequests++;
        res.on('finish', () => {
            activeRequests--;
        });

        next();
    };
};


module.exports=limitRequests;
