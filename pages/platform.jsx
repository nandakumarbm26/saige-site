import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { PartnerRight, PartnerText } from '.';
import Carosol from '../Components/SliderComponent/Carosol';
import TwoColomnTextImage from '../Components/TwoColomnTextImage';

function Platform() {
  return (
    <Box>
      <TwoColomnTextImage
        px="10vw"
        py="3vw"
        LeftText={IntroLeft}
        RightImage={() => <Box w="50%" />}
      />
      <Science />
      <TwoColomnTextImage
        px="10vw"
        py="3vw"
        justifyContent="space-between"
        LeftText={api}
        RightImage={SaiWell}
      />

      <Carosol p="0% 0%" py="3vw" />

      <TwoColomnTextImage
        px="10vw"
        LeftText={PartnerText}
        RightImage={PartnerRight}
        w="100vw"
        h="30vw"
      />
    </Box>
  );
}

const Science = () => {
  return (
    <Box
      bg="black"
      minH="50vw"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt="30px"
    >
      <Box display={{ md: 'block', base: 'none' }} position="relative" w="100%">
        <Box position="absolute" top="-30%" left="30%" fontSize=".8vw">
          <Heading
            as="h2"
            fontSize="10px"
            w="16vw"
            letterSpacing={2}
            color="#f59d46"
          >
            02. AUTOMATED PIPELINE FOR HIGH FIDELITY DATA
          </Heading>
          <Text as="p" w="16vw" color="white">
            Automatically and securely synchronize heterogeneous data streams
            with in-situ quality checks and aggregate data longitudinally and
            across patients.
          </Text>
          <Box pos="relative" h="4vw" w="1px" borderLeft="1px solid #f59d46">
            <Box
              h="0.75vw"
              w="0.75vw"
              bg="#f59d46"
              borderRadius="10px"
              pos="absolute"
              bottom="-5px"
              left="-0.375vw"
            ></Box>
          </Box>
        </Box>
        <Box position="absolute" top="-30%" left="55%" fontSize=".8vw">
          <Heading
            as="h2"
            fontSize="10px"
            w="16vw"
            letterSpacing={2}
            color="blue.300"
          >
            04. SAIGEWARE REST APIS AND SDKS
          </Heading>
          <Text as="p" w="16vw" color="white">
            REST APIs supporting search, filter, query, and compute on global
            data sets. Ability to generate quantitative risk metrics. Fully
            open-sourced and extensible.
          </Text>
          <Box pos="relative" h="4vw" w="1px" borderLeft="1px solid #63b3ed">
            <Box
              h="0.75vw"
              w="0.75vw"
              bg="blue.300"
              borderRadius="10px"
              pos="absolute"
              bottom="-5px"
              left="-0.375vw"
            ></Box>
          </Box>
        </Box>

        <Box
          position="absolute"
          bottom="calc(50% - 80%)"
          left="17%"
          fontSize=".8vw"
        >
          <Box pos="relative" h="4vw" w="1px" borderLeft="1px solid #F6E05E">
            <Box
              h="0.75vw"
              w="0.75vw"
              bg="yellow"
              borderRadius="10px"
              pos="absolute"
              top="-5px"
              left="-0.375vw"
            ></Box>
          </Box>
          <Heading
            as="h2"
            fontSize="10px"
            w="16vw"
            letterSpacing={2}
            color="yellow.300"
          >
            01. MULTI MARKER PHENOTYPE DATA COLLECTION
          </Heading>
          <Text as="p" w="16vw" color="white">
            Ingest multiple phenotypic markers and ground truths in a clinic or
            hospital setting through FDA approved devices, cameras and other
            peripherals.
          </Text>
        </Box>
        <Box
          position="absolute"
          bottom="calc(50% - 80%)"
          left="40%"
          fontSize=".8vw"
        >
          <Box pos="relative" h="4vw" w="1px" borderLeft="1px solid #68D391">
            <Box
              h="0.75vw"
              w="0.75vw"
              bg="green.300"
              borderRadius="10px"
              pos="absolute"
              top="-5px"
              left="-0.375vw"
            ></Box>
          </Box>
          <Heading
            as="h2"
            fontSize="10px"
            w="16vw"
            letterSpacing={2}
            color="green.300"
          >
            03. HIGH ACCURACY MACHINE LEARNING MODEL TRAINING
          </Heading>
          <Text as="p" w="16vw" color="white">
            Digital signal processing, data pre-processing and state-of-the-art
            unsupervised/supervised machine learning algorithms for model
            training.
          </Text>
        </Box>
        <Box
          position="absolute"
          bottom="calc(50% - 80%)"
          left="72%"
          fontSize=".8vw"
        >
          <Box pos="relative" h="4vw" w="1px" borderLeft="1px solid #B794F4">
            <Box
              h="0.75vw"
              w="0.75vw"
              bg="purple.500"
              borderRadius="10px"
              pos="absolute"
              top="-5px"
              left="-0.375vw"
            ></Box>
          </Box>
          <Heading
            as="h2"
            fontSize="10px"
            w="16vw"
            letterSpacing={2}
            color="purple.300"
          >
            05. VISUALIZATION, ANALYTICS AND INSIGHTS
          </Heading>
          <Text as="p" w="16vw" color="white">
            Out-of-the-box web visualization tools complemented with Python
            libraries optimized for multi-marker data, ranging from group
            statistics to risk-o-meters.
          </Text>
        </Box>

        <Box
          w="100vw"
          h="25vw"
          bg="url(./images/s1.svg)"
          bgPos="center"
          bgSize="contain"
          transform="scale(0.88)"
          overflow="hidden"
          bgRepeat="no-repeat"
        ></Box>
      </Box>
      <Box display={{ md: 'none', base: 'block' }} m="50px 0px">
        <Box display="flex" alignItems="center" flexDir="column">
          <Box
            w="300px"
            h="300px"
            bg="url(./images/device.svg)"
            bgPos="center"
            bgSize="contain"
            transform="scale(1)"
            bgRepeat="no-repeat"
          ></Box>
          <Heading
            as="h2"
            fontSize="10px"
            w="80%"
            letterSpacing={2}
            color="yellow.300"
          >
            01. MULTI MARKER PHENOTYPE DATA COLLECTION
          </Heading>
          <Text as="p" w="80%" color="white">
            Ingest multiple phenotypic markers and ground truths in a clinic or
            hospital setting through FDA approved devices, cameras and other
            peripherals.
          </Text>
        </Box>
        <Box display="flex" alignItems="center" flexDir="column">
          <Box
            w="300px"
            h="300px"
            bg="url(./images/pipeline.svg)"
            bgPos="center"
            bgSize="contain"
            transform="scale(1)"
            bgRepeat="no-repeat"
          ></Box>
          <Heading
            as="h2"
            fontSize="10px"
            w="80%"
            letterSpacing={2}
            color="yellow.500"
          >
            02. AUTOMATED PIPELINE FOR HIGH FIDELITY DATA
          </Heading>
          <Text as="p" w="80%" color="white">
            Automatically and securely synchronize heterogeneous data streams
            with in-situ quality checks and aggregate data longitudinally and
            across patients.
          </Text>
        </Box>
        <Box display="flex" alignItems="center" flexDir="column">
          <Box
            w="300px"
            h="300px"
            bg="url(./images/platform.svg)"
            bgPos="center"
            bgSize="contain"
            transform="scale(1)"
            bgRepeat="no-repeat"
          ></Box>
          <Heading
            as="h2"
            fontSize="10px"
            w="80%"
            letterSpacing={2}
            color="green.300"
          >
            03. HIGH ACCURACY MACHINE LEARNING MODEL TRAINING
          </Heading>
          <Text as="p" w="80%" color="white">
            Digital signal processing, data pre-processing and state-of-the-art
            unsupervised/supervised machine learning algorithms for model
            training.
          </Text>
        </Box>
        <Box display="flex" alignItems="center" flexDir="column">
          <Box
            w="300px"
            h="300px"
            bg="url(./images/api.svg)"
            bgPos="center"
            bgSize="contain"
            transform="scale(1)"
            bgRepeat="no-repeat"
          ></Box>
          <Heading
            as="h2"
            fontSize="10px"
            w="80%"
            letterSpacing={2}
            color="blue.500"
          >
            04. SAIGEWARE REST APIS AND SDKS
          </Heading>
          <Text as="p" w="80%" color="white">
            REST APIs supporting search, filter, query, and compute on global
            data sets. Ability to generate quantitative risk metrics. Fully
            open-sourced and extensible.
          </Text>
        </Box>
        <Box display="flex" alignItems="center" flexDir="column">
          <Box
            w="300px"
            h="300px"
            bg="url(./images/analytics1.svg)"
            bgPos="center"
            bgSize="contain"
            transform="scale(1)"
            bgRepeat="no-repeat"
          ></Box>
          <Heading
            as="h2"
            fontSize="10px"
            w="80%"
            letterSpacing={2}
            color="purple.300"
          >
            05. VISUALIZATION, ANALYTICS AND INSIGHTS
          </Heading>
          <Text as="p" w="80%" color="white">
            Out-of-the-box web visualization tools complemented with Python
            libraries optimized for multi-marker data, ranging from group
            statistics to risk-o-meters and other actionable insights.{' '}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const IntroLeft = () => {
  return (
    <Box
      w={{ md: '60%' }}
      letterSpacing={0.2}
      rowGap="20px"
      display="flex"
      flexDir="column"
      justifyContent="center"
    >
      <Heading as="h1" fontWeight="thin">
        Deep phenotyping platform for personalized healthcare
      </Heading>
      <Box>
        <p>
          Our platform brings the largest multi-marker phenotype dataset in the
          world together with cutting edge machine learning models into an
          integrated environment for actionable insights in digital health and
          pharma.
        </p>
      </Box>
    </Box>
  );
};

const SaiWell = () => {
  return (
    <Box
      w={{ md: '50%', base: '100%' }}
      ml={{ md: '5vw', base: '0' }}
      bg="#f0f5ff"
      mb={{ base: '30px', md: '0' }}
      fontSize="14px"
      letterSpacing={1}
      rowGap="20px"
    >
      <Box
        h="100px"
        fontSize="25px"
        color="whitesmoke"
        display="flex"
        flexDir="row"
        justifyContent="space-around"
        alignItems="center"
        w="100%"
        bg="black"
      >
        <Box
          w="15%"
          h="100%"
          color="black"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="whatsapp.300"
        >
          <Box color="white" fontWeight="bold">
            2
          </Box>
        </Box>
        <Box pl={4} letterSpacing={0} w="85%">
          <Box fontSize={{ md: '25px', base: '20px' }} pb={2}>
            Digital health product
          </Box>
          <Box fontSize={{ md: '15px', base: '13px' }}>
            Enable delivery of precision care
          </Box>
        </Box>
      </Box>

      <Box p="10% 4%" bg="#f0f5ff" w="100%">
        <Box display="flex" flexDir="row">
          <Box
            w="60%"
            display="flex"
            flexDir="column"
            justifyContent="space-evenly"
          >
            <Box fontSize="large" color="whatsapp.500">
              FOR CLINICIANS
            </Box>
            <Box>Patient insights dashboard and Tele-consultation</Box>
          </Box>
          <Box
            h="200px"
            w="40%"
            bg="url(./images/saiwelldesk.png)"
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPos="center"
          ></Box>
        </Box>

        <Box display="flex" flexDir="row" mt="20px">
          <Box
            w="60%"
            display="flex"
            flexDir="column"
            justifyContent="space-between"
          >
            <Box fontSize="large" color="whatsapp.500">
              FOR PATIENTS
            </Box>
            <Box>Wellness tracking and tele-consultation app</Box>
            <Button
              w="75%"
              maxWidth="150px"
              color="black"
              fontSize="13px"
              border="1px solid black"
              borderRadius="0"
              _hover={{ bg: 'blue.500', color: 'white' }}
              onClick={() =>
                window.open('https://saiwell.saigeware.com', '_blank')
              }
            >
              VISIT SAiWell
            </Button>
          </Box>
          <Box
            h="200px"
            w="40%"
            bg="url(./images/saiwellmobile.png)"
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPos="center"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

const api = () => {
  return (
    <Box
      bg="#f0f5ff"
      w={{ md: '50%', base: '100%' }}
      mb={{ base: '30px', md: '0' }}
      mr="5vw"
      fontSize="14px"
      letterSpacing={1}
      rowGap="20px"
    >
      <Box
        h="100px"
        fontSize="25px"
        color="whitesmoke"
        display="flex"
        flexDir="row"
        justifyContent="space-around"
        alignItems="center"
        w="100%"
        bg="black"
      >
        <Box
          w="15%"
          h="100%"
          color="black"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="blue.400"
        >
          <Box color="white" fontWeight="bold">
            1
          </Box>
        </Box>
        <Box pl={4} letterSpacing={0} w="85%">
          <Box fontSize={{ md: '25px', base: '20px' }} pb={2}>
            Research
          </Box>
          <Box fontSize={{ md: '15px', base: '13px' }}>
            Efficiently develop the next generation of therapies
          </Box>
        </Box>
      </Box>
      <Box p="10% 4%" bg="#f0f5ff" w="100%">
        <Box display="flex" flexDir="row">
          <Box
            w="60%"
            display="flex"
            flexDir="column"
            justifyContent="space-evenly"
          >
            <Box fontSize="large" color="blue.500">
              ANALYTICS PLATFORM
            </Box>
            <Box>
              Cloud-based platform, structuring, organizing, and labeling
              Phenotype data to enable efficient analysis.
              <br />
              <Box ml="20px">
                <ul>
                  <li>Curation of existing Phenotypic data.</li>
                  <li>Research backend for clinical trials</li>
                </ul>
              </Box>
            </Box>
          </Box>
          <Box
            h="200px"
            w="40%"
            bg="url(./images/api.png)"
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPos="center"
          ></Box>
        </Box>

        <Box mt="5vw">
          <Box
            w="100%"
            display="flex"
            flexDir="column"
            justifyContent="space-between"
          >
            <Box fontSize="large" color="blue.500">
              REAL-WORLD COHORTS
            </Box>
            <Box>
              Labeled phenotype data from cohorts with select conditions
              collected using the digital health product.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Platform;
