import React from 'react'
import { Box, Image, Flex, Heading} from '@chakra-ui/react'

export default function Detail() {
  return (
    <>
        <Flex>
        <Box boxSize='sm'padding="10px">
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        <Box padding="10px">
        <Flex direction="column">
            <Heading as='h2' size='lg'>
                Shop Name
            </Heading>
            

        </Flex>
        </Box>
        </Flex>
    </>
  )
}
