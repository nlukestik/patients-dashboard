import theme from '@/theme';
import { IconComponent } from '@/types/common';

const ArrowIcon: IconComponent = ({
  id = 'arrow-icon',
  width = '14.389',
  height = '7.902',
  color = theme.defaults.black,
}) => (
  <svg id={id} xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 14.389 7.902'>
    <path
      data-name='arrow'
      d='M3194.18,2082.5l6.841,6.841,6.841-6.841'
      transform='translate(-3193.826 -2082.146)'
      fill='none'
      stroke={color}
      strokeWidth='2'
    />
  </svg>
);

export default ArrowIcon;
