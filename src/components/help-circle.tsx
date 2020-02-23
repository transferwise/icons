import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface HelpCircleIconProps {
  size: IconSize;
}

export const HelpCircle: FunctionComponent<HelpCircleIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-help-circle">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M9 11a1 1 0 11-2 0 1 1 0 012 0zM10.443 4.8A2.3 2.3 0 007.3 3.96L5.136 5.21l.8 1.385L8.1 5.345a.7.7 0 01.7 1.212l-2.165 1.25.8 1.386L9.6 7.943a2.3 2.3 0 00.842-3.142z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.6A6.4 6.4 0 108 1.6a6.4 6.4 0 000 12.8z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M13.2 16a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM15.196 8.232a3 3 0 00-4.098-1.098L8.5 8.634l1 1.732 2.598-1.5a1 1 0 111 1.732l-2.598 1.5 1 1.732 2.598-1.5a3 3 0 001.098-4.098z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default HelpCircle;
