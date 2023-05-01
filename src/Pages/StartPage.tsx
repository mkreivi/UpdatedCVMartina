import { Box, Flex, Image, Text } from "@chakra-ui/react";

function StartPage() {
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
            Välkommen
          </Text>
          <Flex
            className="TextAndPictureTogether"
            alignContent="flex-end"
            justifyContent="space-between"
            align="center"
          >
            <Text
              className="Introduction"
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
              "Jag är en positiv, nyfiken och strukturerad medarbetare <br />
              som älskar att anpassa och modernisera webbplatser <br />
              för att form och funktion ska tilltala användaren!"
            </Text>
            <Box mr="50px" className="ThisOne">
              <Image
                className="Picture"
                src="src/assets/MartinaBlackWhite.JPG"
                borderRadius="full"
                boxSize="180px"
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
