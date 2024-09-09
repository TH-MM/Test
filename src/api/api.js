import axios from "axios"

export const Api = {
    getData : async (id) => {
        const response = await axios.get(`https://66dd75fcf7bcc0bbdcde2a03.mockapi.io/view/${id}`) 
        return response.data
    },
    rename : async (id ,name) => {
        const response = await axios.put(`https://66dd75fcf7bcc0bbdcde2a03.mockapi.io/view/${id}` , {name : name}) 
        return response.data
    },
    delete : async (id) => {
        const response = await axios.delete(`https://66dd75fcf7bcc0bbdcde2a03.mockapi.io/view/${id}`);
        return response.data;
      }
}