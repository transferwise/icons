import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface FaceIdIconProps {
  size: IconSize;
}

export const FaceId: FunctionComponent<FaceIdIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-face-id">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M11 1.8h3c.11 0 .2.09.2.2v3h1.6V2A1.8 1.8 0 0014 .2h-3v1.6zM1.8 2v3H.2V2A1.8 1.8 0 012 .2h3v1.6H2a.2.2 0 00-.2.2zM7 6.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM5.216 8.642c1.205 2.41 4.363 2.41 5.568 0l1.431.716c-1.794 3.59-6.636 3.59-8.43 0l1.43-.716zM10.2 7.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM14.2 14v-3h1.6v3a1.8 1.8 0 01-1.8 1.8h-3v-1.6h3a.2.2 0 00.2-.2zM5 14.2H2a.2.2 0 01-.2-.2v-3H.2v3A1.8 1.8 0 002 15.8h3v-1.6z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M4 4v4H2V4a2 2 0 012-2h4v2H4zM10.7 9.4a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zM16.7 9.4a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zM15.606 12.553C14.764 14.236 13.346 15 12 15c-1.347 0-2.764-.764-3.606-2.447l-1.788.894C7.764 15.764 9.846 17 12 17c2.153 0 4.236-1.236 5.394-3.553l-1.788-.894zM16 4h4v4h2V4a2 2 0 00-2-2h-4v2zM20 20v-4h2v4a2 2 0 01-2 2h-4v-2h4zM8 20H4v-4H2v4a2 2 0 002 2h4v-2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default FaceId;
