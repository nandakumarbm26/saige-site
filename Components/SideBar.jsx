import {
  Box,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  Icon,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { AiOutlineAppstore, AiOutlineContacts } from 'react-icons/ai';
import { FiCompass, FiMenu, FiTrendingUp } from 'react-icons/fi';

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const LinkItems = [
    { name: 'Platform', icon: FiTrendingUp, link: '/platform' },
    {
      name: 'SAiWell',
      icon: AiOutlineAppstore,
      link: 'https://saiwell.saigeware.com/',
    },
    { name: 'Company', icon: FiCompass, link: '/aboutus' },
    { name: 'Blogs', icon: FiCompass, link: '/blogs' },
    { name: 'Contact', icon: AiOutlineContacts, link: '/contact' },
  ];

  return (
    <Box
      margin="auto"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: '100%', md: 60 }}
      minW="fit-content"
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box
          h="100px"
          w="150px"
          bg="url('./images/RectLB.svg')"
          bgRepeat="no-repeat"
          bgPos="center"
          bgSize="contain"
        >
          {' '}
        </Box>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex direction="column">
        {LinkItems.map(link => (
          <NavItem
            key={link.name}
            onClick={() => {
              onClose();
            }}
            link={link}
            icon={link.icon}
          >
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};

const NavItem = ({ link, icon, children, ...rest }) => {
  return (
    <Link
      href={link.link}
      title={link.link}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <a>
        <Flex
          align="center"
          p="4"
          mx="4"
          w="50%"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'blue.500',
            color: 'white',
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </a>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <IconButton
      variant="outline"
      onClick={onOpen}
      aria-label="open menu"
      icon={<FiMenu />}
    />
  );
};
