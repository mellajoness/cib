import axios from "axios";
import {GET_SESSION_ID} from './Storage'
 const baseUrl = "http://196.6.195.157:8085/api";

// const baseUrl="http://79a83c42.ngrok.io/api"

export async function  GET_SERVICE (endpoint) {
    const url = baseUrl + endpoint;  
    const headers = await setHeaders();

    try {
        return await axios.get(url, {headers});
    } catch (error) {
        return error.response;
    }
}


export async function  PATCH_SERVICE (endpoint) {
    const url = baseUrl + endpoint;
    const headers = await setHeaders();

    try {
        return await axios.patch(url, {headers});
    } catch (error) {
        return error.response;
    }
}


export async function  DELETE_SERVICE (endpoint) {
    const url = baseUrl + endpoint;
    const headers = await setHeaders();

    try {
        return await axios.delete(url, {headers});
    } catch (error) {
        return error.response;
    }
}

export async function POST_SERVICE(body, endpoint) {
    const url = baseUrl + endpoint;
    const headers = await setHeaders();

    try {
        return await axios.post(url, body, {headers});
    } catch (e) {
        return e.response;
    }
}

async function setHeaders() {
    const sessionId = await GET_SESSION_ID();
    let headers;

    if (sessionId)
    {
        headers =
        {
            'Authorization': 'Bearer ' + sessionId,
            'Content-Type': 'application/json',
        };
    }
    else
    {
        headers = {'Content-Type': 'application/json'};
    }

    return headers;
}
