import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from 'src/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'src/components/Images';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt="" />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </p>
                <p className={cx('username')}>{`${data.first_name} ${data.last_name}`}</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followers_count}</strong>
                    <span className={cx('lable')}> Follower</span>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('lable')}>Thích</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
