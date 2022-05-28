import s from './PostItem.module.css';

export default function PostItem({ post }) {
  return (
    <div className={s.component}>
      <header className={s.header}>
        {post.id}, {post.title}
      </header>
      <div className={s.body}>{post.body}</div>
    </div>
  );
}
