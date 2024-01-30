import { Box, Divider, Flex, Text } from "@chakra-ui/react";

function EducationEng() {
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
            Education
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
              Currently studying FrontEnd Development at Medieinstitutet in
              Gothenburg
              <Text fontSize="20px">Aug 2022 - May 2024</Text>
            </Text>
            <Text
              className="CoursesEducation"
              p="10px"
              m="0px, 30px"
              textAlign="center"
            >
              Finished courses when i start my LIA in september 2024 <br />
              <br />
              HTML/CSS • UX/Usability • JavaScript Ground • JavaScript
              Fördjupning • Dynamic Webbdevelopment • Grafic tools for UI •
              Projects with agile methods <br />
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
              IT/Media at Hulebäcksgymnasiet in Mölnlycke
            </Text>
            <Text fontSize="20px">Aug 2005 - June 2008</Text>
            <Text
              className="CoursesEducation"
              p="10px"
              m="0px, 30px"
              textAlign="center"
            >
              Urval av kurser jag läste: <br />
              <br />
              Graphic communication • Webbdesign • Medie knowledge • Media
              communication • Media production • Media tekniks • Multimedia{" "}
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
export default EducationEng;
