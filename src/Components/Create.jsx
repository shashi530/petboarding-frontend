import React, { useState } from 'react'
import axios from "axios";
import qs from "qs";

import { FormControl, FormLabel, Input, Select, Box, Button, Stack, Checkbox} from '@chakra-ui/react'

export default function Create() {

  const initValue ={
      id : "",
      Name : "",
      City :"",
      address:"",
      Capacity:"",
      Cost_per_day:"",
      Verified:"",
      Rating: "",
      Summary:"",
      Types_of_pets:[],
      Pet_size:[],
      Potty_breaks:"",
      Walks:"",
      Toh:"",
      Area_size:"",
      ET:"",
      Image:""
  }

  const [data,setData] = useState(initValue);

  const handleChange = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    console.log(value)
    setData({...data, [name]:value})
  }

  const handleChecked = (e) =>{
    let name = e.target.name;
    let value = e.target.checked;
    if(e.target.checked == true){
      value = e.target.name;
      setData({...data, [name]:value})
      console.log(value);
    }
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
      Rating,
      Summary,
      Types_of_pets,
      Pet_size,
      Potty_breaks,
      Walks,
      Toh,
      Area_size,
      ET,
      Image } = data;

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
        Rating,
        Summary,
        Types_of_pets,
        Pet_size,
        Potty_breaks,
        Walks,
        Toh,
        Area_size,
        ET,
        Image
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
        <Input id='rating' name="Rating" type='number' onChange={handleChange}/>

        <FormLabel>Summary</FormLabel>
        <Input id='summary' name="Summary" type='text' onChange={handleChange}/>

        <FormLabel mt="10px">Types of pets</FormLabel>
        <Stack spacing={5} direction='row'>
          <Checkbox colorScheme='green' value="Dog" name="Dog"  type="chonSelect={handleChecked}eckbox" onChange={handleChecked}>
            Dog
          </Checkbox>
          <Checkbox colorScheme='green' name="Cat" type="checkbox" onSelect={handleChecked} onChange={handleChecked}>
            Cat
          </Checkbox>
          <Checkbox colorScheme='green'name="Rabbit" type="checkbox" onSelect={handleChecked} onChange={handleChecked}>
            Rabbits
          </Checkbox>
        </Stack>

        <FormLabel mt="10px">Pet size accepted</FormLabel>
        <Stack spacing={5} direction='row'>
          <Checkbox colorScheme='green' name="10-20" type="checkbox" onChange={handleChecked}>
            10 to 20
          </Checkbox>
          <Checkbox colorScheme='green'name="20-30" type="checkbox" onChange={handleChecked}>
            20 to 30
          </Checkbox>
          <Checkbox colorScheme='green'name="30-40" type="checkbox" onChange={handleChecked}>
            30 to 40
          </Checkbox>
        </Stack>

        <FormLabel>Number of Potty breaks:</FormLabel>
        <Input id='potty_breaks' name="Potty_breaks" type='number' onChange={handleChange}/>

        <FormLabel>Number of Walks provided in a day</FormLabel>
        <Input id='walks' name="Walks" type='number' onChange={handleChange}/>

        <FormLabel>Type of House</FormLabel>
        <Input id='toh' name="Toh" type='text' onChange={handleChange}/>

        <FormLabel>Area size</FormLabel>
        <Input id='area_size' name="Area_size" type='text' onChange={handleChange}/>

        <FormLabel>Emergency Transfort</FormLabel>
        <Select id='et' name="ET" placeholder='Select' onChange={handleChange}>
          <option>Yes</option>
          <option >No</option>
        </Select> 

        <FormLabel>Image</FormLabel>
        <Input id='image' name="Image" type='text' onChange={handleChange}/>

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
