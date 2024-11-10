import { Box, Image } from '@chakra-ui/react';

const JobCard = ({job}) => {
    return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
        <Image src="https://plus.unsplash.com/premium_photo-1726191984484-a37113aa3cc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        alt={job.companyName}
        h={48}
        w='full'
        objectFit='cover'
        />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {job.jobName}
            </Heading>

            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${job.companyName}
            </Text>

        </Box>

    </Box>
    
    )
};
export default JobCard;