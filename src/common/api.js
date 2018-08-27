import wepy from 'wepy'
const api = {
    getUserInfo () {
        return new Promise((resolve, reject) => {
            wepy.getUserInfo({
                success (res) {
                  resolve(res.userInfo);
                }
            })
        });
    }
}
export default api