import { Box, Flex, Image, Text } from "@chakra-ui/react";

function StartPageEng() {
  return (
    <main>
      <Box className="StartPageMain">
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
            Welcome
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
              Currently studying Front End Development at Medieinstitutet in
              Gothenburg
              <br />
              <br />
              "I'm a positive , curious and well structured co-worker <br />
              who loves to adapt and modernize webbsites and apps <br />
              to make form and function appeal and easy to use for the user!"
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
      <Box className="StartPageMain">
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
          ></Text>
          <Flex
            className="TextAndPictureTogether"
            alignContent="flex-end"
            justifyContent="space-between"
            align="center"
          >
            <Box mr="50px" className="ThisOne">
              <Image
                className="Picture"
                src="src/assets/MartinaK2.PNG"
                borderRadius="full"
                boxSize="600px"
                objectFit="cover"
                m="10px"
                h="180px"
              />
            </Box>
            <Text
              className="Introduction"
              p="10px"
              m="30px"
              bg="#F5F5F5"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              fontStyle="italic"
              textAlign="right"
            >
              Why FrontEnd Development?
              <br />
              <br />
              Jag har alltid älskat att skapa och vara kreativ. Under gymnasiet
              år 2005-2008 läste jag IT/Media programmet och fastnade för
              webbutveckling. Detta har legat och grott och drömmen om att en
              dag kunna arbeta med detta växte sig större. <br />
              <br />
              Efter närmare 15 år inom butik och restaurang hittade jag min
              drömutbildning, FrontEnd Developer på Medieinstitutet i Göteborg.
              Nu får jag dagligen skapa, utveckla och modernisera webbsidor och
              appar och ser fram emot att snart komma ut och arbeta med detta på
              riktigt! TEST
            </Text>
          </Flex>
        </Text>
      </Box>
    </main>
  );
}
export default StartPageEng;
