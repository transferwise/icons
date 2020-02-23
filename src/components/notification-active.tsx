import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface NotificationActiveIconProps {
  size: IconSize;
}

export const NotificationActive: FunctionComponent<NotificationActiveIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-notification-active">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M9.046.303A5.3 5.3 0 002.7 5.5v3.346L1.318 12.3h13.364L13.3 8.846V6.784a3.995 3.995 0 01-1.6.205v2.165l.618 1.546H3.682L4.3 9.154V5.5a3.7 3.7 0 013.882-3.696 3.996 3.996 0 01.864-1.5z"
              fill="#37517E"
            />
            <path d="M11.11 1.208A2.005 2.005 0 0010 3a2 2 0 101.11-1.792zM10 14a2 2 0 11-4 0h4z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M12 2c.636 0 1.252.085 1.838.244a4.893 4.893 0 00-1.025 1.822A5 5 0 007 9v4.738L6.398 15.5h11.204L17 13.738v-3.363a4.946 4.946 0 002-.209v3.24l1.398 4.094H3.602L5 13.405V9a7 7 0 017-7z"
              fill="#37517E"
            />
            <path
              d="M18.86 7.598a2.5 2.5 0 10-1.976.325 2.505 2.505 0 001.976-.325zM12 22a2.4 2.4 0 01-2.4-2.4h4.8A2.4 2.4 0 0112 22z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default NotificationActive;
