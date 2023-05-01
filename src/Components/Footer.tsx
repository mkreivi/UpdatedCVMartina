import { Box, Flex, Image, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="##494E5F" h="170px" color="#FFE7D4">
      <Flex justify={"center"}>
        <Link href="mailto:martina.kreivi@medieinstitutet.se">
          <Image
            src="src/assets/iconMail150px.svg"
            borderRadius="full"
            boxSize="80px"
            objectFit="cover"
            p="7px"
            m="5px"
          />
        </Link>
        <Link href="https://github.com/mkreivi">
          <Image
            src="src/assets/IconGithub.png"
            borderRadius="full"
            boxSize="80px"
            objectFit="cover"
            p="7px"
            m="5px"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/martina-kreivi-263032b9/">
          <Image
            src="src/assets/iconLinkdIn.png"
            boxSize="80px"
            objectFit="cover"
            p="7px"
            m="5px"
          />
        </Link>
      </Flex>
    </Box>
  );
}

export default Footer;
