import React, { useState } from 'react'
import axios from "axios";
import qs from "qs";

import { FormControl, FormLabel, Input, Select, Box, Button} from '@chakra-ui/react'

export default function Create() {

  const initValue ={
      id : "",
      Name : "",
      City :"",
      address:"",
      Capacity:"",
      Cost_per_day:"",
      Verified:"",
      Rating: ""
  }

  const [data,setData] = useState(initValue);

  const handleChange = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setData({...data, [name]:value})
  }

  

  const submitData = async (e) =>{
    e.preventDefault();
    const { id,
      Name,
      City,
      Address,
      Capacity,
      Cost_per_day,
      Verified,
      Rating } = data;

    const response = await fetch('http://localhost:8080/lists/',
    {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        Name,
        City,
        Address,
        Capacity,
        Cost_per_day,
        Verified,
        Rating
      })
    });

    const res = await response.json();
    console.log(res)
  }


  return (
    <Box width="400px" ml="34%" mt="20px" border="1px solid black" padding="20px" borderRadius="20px">
      <FormControl method='POST'>
        <FormLabel>Id</FormLabel>
        <Input id='Id' name="id" type='number' onChange={handleChange}/>

        <FormLabel>Name</FormLabel>
        <Input id='name' name="Name" type='text' onChange={handleChange} />

        <FormLabel>City</FormLabel>
        <Input id='city' name="City" type='text' onChange={handleChange}/>

        <FormLabel>Address</FormLabel>
        <Input id='address' name="Address" type='text' onChange={handleChange}/>
        
        <FormLabel>Capacity</FormLabel>
        <Input id='capacity' name="Capacity" type='text' onChange={handleChange}/>

        <FormLabel>Cost per day</FormLabel>
        <Input id='text' name="Cost_per_day" type='number' onChange={handleChange}/>

        <FormLabel>Verified</FormLabel>
        <Select id='verified' name="Verified" placeholder='Select' onChange={handleChange}>
          <option>Yes</option>
          <option >No</option>
        </Select>

        <FormLabel>Rating</FormLabel>
        <Input id='text' name="Rating" type='number' onChange={handleChange}/>

        <Button
            mt={4}
            colorScheme='teal' id="submit"
            type='Submit' name='Submit' value="Submit" onClick={submitData}
          >
            Submit
          </Button>
      </FormControl>
    </Box>
  )
}
