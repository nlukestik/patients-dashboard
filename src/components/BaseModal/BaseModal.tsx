import { PropsWithChildren, use, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as SC from './BaseModal.styles';
import CloseIcon from '../icons/CloseIcon';
import useDisableBodyScroll from '@/hooks/useDisableBodyScroll';
import { useClickOutside } from '@/hooks/useClickOutside';

export type ModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  title?: string;
  acceptLabel?: string;
  cancelLabel?: string;
  onAccept?: VoidFunction;
  onCancel?: VoidFunction;
  isAcceptDisabled?: boolean;
  hideFooter?: boolean;
  hideCancel?: boolean;
};

const BaseModal = ({
  isOpen,
  onClose,
  title,
  acceptLabel = 'Accept',
  cancelLabel = 'Cancel',
  onAccept,
  onCancel,
  hideFooter = false,
  hideCancel = false,
  isAcceptDisabled = false,
  children,
}: PropsWithChildren<ModalProps>) => {
  const modalRef = useRef(null);

  useDisableBodyScroll(isOpen);
  useClickOutside({ ref: modalRef, callback: onClose });

  const handleCancel = useCallback(() => {
    onCancel?.();
    onClose();
  }, [onCancel, onClose]);

  const handleAccept = useCallback(() => {
    if (onAccept) onAccept();
    else onClose();
  }, [onAccept, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <SC.Overlay $isOpen={isOpen}>
      <SC.ModalWrapper ref={modalRef}>
        {!!title && <SC.Header>{title}</SC.Header>}

        <SC.Content>{children}</SC.Content>

        {!hideFooter && (
          <SC.Footer $hideCancel={hideCancel}>
            {!hideCancel && <SC.CancelButton onClick={handleCancel}>{cancelLabel}</SC.CancelButton>}
            <SC.AcceptButton onClick={handleAccept} $isDisabled={isAcceptDisabled}>
              {acceptLabel}
            </SC.AcceptButton>
          </SC.Footer>
        )}

        <SC.CloseButton onClick={onClose}>
          <CloseIcon />
        </SC.CloseButton>
      </SC.ModalWrapper>
    </SC.Overlay>,
    document.body
  );
};

export default BaseModal;
