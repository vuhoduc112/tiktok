import classNames from 'classnames/bind';
import styles from './ListAccounts.module.scss';
import ListAccountsItem from './ListAccountsItem';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ListAccounts({ lable, data = [], onSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>

            {data.map((prev) => (
                <ListAccountsItem key={prev.id} data={prev} />
            ))}

            <p className={cx('more-btn')} onClick={onSeeAll}>
                Xem tất cả
            </p>
        </div>
    );
}

ListAccounts.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default ListAccounts;
