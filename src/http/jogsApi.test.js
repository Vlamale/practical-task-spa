import { CHANGE_JOG_URL, CREATE_JOG_URL, GET_JOGS_URL } from '../const/requestUrl.js'
import { $authHost } from './index.js'
import { getJogs, createJog, changeJog } from './jogsApi.js'

jest.mock('./index.js')


describe('getJogs function:', () => {
    let responseBody
    let jogs
    let users

    beforeEach(() => {
        jogs = [
            {
                "id": 3979,
                "user_id": "134",
                "distance": 1200,
                "time": 1,
                "date": 1630281600
            },
            {
                "id": 3981,
                "user_id": "134",
                "distance": 25,
                "time": 255,
                "date": 1629849600
            }
        ]

        users = [
            {
                "id": "134",
                "email": "hello@stickerbox.internal",
                "phone": "",
                "role": "user",
                "first_name": "",
                "last_name": ""
            }
        ]

        responseBody = {
            data: {
                response: {
                    jogs,
                    users
                },
                timestamp: 1630934862
            }
        }
    })

    it('shuld return jogs data from backend', async () => {
        $authHost.get.mockReturnValue(responseBody)
        expect.assertions(3);
        const data = await getJogs()
        expect($authHost.get).toHaveBeenCalledWith(GET_JOGS_URL)
        expect(data.jogs).toBeDefined()
        expect(data.jogs).toEqual(jogs)
    })
})

describe('createJog function:', () => {
    let jogData
    let responseBody
    let newJog

    beforeEach(() => {
        jogData = {
            "distance": 1,
            "time": 123,
            "date": "2020-09-04"
        }

        newJog = {
            "id": 3996,
            "user_id": 134,
            "distance": 1,
            "time": 123,
            "date": "2020-09-04T00:00:00.000Z",
            "created_at": "2021-09-06T14:51:38.727Z",
            "updated_at": "2021-09-06T14:51:38.727Z"
        }

        responseBody = {
            data: {
                response: {
                    ...newJog
                },
                timestamp: 1630934862
            }
        }
    })

    it('shuld return created jog data from backend', async () => {
        $authHost.post.mockReturnValue(responseBody)
        expect.assertions(3);
        const data = await createJog(jogData)
        expect($authHost.post).toHaveBeenCalledWith(CREATE_JOG_URL, jogData)
        expect(data).toBeDefined()
        expect(data).toEqual(newJog)
    })
})

describe('changeJog function:', () => {
    let jogData
    let responseBody
    let changedJog

    beforeEach(() => {
        jogData = {
            "jog_id": 3794,
            "user_id": 134,
            "distance": 888,
            "time": 777,
            "date": "2020-09-04"
        }

        changedJog = {
            "id": 3794,
            "user_id": 134,
            "distance": 888,
            "time": 777,
            "date": "2020-09-20T00:00:00.000Z",
            "created_at": "2021-09-02T09:14:39.000Z",
            "updated_at": "2021-09-03T19:45:10.778Z"
        }

        responseBody = {
            data: {
                response: {
                    ...changedJog
                },
                timestamp: 1630934862
            }
        }
    })
    it('shuld return changed jog data from backend', async () => {
        $authHost.put.mockReturnValue(responseBody)
        expect.assertions(3);
        const data = await changeJog(jogData)
        expect($authHost.put).toHaveBeenCalledWith(CHANGE_JOG_URL, jogData)
        expect(data).toBeDefined()
        expect(data).toEqual(changedJog)
    })
})