import { Box, Link, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import axios from "axios";

export default function Home() {

  const [data,setData] = useState([]);

  useEffect(()=>{

  },[]);

  async function getData (){
    const data = await axios.get("mongodb://127.0.0.1:27017/petboard/lists");
    console.log(data);
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
            <Tr>
              <Td>
              <Link href='/'>1</Link></Td>
              <Td>Pet shop Athani</Td>
              <Td>Athani</Td>
              <Td>Near bust Stand Athani</Td>
              <Td>200</Td>
              <Td>150</Td>
              <Td>yes</Td>
              <Td>3.5</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Pet shop Athani</Td>
              <Td>Athani</Td>
              <Td>Near bust Stand Athani</Td>
              <Td>200</Td>
              <Td>150</Td>
              <Td>yes</Td>
              <Td>3.5</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  )
}
