import './GlobalStyles.scss';
import PropTypes from 'prop-types';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.prototype = {
    data: PropTypes.object.isRequired,
};

export default GlobalStyles;
