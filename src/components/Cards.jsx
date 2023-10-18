import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Button,
  Heading,
  Text,
  Container,
  Box,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";
import card_icon1 from "../images/solar_laptop-minimalistic-bold.svg";
import card_icon2 from "../images/solar_widget-bold-duotone.svg";
import card_icon3 from "../images/solar_database-bold-duotone.svg";
import card_icon4 from "../images/solar_folder-path-connect-bold.svg";
import card_icon5 from "../images/solar_notebook-square-bold.svg";

const Cards = () => {
  return (
    <div>
      <Container maxW={"container.lg"}>
        <Box pt={10}>
          <Heading size='lg' fontWeight={500} fontFamily={"Archivo"}>
            {" "}
            Get Started
          </Heading>
          <Text fontSize={16} py={5}>
            Choose what you want to deploy and we’ll get it done in seconds
          </Text>
          <SimpleGrid
            spacing={4}
            templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
          >
            <Card borderRadius={18}>
              <Flex>
                <CardHeader>
                  <Heading size='md' fontFamily={"Archivo"} fontSize={22}>
                    {" "}
                    New App
                  </Heading>
                </CardHeader>
                <Spacer />
                <Image src={card_icon1} mr={4} w={25} />
              </Flex>
              <CardBody>
                <Text color={"#555555"} fontSize={14} fontWeight={400}>
                  Get started on building your app! Provide the details to begin
                  the creation process. Our platform will generate the structure
                  for your functional app aligned with your vision.
                </Text>
              </CardBody>
              <CardFooter>
                <Spacer />
                <Button
                  bgColor={"#9837CA"}
                  color={"#fff"}
                  colorScheme='#9837CA'
                >
                  Create App
                </Button>
              </CardFooter>
            </Card>
            <Card bgColor={"#FFEEED"} borderRadius={18}>
              <Flex>
                <CardHeader>
                  <Heading size='md' fontFamily={"Archivo"} fontSize={22}>
                    New Cluster
                  </Heading>
                </CardHeader>
                <Spacer />
                <Image src={card_icon2} mr={4} w={25} />
              </Flex>
              <CardBody>
                <Text color={"#555555"} fontSize={14} fontWeight={400}>
                  Set up a scalable computing environment! Create a cluster for
                  optimal performance, availability, and scalability. Handle
                  traffic, respond faster, and scale effortlessly.
                </Text>
              </CardBody>
              <CardFooter>
                <Spacer />
                <Button
                  bgColor={"#9837CA"}
                  color={"#fff"}
                  colorScheme='#9837CA'
                >
                  Create Cluster
                </Button>
              </CardFooter>
            </Card>
            <Card borderRadius={18} bgColor={"#EDFFFA"}>
              <Flex>
                <CardHeader>
                  <Heading size='md' fontFamily={"Archivo"}>
                    New Datastore
                  </Heading>
                </CardHeader>
                <Spacer />
                <Image src={card_icon3} mr={4} w={25} />
              </Flex>
              <CardBody>
                <Text color={"#555555"} fontSize={14} fontWeight={400}>
                  Establish secure storage for your app's data. Create a
                  datastore for managing critical information. Ensure integrity
                  and accessibility for reliable app services.
                </Text>
              </CardBody>
              <CardFooter>
                <Spacer />
                <Button
                  bgColor={"#9837CA"}
                  color={"#fff"}
                  colorScheme='#9837CA'
                >
                  Create Datastore
                </Button>
              </CardFooter>
            </Card>
            <Card borderRadius={18} bgColor={"#FFF6EC"}>
              <Flex>
                <CardHeader>
                  <Heading size='md' fontFamily={"Archivo"}>
                    Connect
                  </Heading>
                </CardHeader>
                <Spacer />
                <Image src={card_icon4} mr={4} w={25} />
              </Flex>
              <CardBody>
                <Text color={"#555555"} fontSize={14} fontWeight={400}>
                  Connect to your favourite Repositories wherever they are.
                </Text>
              </CardBody>
              <CardFooter>
                <Spacer />
                <Button
                  bgColor={"#9837CA"}
                  color={"#fff"}
                  colorScheme='#9837CA'
                >
                  Create Cluster
                </Button>
              </CardFooter>
            </Card>
            <Card borderRadius={18} bgColor={"#F3EDFF"}>
              <Flex>
                <CardHeader>
                  <Heading size='md' fontFamily={"Archivo"}>
                    Documentation
                  </Heading>
                </CardHeader>
                <Spacer />
                <Image src={card_icon5} mr={4} w={25} />
              </Flex>
              <CardBody>
                <Text color={"#555555"} fontSize={14} fontWeight={400}>
                  Establish secure storage for your app's data. Create a
                  datastore for managing critical information. Ensure integrity
                  and accessibility for reliable app services.
                </Text>
              </CardBody>
              <CardFooter>
                <Spacer />
                <Button
                  bgColor={"#9837CA"}
                  color={"#fff"}
                  colorScheme='#9837CA'
                >
                  View Docs
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </Container>
    </div>
  );
};

export default Cards;
