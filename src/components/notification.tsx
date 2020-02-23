import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface NotificationIconProps {
  size: IconSize;
  filled: boolean;
}

export const Notification: FunctionComponent<NotificationIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-notification">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 .2a5.3 5.3 0 00-5.3 5.3v3.346L1.318 12.3h13.364L13.3 8.846V5.5A5.3 5.3 0 008 .2zM4.3 5.5a3.7 3.7 0 117.4 0v3.654l.618 1.546H3.682L4.3 9.154V5.5z"
              fill="#37517E"
            />
            <path d="M10 14a2 2 0 11-4 0h4z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && filled === false && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2a7 7 0 00-7 7v4.405L3.602 17.5h16.796L19 13.405V9a7 7 0 00-7-7zM7 9a5 5 0 0110 0v4.738l.602 1.762H6.398L7 13.738V9z"
              fill="#37517E"
            />
            <path d="M12 22a2.4 2.4 0 01-2.4-2.4h4.8A2.4 2.4 0 0112 22z" fill="#37517E" />
          </>
        )}

        {Number(size) === 16 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 .2a5.3 5.3 0 00-5.3 5.3v3.346L1.318 12.3h13.364L13.3 8.846V5.5A5.3 5.3 0 008 .2z"
              fill="#37517E"
            />
            <path d="M10 14a2 2 0 11-4 0h4z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2a7 7 0 00-7 7v4.405L3.602 17.5h16.796L19 13.405V9a7 7 0 00-7-7z"
              fill="#37517E"
            />
            <path d="M12 22a2.4 2.4 0 01-2.4-2.4h4.8A2.4 2.4 0 0112 22z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Notification;
