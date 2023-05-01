import { Box, Flex, Image, Text } from "@chakra-ui/react";

function StartPage() {
  return (
    <main>
      <Box>
        <Text
          bg="#FFE7D4"
          justifyContent="space-between"
          h={["100%"]}
          fontSize={["12px", "16px", "20px"]}
          m="30px"
        >
          Välkommen
          <Flex>
            <Text
              p="10px"
              m="30px"
              bg="#CCCCCC"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              Massa text Massa text Massa text Massa text Massa text Massa text
              Massa text Massa text Massa text
            </Text>
            <Box mr="50px">
              <Image
                src="src/assets/MartinaBlackWhite.JPG"
                borderRadius="full"
                boxSize="200px"
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
