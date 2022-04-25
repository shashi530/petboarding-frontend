import { Box, Link, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import axios from "axios";

export default function Home() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    getData()
  },[]);

const getData = async (data) => {
  try{
      const res = await axios.get("http://localhost:8080/lists/");
      setData([...res.data]);
      console.log([...res.data]);
  }
  catch(err){
    console.log("Error",err);
  }
}
return (
  <>
    <Box>
      <Table mt="50px">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>City</Th>
            <Th>Address</Th>
            <Th>Capacity</Th>
            <Th>Cost_per_day</Th>
            <Th>Verified</Th>
            <Th>Rating</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
          data.map(e =>{
          return(
            <Tr key={e.id}>
            <Td>
            <Link href='/listing/:id'>{e.id}</Link></Td>
            <Td>{e.Name}</Td>
            <Td>{e.City}</Td>
            <Td>{e.Address}</Td>
            <Td>{e.Capacity}</Td>
            <Td>{e.Cost_per_day}</Td>
            <Td>{e.Verified}</Td>
            <Td>{e.Rating}</Td>
          </Tr>
            )
            })
          }
        </Tbody>
      </Table>
    </Box>
  </>
)
}
