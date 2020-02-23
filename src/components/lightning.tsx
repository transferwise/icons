import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface LightningIconProps {
  size: IconSize;
}

export const Lightning: FunctionComponent<LightningIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-lightning">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.81 0v5.294L14.5 6.44 7.19 16v-5.294L1.5 9.56 8.81 0zM4.373 8.477l4.437.892v1.838l2.817-3.684-4.437-.892V4.793L4.373 8.477z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.018 2v6.683L21 10.368 10.982 22v-6.683L3 13.632 13.018 2zM6.753 12.373l6.265 1.323v2.842l4.229-4.911-6.265-1.323V7.463l-4.229 4.91z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Lightning;
