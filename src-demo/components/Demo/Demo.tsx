import React, { FunctionComponent, useState } from 'react';
import { CirclePicker } from 'react-color';
import getConfig from 'next/config';
import * as iconComponents from '../../../build';
import iconsMetaData from '../../../build/icons.json';
import { IconPreview } from '../IconPreview/IconPreview';
import { generateBadges } from '../utils';

import styles from './Demo.module.css';

const { publicRuntimeConfig } = getConfig();
const TW_COLORS = ['#37517e', '#6f8691', '#00b9ff'];

const ControlGroup = ({ label, children }) => {
  return (
    <div className={styles['control-group']}>
      <label className={styles['control-group-label']}>{label}</label>
      {children}
    </div>
  );
};
export const Demo: FunctionComponent = () => {
  const [size, setSize] = useState<number>(24);
  const [isFilled, setFill] = useState<boolean>(true);
  const [color, setColor] = useState<string>(TW_COLORS[0]);

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.h1}>
          TransferWise Icons
          <span className="dot">.</span>
        </h1>
        <div className={styles.subheader}>{publicRuntimeConfig.libVersion}</div>
      </div>
      <div className={styles.controls}>
        <ControlGroup label="Color">
          <CirclePicker color={color} colors={TW_COLORS} onChange={c => setColor(c.hex)} />
        </ControlGroup>
        <ControlGroup label="Size">
          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-default ${size === 16 ? 'active' : ''}`}
              onClick={() => setSize(16)}
            >
              16px
            </button>
            <button
              type="button"
              className={`btn btn-default ${size === 24 ? 'active' : ''}`}
              onClick={() => setSize(24)}
            >
              24px
            </button>
          </div>
        </ControlGroup>
        <ControlGroup label="Filled icons">
          <button type="button" className="btn btn-default" onClick={() => setFill(!isFilled)}>
            {isFilled ? 'Hide' : 'Show'}
          </button>
        </ControlGroup>
      </div>

      <div className={styles['icons-container']}>
        {Object.keys(iconsMetaData).map(key => {
          const { componentName, name, oldName } = iconsMetaData[key];
          const Icon = iconComponents[componentName];
          const badges = generateBadges(iconsMetaData[key]);

          return (
            <IconPreview
              key={name}
              icon={<Icon size={size} filled={isFilled} />}
              name={name}
              oldName={oldName}
              color={color}
              badges={badges}
            />
          );
        })}
      </div>
    </main>
  );
};
