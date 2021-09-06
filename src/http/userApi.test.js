import { GET_TOKEN_URL, GET_USER_DATA_URL } from '../const/requestUrl.js'
import { $host, $authHost } from './index.js'
import { getToken, getUserData } from './userApi.js'

jest.mock('./index.js')

describe('getToken function:', () => {
    const requestBody = {
        uuid: "hello"
    }

    const token = "6809cf301483a77973e97778babe3999aa743db94df3dca36922eea4b1e41168"

    const responseBody = {
        data: {
            response: {
                "access_token": token,
                "token_type": "bearer",
                "expires_in": 631152000,
                "scope": "public",
                "created_at": 1630946456
            },
            "timestamp": 1630946456
        }
    }

    it('shuld return token from backend', async () => {
        $host.post.mockReturnValue(responseBody)
        expect.assertions(3);
        const data = await getToken()
        expect($host.post).toHaveBeenCalledWith(GET_TOKEN_URL, requestBody)
        expect(data).toBeDefined()
        expect(data).toEqual(token)
    })
})

describe('getUserData function:', () => {

    const response = {
        "id": "134",
            "email": "hello@stickerbox.internal",
            "phone": "",
            "role": "user",
            "first_name": "",
            "last_name": ""
    }

    const responseBody = {
        data: {
            response,
            "timestamp": 1630946456
        }
    }

    it('shuld return user data from backend', async () => {
        $authHost.get.mockReturnValue(responseBody)
        expect.assertions(3);
        const data = await getUserData()
        expect($authHost.get).toHaveBeenCalledWith(GET_USER_DATA_URL)
        expect(data).toBeDefined()
        expect(data).toEqual(response)
    })
})