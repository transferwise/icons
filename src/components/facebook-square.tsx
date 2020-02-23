import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface FacebookSquareIconProps {
  size: IconSize;
}

export const FacebookSquare: FunctionComponent<FacebookSquareIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-facebook-square">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M15.12 0H.88a.856.856 0 00-.344.072.8.8 0 00-.464.464A.856.856 0 000 .88v14.24c0 .118.024.236.072.344a.8.8 0 00.464.464A.856.856 0 00.88 16h7.664V9.8h-2.08V7.4h2.08V5.6c0-.465.087-.926.256-1.36a2.64 2.64 0 011.6-1.6 3.696 3.696 0 011.248-.24h1.864v2.16H12.24a1.864 1.864 0 00-.616.088.8.8 0 00-.536.608 1.807 1.807 0 00-.048.48V7.28h2.4l-.08.6-.08.608-.072.6-.08.6H11.04V16h4.08a.856.856 0 00.344-.072.8.8 0 00.464-.464.856.856 0 00.072-.344V.88a.856.856 0 00-.072-.344.8.8 0 00-.464-.464A.856.856 0 0015.12 0z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M20.9 2H3.1c-.148 0-.294.03-.43.09a1 1 0 00-.58.58A1.07 1.07 0 002 3.1v17.8c0 .148.03.294.09.43a1 1 0 00.58.58c.136.06.282.09.43.09h9.58v-7.75h-2.6v-3h2.6V9c0-.582.11-1.158.32-1.7a3.3 3.3 0 012-2 4.62 4.62 0 011.56-.3H18.89v2.7H17.3a2.33 2.33 0 00-.77.11 1 1 0 00-.45.3 1 1 0 00-.22.46 2.26 2.26 0 00-.06.6v1.93h3l-.1.75-.1.76-.09.75-.1.75H15.8V22h5.1c.148 0 .294-.03.43-.09a1 1 0 00.58-.58c.06-.136.09-.282.09-.43V3.1c0-.148-.03-.294-.09-.43a1 1 0 00-.58-.58A1.07 1.07 0 0020.9 2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default FacebookSquare;
