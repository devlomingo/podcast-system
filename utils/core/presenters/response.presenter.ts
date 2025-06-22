export class ResponsePresenter {
  static success(data: any, message = 'Success') {
    return {
      status: 'success',
      message,
      data,
    };
  }
}
