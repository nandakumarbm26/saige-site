import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import SingleFlexWithHero from '../Components/SingleFlexWithHero';
import Carosol from '../Components/SliderComponent/Carosol';
import TwoColomnTextImage from '../Components/TwoColomnTextImage';
function Services() {
  const links = [
    './images/msrlogo.png',
    './images/gamc_logo.png',
    './images/sfaudiology.png',
    './images/ghc.png',
    './images/sjicr.png',
  ];

  return (
    <>
      <TwoColomnTextImage
        id="landing1"
        px="10vw"
        py="0vw"
        LeftText={IntroText}
        RightImage={IntroImage}
        link={'landing2'}
        w="100vw"
        h="40vw"
      />
      <Box
        id="landing2"
        p="5% 0%"
        fontSize="0.8rem"
        bg="black"
        boxSizing="border-box"
        margin="3vw 10vw"
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <TwoColomnTextImage
          LeftText={WhatText}
          RightImage={WhatImage}
          w="70vw"
          h="15vw"
          px="3vw"
          py="1vw"
        />
      </Box>
      <TwoColomnTextImage
        bg="#f0f5ff"
        px="10vw"
        py="5vw"
        LeftText={WhoImage}
        RightImage={WhoText}
        w="100vw"
        h="40vw"
      />
      <Carosol p="0% 0%" py="5vw" />
      <SingleFlexWithHero
        flex={true}
        p="2%"
        mt="20px"
        overflow="auto"
        links={links}
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(5,2fr)' }}
        hero="We’ve partnered with hospital systems, outreach primary care and academics to further our mission."
      />
      <TwoColomnTextImage
        px="10vw"
        py="3vw"
        LeftText={PartnerText}
        RightImage={PartnerRight}
        w="100vw"
        h="30vw"
      />
    </>
  );
}

const IntroText = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      marginTop="7%"
      fontFamily="IBM Plex Sans,Sans-serif"
      p="2%"
      lineHeight="1.5"
      fontSize={{ base: 'large', md: 'medium' }}
    >
      <Heading
        fontWeight="normal"
        fontSize={{ base: 'xx-large', md: 'xx-large' }}
        fontFamily="IBM Plex Sans,Sans-serif"
        as="h1"
      >
        Ensuring the best possible recovery for every patient
      </Heading>
      <br />
      <Text fontSize="23px" color="gray.600">
        Saigeware is a digital health company dedicated to caring for people
        with a high risk of stroke after hospitalization. We are pioneering new
        clinical oversight strategies to ensure the best possible recovery for
        every patient. Our predictive analytics, remote patient monitoring
        services, and clinical support tools help identify at-risk populations,
        reduce readmissions, and improve clinical outcomes.
      </Text>
    </Box>
  );
};
const IntroImage = () => {
  return (
    <Box
      zIndex={-1}
      w={{ base: '100%', md: '50%' }}
      minH={{ md: '500px', base: '250px' }}
      sx={{ transform: { md: 'scale(1.5)', base: 'scale(1)' } }}
      bottom={{ md: -20, base: 0 }}
      bg="url(./images/HeroPicFull.svg)"
      bgRepeat="no-repeat"
      bgSize={{ md: 'cover', base: 'contain' }}
      bgPos={{ md: '10vw 5vw', base: 'center' }}
    ></Box>
  );
};
const WhatText = () => {
  return (
    <Box color="white" w={{ base: '100%', md: '55%' }} p="2%" lineHeight="2">
      <Heading
        textAlign={{ base: 'center', md: 'left' }}
        fontSize="medium"
        letterSpacing={4}
        as="h2"
      >
        WHAT WE DO{' '}
      </Heading>
      <br />
      <Box
        fontSize={{ base: 'large', md: '30px' }}
        textAlign={{ base: 'center', md: 'left' }}
        letterSpacing={1}
      >
        <Text as="p">
          We are building the world’s largest, multi-marker, deep phenotype
          dataset and machine learning models to enable personalized healthcare
          for everyone.
        </Text>
      </Box>
    </Box>
  );
};
const WhatImage = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      minH={{ base: '38vw', md: '20vw' }}
      bg="url('./images/bg1.png') no-repeat center"
      backgroundSize="80%"
      display="flex"
      justifyContent="center"
    >
      <Link href="/platform">
        <Button
          size={{ base: 'sm', md: 'lg' }}
          alignSelf="center"
          borderRadius={0}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          SEE OUR PLATFORM
        </Button>
      </Link>
    </Box>
  );
};

const WhoText = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      p="2%"
      lineHeight="1.8"
      fontSize={{ base: 'large', md: 'medium' }}
    >
      <Heading
        fontSize="md"
        fontWeight="thin"
        letterSpacing={3}
        mb="30px"
        as="h2"
      >
        WHO WE ARE
      </Heading>
      <Heading
        mb={2}
        fontWeight="normal"
        fontSize={{ base: 'xx-large', md: '35px' }}
        as="h2"
      >
        Building meaningful technology solutions with powerful healthcare
        insights
      </Heading>
      <p>
        We are engineers and clinicians building population level clinical
        insights to manage concurrent and prospective health risks for
        enterprise level health systems and clinical trials. Our mission is to
        increase the speed and efficiency of our pharma customers and help
        monitor the population level health status of our clinical and corporate
        partners. We are believers in P4 medicine and create non-invasive and
        scalable solutions for high accuracy health risk stratification and
        monitoring. Privacy, security and respect for the people we serve are
        fundamental to who we are.
      </p>
      <br />
      <Link href="/aboutus">
        <Button
          borderRadius="0px"
          border="1px solid black"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          LEARN ABOUT US
        </Button>
      </Link>
    </Box>
  );
};
const WhoImage = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      bg="url(./images/Global.png)"
      minH={{ base: '400px' }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
    ></Box>
  );
};

export const PartnerText = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      marginTop="7%"
      p="2%"
      fontSize={{ base: 'large', md: 'medium' }}
      lineHeight="2"
      display="flex"
      flexDir="column"
      justifyContent="center"
    >
      <Heading
        fontSize={{ base: 'xx-large', md: 'xx-large' }}
        fontWeight="normal"
        as="h2"
      >
        Partner With US.{' '}
      </Heading>
      <br />
      <p>
        Dear Clinicians - Are you offering a wellness program for your patients?
        We can setup an actionable insights system in your clinic to accomplish
        this. Our engineers would love to meet with you.{' '}
      </p>
    </Box>
  );
};
export const PartnerRight = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      bg="url(./images/getintouch.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      minH="300px"
      display="flex"
      justifyContent="center"
    >
      <Button
        alignSelf="center"
        borderRadius={0}
        color="white"
        bg="blue.700"
        _hover={{ bg: 'blue.500' }}
      >
        <Link href={'/contact'}> GET IN TOUCH</Link>
      </Button>
    </Box>
  );
};
export default Services;
