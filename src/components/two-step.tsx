import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface TwoStepIconProps {
  size: IconSize;
}

export const TwoStep: FunctionComponent<TwoStepIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-two-step">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M.2.2h11.6V5h-1.6V1.8H8v1.5H4V1.8H1.8v12.4H7v1.6H.2V.2z" fill="#37517E" />
            <path d="M5 11.2h2v1.6H5v-1.6z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.7 9.667v.533h-.5V14a1.8 1.8 0 001.8 1.8h4a1.8 1.8 0 001.8-1.8v-3.8h-.5v-.533C15.3 8.01 14.114 6.2 12 6.2S8.7 8.01 8.7 9.667zM12 7.8c-1.011 0-1.7.857-1.7 1.867v.533h3.4v-.533c0-1.01-.689-1.867-1.7-1.867zm-2.2 4V14c0 .11.09.2.2.2h4a.2.2 0 00.2-.2v-2.2H9.8z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M1 22h10v-2H3V4h2.5v2h5V4H13v2h2V2H1v20z" fill="#37517E" />
            <path d="M6.5 16h3v2h-3v-2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 11.5a4.5 4.5 0 119 0V13h1v6a3 3 0 01-3 3h-5a3 3 0 01-3-3v-6h1v-1.5zm7 0V13h-5v-1.5a2.5 2.5 0 015 0zm1 7.5v-4h-7v4a1 1 0 001 1h5a1 1 0 001-1z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default TwoStep;
