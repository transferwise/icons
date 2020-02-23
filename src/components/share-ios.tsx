import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ShareIosIconProps {
  size: IconSize;
}

export const ShareIos: FunctionComponent<ShareIosIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-share-ios">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M8 0l4.066 4.066-1.132 1.131L8.8 3.063V11H7.2V3.063L5.066 5.197 3.934 4.066 8 0z" fill="#37517E" />
            <path d="M1.2 15.8h13.6V7h-1.6v7.2H2.8V7H1.2v8.8z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M12 2l5.457 5.457-1.414 1.414L13 5.828V17h-2V5.828L7.957 8.871 6.543 7.457 12 2z" fill="#37517E" />
            <path d="M19 11v9H5v-9H3v11h18V11h-2z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default ShareIos;
