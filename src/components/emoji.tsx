import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface EmojiIconProps {
  size: IconSize;
}

export const Emoji: FunctionComponent<EmojiIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-emoji">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M11 10a3 3 0 11-6 0h6zM7 6.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM10.2 7.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.6 0A6.4 6.4 0 111.6 8a6.4 6.4 0 0112.8 0z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M9.1 11a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM16.7 9.4a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zM16 14a4 4 0 01-8 0h8z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Emoji;
