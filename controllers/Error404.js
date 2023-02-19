const path = require('path');
exports.error = (req, res, next) => {
    // res.status(404).send('<h1>Page Not Found</h1>');
    const rootDir = require('../util/path');
    res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
};