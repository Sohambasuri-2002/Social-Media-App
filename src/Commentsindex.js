import { Box } from "@chakra-ui/react";
import Post from "../src/postindex";
import { useParams } from "react-router-dom";
import { usePost } from "../src/posts";
import NewComment from "../src/NewComment";
import CommentList from "../src/CommentList";

export default function Comments() {
    const { id } = useParams();
    const {post, isLoading} = usePost(id);
    
    if (isLoading) return "Loading...";

  return (
    <Box align="center" pt="50">
        <Post post={post} />
        <NewComment post={post} />
        <CommentList post={post}/>
    </Box>
  );
}
