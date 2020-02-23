import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface MoneyIconProps {
  size: IconSize;
}

export const Money: FunctionComponent<MoneyIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-money">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 2.7a2.3 2.3 0 100 4.6 2.3 2.3 0 000-4.6zM7.3 5a.7.7 0 111.4 0 .7.7 0 01-1.4 0z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.2.2h15.6v9.6H.2V.2zm14 6.643A2.307 2.307 0 0012.843 8.2H3.157A2.307 2.307 0 001.8 6.843V3.157A2.307 2.307 0 003.157 1.8h9.686c.232.627.73 1.125 1.357 1.357v3.686z"
              fill="#37517E"
            />
            <path d="M16 11.2H0v1.6h16v-1.6zM16 14.2H0v1.6h16v-1.6z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 5a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 14h20V2H2v12zm18-3.83V5.83A3.008 3.008 0 0118.17 4H5.83A3.008 3.008 0 014 5.83v4.34A3.008 3.008 0 015.83 12h12.34A3.009 3.009 0 0120 10.17z"
              fill="#37517E"
            />
            <path d="M22 18v-2H2v2h20zM22 22v-2H2v2h20z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Money;
