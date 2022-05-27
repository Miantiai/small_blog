import CustomNavLink from '../UI components/CustomNavLink/CustomNavLink';
import s from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={s.component}>
      <div className={s.wrapCustomNavLink}>
        <CustomNavLink to="/">Home</CustomNavLink>
      </div>
      <div className={s.wrapCustomNavLink}>
        <CustomNavLink to="/blog">Blog</CustomNavLink>
      </div>
      <div className={s.wrapCustomNavLink}>
        <CustomNavLink to="/about">About</CustomNavLink>
      </div>
    </div>
  );
}
