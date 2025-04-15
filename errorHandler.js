
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    Error.captureStackTrace(this, this.constructor);
  }
}

function handleError(error, response) {
  console.error('Error:', error);
  
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: error.status,
      message: error.message
    });
  }

  // Handle Firebase errors
  if (error.code && error.code.startsWith('auth/')) {
    return response.status(400).json({
      status: 'fail',
      message: error.message || 'Authentication error occurred'
    });
  }

  // Default error
  return response.status(500).json({
    status: 'error',
    message: 'Something went wrong'
  });
}

export { AppError, handleError };
