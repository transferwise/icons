import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface InviteIconProps {
  size: IconSize;
  filled: boolean;
}

export const Invite: FunctionComponent<InviteIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-invite">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.47 4.2A2.8 2.8 0 018 1.04a2.8 2.8 0 014.53 3.16H16v1.6H0V4.2h3.47zM4.8 3a1.2 1.2 0 012.4 0v1.2H6A1.2 1.2 0 014.8 3zM10 4.2H8.8V3A1.2 1.2 0 1110 4.2z"
              fill="#37517E"
            />
            <path d="M2.8 14.2V8H1.2v7.8h13.6V8h-1.6v6.2H8.8V8H7.2v6.2H2.8z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && filled === false && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 9V7h-4.337A3.5 3.5 0 0012 3.05 3.5 3.5 0 006.337 7H2v2h20zM8 5.5A1.5 1.5 0 009.5 7H11V5.5a1.5 1.5 0 00-3 0zm8 0A1.5 1.5 0 0114.5 7H13V5.5a1.5 1.5 0 013 0z"
              fill="#37517E"
            />
            <path d="M5 20v-9H3v11h18V11h-2v9h-6v-9h-2v9H5z" fill="#37517E" />
          </>
        )}

        {Number(size) === 16 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.2 3c0 .43.097.836.27 1.2H0v1.6h16V4.2h-3.47A2.8 2.8 0 008 1.04 2.8 2.8 0 003.2 3zM6 1.8a1.2 1.2 0 000 2.4h1.2V3A1.2 1.2 0 006 1.8zm2.8 2.4H10A1.2 1.2 0 108.8 3v1.2z"
              fill="#37517E"
            />
            <path d="M1.2 15.8V8h6v7.8h-6zM8.8 15.8h6V8h-6v7.8z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 7v2H2V7h4.337A3.5 3.5 0 0112 3.05 3.5 3.5 0 0117.663 7H22zM9.5 7A1.5 1.5 0 1111 5.5V7H9.5zm5 0A1.5 1.5 0 1013 5.5V7h1.5z"
              fill="#37517E"
            />
            <path d="M3 22V11h8v11H3zM13 22h8V11h-8v11z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Invite;
