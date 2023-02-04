class HttpService {
  constructor() {
    this.baseUrl = process.env.REACT_APP_BASE_URL;
  }
  request(url, method, data) {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    url = `${this.baseUrl}${url}`;

    const options = {
      method,
      headers,
    };
    if (data) {
      options.body = JSON.stringify(data);
    }
    return fetch(url, options);
  }

  get(url) {
    return this.request(url, "GET");
  }

  post(url, data) {
    return this.request(url, "POST", data);
  }

  put(url, data) {
    return this.request(url, "PUT", data);
  }

  delete(url) {
    return this.request(url, "DELETE");
  }
}

export default HttpService;
