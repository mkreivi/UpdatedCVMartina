import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

function Portfolio() {
  return (
    <main>
      <Box className="Hallo">
        <Text
          bg="#F5F5F5"
          justifyContent="space-between"
          alignContent="center"
          h={["100%"]}
          fontSize={["12px", "16px", "20px"]}
          m="30px"
          p="10px"
        >
          <Text
            className="HeadingWelcome"
            bg="#FFE7D4"
            h="50px"
            display="flex"
            alignItems="center"
            p="20px"
          >
            Portfolio
          </Text>

          <Text
            className="Introduction"
            p="10px"
            m="30px"
            bg="#F5F5F5"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            Här har jag samlat projekt jag gjort
          </Text>
          <SimpleGrid
            columns={{ base: 1, sm: 2 }}
            gap={{ base: "20px", sm: "40px" }}
            alignItems="center"
            mb={{ base: "20px", sm: "0" }}
          >
            <Box>
              <Card m="10px" variant="outline">
                <Image
                  p="10px"
                  src="src/assets/LisebergUXUI.png"
                  objectFit="cover"
                />
                <Stack>
                  <CardBody>
                    <Button
                      borderRadius="20px"
                      variant="solid"
                      bg="#B398ED"
                      color="#F5F5F5"
                    >
                      UX/UI
                    </Button>
                    <Heading mt="10px" size="md">
                      Gränssnittsanalys - Förbättra UX/UI
                    </Heading>

                    <Text py="2">
                      Skolprojekt där jag förbättrat UX på Lisebergs hemsida i
                      Figma.
                    </Text>
                    <Text py="1">Oktober 2022</Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant="solid" bg="#494E5F" color="#F5F5F5">
                      Se mer
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>

              <Card m="10px" variant="outline">
                <Image
                  p="10px"
                  src="src/assets/KorpensHantverksbutik.png"
                  objectFit="cover"
                />
                <Stack>
                  <CardBody>
                    <Button
                      borderRadius="20px"
                      variant="solid"
                      bg="#7BABF2"
                      color="#F5F5F5"
                    >
                      HTML/CSS
                    </Button>
                    <Heading mt="10px" size="md">
                      Modernisera en hemsida - Grupparbete
                    </Heading>

                    <Text py="2">
                      Skolprojekt där jag tillsammans med två klasskamrater
                      förbättrat gränssnittet på en befintlig hemsida.
                    </Text>
                    <Text py="1">Oktober 2022</Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant="solid" bg="#494E5F" color="#F5F5F5">
                      Se mer
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>
          </SimpleGrid>
        </Text>
      </Box>
    </main>
  );
}

export default Portfolio;
