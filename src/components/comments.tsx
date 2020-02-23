import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface CommentsIconProps {
  size: IconSize;
}

export const Comments: FunctionComponent<CommentsIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-comments">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M2.5 1.8H14c.11 0 .2.09.2.2v8.5h1.6V2A1.8 1.8 0 0014 .2H2.5v1.6z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 3.2A1.8 1.8 0 00.2 5v6A1.8 1.8 0 002 12.8h1.7v3.143L8.73 12.8H11a1.8 1.8 0 001.8-1.8V5A1.8 1.8 0 0011 3.2H2zM1.8 5c0-.11.09-.2.2-.2h9c.11 0 .2.09.2.2v6a.2.2 0 01-.2.2H8.27L5.3 13.057V11.2H2a.2.2 0 01-.2-.2V5z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M5 4h14a1 1 0 011 1v10h2V5a3 3 0 00-3-3H5v2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6a2 2 0 00-2 2v8a2 2 0 002 2h2v4.241L13.27 18H16a2 2 0 002-2V8a2 2 0 00-2-2H4zm0 2h12v8h-3.27L8 18.759V16H4V8z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Comments;
