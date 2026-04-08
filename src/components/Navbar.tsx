import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Overview' },
  { to: '/ca', label: 'Consultation' },
  { to: '/ra', label: 'Repair' },
  { to: '/at-home', label: 'At-Home' },
  { to: '/auto-tech', label: 'AutoTech' },
];

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between px-6 py-4 border-b bg-background'>
      <span className='font-bold text-lg'>Geek Squad Metrics</span>
      <div className='flex gap-6'>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? 'text-sm font-medium text-foreground'
                : 'text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
