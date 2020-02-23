import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ProfileIconProps {
  size: IconSize;
  filled: boolean;
}

export const Profile: FunctionComponent<ProfileIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-profile">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0C5.847 0 4.102 1.723 4.102 3.848S5.847 7.696 8 7.696c2.152 0 3.897-1.723 3.897-3.848S10.152 0 8 0zM5.743 3.848c0-1.23 1.01-2.228 2.257-2.228 1.246 0 2.256.998 2.256 2.228 0 1.23-1.01 2.228-2.256 2.228-1.246 0-2.257-.997-2.257-2.228z"
              fill="#37517E"
            />
            <path
              d="M8 9.127c2.487 0 4.604.858 5.967 1.595 1.391.752 2.033 2.22 2.033 3.644V16h-1.641v-1.634c0-.981-.435-1.82-1.18-2.223-1.225-.662-3.065-1.396-5.179-1.396-2.114 0-3.954.734-5.179 1.396-.745.402-1.18 1.242-1.18 2.223V16H0v-1.634c0-1.424.642-2.892 2.033-3.644C3.396 9.985 5.513 9.127 8 9.127z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled === false && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2a5 5 0 100 10 5 5 0 000-10zM9 7a3 3 0 116 0 3 3 0 01-6 0z" fill="#37517E" />
            <path
              d="M22 22v-2.552c0-1.144-.407-2.432-1.542-3.204C19.002 15.254 16.3 14 12 14c-4.3 0-7.002 1.254-8.458 2.244C2.407 17.016 2 18.304 2 19.448V22h2v-2.552c0-.727.255-1.27.667-1.55C5.803 17.124 8.115 16 12 16c3.885 0 6.197 1.125 7.333 1.897.412.28.667.824.667 1.551V22h2z"
              fill="#37517E"
            />
          </>
        )}

        {Number(size) === 16 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0C5.847 0 4.102 1.723 4.102 3.848S5.847 7.696 8 7.696c2.152 0 3.897-1.723 3.897-3.848S10.152 0 8 0z"
              fill="#37517E"
            />
            <path
              d="M8 9.127c2.487 0 4.604.858 5.967 1.595 1.391.752 2.033 2.22 2.033 3.644V16H0v-1.634c0-1.424.642-2.892 2.033-3.644C3.396 9.985 5.513 9.127 8 9.127z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2a5 5 0 100 10 5 5 0 000-10z" fill="#37517E" />
            <path
              d="M22 22v-2.552c0-1.144-.407-2.432-1.542-3.204C19.002 15.254 16.3 14 12 14c-4.3 0-7.002 1.254-8.458 2.244C2.407 17.016 2 18.304 2 19.448V22h20z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Profile;
