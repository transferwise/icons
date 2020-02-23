import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface SendIconProps {
  size: IconSize;
}

export const Send: FunctionComponent<SendIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-send">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M10.856 0l2.441 5.236-1.444.673-1.327-2.844L7.868 9.71a4.455 4.455 0 00-1.48-.592l2.595-6.486-2.69 1.254-.673-1.444L10.856 0z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.98 13.51a2.49 2.49 0 11-4.98 0 2.49 2.49 0 014.98 0zm-1.593 0a.896.896 0 11-1.793 0 .896.896 0 011.793 0z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M12.555 13.612l3.494-7.736 1.261 3.466 1.88-.684-2.395-6.578-1.43.52-.026-.012-.012.027-5.11 1.86.685 1.879 3.275-1.192-3.445 7.626a5.87 5.87 0 011.823.824z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.75 18.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-2 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Send;
