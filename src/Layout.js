import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGIN } from "routes";
import { useAuth } from "../src/auth";
import Navbar from "Navbar";
import Sidebar from "../src/Sidebar";
import { Flex, Box } from "@chakra-ui/react";

export default function Layout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { user, isLoading } = useAuth();


    useEffect(() => {
        if (!isLoading && pathname.startsWith("/protected") && !user) {
            navigate(LOGIN);
        }
    }, [pathname, user, isLoading]);

    if (isLoading) return "Loading auth user.....";

  return (
    <>
      <Navbar />
      <Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
        <Box w="900px">
          <Outlet />
        </Box>
        <Sidebar />
      </Flex>
      
      
    </>
  );
}
