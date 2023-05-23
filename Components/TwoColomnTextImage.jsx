import { Box, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
function TwoColomnTextImage({
  LeftText,
  bg = 'none',
  RightImage,
  w,
  h,
  px,
  py,
  arrow,
  link,
  id,
  justifyContent = 'center',
}) {
  return (
    <Box
      bg={bg}
      id={id}
      position="relative"
      display="flex"
      flexDir="column"
      alignItems="space-between"
    >
      <Flex
        minH={h}
        flexDir={{ base: 'column', md: 'row' }}
        px={px}
        py={py}
        pos="relative"
      >
        <LeftText />
        <RightImage />
      </Flex>
      {arrow && (
        <Box
          _hover={{ fontSize: '40px' }}
          position="absolute"
          bottom={py}
          left={px}
          fontSize="30px"
          fontWeight="thin"
        >
          <Link href={`#${link}`}>
            <AiOutlineArrowDown />
          </Link>
        </Box>
      )}
    </Box>
  );
}

export default TwoColomnTextImage;
