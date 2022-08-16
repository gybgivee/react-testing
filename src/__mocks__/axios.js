import { mockResponse } from "./users"

export default {
    get: jest.fn().mockResolvedValue(mockResponse),mockResponse
}
