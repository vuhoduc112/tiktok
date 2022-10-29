import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from 'src/components/Popper';
import AccountItem from 'src/components/AccounItem';
import styles from './Search.module.scss';
import classNames from 'classnames/bind'; //giups đặt tên biến có chứa dấu - để css mượt hơn mà không bị sai cú pháp reactjs
import { useEffect, useState, useRef } from 'react';
import useDebounce from 'src/hooks/useDebounce';
import * as searchServices from 'src/services/sreachServices';

const cx = classNames.bind(styles);

function Search() {
    const [sreachResult, setSreachResult] = useState([]);
    const [sreachText, setSreachText] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(sreachText, 500);

    const refDom = useRef(); //lấy ra DOM của ô input bên dưới

    useEffect(() => {
        // nếu không có sreach thì loại bỏ chuỗi rỗng
        if (!debounced.trim()) {
            setSreachResult([]);
            return;
        }

        /*
         fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
         */

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);

            setSreachResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const hanldeShowResult = () => {
        setShowResult(false);
    };

    const handleOnchange = (e) => {
        const sreachValue = e.target.value;

        //nếu bắt đầu bằng dấu cách thì sẽ không cho chạy
        if (!sreachValue.startsWith(' ')) {
            setSreachText(sreachValue);
        }
    };

    return (
        <Tippy
            interactive={true}
            visible={showResult && sreachResult.length > 0}
            render={(attrs) => (
                <div className={cx('sreach-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('account')}>Tài khoản</h4>
                        {sreachResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={hanldeShowResult} // props của tippy khi onlick ra ngoài sẽ ẩn tab
        >
            <div className={cx('sreach')}>
                <input
                    ref={refDom}
                    value={sreachText}
                    onChange={handleOnchange}
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck={false}
                    onKeyDown={() => setShowResult(true)}
                />
                {!!sreachText && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSreachText('');
                            refDom.current.focus(); // con trỏ chuột vào thanh tìm kiếm
                            setShowResult(false);
                            setSreachResult([]);
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
