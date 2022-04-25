import React from 'react'
import {
    Box,
    Flex,
    Link
  } from '@chakra-ui/react';  


export default function Navbar() {
  return (
    <Box h="50px" border="1px solid black" fontSize="30px" backgroundColor="#F56565">
        <Flex gap="20px">
            <Link href="/" ml="50px">Home</Link>
            <Link href="/listing/create">Create</Link>
        </Flex>
    </Box>
  )
}
