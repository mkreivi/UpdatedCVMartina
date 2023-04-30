import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Switch,
} from "@chakra-ui/react";

function Header() {
  return (
    <Box bg="#494E5F" h="170px">
      <Flex justify={"space-between"} align={"center"}>
        <Box p="20px">Meny</Box>
        <Box>
          <Image src="src/assets/LogoMartina.svg" />
        </Box>
        <Flex align={"center"}>
          <Box p="20px">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-alerts" mb="0">
                Sve - Eng
              </FormLabel>
              <Switch colorScheme="brand" id="email-alerts" />
            </FormControl>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
