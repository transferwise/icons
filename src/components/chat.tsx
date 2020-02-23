import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ChatIconProps {
  size: IconSize;
}

export const Chat: FunctionComponent<ChatIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-chat">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.846 1.626a.204.204 0 00-.205.203v9.147c0 .112.092.203.205.203h3.898v1.887L8.79 11.18h5.364a.204.204 0 00.205-.203V1.829a.204.204 0 00-.205-.203H1.846zM0 1.83C0 .82.827 0 1.846 0h12.308C15.174 0 16 .819 16 1.83v9.146c0 1.01-.827 1.83-1.846 1.83H9.26L4.103 16v-3.195H1.846C.826 12.805 0 11.986 0 10.976V1.829z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h4v2.764L13.764 16H19a1 1 0 001-1V5a1 1 0 00-1-1H5zM2 5a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3h-4.764L7 22v-4H5a3 3 0 01-3-3V5z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Chat;
