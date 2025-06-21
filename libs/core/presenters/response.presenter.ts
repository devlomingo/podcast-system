export class ResponsePresenter {
  static success(data: any, message = 'Success') {
    return {
      status: 'success',
      message,
      data,
    };
  }

  static error(message = 'An error occurred', code = 400, errors: any = null) {
    return {
      status: 'error',
      message,
      code,
      errors,
    };
  }

  static notFound(message = 'Resource not found') {
    return this.error(message, 404);
  }

  static validationFailed(errors: any) {
    return this.error('Validation failed', 422, errors);
  }
}
