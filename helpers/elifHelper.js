export const elifHelper = {

    GetElif: async function () {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        let response = await fetch("https://6679b6a118a459f6395127e1.mockapi.io/api/gets", requestOptions)
        let result = await response.json()
        return result;
    },

    GetByIdElif: async function (id) {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        let response = await fetch("https://6679b6a118a459f6395127e1.mockapi.io/api/gets/" + id, requestOptions)
        let result = await response.json()
        return result;
    },

    PostElif: async function (id, name, age) {
        const elifPostData = {
            "id": id,
            "name": name,
            "age": age
        }

        const requestOptions = {
            method: "POST",
            redirect: "follow",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(elifPostData)
        };
        let response = await fetch("https://6679b6a118a459f6395127e1.mockapi.io/api/gets", requestOptions)
        let result = await response.json()
        return result;
    },

    PutElif: async function (id, name, age) {
        const elifPutData = {
            "name": name,
            "age": age
        }

        const requestOptions = {
            method: "PUT",
            redirect: "follow",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(elifPutData)
        };
        let response = await fetch("https://6679b6a118a459f6395127e1.mockapi.io/api/gets/" + id, requestOptions)
        let result = await response.json()
        return result;
    },

    DeleteElif: async function (id) {
        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
        };
        let response = await fetch("https://6679b6a118a459f6395127e1.mockapi.io/api/gets/" + id, requestOptions)
        let result = await response.json()
        return result;
    }
}
