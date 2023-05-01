import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
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
                  <DrawerHeader>Meny</DrawerHeader>
                  <DrawerBody>
                    <List spacing={5}>
                      <ListItem>
                        <Link href="/">Start</Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/Portfolio">Portfolio</Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/Education">Utbildning</Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/Contact">Kontakt</Link>
                      </ListItem>
                    </List>
                  </DrawerBody>
                  <DrawerFooter display="flex" justifyContent="space-evenly">
                    <Flex>
                      <Link href="mailto:martina.kreivi@medieinstitutet.se">
                        <Image
                          src="src/assets/MailGrey.png"
                          borderRadius="full"
                          boxSize="80px"
                          objectFit="cover"
                          p="7px"
                          m="5px"
                        />
                      </Link>
                      <Link href="https://github.com/mkreivi">
                        <Image
                          src="src/assets/GithubGrey.png"
                          borderRadius="full"
                          boxSize="80px"
                          objectFit="cover"
                          p="7px"
                          m="5px"
                        />
                      </Link>
                      <Link href="https://www.linkedin.com/in/martina-kreivi-263032b9/">
                        <Image
                          src="src/assets/LinkedinGrey.png"
                          borderRadius="full"
                          boxSize="80px"
                          objectFit="cover"
                          p="7px"
                          m="5px"
                        />
                      </Link>
                    </Flex>
                  </DrawerFooter>
                </DrawerContent>
              </Box>
            </Drawer>

            <Box p={2}>Meny</Box>
          </Flex>
        </Box>

        <Box mx="auto">
          <Link href="/">
            <Image src="src/assets/LogoMartina.svg" />
          </Link>
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
