import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Link,
  List,
  ListItem,
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box bg="#494E5F" h="170px" color="#FFE7D4">
      <Flex justify={"space-between"} align={"center"} px={10}>
        <Box>
          <Flex align="center">
            <Box p={2}>
              {isDrawerOpen ? (
                <CloseIcon
                  boxSize={8}
                  color="#FFE7D4"
                  onClick={handleDrawerClose}
                  cursor="pointer"
                />
              ) : (
                <HamburgerIcon
                  boxSize={8}
                  color="#FFE7D4"
                  onClick={handleDrawerOpen}
                  cursor="pointer"
                />
              )}
            </Box>

            <Drawer
              isOpen={isDrawerOpen}
              placement="left"
              onClose={handleDrawerClose}
            >
              <Box color="#494E5F" bg="#494E5F">
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton color="#494E5F" mt={2} />
                  <DrawerHeader>Menu</DrawerHeader>
                  <DrawerBody>
                    <List spacing={3}>
                      <ListItem>
                        <Link href="#">Home</Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">About</Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">Contact</Link>
                      </ListItem>
                    </List>
                  </DrawerBody>
                </DrawerContent>
              </Box>
            </Drawer>

            <Box p={2}>Meny</Box>
          </Flex>
        </Box>

        <Box mx="auto">
          <Image src="src/assets/LogoMartina.svg" />
        </Box>

        <Flex align={"center"}>
          <Box>
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
