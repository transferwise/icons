import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface PendingIconProps {
  size: IconSize;
}

export const Pending: FunctionComponent<PendingIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-pending">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M5.7 6.5a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM9.2 6.5a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM11.5 7.7a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.846 0C.826 0 0 .819 0 1.83v9.146c0 1.01.827 1.83 1.846 1.83h2.257V16l5.158-3.195h4.893c1.02 0 1.846-.819 1.846-1.829V1.829C16 .82 15.173 0 14.154 0H1.846zm-.205 1.83c0-.113.092-.204.205-.204h12.308c.113 0 .205.091.205.203v9.147a.204.204 0 01-.205.203H8.79l-3.046 1.887V11.18H1.846a.204.204 0 01-.205-.203V1.829z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M7.4 11.6a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM12 11.6a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM16.6 11.6a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 2a3 3 0 00-3 3v10a3 3 0 003 3h2v4l7.236-4H19a3 3 0 003-3V5a3 3 0 00-3-3H5zM4 5a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1h-5.236L9 18.764V16H5a1 1 0 01-1-1V5z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Pending;
