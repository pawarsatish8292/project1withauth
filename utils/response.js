export const sendSuccess = (res, data = null, message = 'success', statusCode = 200)=>{
    return res.status(statusCode).json({success:'true', message, data});
}

export const sendError = (res, error, statusCode = 500)=>{
    const message = typeof error === 'string' ? error : error.message;
    return res.status(statusCode).json({success:'false',error});
}