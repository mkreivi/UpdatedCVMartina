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
    <Box bg="#494E5F" h="170px" color="#FFE7D4">
      <Flex justify={"space-between"} align={"center"}>
        <Box p="20px" h="170px">
          Meny
          <HamburgerIcon boxSize={10} color="#FFE7D4" />
        </Box>

        <Box>
          <Image src="src/assets/LogoMartina.svg" />
        </Box>

        <Flex align={"center"}>
          <Box p="20px">
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
