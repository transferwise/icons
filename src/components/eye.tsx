import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface EyeIconProps {
  size: IconSize;
}

export const Eye: FunctionComponent<EyeIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-eye">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 2C2 2 0 8 0 8s2 6 8 6 8-6 8-6-2-6-8-6zm0 10.4c-2.39 0-3.976-1.17-5.02-2.424A9.195 9.195 0 011.73 8 9.195 9.195 0 012.98 6.024C4.024 4.771 5.61 3.6 8 3.6c2.39 0 3.976 1.17 5.02 2.424A9.195 9.195 0 0114.27 8a9.195 9.195 0 01-1.249 1.976C11.976 11.229 10.39 12.4 8 12.4z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-2 0a1 1 0 11-2 0 1 1 0 012 0z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3.5C4 3.5 0 12 0 12s4 8.5 12 8.5S24 12 24 12s-4-8.5-12-8.5zm0 15c-3.237 0-5.747-1.711-7.544-3.62A17.194 17.194 0 012.281 12c.05-.084.105-.172.163-.265A17.192 17.192 0 014.456 9.12C6.253 7.21 8.763 5.5 12 5.5c3.237 0 5.747 1.711 7.544 3.62A17.197 17.197 0 0121.719 12a17.14 17.14 0 01-2.175 2.88C17.747 16.788 15.237 18.5 12 18.5z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Eye;
