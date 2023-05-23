import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  StatDownArrow,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import Sidebar from './SideBar';
function Header() {
  const [plat, setPlat] = useState(false);
  return (
    <>
      <Flex
        zIndex={10}
        width="full"
        px="10vw"
        py="2vh"
        bg="white"
        alignItems="Center"
        justifyContent="space-between"
      >
        <Flex alignItems="Center" w="40%" justifyContent="space-between">
          <Link href="/" title="Saigeware A deep phenotyping platform">
            <a>
              <Box
                h="120px"
                w={{ base: '150px', md: '20vw' }}
                bg="url('/images/RectLB.svg')"
                bgRepeat="no-repeat"
                bgPos="left"
                bgSize="contain"
              ></Box>
            </a>
          </Link>
        </Flex>
        <Flex
          alignItems="center"
          w="60%"
          justifyContent="flex-end"
          textAlign="center"
        >
          <Flex
            w="100%"
            display={{ base: 'none', lg: 'flex' }}
            flexDir="row"
            fontSize="18px"
            justifyContent="flex-end"
            columnGap="3vw"
            alignContent="space-around"
          >
            {/* <Box>
              <Link href="/" color="gray">
                Home
              </Link>
            </Box> */}
            <Box
              cursor="pointer"
              position="relative"
              onClick={() => setPlat(!plat)}
            >
              <a>Solutions</a> <StatDownArrow color="blue.500" />{' '}
              {plat && (
                <Box
                  backdropBlur={10}
                  zIndex={1}
                  boxShadow="2px 3px 5px grey"
                  position="absolute"
                  left="-15%"
                  bg="white"
                  top="40px"
                  width="150px"
                >
                  <Platforms setPlat={setPlat} />
                </Box>
              )}
            </Box>

            <Link href="/aboutus" color="gray">
              Company
            </Link>
            <Link href="/blogs" color="gray">
              Blogs
            </Link>
            <Link href="/contact" color="gray">
              Contact
            </Link>
          </Flex>

          <Box display={{ base: 'block', lg: 'none' }}>
            <Sidebar />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

function Platforms({ setPlat }) {
  return (
    <Menu>
      <MenuItem
        textAlign="center"
        padding={1}
        _hover={{ bg: 'blue.500', color: 'white' }}
        onClick={() => setPlat(false)}
        h="50px"
      >
        <Link href="/platform">
          <MenuButton w="100%">Platform</MenuButton>
        </Link>
      </MenuItem>
      <MenuItem
        textAlign="center"
        padding={1}
        _hover={{ bg: 'blue.500', color: 'white' }}
        onClick={() => {
          setPlat(false);
        }}
        h="50px"
      >
        <MenuButton
          w="100%"
          onClick={() =>
            window.open('https://saiwell.saigeware.com/', '_black')
          }
        >
          SAiWell
        </MenuButton>
      </MenuItem>
    </Menu>
  );
}

export default Header;
