class ApiResponse {
  constructor(statusCode, message = "Success", data) {
    this.success = statusCode >= 200 && statusCode < 400;
    this.message = message;
    this.data = data;
  }
}

export { ApiResponse };