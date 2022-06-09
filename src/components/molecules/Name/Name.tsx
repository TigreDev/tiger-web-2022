import { Stack, Box, Heading } from "@chakra-ui/react";

const Name = () => {
  return (
    <Stack
      justify={{ md: "center" }}
      mt={{ base: 40, md: 0 }}
      minH={{ md: "100vh" }}
      alignSelf={{ base: "start", md: "initial" }}
    >
      <Box color="white">
        <Heading fontSize={{ base: "3rem", md: "6rem", lg: "10rem" }}>
          Ruben Tigre
        </Heading>
        <Heading
          fontSize={{ base: "1rem", md: "xl", lg: "4xl" }}
          ml={{ base: 0.5, lg: 2 }}
        >
          Frontend developer
        </Heading>
      </Box>
    </Stack>
  );
};

export default Name;
