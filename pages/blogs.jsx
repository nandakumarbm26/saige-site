import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import { React, useEffect, useState } from 'react';
import { PartnerRight, PartnerText } from '.';
import BlogCard from '../Components/BlogCard';
import TwoColomnTextImage from '../Components/TwoColomnTextImage';
import { db } from '../dbconfig/firebase';

function BlogPage() {
  const [step, setStep] = useState(12);

  const [post, setPosts] = useState(null);
  const [pageIndex, setPageIndex] = useState([0, step]);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    async function getPosts() {
      const postData = [];
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      querySnapshot.forEach(doc => {
        postData.push({ id: doc.id, ...doc.data() });
      });

      postData.sort((a, b) => b.created.seconds - a.created.seconds);
      console.log(postData);
      setPosts(postData);
      setTotalPosts(postData.length);
    }
    getPosts();
  }, []);
  const prevHandler = () => {
    if (pageIndex[0] != 0) {
      setPageIndex([pageIndex[0] - step, pageIndex[1] - step]);
    }
  };
  const nextHandler = () => {
    if (pageIndex[1] < totalPosts) {
      setPageIndex([pageIndex[0] + step, pageIndex[1] + step]);
    }
  };
  return (
    <Box mx="10vw">
      <Heading as="h1" fontWeight="800" mb="10px">
        Blogs
      </Heading>
      <Box width="100%" borderBottom="1px solid #3182ce" mb="40px"></Box>
      {post === null && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="70vh"
          w="100%"
        >
          <CircularProgress isIndeterminate color="blue.300" />
        </Box>
      )}
      <Grid
        templateColumns={{
          md: 'repeat(2,2fr)',
          sm: 'repeat(1,2fr)',
          lg: 'repeat(3,2fr)',
          '2xl': 'repeat(4,2fr',
        }}
        py="50px"
        rowGap="50px"
        alignItems="center"
        justifyItems="center"
        columnGap="10px"
      >
        {post?.slice(...pageIndex).map((d, i) => {
          return (
            <GridItem justifySelf="center" key={i}>
              <BlogCard post={d} blogid={i} />
            </GridItem>
          );
        })}
      </Grid>
      <Box
        columnGap="20px"
        alignText="center"
        display="flex"
        justifyContent="center"
        w="100%"
      >
        <Button
          bg="none"
          _hover={{ transform: 'scale(1.2)', bg: 'none' }}
          leftIcon={<ChevronLeftIcon />}
          onClick={prevHandler}
          disabled={totalPosts < step}
        >
          prev
        </Button>

        <Button
          _hover={{ transform: 'scale(1.1)', bg: 'none' }}
          bg="none"
          rightIcon={<ChevronRightIcon />}
          onClick={nextHandler}
          disabled={totalPosts < step}
        >
          next
        </Button>
      </Box>
      <Box width="100%" borderBottom="1px solid #3182ce" mt="30px"></Box>

      <TwoColomnTextImage
        py="3vw"
        LeftText={PartnerText}
        RightImage={PartnerRight}
        w="100vw"
        h="30vw"
      />
    </Box>
  );
}

export default BlogPage;
