import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
function HeaderUpdates() {
  return (
    <Box
      minH="max-content"
      py="10px"
      px="10vw"
      bg="blue.500"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center">
        We are collecting phenotypic data across the globe.{' '}
        <Link href="/contact">
          <a>Contact us</a>
        </Link>
      </Box>
    </Box>
  );
}

export default HeaderUpdates;
