import React, { useState } from 'react';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  const color = rgb.join(',');

  return (
    <article
      className={`color ${index > 10 && `color-light`}`}
      style={{ background: `rgb(${color})` }}
      onClick={() => {
        navigator.clipboard.writeText('#' + hexColor);
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }}
    >
      <p>{weight}%</p>
      <p>#{hexColor}</p>
      {alert && (
        <p
          style={{
            background: 'white',
            color: 'green',
            marginTop: '1rem',
            textAlign: 'center',
          }}
        >
          Copied to clipboard!
        </p>
      )}
    </article>
  );
};

export default SingleColor;
