import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Overview', end: true },
  { to: '/ca', label: 'Consultation', end: false },
  { to: '/ra', label: 'Repair', end: false },
  { to: '/at-home', label: 'At-Home', end: false },
  { to: '/auto-tech', label: 'AutoTech', end: false },
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
            end={link.end}
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
