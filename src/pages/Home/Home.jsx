import { useState } from "react";
import { usePosts } from "../../hooks/queries/usePosts";
import { useCreatePost, useDeletePost, useUpdatePost } from "../../hooks/mutations/post";

function Home() {
    const postsQuery = usePosts();

    const addPostMutation = useCreatePost();
    const updatePostMutation = useUpdatePost();
    const deletePostMutation = useDeletePost();

    const [postTitle, setPostTitle] = useState("");
    const [postId, setPostId] = useState(null);

    const handleAddPost = () => {
        addPostMutation.mutate({
            title: postTitle,
        })
        setPostTitle("");
    }

    const handleUpdatePost = () => {
        updatePostMutation.mutate({
            id: postId,
            title: postTitle
        });
        setPostTitle("");

    }

    const handleDeletePost = (postId) => {
        deletePostMutation.mutate({
            id: postId
        })
    }

    const handeEditPost = (post) => {
        setPostTitle(post.title);
        setPostId(post.id)
    }

    if (postsQuery.isLoading) {
        return <p>Posts loading...</p>
    }

    if (postsQuery.isError) {
        return <p>K nạp được dữ liệu vui lòng liên hệ admin!</p>
    }

    console.log("page home");
    
    return (
        <>
            <input
                value={postTitle}
                onChange={e => setPostTitle(e.target.value)}
                type="text"
                placeholder="Nhập tiêu đề post..."
            />
            <button onClick={handleAddPost} > Thêm  </button>
            <button onClick={handleUpdatePost} > Cập nhật  </button>
            {postsQuery.data?.map((post) => {
                return (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.name}</p>
                        <button onClick={() => handeEditPost(post)}>Sửa</button>
                        <button onClick={() => handleDeletePost(post.id)} > Xóa </button>
                    </div>
                )
            })}
        </>
    )
}
export default Home;