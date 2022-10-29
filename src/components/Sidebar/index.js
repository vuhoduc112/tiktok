import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from 'src/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, GroupUserIcon, LiveIcon } from '../Icons';
import ListAccounts from '../ListAccounts';
import { useEffect, useState } from 'react';
import * as userService from 'src/services/userService';
import ListHasTag from '../ListHasTag';

const cx = classNames.bind(styles);

const INT_PAGE = 1;

function Sidebar() {
    const [suggetstedUsers, setUggetstedUsers] = useState([]);
    const [page, setPage] = useState(INT_PAGE);
    const [dataHasTag, setDataHasTag] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: 5 })
            .then((data) => {
                setUggetstedUsers((prev) => [...prev, ...data]);
                setDataHasTag(data);
            })
            .catch((error) => console.log(error));
    }, [page]);

    const handleUpAll = () => {
        setPage(page + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Dành cho bạn" to={config.router.home} icon={<HomeIcon />} />
                <MenuItem title="Đang follow" to={config.router.following} icon={<GroupUserIcon />} />
                <MenuItem title="Live" to={config.router.live} icon={<LiveIcon />} />
            </Menu>
            <ListAccounts lable="Tài khoản được đề xuất" data={suggetstedUsers} onSeeAll={handleUpAll} />
            {/*<ListAccounts lable="Tài khoản đang theo dõi" data={suggetstedUsers} onSeeAll={handleUpAll} /> */}
            <ListHasTag data={dataHasTag} label="Khám phá" />
            <div className={cx('footer')}>
                <a className={cx('link-footer')} href="https://">
                    Bảng tin
                </a>
                <a className={cx('link-footer')} href="https://">
                    Giới thiệu
                </a>
                <a className={cx('link-footer')} href="https://">
                    Liên hệ
                </a>
                <a className={cx('link-footer')} href="https://">
                    Sự nghiệp
                </a>
                <a className={cx('link-footer')} href="https://">
                    ByteDance
                </a>
                <a className={cx('link-footer')} href="https://">
                    TikTok for Good
                </a>
                <a className={cx('link-footer')} href="https://">
                    Quảng cáo
                </a>
                <a className={cx('link-footer')} href="https://">
                    Developers
                </a>
                <a className={cx('link-footer')} href="https://">
                    Transparency
                </a>
                <a className={cx('link-footer')} href="https://">
                    TikTok Rewards
                </a>
                <a className={cx('link-footer')} href="https://">
                    TikTok Embeds
                </a>
                <a className={cx('link-footer')} href="https://">
                    Quyền riêng tư
                </a>
                <a className={cx('link-footer')} href="https://">
                    Trợ giúp
                </a>
                <a className={cx('link-footer')} href="https://">
                    An toàn
                </a>
                <a className={cx('link-footer')} href="https://">
                    Creator Portal
                </a>
                <a className={cx('link-footer')} href="https://">
                    Hướng dẫn Cộng đồng
                </a>
                <span className={cx('text-footer')}>© 2022 TikTok</span>
            </div>
        </aside>
    );
}

export default Sidebar;
