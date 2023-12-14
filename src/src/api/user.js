import httpClient from '@api/axios'

const getUserPhoto = async (userId) => {
    return await httpClient
        .get(`/user/get-photo?userId=${userId}`, {
            params: {
                'Content-Type': 'image/png'
            }
        })
}

export default getUserPhoto
