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
// KORPENSHANTVERKSBUTIK
function Portfolio() {
  return (
    <Box p="30px">
      <Text bg="#F5F5F5" fontSize={["12px", "16px", "20px"]} p="10px">
        <Box bg="#FFE7D4" h="50px" display="flex" alignItems="center" p="20px">
          Portfolio
        </Box>
        <Box
          bg="#F5F5F5"
          p="10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text className="Introduction">
            Här har jag samlat projekt jag gjort
          </Text>
        </Box>
        <SimpleGrid
          columns={[1, 2]}
          gap={["20px", "40px"]}
          alignItems="center"
          mb={["20px", 0]}
        >
          <Card m="10px" variant="outline">
            <Image
              p="10px"
              src="src/assets/TakenBakeStartSite.png"
              objectFit="cover"
              h="266px"
            />
            <Stack>
              <CardBody>
                <Button
                  borderRadius="20px"
                  variant="solid"
                  bg="#ECB5FF"
                  color="#F5F5F5"
                >
                  JAVASCRIPT GRUND
                </Button>
                <Heading mt="10px" size="md">
                  Skapa ett spel
                </Heading>
                <Text py="2">
                  Slutprojekt i kursen JavaScript Grund där jag tillsammans med
                  4 klasskamrater skapat ett spel.
                </Text>
                <Text py="1">November 2022</Text>
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
              src="src/assets/MartinaLogoGrey2.svg"
              objectFit="cover"
              h="266px"
            />
            <Stack>
              <CardBody>
                <Button
                  borderRadius="20px"
                  variant="solid"
                  bg="#ECB5FF"
                  color="#F5F5F5"
                >
                  JAVASCRIPT GRUND
                </Button>
                <Heading mt="10px" size="md">
                  Interaktivt CV
                </Heading>
                <Text py="2">
                  Skolprojekt där jag fick i uppgift att skapa en hemsida om mig
                  själv i form av ett interaktivt CV som även innehåller projekt
                  jag gjort.
                </Text>
                <Text py="1">November 2022</Text>
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
                  Skolprojekt i kursen UX/UI där jag förbättrat UX:et på
                  Lisebergs hemsida under halloween 2022 i Figma.
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
        </SimpleGrid>
      </Text>
    </Box>
  );
}

export default Portfolio;
