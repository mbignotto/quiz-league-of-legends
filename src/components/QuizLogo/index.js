import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="100"
      height="100"
      className={className}
    >
      <path d="M11 3a1 1 0 0 0-.8 1.6L13 8.332v33.336L9.2 45.4A1 1 0 0 0 10 47h29c.304 0 .591-.138.781-.375l5-5A1.002 1.002 0 0 0 44 40H23V4a1 1 0 0 0-1-1H11zm14 4v2c9.925 0 18 8.075 18 18 0 4.144-1.421 7.954-3.783 11h2.469A19.877 19.877 0 0 0 45 27c0-11.028-8.972-20-20-20zm0 4v27h11.59C39.316 35.13 41 31.262 41 27c0-8.822-7.178-16-16-16zm-14 1.74c-3.456 3.394-5.693 8.025-5.97 13.172a20.3 20.3 0 0 0 .047 2.84c.425 4.88 2.616 9.26 5.923 12.508v-2.973A17.9 17.9 0 0 1 7 27a17.9 17.9 0 0 1 4-11.287V12.74zm0 6.531A15.894 15.894 0 0 0 9 27c0 2.802.729 5.436 2 7.729V19.27z" />
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
