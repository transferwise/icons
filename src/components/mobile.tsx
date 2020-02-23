import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface MobileIconProps {
  size: IconSize;
}

export const Mobile: FunctionComponent<MobileIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-mobile">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M7 11.2h2v1.6H7v-1.6z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.2.2h11.6v15.6H2.2V.2zm1.6 1.6v12.4h8.4V1.8H10v1.5H6V1.8H3.8z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M10.5 16h3v2h-3v-2z" fill="#37517E" />
            <path fillRule="evenodd" clipRule="evenodd" d="M5 22h14V2H5v20zM17 4v16H7V4h2.5v2h5V4H17z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Mobile;
