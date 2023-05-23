import { Box, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { PartnerRight, PartnerText } from '.';
import SingleFlexWithHero from '../Components/SingleFlexWithHero';
import TwoColomnTextImage from '../Components/TwoColomnTextImage';

function Company() {
  return (
    <div>
      <TwoColomnTextImage
        px="10vw"
        py="3vw"
        LeftText={IntroLeft}
        RightImage={IntroRight}
        w="100vw"
        h="20vw"
      />
      <TimeLine />
      <Teams />
      <TwoColomnTextImage
        bg="#f0f5ff"
        px="10vw"
        py="3vw"
        LeftText={BoardOfDirectors}
        RightImage={BackedBy}
        w="100vw"
        h="30vw"
      />
      <TwoColomnTextImage
        px="10vw"
        py="3vw"
        LeftText={PartnerText}
        RightImage={PartnerRight}
        w="100vw"
        h="20vw"
      />
    </div>
  );
}
const IntroLeft = () => {
  return (
    <Box
      minW="60%"
      letterSpacing={0.2}
      rowGap="20px"
      display="flex"
      flexDir="column"
      justifyContent="center"
    >
      <Heading fontWeight="thin">Increasing people's health-spans</Heading>
      <Box>
        <p>
          Saigeware was founded to help inform lifelong health without esoteric,
          invasive or expensive testing. We value an evidence based practice of
          healthcare and help achieve it by collecting the largest amount of
          data in a most ethical and responsible manner. Our goal is to help
          people increase their health-spans by providing personalized,
          actionable insights at the highest accuracy possible.
        </p>
      </Box>
    </Box>
  );
};
const Teams = () => {
  const TeamCard = ({ person }) => {
    return (
      <Box w="100%" margin="5%" bg="black">
        <Box
          bg={`url(./images/${person.image}.jpg)`}
          h="40vh"
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="contain"
        ></Box>
        <Box color="white" p="5% 10%" textAlign="center">
          <Heading fontWeight="thin" fontSize="35px" textAlign="center">
            {person.name}
          </Heading>
          <Text fontSize="25px" color="blue.300">
            {person.designation}
          </Text>
          <Text>{person.desc}</Text>
        </Box>
      </Box>
    );
  };

  const person = [
    {
      image: 'PP',
      designation: 'Founder, CEO',
      name: 'Prasad Panchangam',
      desc: 'Prasad is the Founder and CEO of Saigeware.  He is a serial entrepreneur, technology leader and visionary business strategist with expertise in data analytics, embedded system software, machine learning and platform architecture. Prasad has held senior leadership roles at Applied Micro, Microsoft and Hewlett-Packard, and has previously founded software and technology companies in the US and India.',
    },
    {
      image: 'GRF',
      designation: 'Co-Founder, CMO',
      name: 'Frederick Nahm, MD',
      desc: 'Fred is the Co-founder and CMO of Saigeware.  He is a clinically proven executive level physician, strategic thinker, and healthcare business leader with experience at private, public, institutional and US federal levels.  Fred has held senior leadership roles at Myomo, Neurocare Health, Yale New Haven Health, WCG Imaging, and has worked as referee and expert for the US Dept. of Labor and US Dept. of Justice.',
    },
  ];
  return (
    <Box mt="3vw" id="team">
      <Heading
        px="9vw"
        m="10% 0% 0% 5%"
        fontSize="x-large"
        fontWeight="thin"
        letterSpacing={5}
      >
        LEADERSHIP
      </Heading>
      <TwoColomnTextImage
        px="10vw"
        LeftText={() => <TeamCard person={person[0]} />}
        RightImage={() => <TeamCard person={person[1]} />}
      />
    </Box>
  );
};
const TimeLine = () => {
  return (
    <Box
      id="timeline"
      bg="black"
      rowGap="20px"
      width="100%"
      minH={{ base: '800px', md: '600px' }}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as="h1"
        letterSpacing={5}
        alignSelf="start"
        ml="10vw"
        fontWeight="thin"
        fontSize="md"
        color="white"
      >
        TIMELINE
      </Heading>
      <iframe
        src="timeline.html"
        style={{
          minHeight: '500px',
          height: 'max-content',
          width: '80vw',
          overflowX: 'hidden',
        }}
      />
    </Box>
  );
};

const BackedBy = () => {
  const img = [
    './images/ideastring.png',
    './images/elavate.png',
    './images/iimb.png',
    './images/sfal.png',
  ];
  return (
    <Box
      id="board"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      rowGap="50px"
      flexDir="column"
      letterSpacing={3}
      m={0}
      mt={{ base: '60px', md: '5px' }}
      fontSize="medium"
    >
      <Heading fontWeight="thin" fontSize="small" w="100%">
        BACKED BY
      </Heading>
      <SingleFlexWithHero
        p={0}
        mt={0}
        overflow="none"
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
        links={img}
      />
    </Box>
  );
};

const BoardOfDirectors = () => {
  const BOD = [
    {
      name: 'Paramesh Gopi, Phd',
      position: ' Serial Entrepreneur, Business Strategist',
      address: 'Los Altos, USA',
    },
    {
      name: 'Bryant Lin, MD',
      position: 'Internal Medicine',
      address: 'Stanford Hospital, USA',
    },
    {
      name: 'H. Paramesh, MD',
      position: 'Pulmonologist',
      address: 'IISc, Bengaluru',
    },
    {
      name: 'Satisha Rao, MD',
      position: 'Ayurvedic vaidya and entrepreneur',
      address: 'Bengaluru',
    },
    {
      name: 'Prashant Bhat, MD',
      position: 'Ayurvedic vaidya and entrepreneur',
      address: 'Bengaluru',
    },
  ];
  return (
    <Box
      id="board"
      minW="50%"
      display="flex"
      justifyContent="center"
      rowGap="50px"
      flexDir="column"
      letterSpacing={3}
      mt={{ base: '60px', md: '0' }}
      fontSize="medium"
    >
      <Heading as="h1" fontWeight="thin" fontSize="small">
        BOARD OF ADVISORS
      </Heading>
      <Box
        display="flex"
        justifyContent="center"
        rowGap="25px"
        flexDir="column"
        letterSpacing={1.5}
      >
        {BOD.map((d, i) => (
          <DirCard person={d} />
        ))}
      </Box>
    </Box>
  );
};
const IntroRight = () => {
  return (
    <Box
      minW="40%"
      display="flex"
      pl={{ md: '5%', base: '0' }}
      justifyContent="center"
      rowGap="10px"
      flexDir="column"
      letterSpacing={1.5}
      mt={{ base: '30px', md: '0' }}
      fontSize="medium"
    >
      <Link href="#timeline">TIMELINE</Link>
      <Link href="#team">LEADERSHIP</Link>
      <Link href="#board">BOARD & BACKERS</Link>
    </Box>
  );
};

const DirCard = ({ person }) => {
  return (
    <Box>
      <Text color="blue.500" fontSize="medium">
        {person.name}
      </Text>
      <Text>
        {person.position} at {person.address}
      </Text>
    </Box>
  );
};

export default Company;
