//the package "express-async-errors" will help us handle asynchronous errors. The package will be used instead of this function (asyncHandler)
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
}

export { asyncHandler }