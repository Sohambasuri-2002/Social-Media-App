import { Box, Button, Code, Stack } from "@chakra-ui/react";
import { PROTECTED, USERS } from "routes";
import { Link } from "react-router-dom";
import { useAuth } from "auth";
import Avatar from "../src/Avatar";

function ActiveUser() {
  const { user, isLoading } = useAuth();

  if (isLoading) return "Loading auth user...";

  return (
    
    <Stack align="center" spacing="5" my="8">
        <Avatar user={user} />
        <Code>@{user.username}</Code>
        <Button 
          colorScheme="teal" 
          w="full" 
          as={Link}
          to={`${PROTECTED}/profile/${user.id}`}
          >
          Edit Profile
        </Button>
    </Stack>
      
    
  );
}


export default function sidebar() {
  return (
    <Box
      px="6"
      height="100vh"
      w="100%"
      maxW="300px"
      borderLeft="1px solid"
      borderLeftColor="teal.100"
      position="sticky"
      top="16"
      display={{ base: "none", md: "block" }}
    >
      <ActiveUser />
      <Box align="center">
        <Box as="ul" borderBottom="2px solid" borderColor="teal.200" />
          <Button
          variant="outline"
          colorScheme="teal"
          as={Link}
          to={USERS}
          mt="4"
          size="sm"
          >
              ALL USERS
          </Button>
      </Box>
    </Box>
  )
}
