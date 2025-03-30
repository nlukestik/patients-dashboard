import theme from '@/theme';
import { IconComponent } from '@/types/common';

const AddIcon: IconComponent = ({ id = 'add-icon', height = '24', width = '24', color = theme.defaults.white }) => (
  <svg id={id} width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 5V19' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 12H19' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

export default AddIcon;
