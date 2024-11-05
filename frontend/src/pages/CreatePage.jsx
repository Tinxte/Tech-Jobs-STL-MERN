import React from 'react'
import { useState } from 'react';
import { Container, useColorModeValue, Box, Button, Input, Heading, VStack, useToast } from '@chakra-ui/react'
import { useJobStore } from '../store/job';


const CreatePage = () => {

  const [newJob, setNewJob] = useState( {
    jobName:"",
    companyName:"",
    website:""
});

const toast = useToast()

const {createJob} = useJobStore();

const handleAddJob = async() => {

  const {success, message} = await createJob(newJob);

  if (!success) {
    toast({
      title:"Error",
      description: message, 
      status: "error",
      isClosable: true
    })
  } else {
    toast({
      title: "Success",
      description: message,
      status: "success",
      isClosable: true
    });
  }

  setNewJob({ jobName: "", companyName: "", website: "" });

  console.log(newJob);

}

  return (
    <Container maxW={"container.sm"}>
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
          name= "jobname"
          value={newJob.jobName}
          onChange={(event) => setNewJob({...newJob, jobName: event.target.value})}/>

          <Input placeholder="Company Name"
          name= "companyname"
          value={newJob.companyName}
          onChange={(event) => setNewJob({...newJob, companyName: event.target.value})}/>

          <Input placeholder="Listing URL"
          name= "website"
          value={newJob.website}
          onChange={(event) => setNewJob({...newJob, website: event.target.value})}/>

          <Button colorScheme="blue" onClick={handleAddJob} w="full">
            Submit Job
          </Button>

        </VStack>

      </Box>


    </VStack>
    
    </Container>
  )
}

export default CreatePage