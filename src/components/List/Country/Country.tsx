import classNames from 'classnames';
import React from 'react';

// import FullScreenIcon from '@/components/Icons/FullScreenIcon.tsx';
// import LoupeIcon from '@/components/Icons/LoupeIcon.tsx';
import styles from '@/components/List/Country/index.scss';
import dropdown from '@/components/dropdown.scss';
import classes from '@/components/index.scss';

const Country = (): JSX.Element => (
  <div
    className={classNames([classes['container'], classes['container_m'], classes['country-cases']])}
  >
    <button type="button" className={classes['full-screen-btn']}>
      {/* <FullScreenIcon /> */}
    </button>
    <div className={classes['wrapper']}>
      <div className={classNames([classes['dropdown'], dropdown['select-wrapper']])}>
        <div className={dropdown['select']}>
          <div className={dropdown['select__trigger']}>
            <span>Cases by Country/Region/Sovereignty</span>
            <div className={dropdown['arrow']} />
          </div>
          <div className={dropdown['options']}>
            <span className={dropdown['options selected']} data-value="country">
              Cases by Country/Region/Sovereignty
            </span>
            <span className={dropdown['options']} data-value="state">
              Province/State/Dependency
            </span>
            <span className={dropdown['options']} data-value="county">
              Cases by US County
            </span>
          </div>
        </div>
      </div>
      <div className={classNames([classes['search'], classes['country-cases-search']])}>
        <div className={classes['input']}>
          <input type="input" name="search" placeholder="Search by Country/Region" />
          <button type="button">{/* <LoupeIcon /> */}</button>
        </div>
      </div>
      <div className={classes['scroll-container']}>
        <div className={classNames([classes['list'], styles['country-cases-list']])}>
          <ul>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
            <li>
              <span className={classes['counter']}>15,386,562</span>
              <span className={classes['country']}>USA</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Country;
