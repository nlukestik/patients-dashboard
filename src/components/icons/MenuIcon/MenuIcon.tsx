import theme from '@/theme';
import { IconComponent } from '@/types/common';

const MenuIcon: IconComponent = ({ id = 'menu-icon', width = '24', height = '24', color = theme.defaults.black }) => (
  <svg id={id} width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M3 18H21' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3 12H21' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3 6H21' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

export default MenuIcon;
