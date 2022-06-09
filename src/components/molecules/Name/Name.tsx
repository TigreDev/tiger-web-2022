import { Stack, Box, Heading } from "@chakra-ui/react";
import React from "react";

const Name = () => {
  return (
    <Stack justify="center" align="center" h="100vh">
      <Box color="white">
        <Heading fontSize={{ base: "5rem", lg: "10rem" }}>Ruben Tigre</Heading>
        <Heading ml={{ base: 0.5, lg: 2 }}>Frontend developer</Heading>
      </Box>
    </Stack>
  );
};

export default Name;
