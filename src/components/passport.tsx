import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface PassportIconProps {
  size: IconSize;
}

export const Passport: FunctionComponent<PassportIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-passport">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M6 12.3v-1.6h4v1.6H6z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM9.4 6a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"
              fill="#37517E"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M1.7.2h12.6v15.6H1.7V.2zm1.6 1.6v12.4h9.4V1.8H3.3z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M9 18v-2h6v2H9z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM10.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              fill="#37517E"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M20 22H4V2h16v20zm-2-2V4H6v16h12z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Passport;
