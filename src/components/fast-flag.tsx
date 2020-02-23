import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface FastFlagIconProps {
  size: IconSize;
}

export const FastFlag: FunctionComponent<FastFlagIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-fast-flag">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M2.38 0l2.496 4.192L.5 8.384h7.568l.712-1.68H4.604l2.528-2.52L5.66 1.68h6.888L6.5 16h2.072l6.76-16H2.38z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M5.1 2l3.12 5.24-5.47 5.24h9.46l.89-2.1H7.88l3.16-3.15L9.2 4.1h8.61L10.25 22h2.59l8.45-20H5.1z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default FastFlag;
