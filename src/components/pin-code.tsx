import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface PinCodeIconProps {
  size: IconSize;
}

export const PinCode: FunctionComponent<PinCodeIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-pin-code">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M3.2 2.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM8 2.4A1.2 1.2 0 108 0a1.2 1.2 0 000 2.4zM4.4 5.6a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM3.2 11.6a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM14 1.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM12.8 6.8a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM14 10.4a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM8 6.8a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM9.2 10.4a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM8 16a1.2 1.2 0 100-2.4A1.2 1.2 0 008 16z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M6.5 5.2a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM12.1 5.2a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM12.1 22a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM12.1 10.8a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM12.1 16.4a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM19.3 3.6a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zM19.3 9.2a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zM17.7 16.4a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM8.1 9.2a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zM6.5 16.4a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default PinCode;
