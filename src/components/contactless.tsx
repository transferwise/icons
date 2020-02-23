import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ContactlessIconProps {
  size: IconSize;
}

export const Contactless: FunctionComponent<ContactlessIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-contactless">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M2.5 6.796a1.395 1.395 0 010 2.408l1.144 1.146A2.987 2.987 0 004.783 8c0-.953-.446-1.802-1.14-2.35L2.5 6.796zM5.34 12.048l1.13 1.13A6.964 6.964 0 008.765 8c0-2.054-.886-3.9-2.297-5.178l-1.128 1.13A5.373 5.373 0 017.173 8c0 1.614-.71 3.061-1.832 4.048z"
              fill="#37517E"
            />
            <path
              d="M8.16 14.871L9.289 16c2.131-2 3.462-4.845 3.462-8 0-3.155-1.331-6-3.462-8L8.161 1.129A9.35 9.35 0 0111.156 8a9.351 9.351 0 01-2.995 6.871z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M12.965 20.597A12.811 12.811 0 0016.264 12a12.81 12.81 0 00-3.299-8.597L14.371 2a14.784 14.784 0 013.879 10c0 3.851-1.469 7.36-3.879 10l-1.406-1.403z"
              fill="#37517E"
            />
            <path
              d="M10.438 5.923A7.9 7.9 0 0113.284 12a7.9 7.9 0 01-2.846 6.077L9.027 16.67A5.928 5.928 0 0011.297 12c0-1.894-.887-3.58-2.27-4.669l1.412-1.408zM7.155 14.802A3.945 3.945 0 008.318 12a3.945 3.945 0 00-1.163-2.802L5.75 10.6c.36.359.582.854.582 1.401s-.223 1.042-.582 1.4l1.405 1.402z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Contactless;
