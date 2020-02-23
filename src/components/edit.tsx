import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface EditIconProps {
  size: IconSize;
}

export const Edit: FunctionComponent<EditIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-edit">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M15.352.648a2.213 2.213 0 00-3.128 0l-.815.814 3.128 3.128.815-.815a2.211 2.211 0 000-3.127z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.638 5.493L10.51 2.366.782 12.09 0 16l3.91-.782 9.728-9.725zm-11.6 8.47l.217-1.084 8.255-8.253.867.867-8.255 8.253-1.084.217z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M21.091 2.909a3.103 3.103 0 00-4.388 0L16 3.612 20.388 8l.703-.703a3.103 3.103 0 000-4.388z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.414 9L15 4.586 3.47 16.114 2 22l5.886-1.471 11.528-11.53zM4.75 19.25l.528-2.114L15 7.414 16.586 9l-9.723 9.723-2.114.528z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Edit;
