// src/components/Header.tsx
import { Box, Container, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Box component="header" className="bg-blue-600 text-white p-4">
      <Container size="xl" className="flex justify-between items-center">
        <Title order={3}>My App</Title>
        <nav className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
        </nav>
      </Container>
    </Box>
  );
}
