import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface SettingsIconProps {
  size: IconSize;
  filled: boolean;
}

export const Settings: FunctionComponent<SettingsIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-settings">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 0h3l.89 2.228 2.206-.946 2.121 2.122-.945 2.205L16 6.5v3l-2.228.891.945 2.205-2.12 2.121-2.206-.945L9.5 16h-3l-.891-2.228-2.205.945-2.122-2.12.945-2.206L0 9.5v-3l2.227-.891-.945-2.205 2.122-2.122 2.205.946L6.499 0zm3.014 4.344l2.717-1.164.589.59-1.164 2.716L14.4 7.583v.834l-2.744 1.097 1.164 2.717-.59.59-2.716-1.165L8.417 14.4h-.834l-1.097-2.744-2.717 1.164-.59-.59 1.165-2.716L1.6 8.417v-.834l2.744-1.097L3.18 3.769l.59-.59 2.716 1.165L7.583 1.6h.834l1.097 2.744z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled === false && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-2 0a1 1 0 11-2 0 1 1 0 012 0z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 22l-.84-2.519a8.003 8.003 0 01-.442-.183l-2.375 1.187-2.828-2.828 1.187-2.375a7.932 7.932 0 01-.183-.443L2 14v-4l2.519-.84c.057-.15.118-.297.183-.442L3.515 6.343l2.828-2.828 2.375 1.187c.145-.065.293-.127.443-.183L10 2h4l.84 2.519c.15.056.297.118.442.183l2.375-1.187 2.828 2.828-1.187 2.375c.066.145.127.293.184.442L22 10v4l-2.518.84c-.057.15-.119.297-.184.442l1.187 2.375-2.828 2.828-2.375-1.187a7.95 7.95 0 01-.442.184L14 22h-4zm-1.327-4.916l-1.935.968-.79-.79.968-1.935-.39-.866a5.942 5.942 0 01-.138-.332l-.337-.887-2.05-.684v-1.117l2.05-.683.337-.887c.043-.113.089-.223.138-.332l.39-.866-.968-1.935.79-.79 1.935.968.866-.39c.11-.05.22-.095.332-.138l.887-.337L11.442 4h1.117l.683 2.051.888.337c.112.043.222.089.33.138l.867.39 1.935-.968.79.79-.968 1.935.39.866c.05.109.095.22.138.332l.337.887 2.051.684v1.117l-2.051.683-.337.887a5.897 5.897 0 01-.137.332l-.39.866.967 1.935-.79.79-1.935-.968-.866.39c-.109.05-.22.095-.331.138l-.888.337L12.558 20h-1.116l-.684-2.051-.887-.337a6.063 6.063 0 01-.332-.138l-.866-.39z"
              fill="#37517E"
            />
          </>
        )}

        {Number(size) === 16 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.5 0h-3l-.891 2.228-2.205-.946-2.122 2.122.945 2.205L0 6.5v3l2.227.891-.945 2.205 2.122 2.121 2.205-.945.89 2.228h3l.892-2.228 2.205.945 2.121-2.12-.945-2.206L16 9.5v-3l-2.228-.891.945-2.205-2.121-2.122-2.205.946L9.5 0zM8 10a2 2 0 100-4 2 2 0 000 4z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 22h4l.84-2.518a7.95 7.95 0 00.442-.184l2.375 1.187 2.828-2.828-1.187-2.375c.066-.145.127-.293.184-.443L22 14v-4l-2.518-.84a7.854 7.854 0 00-.184-.442l1.187-2.375-2.828-2.828-2.375 1.187a7.964 7.964 0 00-.442-.183L14 2h-4l-.84 2.519c-.15.056-.297.118-.442.183L6.343 3.515 3.515 6.343l1.187 2.375a7.947 7.947 0 00-.183.442L2 10v4l2.519.84c.057.15.118.297.183.442l-1.187 2.375 2.828 2.828 2.375-1.187c.145.065.293.127.443.183L10 22zm2-7a3 3 0 100-6 3 3 0 000 6z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Settings;
