export type IconProps = {
  id?: string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
};

export type IconComponent = React.FC<IconProps>;

export enum FormModesEnum {
  ADD = 'add',
  EDIT = 'edit',
}

export enum ToastTypesEnum {
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum ToastDurationsEnum {
  SHORT = 3000,
  MEDIUM = 5000,
  LONG = 10000,
}

export type ToastNotification = {
  message: string;
  type: ToastTypesEnum;
};

export type ToastStylesConfig = {
  background: string;
  color: string;
};
export type ToastConfigByType = Record<ToastTypesEnum, ToastStylesConfig>;
