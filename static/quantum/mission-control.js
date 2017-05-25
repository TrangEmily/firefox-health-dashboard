/* global fetch */
import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import Widget from './widget';

const simpleMarkdown = (text) => {
  return text && text
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</em>');
};

export default class MissionControlWidget extends React.Component {
  state = {};

  render() {
    const measurements = this.props.measurements || this.props.content;
    const contents = Array.isArray(measurements)
      ? measurements
      : measurements.split(/\s*;\s+/);
    const $content = contents.map((content, idx) => {
      return (
        <div
          className='widget-entry'
          key={`entry-${idx}`}
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{ __html: simpleMarkdown(content) }}
        />
      );
    });

    return (
      <Widget
        {...this.props}
        link='https://mana.mozilla.org/wiki/display/PI/Mission+Control'
        loading={$content.length === 0}
        content={$content.length ? $content : 'Loading Mission Control …'}
      />
    );
  }
}

MissionControlWidget.defaultProps = {
  content: '',
};
MissionControlWidget.propTypes = {
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  measurements: PropTypes.string,
};
