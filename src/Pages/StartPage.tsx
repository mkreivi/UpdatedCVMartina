import { Box, Flex, Image, Text } from "@chakra-ui/react";

function StartPage() {
  return (
    <main>
      <Box>
        <Text
          bg="#F5F5F5"
          justifyContent="space-between"
          h={["100%"]}
          fontSize={["12px", "16px", "20px"]}
          m="30px"
          p="10px"
        >
          <Text bg="#FFE7D4">Välkommen</Text>
          <Flex>
            <Text
              p="10px"
              m="30px"
              bg="#F5F5F5"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              fontStyle="italic"
            >
              Studerar FrontEnd Development på Medieinstitutet i Göteborg
              <br />
              <br />
              "Jag är en positiv, nyfiken och strukturerad medarbetare som
              älskar att anpassa och modernisera webbplatser för att form och
              funktion ska tilltala användaren!"
            </Text>
            <Box mr="50px">
              <Image
                src="src/assets/MartinaBlackWhite.JPG"
                borderRadius="full"
                boxSize="150px"
                objectFit="cover"
                m="10px"
              />
            </Box>
          </Flex>
        </Text>
      </Box>
    </main>
  );
}
export default StartPage;
