import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Button({
    to,
    primary = false,
    outline = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    className = false,
    tag = false,
    href,
    children,
    onClick,
    leftIcon,
    rightIcon,
}) {
    let Comp = 'button';
    const props = {
        onClick, //comp sẽ nhận props là onclick
    };

    if (to) {
        props.to = to; //nếu onlcick.to là to thì lấy link
        Comp = Link;
    } else if (href) {
        props.href = href; //nếu onlcick.href là href thì lấy href
        Comp = 'a';
    }

    const classes = cx(
        'wrapper',
        {
            primary, //thêm một class nữa vào button
            outline,
            large,
            text,
            disabled,
            rounded,
            tag,
        },
        className,
    );

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.prototype = {
    to: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    tag: PropTypes.bool,
    className: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Button;
