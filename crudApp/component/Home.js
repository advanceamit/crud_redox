import React, { useState,useEffect } from 'react'
import { useSelector} from 'react-redux'

import Tablee from './Table'
import Updat from './Updat'

const Home = () => {
  const [dat,setDat]=useState([])
  
  

 

const data=useSelector((state=>state.user))

useEffect(()=>{
  setDat(data)
},[data])




const del =(indx)=>{
  console.log(indx);
  var delandupdate=dat.filter((elem,ind)=>{
    return ind!==indx
  })
  setDat(delandupdate)



}  
 

    

  return (
    <>
    
    <div>
<div>
<Tablee/>
</div>

<div>
<table>
<thead>
    <tr>
       <th> Name</th>
       <th> Email</th>
       <th> Phone</th>
       <th>Edit</th>
       <th> Delete</th>
    </tr>
</thead>
  <tbody>
  
{
  dat.map((elem,indx)=>{
  return (
    <>
    
        <tr>
          <td>{elem.name}</td>
          <td>{elem.email}</td>
          <td>{elem.phone}</td>
         
          <td>{<Updat id={indx}/>}</td>
          <td><button onClick={()=>del(indx)}>delete</button></td>
        </tr>
      
    </>
  )})
  }

</tbody>

</table>
<div> </div>

</div>
 


</div>
</>
  )
}

export default Home