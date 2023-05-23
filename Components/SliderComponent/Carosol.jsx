import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { React } from 'react';
import TwoColomnTextImage from '../TwoColomnTextImage';
import ChakraCarousel from './ChakraCarosel';
function Carosol({ p = '6% 0%', py }) {
  return (
    <Container
      py={py}
      px={0}
      maxW={{
        base: '100%',
        md: '80%',
      }}
    >
      <Heading
        ml={{ base: 4, md: 0 }}
        fontWeight="thin"
        fontSize="md"
        letterSpacing={2}
      >
        OUR SCIENCE
      </Heading>
      <Box p={p}>
        <ChakraCarousel gap={32}>
          <Flex
            key={0}
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            color="gray.300"
            bg="base.d100"
            rounded={5}
            flex={1}
          >
            <TwoColomnTextImage
              RightImage={Slide1Image}
              LeftText={Slide1Text}
            />
          </Flex>
          <Flex
            key={1}
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            color="gray.300"
            bg="base.d100"
            rounded={5}
            flex={1}
          >
            <TwoColomnTextImage
              RightImage={Slide2Text}
              LeftText={Slide2Image}
            />
          </Flex>
          <Flex
            key={2}
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            color="gray.300"
            bg="base.d100"
            rounded={5}
            flex={1}
          >
            <TwoColomnTextImage
              RightImage={Slide3Image}
              LeftText={Slide3Text}
            />
          </Flex>
        </ChakraCarousel>
      </Box>
    </Container>
  );
}
const Slide3Text = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      color="black"
      lineHeight="2"
      fontSize={{ base: 'large', md: 'medium' }}
    >
      <Heading fontWeight="normal" fontSize={{ base: 'xx-large', md: '35px' }}>
        With trained models, a few markers from a person can help stratify
        his/her risk.
      </Heading>
      <br />
      <p>
        Once we have trained models using our at scale datasets, we can extract
        a subset of people's phenotypic markers and predict their risk cluster
        with very high accuracy.
        <br />
        The markers we require are obtained completely non-invasively and on
        widely deployed hardware like smartphones, wearables and simple devices
        like a finger photo plethysmograph.
      </p>
      <br />
    </Box>
  );
};
const Slide3Image = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      bg="url('./images/Slide3.svg')"
      sx={{ transform: { md: 'scale(1)' } }}
      minH="400px"
      bgSize="contain"
      bgRepeat="no-repeat"
      bgPos="center"
    ></Box>
  );
};
const Slide2Text = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      color="black"
      lineHeight="2"
      fontSize={{ base: 'large', md: 'medium' }}
      alignSelf="center"
    >
      <Heading fontWeight="normal" fontSize={{ base: 'xx-large', md: '35px' }}>
        Deep phenotyping and data analysis used to train machine learning
        models.
      </Heading>
      <br />
      <p>
        We generate vectors of attributes from the phenotypic markers we collect
        and then use advanced machine learning techniques like unsupervised
        clustering to group subjects with varying risk profiles.
        <br />
        We also use advanced techniques to determine the optimal number of
        clusters and compute euclidean distances between data points and the
        centroids of these clusters to identify membership.{' '}
      </p>
      <br />
    </Box>
  );
};
const Slide2Image = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      minH="400px"
      bg="url('./images/Slide2.svg')"
      bgRepeat="no-repeat"
      bgPos="center"
    ></Box>
  );
};
const Slide1Text = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      color="black"
      lineHeight="2"
      fontSize={{ base: 'large', md: 'medium' }}
    >
      <Heading fontWeight="normal" fontSize={{ base: 'xx-large', md: '35px' }}>
        Population scale, multi phenotypic marker dataset needed for high
        accuracy predictions.
      </Heading>
      <br />
      <p>
        While personalized medicine today relies on genomic testing, we have
        discovered that a large evidence base of phenotypic markers correlated
        with disease has much higher clinical value.
        <br />
        Given the variance in these phenotypic markers, our large dataset size
        has the statistical power required to make high accuracy inferences on
        risk.
        <br />
        We collect high quality data from our partner hospital systems and
        clinics across the world.{' '}
      </p>
      <br />
    </Box>
  );
};
const Slide1Image = () => {
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      bg="url('./images/Slide1.svg')"
      bgRepeat="no-repeat"
      bgPos="center"
      minH="400px"
    ></Box>
  );
};
export default Carosol;
