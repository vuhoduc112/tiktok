import classNames from 'classnames/bind';
import styles from './ListHasTag.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ListHasTag({ label, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('label')}>{label}</div>

            {data.map((prev) => (
                <Button tag>
                    <FontAwesomeIcon icon={faTag} className={cx('icon-hastag')} />
                    <span key={prev.id} className={cx('content')}>
                        {prev.nickname}
                    </span>
                </Button>
            ))}
        </div>
    );
}

export default ListHasTag;
