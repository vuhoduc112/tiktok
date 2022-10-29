import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import ProfilePage from '../pages/ProfilePage';
import UploadPage from '../pages/Upload';
import SearchPage from '../pages/Search';
import LivePage from '../pages/Live';
import config from 'src/config';

const publicRouter = [
    { path: config.router.home, component: HomePage },
    { path: config.router.following, component: FollowingPage },
    { path: config.router.profile, component: ProfilePage },
    { path: config.router.upload, component: UploadPage, layout: null },
    { path: config.router.search, component: SearchPage },
    { path: config.router.live, component: LivePage },
]; // không cần đăng nhập vẫn xem được

const privateRouter = []; // phải đăng nhập mới xem được

export { publicRouter, privateRouter };
