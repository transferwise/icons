import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ConvertIconProps {
  size: IconSize;
}

export const Convert: FunctionComponent<ConvertIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-convert">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 1.2c.657 0 1.26.226 1.738.605A6.97 6.97 0 018 1a7 7 0 016.2 3.747v-1.99h1.6V7.8h-5.043V6.2h2.336a5.402 5.402 0 00-7.43-3.07A2.8 2.8 0 113 1.2zm0 1.6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM10.338 12.87a5.402 5.402 0 01-7.43-3.07h2.335V8.2H.2v5.043h1.6v-1.99A7 7 0 008 15a6.97 6.97 0 003.262-.805 2.8 2.8 0 10-.924-1.326zM11.8 12a1.2 1.2 0 112.4 0 1.2 1.2 0 01-2.4 0z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 5a6.968 6.968 0 00-3.398.878 3.5 3.5 0 11-1.448-1.464A8.958 8.958 0 0112 3a9 9 0 018 4.873V4h2v7h-7V9h3.326A7 7 0 0012 5zM5.5 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM15.398 18.122A7 7 0 015.674 15H9v-2H2v7h2v-3.872A9 9 0 0012 21c1.784 0 3.447-.52 4.846-1.415a3.5 3.5 0 10-1.448-1.464zM17 16.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Convert;
