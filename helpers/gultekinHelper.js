// get, betById, post, put, delete
const axios = require('axios');
const { mockURL } = require('./constants');

class APIClient {
    constructor() {
        this.client = axios.create({
            baseURL: mockURL
        });
    }

    async get(endpoint) {
        try {
            const response = await this.client.get(endpoint);
            return response.data;
        } catch (error) {
            console.error(`GET error: ${error}`);
            return null;
        }
    }

    async getById(endpoint, id) {
        try {
            const response = await this.client.get(`${endpoint}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`GET by ID error: ${error}`);
            return null;
        }
    }

    async post(endpoint, data) {
        try {
            const response = await this.client.post(endpoint, data);
            return response.data;
        } catch (error) {
            console.error(`POST error: ${error}`);
            return null;
        }
    }

    async put(endpoint, id, data) {
        try {
            const response = await this.client.put(`${endpoint}/${id}`, data);
            return response.data;
        } catch (error) {
            console.error(`PUT error: ${error}`);
            return null;
        }
    }

    async delete(endpoint, id) {
        try {
            const response = await this.client.delete(`${endpoint}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`DELETE error: ${error}`);
            return null;
        }
    }
}
module.exports = APIClient;