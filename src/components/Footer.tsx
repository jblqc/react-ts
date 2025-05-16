import { Box, Container, Text } from "@mantine/core";

export function Footer() {
  return (
    <Box component="footer" className="bg-gray-800 text-white mt-auto">
      <Container size="lg" py="md">
        <Text size="sm">© 2025 Your App</Text>
      </Container>
    </Box>
  );
}
