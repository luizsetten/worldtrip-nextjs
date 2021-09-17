import {
  Link as ChakraLink, Flex, Image,
} from '@chakra-ui/react';

import Link from 'next/link';

export function Header(): JSX.Element {
  return (
    <Flex justify="center" m="8">
      <Link href="/" passHref>
        <ChakraLink>
          <Image src="/images/logo.svg" alt="logo" />
        </ChakraLink>
      </Link>
    </Flex>
  );
}
