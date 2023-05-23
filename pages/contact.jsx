import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

function verifyData() {}

function submitQuery() {
  var name, email, lname, phone, safety_key, message;
  safety_key = 'dynatf';
  name = document.getElementById('first-name').value;
  lname = document.getElementById('last-name').value;
  email = document.getElementById('email').value;
  message = document.getElementById('message').value;
  phone = document.getElementById('phone').value;

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    safety_key: safety_key,
    name: name + lname,
    email: email,
    message: message,
    phone: phone,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    'https://asia-south1-saigeware-cf.cloudfunctions.net/mxApiSaige',
    requestOptions
  )
    .then(response => response.text())
    .then(result => {
      alert('we will contact you oon.');
      console.log(result);
    })
    .catch(error => console.log('error', error));
  document.getElementById('first-name').innerHTML = '';
  document.getElementById('email').innerHTML = '';
  document.getElementById('phone').innerHTML = '';
  document.getElementById('last-name').innerHTML = '';
  document.getElementById('message').innerHTML = '';
}

function Contact() {
  return (
    <Box m={{ md: '5vw 0vw 0vw 10vw' }}>
      <Heading
        as="h1"
        ml={{ base: '5%', md: '0' }}
        fontSize={{ md: '40px', base: '25px' }}
        fontWeight="thin"
      >
        Contact us
      </Heading>
      <Box display="flex" flexDirection="column">
        <Flex
          rowGap={10}
          flexDirection={{ base: 'column', md: 'row' }}
          m="2vw 0vw"
        >
          <Flex
            ml={{ base: '5%', md: '0' }}
            flexDirection="column"
            w={{ md: '20%', base: '80%' }}
            gap={'2vw'}
            letterSpacing={1}
          >
            <h3>EMAIL</h3>
            <EmailComponent
              label="General Inquiry"
              email="info@saigeware.com"
            />
            <EmailComponent label="Jobs" email="hr@saigeware.com" />
            <EmailComponent
              label="Security & Privacy"
              email="support@saigeware.com"
            />
          </Flex>
          <Box
            bg="#f7faff"
            ml={{ md: '20px', base: '5%' }}
            fontSize="xs"
            // p="6vw"
            w={{ md: '75%', base: '90%' }}
            p={{ md: '100px', base: '20px' }}
          >
            <form onsubmit={() => submitQuery()}>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <FormControl isRequired={true}>
                    <FormLabel fontSize="inherit" letterSpacing={2}>
                      FIRST NAME
                    </FormLabel>
                    <Input
                      name="first-name"
                      id="first-name"
                      type="text"
                      pattern="[a-zA-Z]{1,}"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <FormControl isRequired={true}>
                    <FormLabel fontSize="inherit" letterSpacing={2}>
                      LAST NAME
                    </FormLabel>
                    <Input
                      name="last-name"
                      id="last-name"
                      type="text"
                      pattern="[a-zA-Z]{1,}"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <FormControl isRequired={true}>
                    <FormLabel fontSize="inherit" letterSpacing={2}>
                      EMAIL
                    </FormLabel>
                    <Input
                      name="email"
                      id="email"
                      type="text"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <FormControl>
                    <FormLabel fontSize="inherit" letterSpacing={2}>
                      PHONE NUMBER
                    </FormLabel>
                    <Input
                      name="phone"
                      id="phone"
                      type="tel"
                      pattern="[0-9]{10}"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel fontSize="inherit" letterSpacing={2}>
                      MESSAGE
                    </FormLabel>
                    <Textarea
                      name="message"
                      id="message"
                      placeholder="type your message..."
                    />
                  </FormControl>
                </GridItem>
              </Grid>
              <FormControl>
                <Input
                  color="white"
                  w="200px"
                  h="50px"
                  borderRadius={0}
                  mt="5"
                  _hover={{ border: '1px solid blue' }}
                  bg="black"
                  type="submit"
                />
              </FormControl>
            </form>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function EmailComponent({ label, email, mail = true }) {
  return (
    <Box fontSize="medium">
      <h4>{label}</h4>
      <Link
        href={
          mail ? `mailto:${email}` : 'https://goo.gl/maps/jjdN7ERQ9wawLM318'
        }
        target="_blank"
        color="blue.500"
      >
        {email}
      </Link>
    </Box>
  );
}

export default Contact;
