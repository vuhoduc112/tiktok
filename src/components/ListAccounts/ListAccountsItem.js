import classNames from 'classnames/bind';
import styles from './ListAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from 'src/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import Image from '../Images';

const cx = classNames.bind(styles);

function ListAccountsItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        //render, interactive để tippy hiện
        <Tippy interactive delay={[1000, 500]} offset={[-18, 0]} render={renderPreview} placement="bottom">
            <div className={cx('account-Item')}>
                <Image className={cx('avatar')} src={data.avatar} alt="" />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                    </p>
                    {/*<p className={cx('username')}>{`${data.first_name} ${data.last_name}`}</p> */}
                </div>
            </div>
        </Tippy>
    );
}

ListAccountsItem.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ListAccountsItem;
