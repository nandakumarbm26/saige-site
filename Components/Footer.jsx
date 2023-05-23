import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
function Footer() {
  const sociallinks = [
    ['facebook', 'https://www.facebook.com/profile.php?id=100086340888537'],
    ['instagram', 'https://www.instagram.com/saigeware_technologies/'],
    ['linkedin', 'https://www.linkedin.com/company/saigeware/'],
    ['twitter', 'https://twitter.com/_saigeware'],
  ];

  return (
    <Box w="100%" mt="20px" minH="20vh" bg="black" padding="5% 10%">
      <Flex
        justifyContent="space-between"
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ base: 10 }}
      >
        <Box
          w={{ base: '100%', md: '60%' }}
          display="flex"
          flexDir="column"
          gap="20px"
        >
          <Link href="/" title="Saigeware">
            <img
              alt="saigeware logo"
              width="60%"
              style={{ maxWidth: '200px' }}
              src="/images/logo.svg"
            />
          </Link>
          <Box
            fontWeight="thin"
            fontSize="baseall"
            // letterSpacing={2}
            width="100%"
            color="white"
            display="flex"
            gap="20px"
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Box>
              <Text>USA (Headquarters):</Text>
              <Text>
                Saigeware Inc,
                <br /> 500 West Putnam Avenue Suite 400 Greenwich, CT 06830
              </Text>
            </Box>
            <Box>
              <Text>India :</Text>
              <Text>
                Saigeware Technologies Pvt Ltd,
                <br /> #1923 30th Cross Banashankari 2nd Stage Bengaluru 560070
              </Text>
            </Box>
          </Box>
        </Box>
        <Flex flexDir="column">
          <Grid
            templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(4,2fr)' }}
            columnGap={6}
            color="white"
            letterSpacing={2}
            textAlign={{ md: 'right', base: 'left' }}
          >
            <GridItem w="100%" h="10">
              <Link href="/platform">PLATFORM</Link>
            </GridItem>
            <GridItem w="100%" h="10">
              <Link href="/aboutus">COMPANY</Link>
            </GridItem>

            <GridItem w="100%" h="10">
              <Link href="/contact">CONTACT</Link>
            </GridItem>
            <GridItem w="100%" h="10">
              <Link href="/blogs">BLOGS</Link>
            </GridItem>
          </Grid>
          <Flex justifyContent={{ md: 'flex-end' }} columnGap={5}>
            {sociallinks.map((d, i) => (
              // <Link href={d[1]} target="_blank">
              <Box
                cursor="pointer"
                as="a"
                href={d[1]}
                target="_blank"
                w="20px"
                h="20px"
                bg={`url(./images/${d[0]}.png)`}
                bgSize="contain"
              ></Box>
              // </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <br />
      <Flex
        justifyContent="space-between"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Box
          p={{ md: '3% 0%' }}
          w={{ md: '50%', base: '100%' }}
          color="white"
          fontWeight="thin"
          fontSize="baseall"
          letterSpacing={2}
        >
          <p>
            COPYRIGHT &#169; 2023 SAIGEWARE TECHNOLOGIES.
            <br /> ALL RIGHTS RESERVED.
          </p>
          {/* <p><Link>TERMS OF USE</Link> | <Link>PRIVACY NOTICE</Link></p> */}
        </Box>
        <img
          style={{ display: 'block', objectFit: 'contain' }}
          alt="made-in-india"
          height="80px"
          width="80px"
          src="/images/mii.png"
        />
      </Flex>
    </Box>
  );
}
const SocialLogo = ({ link, name, id }) => {
  <Link href={link} id={id} target="_blank">
    <Box
      w="250px"
      h="250px"
      border="1px solid white"
      bg={`url(./images/twitter.png)`}
      bgSize="contain"
    ></Box>
  </Link>;
};
export default Footer;
