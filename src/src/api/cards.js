import httpClient from '@api/axios'

const getCards = async () => {
    return await httpClient
        .get(`notion/get-cards`)
}

export default getCards