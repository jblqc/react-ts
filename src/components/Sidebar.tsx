// src/components/Sidebar.tsx
import { Box } from "@mantine/core";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <Box component="aside" className="bg-gray-100 w-64 p-4 min-h-screen">
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-600">
          About
        </Link>
      </nav>
    </Box>
  );
}
