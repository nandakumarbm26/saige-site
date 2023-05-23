import { Box, Heading, IconButton, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FiShare2 } from 'react-icons/fi';
import { RWebShare } from 'react-web-share';

function BlogCard({ blogid, post }) {
  return (
    <Box
      w={{ base: '80vw', md: '35vw', lg: '25vw' }}
      h="100%"
      maxW="400px"
      pos="relative"
      id={blogid}
      _hover={{
        opacity: 0.7,
        transform:
          'translate3d(0px, -20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transitionDuration: '0.5s',
      }}
    >
      <Box cursor="pointer" w="100%" h="250px" pos="relative">
        <Link href={`/blog?id=${post?.id}`}>
          <Box
            w="100%"
            h="100%"
            bg={`url(${post?.bannerPhoto})`}
            _hover={{}}
            bgPos="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          ></Box>
        </Link>
        <RWebShare
          data={{
            text: post?.shortDescription,
            url: `/blog?id=${post.id}`,
            title: post?.title,
          }}
        >
          <IconButton
            borderRadius={20}
            pos="absolute"
            bg="#41abd9"
            bottom="-5"
            right="5"
            color="white"
            _hover={{ color: 'black', bg: 'whitesmoke' }}
          >
            <FiShare2 />
          </IconButton>
        </RWebShare>
      </Box>
      <Box w="100%" p="20px 0px" fontSize="12px" overflow="hidden">
        <Box display="flex" flexDir="row" columnGap="10px">
          <Heading
            as="h2"
            w="50%"
            fontSize="sm"
            fontWeight="medium"
            color="#41abd9"
          >
            {post?.tags[0]}
          </Heading>
          <Text w="50%" textAlign="right"></Text>
        </Box>
        <Link href={'/blog?id=' + post?.id}>
          <Heading
            cursor="pointer"
            fontSize="25px"
            fontWeight="400"
            overflow="hidden"
          >
            {post?.title}
          </Heading>
        </Link>
        <Text
          h="36%"
          w="100%"
          overflow="hidden"
          fontSize="13px"
          textOverflow="ellipsis"
        >
          {post?.shortDescription}
        </Text>
      </Box>
    </Box>
  );
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
}

export default BlogCard;
