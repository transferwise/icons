import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface DirectDebitsIconProps {
  size: IconSize;
}

export const DirectDebits: FunctionComponent<DirectDebitsIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-direct-debits">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M9.5 11a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8 2.2h3v13.6H.2V2.2h2.5V0h1.6v2.2h6.9V0h1.6v2.2zm-11 12V6h12.4v8.2H1.8zM11.2 3v1.5h1.6V3h-1.6zM2.7 3v1.5h1.6V3H2.7z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M17.5 15.5a2 2 0 11-4 0 2 2 0 014 0z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 2H6v2H2v18h20V4h-4V2h-2v2H8V2zM4 9h16v11H4V9zm2-4h2v2H6V5zm12 0h-2v2h2V5z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default DirectDebits;
