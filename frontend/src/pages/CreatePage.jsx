import React from 'react'
import { Container, useColorModeValue, Box, Heading, VStack } from '@chakra-ui/react'


const CreatePage = () => {

  const [newJob, setNewJob] = useState( {
    jobName:"",
    companyName:"",
    website:"",
});

  return (
    <Container maxW={"container.sm"}>CreatePage
    <VStack spacing={8}>
      <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
        Suggest New Job
      </Heading>

      <Box
      w={"full"} bg={useColorModeValue("white", "gray.800")} 
      p={6} 
      rounded={"lg"}
      shadow={"md"}
      >

        <VStack spacing={4}>

          <Input placeholder="Job title"
          name= "name"
          value={newJob.jobName}/>

        </VStack>

      </Box>


    </VStack>
    
    </Container>
  )
}

export default CreatePage