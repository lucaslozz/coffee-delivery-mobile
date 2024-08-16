import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';
import {scaleUtils} from '@utils';

export function LogoIcon({size = 96, color = 'black'}: IconBase) {
  return (
    <Svg
      width={96}
      height={scaleUtils.proportion(96, 72, size)}
      viewBox="0 0 96 72"
      fill="none">
      <Path
        d="M0.650879 10.2568C0.650879 7.97969 1.42553 6.21494 2.97485 4.96253C4.55233 3.68167 6.91856 3.04124 10.0735 3.04124C12.1581 3.04124 13.9327 3.24048 15.3975 3.63897V9.53096C13.8201 9.04708 12.2567 8.80513 10.7073 8.80513C9.18619 8.80513 8.20026 8.99015 7.74955 9.36018C7.29884 9.70174 7.07349 10.2141 7.07349 10.8972V25.2429C7.07349 26.6092 8.12985 27.2923 10.2425 27.2923C12.3834 27.2923 14.144 27.0788 15.5243 26.6519V32.4158C14.0032 32.8427 12.1581 33.0562 9.98902 33.0562C6.83405 33.0562 4.48191 32.43 2.93259 31.1776C1.41145 29.9252 0.650879 28.1604 0.650879 25.8834V10.2568Z"
        fill="white"
      />
      <Path
        d="M27.8671 14.3129C27.8671 13.2312 27.2756 12.6904 26.0924 12.6904C24.9093 12.6904 24.3178 13.2312 24.3178 14.3129V26.1822C24.3178 27.2638 24.9093 27.8046 26.0924 27.8046C27.2756 27.8046 27.8671 27.2638 27.8671 26.1822V14.3129ZM18.0642 14.0994C18.0642 11.9361 18.7261 10.2568 20.0501 9.06131C21.4022 7.83737 23.4164 7.2254 26.0924 7.2254C28.7685 7.2254 30.7686 7.83737 32.0925 9.06131C33.4446 10.2568 34.1207 11.9361 34.1207 14.0994V26.3957C34.1207 28.5589 33.4446 30.2525 32.0925 31.4765C30.7686 32.6719 28.7685 33.2697 26.0924 33.2697C23.4164 33.2697 21.4022 32.6719 20.0501 31.4765C18.7261 30.2525 18.0642 28.5589 18.0642 26.3957V14.0994Z"
        fill="white"
      />
      <Path
        d="M38.2276 7.35349C38.2276 2.54312 40.7347 0.137939 45.7488 0.137939C46.3967 0.137939 47.1714 0.209099 48.0728 0.351417V5.3041C47.6221 5.24717 47.1995 5.21871 46.8052 5.21871C45.3685 5.21871 44.6502 5.90184 44.6502 7.26809V7.65235H48.0728V12.6904H44.6502V32.8427H38.2276V12.6904H35.8191V7.65235H38.2276V7.35349Z"
        fill="white"
      />
      <Path
        d="M50.6893 7.35349C50.6893 2.54312 53.1963 0.137939 58.2105 0.137939C58.8584 0.137939 59.633 0.209099 60.5344 0.351417V5.3041C60.0837 5.24717 59.6612 5.21871 59.2668 5.21871C57.8302 5.21871 57.1119 5.90184 57.1119 7.26809V7.65235H60.5344V12.6904H57.1119V32.8427H50.6893V12.6904H48.2808V7.65235H50.6893V7.35349Z"
        fill="white"
      />
      <Path
        d="M62.01 25.6699V14.0994C62.01 11.9361 62.672 10.2568 63.996 9.06131C65.3199 7.83737 67.32 7.2254 69.996 7.2254C75.151 7.2254 77.7285 9.51673 77.7285 14.0994V22.7666H68.1369V25.1575C68.1369 26.0114 68.3622 26.6234 68.8129 26.9934C69.2918 27.335 70.32 27.5058 71.8975 27.5058C73.5031 27.5058 75.2496 27.2211 77.137 26.6519V32.2877C75.1651 32.8285 73.0524 33.0989 70.7989 33.0989C64.9396 33.0989 62.01 30.6226 62.01 25.6699ZM68.1369 17.8566H71.8552V14.1848C71.8552 13.1032 71.2355 12.5623 69.996 12.5623C68.7566 12.5623 68.1369 13.1032 68.1369 14.1848V17.8566Z"
        fill="white"
      />
      <Path
        d="M80.2486 25.6699V14.0994C80.2486 11.9361 80.9106 10.2568 82.2345 9.06131C83.5585 7.83737 85.5585 7.2254 88.2346 7.2254C93.3896 7.2254 95.9671 9.51673 95.9671 14.0994V22.7666H86.3755V25.1575C86.3755 26.0114 86.6008 26.6234 87.0515 26.9934C87.5304 27.335 88.5586 27.5058 90.136 27.5058C91.7417 27.5058 93.4882 27.2211 95.3755 26.6519V32.2877C93.4037 32.8285 91.291 33.0989 89.0374 33.0989C83.1782 33.0989 80.2486 30.6226 80.2486 25.6699ZM86.3755 17.8566H90.0938V14.1848C90.0938 13.1032 89.4741 12.5623 88.2346 12.5623C86.9952 12.5623 86.3755 13.1032 86.3755 14.1848V17.8566Z"
        fill="white"
      />
      <Path
        d="M10.8211 48.5634C10.8211 46.4615 9.72322 45.4105 7.52745 45.4105H4.02578V64.5732H7.52745C9.72322 64.5732 10.8211 63.4988 10.8211 61.3502V48.5634ZM1.56421 43.2385H7.66613C9.5152 43.2385 10.9136 43.7173 11.8612 44.6749C12.8088 45.6324 13.2827 46.9169 13.2827 48.5284V61.4203C13.2827 63.0785 12.8204 64.3863 11.8959 65.3439C10.9713 66.3014 9.58454 66.7802 7.73547 66.7802H1.56421V43.2385Z"
        fill="white"
      />
      <Path
        d="M17.3336 61.7005V51.9616C17.3336 50.3034 17.7959 48.9838 18.7204 48.0029C19.6681 46.9987 21.0896 46.4965 22.9849 46.4965C24.8801 46.4965 26.2785 46.9987 27.1799 48.0029C28.1045 48.9838 28.5667 50.3034 28.5667 51.9616V58.0572H19.7605V61.5954C19.7605 62.6464 20.0841 63.4288 20.7313 63.9426C21.3785 64.4564 22.3839 64.7133 23.7476 64.7133C25.1113 64.7133 26.5212 64.5031 27.9773 64.0827V66.3948C26.8217 66.7685 25.4464 66.9554 23.8516 66.9554C19.5063 66.9554 17.3336 65.2038 17.3336 61.7005ZM19.7605 55.9903H26.2092V51.9616C26.2092 49.7662 25.1344 48.6685 22.9849 48.6685C20.8353 48.6685 19.7605 49.7662 19.7605 51.9616V55.9903Z"
        fill="white"
      />
      <Path d="M32.7808 41.557H35.2423V66.7802H32.7808V41.557Z" fill="white" />
      <Path
        d="M41.2397 44.6048C40.2458 44.6048 39.7489 44.0676 39.7489 42.9933C39.7489 41.919 40.2458 41.3818 41.2397 41.3818C42.2567 41.3818 42.7652 41.919 42.7652 42.9933C42.7652 44.0676 42.2567 44.6048 41.2397 44.6048ZM40.0262 46.987H42.4878V66.7802H40.0262V46.987Z"
        fill="white"
      />
      <Path
        d="M55.1765 46.8469H57.6727L53.3043 66.7802H49.8373L45.4689 46.8469H47.9998L49.9066 55.9903L51.6055 65.0286C52.2989 61.1517 53.4892 55.0911 55.1765 46.8469Z"
        fill="white"
      />
      <Path
        d="M60.2987 61.7005V51.9616C60.2987 50.3034 60.761 48.9838 61.6855 48.0029C62.6331 46.9987 64.0546 46.4965 65.9499 46.4965C67.8452 46.4965 69.2436 46.9987 70.145 48.0029C71.0695 48.9838 71.5318 50.3034 71.5318 51.9616V58.0572H62.7256V61.5954C62.7256 62.6464 63.0492 63.4288 63.6964 63.9426C64.3435 64.4564 65.349 64.7133 66.7127 64.7133C68.0763 64.7133 69.4862 64.5031 70.9424 64.0827V66.3948C69.7867 66.7685 68.4115 66.9554 66.8167 66.9554C62.4714 66.9554 60.2987 65.2038 60.2987 61.7005ZM62.7256 55.9903H69.1742V51.9616C69.1742 49.7662 68.0995 48.6685 65.9499 48.6685C63.8004 48.6685 62.7256 49.7662 62.7256 51.9616V55.9903Z"
        fill="white"
      />
      <Path
        d="M82.1251 46.7418H82.9919V49.124H81.8131C80.981 49.124 80.2298 49.3458 79.5595 49.7896C79.3515 49.9297 78.9008 50.245 78.2074 50.7354V66.7802H75.7458V46.8469H78.1034V48.3532C78.1727 48.3065 78.3461 48.1781 78.6234 47.9679C78.9239 47.7577 79.0973 47.6409 79.1435 47.6176C79.2128 47.5709 79.3631 47.4774 79.5942 47.3373C79.8484 47.1972 80.0333 47.1154 80.1489 47.0921C80.2876 47.0454 80.4725 46.987 80.7036 46.9169C81.0503 46.8001 81.5241 46.7418 82.1251 46.7418Z"
        fill="white"
      />
      <Path
        d="M93.5386 46.8469H96.0001L90.5916 72H88.2341L89.3088 66.7802H88.0954L83.7963 46.8469H86.2925L88.3727 56.761L89.8982 65.0286C90.3605 62.2727 90.869 59.5169 91.4237 56.761L93.5386 46.8469Z"
        fill="white"
      />
    </Svg>
  );
}
