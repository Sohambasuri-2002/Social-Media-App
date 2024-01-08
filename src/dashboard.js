import { HStack, Heading, Box, Textarea, Button } from "@chakra-ui/react";
import { useAddPost, usePosts } from "../src/posts";
import { useForm } from "react-hook-form";
import reactTextareaAutosize from "react-textarea-autosize";
import { useAuth } from "../src/auth";
import PostsList from "../src/PostsList";


function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    })
    reset();
  }


  return (
    <Box maxW="600px" mx="auto" py="10">
          <form onSubmit={handleSubmit(handleAddPost)}>
              <HStack justify="space-between">
                  <Heading size="lg">New Post</Heading>
                  <Button 
                    colorScheme="teal" 
                    type="submit" 
                    isLoading={ authLoading || addingPost } 
                    loadingText="Loading"
                  >
                    Post
                  </Button>
              </HStack>
              <Textarea 
              as={reactTextareaAutosize}
              resize="none" 
              mt="5" 
              placeholder="Create a New Post..." 
              minRows={3}  
              {...register("text", { required: true })}        
              />
          </form>
      </Box>
  );
}

export default function Dashboard() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading Posts....";

  return (
    <>
      <NewPost />
      <PostsList posts={posts} />
    </>
  );
}
