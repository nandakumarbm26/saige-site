import { Box, CircularProgress, Heading, Text } from '@chakra-ui/react';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../dbconfig/firebase';

function index() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getPost() {
      let blogData = {};
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get('id');
      const dataref = await doc(db, 'blogs', id);
      await getDoc(dataref).then(res => {
        blogData = res.data();
      });

      setData(blogData);
    }
    getPost();
    return () => {};
  }, []);

  return (
    <>
      {data === null && (
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
      <Heading as="h1" id="bloghead">
        {data?.title}
      </Heading>

      <div id="blog">
        <Text textAlign="center">
          {/* {new Date(data.created.seconds).toDateString()} */}
        </Text>
        <div dangerouslySetInnerHTML={{ __html: data?.fullText }}></div>
      </div>
    </>
  );
}

export default index;

// export async function getStaticProps({ params }) {
//   let blogData = {};
//   const dataref = await doc(db, 'blogs', params.id);
//   await getDoc(dataref).then(res => {
//     blogData = res.data();
//     console.log(res.data());
//   });
//   const dataJSON = JSON.stringify(blogData);

//   return {
//     props: {
//       dataJSON,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const postData = [];
//   const querySnapshot = await getDocs(collection(db, 'blogs'));
//   querySnapshot.forEach(doc => {
//     postData.push({ id: doc.id, ...doc.data() });
//   });

//   return {
//     paths: postData.map(post => {
//       return {
//         params: {
//           id: post.id,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
