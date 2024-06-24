// get, getById, post, put, delete
export async function getData() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    let response = await fetch("https://6679b6a118a459f6395127e1.mockapi.io/api/gets", requestOptions);
    //.then((response) => response.text())
    let result = await response.text();
    return JSON.parse(result);
    //.then((result) => console.log(result))

}

// GetById
// https://6679b6a118a459f6395127e1.mockapi.io/api/gets/:id