import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface UploadIconProps {
  size: IconSize;
}

export const Upload: FunctionComponent<UploadIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-upload">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M12.441 6.572L8.8 3.02V11H7.2V3.019L3.559 6.572 2.44 5.427 8 .002l5.559 5.425-1.118 1.145zM15 15.8v-1.6H1v1.6h14z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M12 1.997l7.461 7.55-1.422 1.406L13 5.854V17h-2V5.854l-5.039 5.099L4.54 9.547 12 1.997zM21 22v-2H3v2h18z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Upload;
