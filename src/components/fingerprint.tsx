import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface FingerprintIconProps {
  size: IconSize;
}

export const Fingerprint: FunctionComponent<FingerprintIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-fingerprint">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M8 1.8A5.2 5.2 0 002.8 7v5H1.2V7A6.8 6.8 0 018 .2c4.442 0 6.8 3.358 6.8 5.8h-1.6c0-1.558-1.642-4.2-5.2-4.2z"
              fill="#37517E"
            />
            <path d="M8 3.2A3.8 3.8 0 004.2 7v7h1.6V7a2.2 2.2 0 114.4 0v8h1.6V7A3.8 3.8 0 008 3.2z" fill="#37517E" />
            <path d="M8.8 7v9H7.2V7h1.6zM13.2 8v5h1.6V8h-1.6zM2.8 15.5v-2H1.2v2h1.6z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M12.101 4A7.102 7.102 0 005 11.101V17H3v-5.899A9.102 9.102 0 0112.101 2h.38C16.914 2 21 5.382 21 10h-2c0-3.333-3.001-6-6.519-6h-.38z"
              fill="#37517E"
            />
            <path d="M12 8a3 3 0 00-3 3v8H7v-8a5 5 0 0110 0v10h-2V11a3 3 0 00-3-3z" fill="#37517E" />
            <path d="M11 10v12h2V10h-2zM19 19v-7h2v7h-2zM3 19v2h2v-2H3z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Fingerprint;
