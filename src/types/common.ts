export type IconProps = {
  id?: string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
};

export type IconComponent = React.FC<IconProps>;

export enum FormModesEnum {
  ADD = 'ADD',
  EDIT = 'EDIT',
}
