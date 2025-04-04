import theme from '@/theme';
import { IconComponent } from '@/types/common';

const EditIcon: IconComponent = ({ id = 'edit-icon', width = '20', height = '20', color = theme.defaults.black }) => (
  <svg id={id} width={width} height={height} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g clipPath='url(#clip0_12_1277)'>
      <path
        d='M14.1667 2.50005C14.3856 2.28118 14.6455 2.10756 14.9314 1.98911C15.2174 1.87066 15.5239 1.80969 15.8334 1.80969C16.1429 1.80969 16.4494 1.87066 16.7354 1.98911C17.0214 2.10756 17.2812 2.28118 17.5001 2.50005C17.719 2.71892 17.8926 2.97875 18.011 3.26472C18.1295 3.55069 18.1904 3.85719 18.1904 4.16671C18.1904 4.47624 18.1295 4.78274 18.011 5.06871C17.8926 5.35468 17.719 5.61451 17.5001 5.83338L6.25008 17.0834L1.66675 18.3334L2.91675 13.75L14.1667 2.50005Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_12_1277'>
        <rect width={width} height={height} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default EditIcon;
