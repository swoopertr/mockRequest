// get, betById, post, put, delete
export async function GetElif() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    let response = await ("https://6679b6a118a459f6395127e1.mockapi.io/api/gets", requestOptions)
    let result = await response.json()
    return result;
}
export async function GetByIdElif(id) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    let response = await ("https://6679b6a118a459f6395127e1.mockapi.io/api/gets/" + id, requestOptions)
    let result = await response.json()
    return result;
}

export async function PostElif(data) {
    const requestOptions = {
        method: "POST",
        redirect: "follow",
        data
    };
    let response = await fetch("https://6679b6a118a459f6395127e1.mockapi.io/api/gets", requestOptions)
    let result = await response.json()
    return result;
}
export async function PutElif(data) {
    const requestOptions = {
        method: "PUT",
        redirect: "follow",
        data
    };
    let response = await fetch("https://6679b6a118a459f6395127e1.mockapi.io/api/gets", requestOptions)
    let result = await response.json()
    return result;
}

export async function DeleteElif(id) {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
    };
    let response = await fetch("https://6679b6a118a459f6395127e1.mockapi.io/api/gets/"+id, requestOptions)
    let result = await response.json()
    return result;
}
