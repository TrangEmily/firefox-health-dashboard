/* eslint-disable max-len */

import { frum } from '../vendor/queryOps';
import Data from '../vendor/Data';

const CONFIG = {
  windows64Regression: [
    {
      title: 'MotionMark HTML suite',
      secondLink:
        '/quantum/10/windows10-64/raptor-motionmark-htmlsuite-firefox/pgo',
      secondTitle: 'Breakdown',
      signatures: {
        'windows10-64': '8f014459793e2e94c3244d5edeaada0452b0c627',
      },
      framework: 10,
    },
    {
      title: 'MotionMark Animometer',
      secondLink:
        '/quantum/10/windows10-64/raptor-motionmark_animometer-firefox/pgo',
      secondTitle: 'Breakdown',
      signatures: {
        'windows10-64': '9ad671fb568a5b3027af35b5d42fc6dd385f25ed',
      },
      framework: 10,
    },
  ],
  windows32Regression: [
    {
      title: 'MotionMark HTML suite',
      secondLink:
        '/quantum/10/windows7-32/raptor-motionmark_htmlsuite-firefox/pgo',
      secondTitle: 'Breakdown',
      signatures: { 'windows7-32': 'd1984855d038409797bbc8ad82c32489eb04cc23' },
      framework: 10,
    },
    {
      title: 'MotionMark Animometer',
      secondLink:
        '/quantum/10/windows7-32/raptor-motionmark_animometer-firefox/pgo',
      secondTitle: 'Breakdown',
      signatures: { 'windows7-32': '3d5a0a5e3c37f74770bdcb75bd46347be228495f' },
      framework: 10,
    },
  ],
};
const PLATFORMS = [
  {
    browser: 'Firefox',
    bits: 32,
    os: 'win',
    label: 'Firefox',
    framework: 10,
    platform: 'windows7-32',
    option: 'pgo',
    project: 'mozilla-central',
  },
  {
    browser: 'Firefox',
    bits: 64,
    os: 'win',
    label: 'Firefox',
    framework: 10,
    platform: 'windows10-64',
    option: 'pgo',
    project: 'mozilla-central',
  },
  {
    browser: 'Chromium',
    bits: 32,
    os: 'win',
    label: 'Chromium',
    framework: 10,
    platform: 'windows7-32-nightly',
    option: 'opt',
    project: 'mozilla-central',
  },
  {
    browser: 'Chromium',
    bits: 64,
    os: 'win',
    label: 'Chromium',
    framework: 10,
    platform: 'windows10-64-nightly',
    option: 'opt',
    project: 'mozilla-central',
  },
  {
    browser: 'geckoview',
    label: 'Geckoview p2 aarch64',
    framework: 10,
    platform: 'android-hw-p2-8-0-android-aarch64',
    project: 'mozilla-central',
  },
  {
    browser: 'geckoview',
    label: 'Geckoview p2',
    framework: 10,
    platform: 'android-hw-p2-8-0-arm7-api-16',
    project: 'mozilla-central',
  },
  {
    browser: 'geckoview',
    label: 'Geckoview g5',
    framework: 10,
    platform: 'android-hw-g5-7-0-arm7-api-16',
    project: 'mozilla-central',
  },
];
const TP6_TESTS = [
  {
    id: 'fnbpaint',
    label: 'First non-blank paint',
  },
  {
    id: 'loadtime',
    label: 'Load time',
    default: true,
  },
  {
    id: 'fcp',
    label: 'First content paint',
  },
  {
    id: 'dcf',
    label: 'DOM content flushed',
  },
  {
    id: 'ttfi',
    label: 'Time to first interactive',
  },
];
const SUITES = {
  header: ['browser', 'title', 'suite'],

  data: [
    ['Firefox', 'Tp6: Facebook', 'raptor-tp6-facebook-firefox'],
    ['Firefox', 'Tp6: Amazon', 'raptor-tp6-amazon-firefox'],
    ['Firefox', 'Tp6: YouTube', 'raptor-tp6-youtube-firefox'],
    ['Firefox', 'Tp6: Google', 'raptor-tp6-google-firefox'],
    ['Firefox', 'Tp6: Imdb', 'raptor-tp6-imdb-firefox'],
    ['Firefox', 'Tp6: Imgur', 'raptor-tp6-imgur-firefox'],
    ['Firefox', 'Tp6: Wikia', 'raptor-tp6-wikia-firefox'],
    ['Firefox', 'Tp6: Bing', 'raptor-tp6-bing-firefox'],
    ['Firefox', 'Tp6: Yandex', 'raptor-tp6-yandex-firefox'],
    ['Firefox', 'Tp6: Apple', 'raptor-tp6-apple-firefox'],
    ['Firefox', 'Tp6: Microsoft', 'raptor-tp6-microsoft-firefox'],
    ['Firefox', 'Tp6: Reddit', 'raptor-tp6-reddit-firefox'],

    ['Chromium', 'Tp6: Facebook', 'raptor-tp6-facebook-chrome'],
    ['Chromium', 'Tp6: Amazon', 'raptor-tp6-amazon-chrome'],
    ['Chromium', 'Tp6: Google', 'raptor-tp6-google-chrome'],
    ['Chromium', 'Tp6: YouTube', 'raptor-tp6-youtube-chrome'],
    ['Chromium', 'Tp6: Imdb', 'raptor-tp6-imdb-chrome'],
    ['Chromium', 'Tp6: Imgur', 'raptor-tp6-imgur-chrome'],
    ['Chromium', 'Tp6: Wikia', 'raptor-tp6-wikia-chrome'],
    ['Chromium', 'Tp6: Bing', 'raptor-tp6-bing-chrome'],
    ['Chromium', 'Tp6: Yandex', 'raptor-tp6-yandex-chrome'],
    ['Chromium', 'Tp6: Apple', 'raptor-tp6-apple-chrome'],
    ['Chromium', 'Tp6: Microsoft', 'raptor-tp6-microsoft-chrome'],
    ['Chromium', 'Tp6: Reddit', 'raptor-tp6-reddit-chrome'],

    ['geckoview', 'Tp6 mobile: Facebook', 'raptor-tp6m-facebook-geckoview'],
    ['geckoview', 'Tp6 mobile: Amazon', 'raptor-tp6m-amazon-geckoview'],
    ['geckoview', 'Tp6 mobile: YouTube', 'raptor-tp6m-youtube-geckoview'],
    ['geckoview', 'Tp6 mobile: Google', 'raptor-tp6m-google-geckoview'],
  ],
};
// ALL PAGE COMBINATIONS
const TP6_PAGES = frum(SUITES.data)
  .map(row => Data.zip(SUITES.header, row))
  .join('browser', PLATFORMS, 'browser');
const TP6M_PAGES = TP6_PAGES.where({ browser: 'geckoview' });

export { CONFIG, PLATFORMS, TP6_PAGES, TP6M_PAGES, TP6_TESTS };
