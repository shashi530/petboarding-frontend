import React from 'react'
import { Box, Image, Flex, Heading, Text} from '@chakra-ui/react'

import { useState, useEffect } from 'react';
import axios from "axios"
import { useParams } from 'react-router-dom';

export default function Detail() {
  const [data,setData] = useState([]);
  const { id } = useParams();

  console.log(id)

  useEffect(()=>{
    getData()
  },[]);

const getData = async (data) => {
  try{
      const res = await axios.get(`http://localhost:8080/lists/${id}`);
      setData(res.data);
      console.log(res.data);
  }
  catch(err){
    console.log("Error",err);
  }
}
  return (
      
    <>
        <Flex>
        <Box boxSize='sm'padding="10px">
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        <Box padding="10px" textAlign="left">
        <Flex direction="column">
            <Heading as='h2' size='lg'>
                Shop Name
            </Heading>
            <Text>Summary</Text>
            <Text>You leave em we love them</Text>
            <Text><b>Capacity: </b></Text>
            <Text><b>Type of pets accepeted:</b></Text>
            <Text><b>Accepted pet size: </b>----Level of adult supervision</Text>
            <Text>Pets will never be left unattended</Text>
            <Text>The place your pet will be Free roam of the house if they are left unsupervised at home.</Text>
            <Text>Your pet can sleep where ever they want in the house.</Text>
            <Text><b>Potty Breaks:</b></Text>
            <Text>Full acess outside</Text>
            <Text><b>Number of wlaks provided: </b></Text>
            <Text><b>Type of house:</b></Text>
            <Text><b>Outdoor area size</b></Text>
            <Text><b>Emergency Transport:</b></Text>
        </Flex>
        </Box>
        </Flex>
    </>
  )
}
