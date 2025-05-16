// src/components/Layout.tsx
import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Left side */}
      <div className="flex flex-col flex-1">
        {" "}
        {/* Right side: Header + Content */}
        <Header /> {/* Top bar */}
        <Box component="main" className="flex-1 p-6 bg-white">
          <Outlet /> {/* Injects routed pages */}
        </Box>
      </div>
    </div>
  );
}
