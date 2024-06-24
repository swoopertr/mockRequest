const axios = require('axios');

const EgoAPI = {
    fetchGet: async () => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        let response = await fetch("https://6679b6a118a459f6395127e1.mockapi.io/api/gets", requestOptions);
        let result = await response.json();
        return result;
    },

    axiosGetById: async (id) => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://6679b6a118a459f6395127e1.mockapi.io/api/gets/${id}`,
            headers: {}
        };

        try {
            let response = await axios.request(config);
            console.log(JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    fetchPost: async (id, name, hobby) => {
        const bodyValue = {
            "id": id,
            "name": name,
            "hobby": hobby
        };

        const requestOptions = {
            method: "POST",
            redirect: "follow",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyValue)
        };

        let response = await fetch("https://6679b6a118a459f6395127e1.mockapi.io/api/gets/", requestOptions);
        let result = await response.json();
        return result;
    },

    axiosPut: async (id, nametobeUpdated, hobbytobeUpdated) => {
        let data = JSON.stringify({
            "id": id,
            "name": nametobeUpdated,
            "hobby": hobbytobeUpdated
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `https://6679b6a118a459f6395127e1.mockapi.io/api/gets/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        try {
            let response = await axios.request(config);
            console.log(JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    fetchDelete: async (id) => {
        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
        };

        let response = await fetch(`https://6679b6a118a459f6395127e1.mockapi.io/api/gets/${id}`, requestOptions);
        let result = await response.json();
        return result;
    }
};

module.exports = EgoAPI;
