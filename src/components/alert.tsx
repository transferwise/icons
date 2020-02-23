import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface AlertIconProps {
  size: IconSize;
}

export const Alert: FunctionComponent<AlertIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-alert">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M8.799 5.415v3.994H7.2V5.415H8.8zM8 13.004a.998.998 0 100-1.997.998.998 0 000 1.997z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.429.883C8.84-.294 7.159-.294 6.57.883l-6.4 12.805A1.598 1.598 0 001.599 16h12.802c1.187 0 1.96-1.25 1.428-2.312L9.43.883zM8 1.598L1.6 14.402h12.8L8 1.598z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M13 9v5h-2V9h2zM12 18.2a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.739 3.06c-.767-1.349-2.711-1.349-3.478 0L1.198 19.013C.44 20.345 1.403 22 2.937 22h18.126c1.534 0 2.497-1.655 1.74-2.988L13.738 3.061zM12 4.05L2.937 20h18.126L12 4.05z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Alert;
