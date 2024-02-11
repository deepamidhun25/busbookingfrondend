import React, { createContext, useState } from 'react'


//create contex 

export const bus_deatilsContext=createContext()

function Contexshare({children}) {

    const [bus_details,setbus_details]=useState("")
    const [numPerson,setPerson]=useState("")
    const[user,setUser]=useState("")
    const[userBooked,setBookeduser]=useState("")
    const[confirmdetail,setconfirm]=useState("")
  return (
    <div>
      <bus_deatilsContext.Provider value={{bus_details , setbus_details,numPerson,setPerson,user,setUser,userBooked,setBookeduser,confirmdetail,setconfirm}}>
        {children}
      </bus_deatilsContext.Provider>
    </div>
  )
}

export default Contexshare
