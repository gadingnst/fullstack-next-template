'use client';

import { useCallback, useState } from 'react';

import Button from '@/packages/components/base/Buttons/Button';
import Dialog from '@/packages/components/base/Floatings/Dialog';

interface Props {
  messages?: string;
}

function Message(props: Props) {
  const { messages } = props;
  const [isShowMessage, setShowMessage] = useState(false);

  const toggleMessage = useCallback(() => {
    setShowMessage(_shouldShow => !_shouldShow);
  }, []);

  return (
    <div className="mt-5">
      <Button onClick={toggleMessage}>
        Show Message
      </Button>
      <Dialog show={isShowMessage} title="Messages" onClose={toggleMessage} closeable>
        <p>
          {messages ?? 'Hello World'}
        </p>
      </Dialog>
    </div>
  );
}

export default Message;
