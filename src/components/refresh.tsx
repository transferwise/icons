import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface RefreshIconProps {
  size: IconSize;
}

export const Refresh: FunctionComponent<RefreshIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-refresh">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M7.502 13.9a5.904 5.904 0 005.71-4.4h1.643A7.504 7.504 0 010 8C0 3.858 3.359.5 7.502.5a7.497 7.497 0 016.316 3.45l.605-2.255L16 2.117l-1.332 4.969-4.97-1.331.423-1.577 2.345.628A5.9 5.9 0 107.503 13.9z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M11.533 4.5c-4.156 0-7.526 3.358-7.526 7.5 0 4.142 3.37 7.5 7.526 7.5a7.528 7.528 0 007.098-5h2.102a9.532 9.532 0 01-9.2 7C6.268 21.5 2 17.247 2 12s4.268-9.5 9.533-9.5a9.53 9.53 0 017.692 3.887l.836-3.11L22 3.795l-1.729 6.43-6.453-1.723.52-1.932 3.149.84a7.523 7.523 0 00-5.954-2.91z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Refresh;
