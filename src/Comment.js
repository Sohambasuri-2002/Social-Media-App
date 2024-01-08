import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useUser } from "../src/HooksUsers";
import Avatar from "../src/Avatar";
import { formatDistanceToNow } from "date-fns";
import UsernameButton from "../src/UsernameButton";
import { FaTrash } from "react-icons/fa";
import { useDeleteComment } from "../src/HooksComment";
import { useAuth } from "../src/auth";

export default function Comment({ comment }) {
    const { text, uid, date, id } = comment;
    const { user , isLoading: userLoading } = useUser(uid);
    const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);
    const { user: authUser, isLoading: authLoading } = useAuth();

    if (userLoading) return "Loading...";

  return (
    <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
        <Flex pb="2">
            <Avatar user={user} size="sm" />
            <Box flex="1" ml="4">
                <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
                    <Box>
                        <UsernameButton user={user} />
                        <Text fontSize="xs" color="gray.500">
                            {formatDistanceToNow(date)} ago
                        </Text>
                    </Box>
                    {!authLoading && authUser.id === uid &&(
                    <IconButton
                        size="sm"
                        ml="auto"
                        icon={<FaTrash />}
                        colorScheme="red"
                        variant="ghost"
                        isRound
                        onClick={deleteComment}
                        isLoading={deleteLoading}
                    />
)}
                </Flex>
                <Box pt="2" fontSize="sm">
                    <Text>{text}</Text>
                </Box>
            </Box>
        </Flex>
    </Box>
  );
}
