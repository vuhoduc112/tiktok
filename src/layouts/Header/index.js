import styles from './Header.module.scss';
import classNames from 'classnames/bind'; //giups đặt tên biến có chứa dấu - để css mượt hơn mà không bị sai cú pháp reactjs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faVideo,
    faGear,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react';
import Button from 'src/components/Button';
import Menu from 'src/components/Popper/Menu';
import 'tippy.js/dist/tippy.css'; // optional // css của tippy cho HeadlessTippy hiện tin nhắn với hộp thư
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { LogoIcon, MailBox, UploadIcon } from 'src/components/Icons';
import Images from 'src/components/Images';
import Search from 'src/components/Search';
import { Link } from 'react-router-dom';
import config from 'src/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'languages':
                //code
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/hoso',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Nhận xu',
            to: '/nhanxu',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE Studio',
            to: '/live',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true, //tạo vạch ngăn cách
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.router.home}>
                        <LogoIcon />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text>
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: 8 }} />
                                Tải lên
                            </Button>

                            <HeadlessTippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </HeadlessTippy>

                            <HeadlessTippy delay={[0, 200]} content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MailBox />
                                    <span className={cx('action-notice')}>3</span>
                                </button>
                            </HeadlessTippy>
                        </>
                    ) : (
                        <>
                            <Button text>
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: 8 }} />
                                Tải lên
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Images
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1665993600&x-signature=judnZA7LW4exDr%2FIcwj1hRNrIGs%3D"
                                alt="vũ hồ đức"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
