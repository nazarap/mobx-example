const mockRequest = data => new Promise(res => setTimeout(() => res(data), 1000));

export default mockRequest;
