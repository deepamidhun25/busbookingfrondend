
import BASE_URL from "./baseUrl"
import { commonRequest } from "./CommonReq"



//get assembli description
export const get_list_places=async()=>{
    return commonRequest("GET",`${BASE_URL}/busbooking/places/getplaces`,"")
}

export const getbus=async(userData)=>{
    return commonRequest("POST",`${BASE_URL}/busbooking/getbusdetails`,userData)
}

export const getConfirmbus=async(id)=>{
    console.log(id);
    return commonRequest("GET",`${BASE_URL}/busbooking/getbusconfirmdetails/${id}`,"")
}

//check availability
export const checkSeatAvailability=async(userData)=>{
    return commonRequest("POST",`${BASE_URL}/busbooking/checkavailability`,userData)
}

//save user
export const userSubmit=async(userData)=>{
    return commonRequest("POST",`${BASE_URL}/busbooking/details`,userData)
}