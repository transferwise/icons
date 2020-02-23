import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ShareAndroidIconProps {
  size: IconSize;
}

export const ShareAndroid: FunctionComponent<ShareAndroidIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-share-android">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 .2a2.8 2.8 0 00-2.758 3.285l-5.2 2.6a2.8 2.8 0 100 3.831l5.2 2.6a2.8 2.8 0 10.716-1.43l-5.2-2.601a2.818 2.818 0 000-.97l5.2-2.6A2.8 2.8 0 1013 .2zM11.8 3a1.2 1.2 0 112.4 0 1.2 1.2 0 01-2.4 0zm-10 5a1.2 1.2 0 112.4 0 1.2 1.2 0 01-2.4 0zM13 11.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.5 2a3.5 3.5 0 00-3.448 4.106l-7 3.5a3.5 3.5 0 100 4.789l7 3.5a3.5 3.5 0 10.895-1.789l-7-3.5a3.522 3.522 0 000-1.212l7-3.5A3.5 3.5 0 1018.5 2zM17 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM4 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm13 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default ShareAndroid;
