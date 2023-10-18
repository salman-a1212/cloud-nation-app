import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  Container,
  Image,
  Center,
  InputRightElement,
  InputGroup,
  Link,
  Spacer,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import profile_icon from "../images/profile_avatar.svg";
import dropdown_Icon1 from "../images/solar_laptop-minimalistic-bold.svg";
import dropdown_Icon2 from "../images/solar_server-2-bold.svg";
import dropdown_Icon3 from "../images/solar_widget-bold-duotone.svg";
import energy_icon from "../images/energy_icon.svg";
import notification from "../images/solar_bell-bold.svg";
import search_icon from "../images/ph_lightning-a-fill.svg";
import breadcrumb_icon1 from "../images/solar_widget-5-bold.svg";
import breadcrumb_icon2 from "../images/solar_database-bold-duotone.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

// interface Props {
//   children: React.ReactNode;
// }

// const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as='a'
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Container maxW={"container.xl"} borderBottom={'1px solid #ddd'}>
        <Box px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box fontSize={22} fontWeight='extrabold'>
                CloudNation.
              </Box>
              {/* <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack> */}
              <Flex alignItems={"center"}>
                <Stack spacing={3}>
                  <InputGroup>
                    <Input
                      variant='outline'
                      placeholder='Quick Search'
                      minW={450}
                    />
                    <InputRightElement>
                      <IconButton
                        icon={<Image src={search_icon} />}
                        bg={"transparent"}
                        colorScheme='transparent'
                      />
                    </InputRightElement>
                  </InputGroup>
                </Stack>
              </Flex>
            </HStack>
            <Flex alignItems={"center"}>
              <Button
                variant={"solid"}
                colorScheme={"#F6E4FF"}
                backgroundColor={"#F6E4FF"}
                size={"md"}
                m={4}
                color={"#9837CA"}
              >
                {" "}
                <Image src={energy_icon} px={1} />
                <Text
                  textAlign={["left", "center"]}
                  fontSize={18}
                  fontWeight={600}
                >
                  350
                </Text>
                <Text textAlign={["left"]} fontSize={10} p={2}>
                  Credits <br />
                  Left
                </Text>
              </Button>
              <Menu>
                <>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon ml={2} />}
                    mr={4}
                    backgroundColor={"#9837CA"}
                    color={"#fff"}
                    colorScheme='#9837CA'
                  >
                    Add New
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Image src={dropdown_Icon1} mr={2} />
                      New App
                    </MenuItem>
                    <MenuItem>
                      <Image src={dropdown_Icon2} mr={2} />
                      New Datastore
                    </MenuItem>
                    <MenuItem>
                      <Image src={dropdown_Icon3} mr={2} />
                      New Cluster
                    </MenuItem>
                  </MenuList>
                </>
              </Menu>
              <IconButton
                icon={<Image src={notification} mr={2} />}
                bg={"transparent"}
                colorScheme='transparent'
              />
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={profile_icon} m={2} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
          {/* 
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
        </Box>
      </Container>
      <Container maxW={"container.xl"} bgColor={"#F6F6F6"}>
        <Flex alignItems={"center"}>
          <Box p={4}>
            <Breadcrumb spacing='8px' separator=''>
              <BreadcrumbItem>
                <Image src={breadcrumb_icon1} mr={2} />
                <BreadcrumbLink href='#' fontWeight={500}>Web Apps</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Image src={breadcrumb_icon2} mr={2} />
                <BreadcrumbLink href='#' fontWeight={500}>Datastore</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <Image src={dropdown_Icon3} mr={2} />
                <BreadcrumbLink href='#' fontWeight={500}>Clusters</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Spacer />
          <Box>
            <Link m={4} fontWeight={500}>Documentation</Link>
            <Link m={4} fontWeight={500}>Support</Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
