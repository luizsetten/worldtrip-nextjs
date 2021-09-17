import {
  Flex, Box, Image, Text, Heading,
} from '@chakra-ui/react';

export default function Home(): JSX.Element {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
    >
      <Box backgroundImage="/images/background.png" w="100vw" h="40vh" backgroundSize="cover">
        <Flex justifyContent="space-between" mx="80">
          <Flex width="37%" justifyContent="center" flexDirection="column">
            <Heading fontSize="4xl" fontWeight="medium" mb="4">
              5 Continentes,
              infinitas possibilidades.
            </Heading>
            <Text>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
          </Flex>
          <Image src="/images/airplane.svg" />
        </Flex>
      </Box>
    </Flex>
  );
}
