import { NavLink, useMatch } from 'react-router-dom';
import s from './CustomNavLink.module.css';

export default function CustomNavLink({ children, to, ...props }) {
  const match = useMatch({ path: to, end: to.length === 1 });
  return (
    <NavLink
      to={to}
      className={match ? [s.component, s.active].join(' ') : s.component}
      {...props}
    >
      {children}
    </NavLink>
  );
}
