import {
  Flex, Box, Image, Text, Heading, Divider, Center,
} from '@chakra-ui/react';

export default function Home(): JSX.Element {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDirection="column"
    >
      <Box
        backgroundImage="/images/background.png"
        w="100vw"
        h="260px"
        backgroundSize="cover"
      >
        <Flex justifyContent="space-between" mx="80">
          <Flex
            width="37%"
            justifyContent="center"
            flexDirection="column"
          >
            <Heading fontSize="4xl" fontWeight="medium" mb="4">
              5 Continentes,
              infinitas possibilidades.
            </Heading>
            <Text>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
          </Flex>
          <Image src="/images/airplane.svg" />
        </Flex>
      </Box>

      <Image
        src="/images/travel_types.svg"
        w="80vw"
        h="30vh"
        mt="4"
        mx="auto"
      />

      <Center height="8">
        <Divider
          orientation="horizontal"
          color="black"
          borderBottom="4px"
          width="20"
          borderRadius="2px"
        />
      </Center>

      <Center flexDirection="column" my="8">
        <Heading fontSize="3xl" fontWeight="medium" mb="4" color="gray.700">
          Vamos nessa?
        </Heading>

        <Heading fontSize="3xl" fontWeight="medium" mb="4" color="gray.700">
          Então escolha seu continente
        </Heading>
      </Center>
    </Flex>
  );
}
