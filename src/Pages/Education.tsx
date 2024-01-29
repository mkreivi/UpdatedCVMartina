import { Box, Divider, Flex, Text } from "@chakra-ui/react";

function Education() {
  return (
    <main>
      <Box p="30px">
        <Text bg="#F5F5F5" fontSize={["12px", "16px", "20px"]} p="10px">
          <Text
            fontSize="24px" // Byt storlek på denna!
            bg="#FFE7D4"
            h="50px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="20px"
            mx="auto"
          >
            Eduction
          </Text>
          <Flex
            flexDirection="column"
            className="TextAndPictureTogether"
            align="center"
          >
            <Text
              fontSize="24px"
              className="HeadingEducation"
              p="10px"
              m="30px"
              mb="0"
              bg="#F5F5F5"
              textAlign="center"
            >
              FrontEnd Development student at Medieinstitutet in Gothenburg
              <Text fontSize="20px">Aug 2022 - May 2024</Text>
            </Text>
            <Text
              className="CoursesEducation"
              p="10px"
              m="0px, 30px"
              textAlign="center"
            >
              Kurser jag läst när jag påbörjar min LIA i september 2024 <br />
              <br />
              HTML/CSS • UX/Usability • JavaScript Grund • JavaScript
              Fördjupning • Dynamisk Webbutveckling • Grafiska verktyg för
              gränssnittsdesign • Projekt med agila metoder <br />
              <br />
            </Text>
            <Divider
              orientation="horizontal"
              borderColor="brand.400"
              w={["100%"]}
            />
            <Text
              fontSize="24px"
              className="HeadingEducation"
              p="10px"
              m="30px"
              mb="0"
              textAlign="center"
            >
              IT/Media programmet på Hulebäcksgymnasiet i Mölnlycke
            </Text>
            <Text fontSize="20px">Aug 2005 - May 2008</Text>
            <Text
              className="CoursesEducation"
              p="10px"
              m="0px, 30px"
              textAlign="center"
            >
              Urval av kurser jag läste: <br />
              <br />
              Grafisk kommunikation • Webbdesign • Mediekunskap •
              Mediekommunikation • Medieproduktion • Medieteknik • Multimedia{" "}
              <br />
              <br />
            </Text>
            <Divider
              orientation="horizontal"
              borderColor="brand.400"
              w={["100%"]}
            />
          </Flex>
        </Text>
      </Box>
    </main>
  );
}
export default Education;
