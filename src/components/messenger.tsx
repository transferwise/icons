import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface MessengerIconProps {
  size: IconSize;
}

export const Messenger: FunctionComponent<MessengerIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-messenger">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0C3.582 0 0 3.317 0 7.407c0 2.332 1.163 4.411 2.981 5.768V16l2.724-1.495c.727.201 1.498.31 2.295.31 4.418 0 8-3.316 8-7.408C16 3.317 12.418 0 8 0zm.795 9.975L6.758 7.803 2.783 9.975l4.372-4.642 2.087 2.173 3.926-2.173-4.373 4.642z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.478 2 2 6.146 2 11.26c0 2.913 1.454 5.513 3.727 7.21V22l3.405-1.868c.908.25 1.871.386 2.868.386 5.523 0 10-4.145 10-9.259C22 6.146 17.523 2 12 2zm.994 12.47l-2.546-2.717-4.97 2.716 5.466-5.802 2.608 2.716 4.908-2.716-5.466 5.802z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Messenger;
