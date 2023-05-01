import { Box, Text } from "@chakra-ui/react";
function Contact() {
  return (
    <main>
      <Box p="30px">
        <Text bg="#F5F5F5" fontSize={["12px", "16px", "20px"]} p="10px">
          <Box
            fontSize="24px" // Byt storlek på denna!
            bg="#FFE7D4"
            h="50px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="20px"
            mx="auto"
          >
            Kontakta mig gärna nedan!
          </Box>
        </Text>
      </Box>
    </main>
  );
}
export default Contact;
