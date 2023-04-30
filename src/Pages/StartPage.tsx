import { Box, Image } from "@chakra-ui/react";

function StartPage() {
  return (
    <Box m="20px" h="100%" display="flex" alignItems="flex-start">
      <Box ml="50px" bg="#CCCCCC">
        Massa text Massa text Massa text Massa text Massa text Massa text Massa
        text Massa text Massa text
      </Box>
      <Box mr="50px">
        <Image
          src="src/assets/MartinaBlackWhite.JPG"
          borderRadius="full"
          boxSize="300px"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
}
export default StartPage;
