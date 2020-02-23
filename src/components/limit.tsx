import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface LimitIconProps {
  size: IconSize;
}

export const Limit: FunctionComponent<LimitIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-limit">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M11.924 3.945c-2.496-1.929-6.12-1.762-8.42.5a6.177 6.177 0 00-.544 8.236l.87-.855 1.16 1.141L2.924 15l-.58-.57a7.775 7.775 0 010-11.126c3.124-3.072 8.19-3.072 11.314 0a7.775 7.775 0 010 11.126l-.58.57-2.067-2.033 1.16-1.14.87.854a6.174 6.174 0 00.017-7.607l-3.35 3.351a1.8 1.8 0 11-1.131-1.131l3.348-3.349z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M16.88 6.705a7.929 7.929 0 00-10.537.692c-2.885 2.921-3.106 7.517-.663 10.695l1.113-1.127 1.414 1.432L5.636 21l-.707-.716c-3.905-3.954-3.905-10.365 0-14.319a9.913 9.913 0 0114.142 0c3.905 3.954 3.905 10.365 0 14.32l-.707.715-2.571-2.603 1.414-1.432 1.113 1.127a8.184 8.184 0 00-.028-9.97l-4.36 4.36A2.002 2.002 0 0112 15a2 2 0 11.518-3.932l4.362-4.363z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Limit;
