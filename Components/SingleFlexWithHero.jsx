import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

function SingleFlexWithHero({
  hero,
  overflow,
  links,
  flex = true,
  templateColumns,
  p,
  mt,
}) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      p={flex && '5vw 2vw'}
      bg={flex && '#f0f5ff'}
    >
      <Box textAlign="center">{hero}</Box>

      {flex && (
        <Grid
          className="sc5"
          // direction={{ sm: 'column', md: 'row' }}
          templateColumns={templateColumns}
          alignItems="center"
          maxW="100%"
          overflowX={overflow}
          p={p}
          mt={mt}
          gap={10}
        >
          {links.map((d, i) => (
            <GridItem>
              <SingeLogo logoLink={d} id={i} />
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
}

function SingeLogo({ logoLink, id }) {
  return (
    <Box
      bg="white"
      width="200px"
      height="120px"
      display="flex"
      flexDir="row"
      borderRadius="10px"
      justifyContent="center"
      alignItems="center"
      boxShadow="5px 5px 10px "
    >
      <Box
        bg={`url(${logoLink})`}
        width="180px"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="contain"
        height="90px"
        id={id}
      ></Box>
    </Box>
  );
}
export default SingleFlexWithHero;
