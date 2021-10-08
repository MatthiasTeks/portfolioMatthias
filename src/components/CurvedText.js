import React from 'react';
import PropTypes from 'prop-types';

function curvedtext({ text, arc, radius }) {
  const characters = text.split('');
  const degree = arc / characters.length;

  return (
    <h1>
      {characters.map((char, i) => (
        <span
          key={`curvedtext-span-${i}`}
          style={{
            height: `${radius}px`,
            transform: `rotate(${degree * i - arc / 2}deg)`,
            transformOrigin: `0 ${radius}px 0`,
          }}>
          {char}
        </span>
      ))}
    </h1>
  );
}

curvedtext.propTypes = {
  text: PropTypes.string.isRequired,
  arc: PropTypes.number, 
  radius: PropTypes.number, 
};

curvedtext.defaultProps = {
  arc: 120,
  radius: 400,
};

export default curvedtext;