import ReactDOM from 'react-dom';
import theme from '@/theme';
import * as SC from './ToastNotification.styles';
import CloseIcon from '../icons/CloseIcon';
import { useNotification } from '@/hooks/useNotification';

type Props = Omit<ReturnType<typeof useNotification>, 'showNotification'>;

const ToastNotification = ({ notification, closeNotification }: Props) => {
  if (!notification) return null;

  return ReactDOM.createPortal(
    <SC.Overlay>
      <SC.Wrapper $type={notification.type}>
        <SC.Message>{notification.message}</SC.Message>

        <SC.CloseButton onClick={() => closeNotification()}>
          <CloseIcon width={20} height={20} />
        </SC.CloseButton>
      </SC.Wrapper>
    </SC.Overlay>,
    document.body
  );
};

export default ToastNotification;
