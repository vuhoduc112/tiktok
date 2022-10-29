import * as request from 'src/utils/request';

export const getSuggested = async (page, perPage) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page: perPage, // đặt đúng như trong cấu hình ở postman, sửa đoạn async, get, params
            },
        });
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
