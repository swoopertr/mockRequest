// get, betById, post, put, delete
export const sinanHelper = {
    get: async function() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }
        let response = await fetch('https://6679b6a118a459f6395127e1.mockapi.io/api/gets', requestOptions);
        response = await response.json();
        return response;
    },
    getById: async function(id) {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
    
        let response = await fetch(`https://6679b6a118a459f6395127e1.mockapi.io/api/gets${id}`, requestOptions);
        response = await response.json();
        return response;
    },
    postData: async function (name, avatar, token) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "name": name,
            "avatar": avatar,
            "token": token,
          });
        const requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: myHeaders,
            body: raw
        };
    
        let response = await fetch(`https://6679b6a118a459f6395127e1.mockapi.io/api/gets`, requestOptions);
        response = await response.json();
        return response;
    },
    putData: async function (id, name, avatar, token) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "name": name,
            "avatar": avatar,
            "token": token,
          });
        const requestOptions = {
            method: 'PUT',
            redirect: 'follow',
            headers: myHeaders,
            body: raw
        };
    
        let response = await fetch(`https://6679b6a118a459f6395127e1.mockapi.io/api/gets${id}`, requestOptions);
        response = await response.json();
        return response;
    },
    deleteData: async function (id) {
        const requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
    
        let response = await fetch(`https://6679b6a118a459f6395127e1.mockapi.io/api/gets${id}`, requestOptions);
        response = await response.json();
        return response;
    }

}