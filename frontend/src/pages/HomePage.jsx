import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useJobStore } from "../store/job";
import JobCard from "../components/JobCard";

const HomePage = () => {

  const {fetchJobs, jobs} = useJobStore();

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  console.log("jobs: ", jobs);
  
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          Current Jobs 💼
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w={"full"}
          >
            {jobs.map((job) => (
              <JobCard key = {job._id} job={job} />
            ) )}
            
          </SimpleGrid>

          {jobs.length === 0 && (
            <Text fontSize="xl" textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
            No job listings found! {" "}
            <Link to={"/create"}>
              <Text as="span" color={"blue.500"} _hover={{ textDecoration: "underline" }}>
                Suggest a job
              </Text>
            </Link>
          </Text>
          )}

        

      </VStack>
    </Container>
  );
};

export default HomePage;
