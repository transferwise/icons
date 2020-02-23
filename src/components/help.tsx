import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface HelpIconProps {
  size: IconSize;
}

export const Help: FunctionComponent<HelpIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-help">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M9.838.243c3.865 1.288 4.336 6.565.76 8.517l-1.87 1.021V11.6h-1.6V8.832l2.704-1.476c2.349-1.283 2.04-4.749-.5-5.595A3.064 3.064 0 005.3 4.667v.242l-1.585-.628C3.955 1.305 6.942-.722 9.838.243zM8 16a1.2 1.2 0 100-2.4A1.2 1.2 0 008 16z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M12.326 2c6.206 0 8.37 8.242 2.965 11.292L13 14.584V16.5h-2v-3.084l3.308-1.866C17.923 9.51 16.476 4 12.326 4A3.826 3.826 0 008.5 7.826v.562l-1.996-.791A5.826 5.826 0 0112.326 2zM12 22a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Help;
