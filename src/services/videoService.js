import * as request from 'src/utils/request';

export const getSuggested = async (type = 'for-you', page = 1) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                type,
                page: page, // đặt đúng như trong cấu hình ở postman, sửa đoạn async, get, params
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
