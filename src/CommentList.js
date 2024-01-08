
import { Box } from "@chakra-ui/react";
import { useComments } from "../src/HooksComment";
import Comment from "../src/Comment";

export default function CommentList({ post }) {
    const { id} = post;
    const { comments, isLoading } = useComments(id);

    if (isLoading) return "Loading...";
    
    return(
        <Box>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </Box>
    );
  
}
