import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from 'src/components/Button';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from 'src/components/Popper';
import { useEffect, useState } from 'react';
import Image from 'src/components/Images';

const cx = classNames.bind(styles);

function Home() {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1`)
            .then((res) => res.json())
            .then((res) => {
                setVideo(res.data);
            });
    }, [video]);

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>{/** <AccountPreview /> */}</PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')} data={video}>
            <div className={cx('wrapper-container')}>
                {video.map((prev) => (
                    <div className={cx('heading-home')} key={prev.id}>
                        <div className={cx('homehome')}>
                            <Tippy delay={[800, 0]} interactive render={renderPreview}>
                                <div>
                                    <Image className={cx('avatar')} alt="" src={prev.user.avatar}></Image>
                                </div>
                            </Tippy>

                            <div className={cx('container')}>
                                <div className={cx('nickname')}>{prev.user.nickname}</div>
                                <div className={cx('text')}>{prev.description}</div>
                                <strong className={cx('hastag')}>#{prev.allows}</strong>
                                <div className={cx('music')}>
                                    <FontAwesomeIcon icon={faMusic} />
                                    <a href="abc" className={cx('text-music')}>
                                        nhạc nền - Thịnh Đoàn Official
                                    </a>
                                </div>

                                <div className={cx('container-home')}>
                                    <div className={cx('video-home')}>
                                        <video className={cx('video')} width={253} height={450} controls>
                                            <source src={prev.file_url} type="video/mp4"></source>
                                        </video>
                                    </div>
                                    <div className={cx('icon-home')}>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon
                                                className={cx('tym-icon')}
                                                icon={faHeart}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <p className={cx('tym-text')}>{prev.likes_count}</p>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon
                                                className={cx('comment-icon')}
                                                icon={faCommentDots}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <p className={cx('comment-text')}>{prev.comments_count}</p>
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon
                                                className={cx('share-icon')}
                                                icon={faShare}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <p className={cx('share-text')}>{prev.shares_count}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button outline>Follow</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
