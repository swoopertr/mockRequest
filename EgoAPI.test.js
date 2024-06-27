// EgoAPI.test.js
const EgoAPI = require('./helpers/EgoCall');
const axios = require('axios');

// Mock fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ data: 'test' }),
    })
);

// Mock axios
jest.mock('axios');

describe('EgoAPI', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('fetchGet should return data', async () => {
        const result = await EgoAPI.fetchGet();
        expect(result).toEqual({ data: 'test' });
        expect(fetch).toHaveBeenCalledWith("https://6679b6a118a459f6395127e1.mockapi.io/api/gets", {
            method: "GET",
            redirect: "follow"
        });
    });

    test('axiosGetById should return data', async () => {
        axios.request.mockResolvedValue({ data: { data: 'test' } });
        const result = await EgoAPI.axiosGetById(1);
        expect(result).toEqual({ data: 'test' });
        expect(axios.request).toHaveBeenCalledWith({
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://6679b6a118a459f6395127e1.mockapi.io/api/gets/1',
            headers: {}
        });
    });

    test('fetchPost should return data', async () => {
        const result = await EgoAPI.fetchPost(1, 'test', 'testing');
        expect(result).toEqual({ data: 'test' });
        expect(fetch).toHaveBeenCalledWith("https://6679b6a118a459f6395127e1.mockapi.io/api/gets/", {
            method: "POST",
            redirect: "follow",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": 1,
                "name": 'test',
                "hobby": 'testing'
            })
        });
    });

    test('axiosPut should return data', async () => {
        axios.request.mockResolvedValue({ data: { data: 'test' } });
        const result = await EgoAPI.axiosPut(1, 'updatedName', 'updatedHobby');
        expect(result).toEqual({ data: 'test' });
        expect(axios.request).toHaveBeenCalledWith({
            method: 'put',
            maxBodyLength: Infinity,
            url: 'https://6679b6a118a459f6395127e1.mockapi.io/api/gets/1',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "id": 1,
                "name": 'updatedName',
                "hobby": 'updatedHobby'
            })
        });
    });

    test('fetchDelete should return data', async () => {
        const result = await EgoAPI.fetchDelete(1);
        expect(result).toEqual({ data: 'test' });
        expect(fetch).toHaveBeenCalledWith("https://6679b6a118a459f6395127e1.mockapi.io/api/gets/1", {
            method: "DELETE",
            redirect: "follow"
        });
    });
});
