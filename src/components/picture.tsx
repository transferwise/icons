import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface PictureIconProps {
  size: IconSize;
}

export const Picture: FunctionComponent<PictureIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-picture">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M5.5 3.7a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8.2H.2v15.6h15.6V.2zm-14 11.369v-9.77h12.4v6.146l-2.825-2.017-3.57 4.08-2.963-1.481L1.8 11.569zm0 2.262v.369h12.4V9.912l-2.575-1.84-3.43 3.92-3.037-1.519L1.8 13.831z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 6a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 3h20v18H2V3zm2 2v11.612l3.8-3.741 3.958 1.903 4.584-5.093L20 12.18V5H4zm16 14H4.425l3.776-3.717 4.041 1.943 4.416-4.906L20 14.604V19z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Picture;
