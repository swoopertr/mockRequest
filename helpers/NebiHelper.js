export const ApiObj = {

    getFetch: async () => {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        redirect: 'follow'
      };
  
      try {
        const response = await fetch(`https://6679b6a118a459f6395127e1.mockapi.io/api/gets`, requestOptions);
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`The fetch process failed. ${error.message}`);
      }
    },
  
    getById: async (id) => {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        redirect: 'follow'
      };
  
      try {
        const response = await fetch(`https://6679b6a118a459f6395127e1.mockapi.io/api/gets/${id}`, requestOptions);
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`The fetch process failed. ${error.message}`);
      }
    },
  
    postFetch: async (name, avatar, token, createdAt) => {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json",
        },
        body: JSON.stringify({
          "name": name,
          "avatar": avatar,
          "token": token,
          "createdAt": Date.now()
        }),
        redirect: 'follow'
      };
  
      try {
        const response = await fetch(`https://6679b6a118a459f6395127e1.mockapi.io/api/gets`, requestOptions);
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`The fetch process failed. ${error.message}`);
      }
    },
  
    putFetch: async (id, name, avatar, token) => {
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json",
        },
        body: JSON.stringify({
          "name": name,
          "avatar": avatar,
          "token": token
        }),
        redirect: 'follow'
      };
  
      try {
        const response = await fetch(`https://6679b6a118a459f6395127e1.mockapi.io/api/gets/${id}`, requestOptions);
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`The fetch process failed. ${error.message}`);
      }
    },
  
    deleteFetch: async (id) => {
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json",
        },
        redirect: 'follow'
      };
  
      try {
        const response = await fetch(`https://6679b6a118a459f6395127e1.mockapi.io/api/gets/${id}`, requestOptions);
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`The fetch process failed. ${error.message}`);
      }
    }
  };
  