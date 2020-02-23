import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface AtmIconProps {
  size: IconSize;
}

export const Atm: FunctionComponent<AtmIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-atm">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M2.25.2A2.05 2.05 0 00.2 2.25v.45a1.6 1.6 0 001.6 1.6V2.25a.45.45 0 01.45-.45h11.5a.45.45 0 01.45.45V4.3a1.6 1.6 0 001.6-1.6v-.45A2.05 2.05 0 0013.75.2H2.25z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.2 14A1.8 1.8 0 005 15.8h6a1.8 1.8 0 001.8-1.8V5A1.8 1.8 0 0011 3.2H5A1.8 1.8 0 003.2 5v9zm1.8.2a.2.2 0 01-.2-.2V5c0-.11.09-.2.2-.2h1v9.4H5zm3 0V4.8h3c.11 0 .2.09.2.2v9a.2.2 0 01-.2.2H8z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M4.5 2A2.5 2.5 0 002 4.5V5a2 2 0 002 2V4.5a.5.5 0 01.5-.5h15a.5.5 0 01.5.5V7a2 2 0 002-2v-.5A2.5 2.5 0 0019.5 2h-15z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 20a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v12zm10 0h-3.5V8H16v12zM9.5 8v12H8V8h1.5z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Atm;
