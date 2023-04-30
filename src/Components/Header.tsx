import { HamburgerIcon } from "@chakra-ui/icons";
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
    // HELA HEADERN
    <Box h="170px" bg="#494E5F" color="#FFE7D4">
      <Flex justify={"space-between"} align={"center"}>
        <Box p="20px" w="160px">
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="Menu" mb="0">
              Meny
              <HamburgerIcon ml="7px" boxSize={6} color="#FFE7D4" />
            </FormLabel>
          </FormControl>
        </Box>

        <Flex align={"center"}>
          <Box mx="auto">
            <Image src="src/assets/LogoMartina.svg" />
          </Box>
        </Flex>

        <Flex align={"center"}>
          <Box p="20px" w="160px">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="Swe-Eng language" mb="0">
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
