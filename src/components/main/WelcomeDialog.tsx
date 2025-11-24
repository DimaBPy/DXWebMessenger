import type { FC } from '@teact';
import { memo, useCallback } from '@teact';

import useLang from '../../hooks/useLang';

import ConfirmDialog from '../ui/ConfirmDialog';

type OwnProps = {
  isOpen: boolean;
  onClose: () => void;
};

const WelcomeDialog: FC<OwnProps> = ({ isOpen, onClose }) => {
  const lang = useLang();

  const handleConfirm = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={onClose}
      title={lang('WelcomeTitle')}
      text={lang('WelcomeText')}
      confirmLabel={lang('StartMessaging')}
      confirmHandler={handleConfirm}
    />
  );
};

export default memo(WelcomeDialog);
