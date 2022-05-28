import { useEffect, useState } from 'react';
import { postService } from '../../API/postService';
import { useFeching } from '../../hooks/useFetching';
import PostItem from '../PostItem/PostItem';
import s from './PostList.module.css';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, postsError] = useFeching(async () => {
    const response = await postService.getAllPosts();
    setPosts(response);
  });

  return (
    <div className={s.component}>
      {posts.map((post) => (
        <div className={s.wrapPostItem} key={post.id}>
          <PostItem post={post} />
        </div>
      ))}
    </div>
  );
}
