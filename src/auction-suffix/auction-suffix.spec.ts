import {AuctionSuffix} from './auction-suffix'

describe('Auction Suffix', () => {
    it('should create suffix with required params', () => {
        const suffix = new AuctionSuffix({
            points: [
                {
                    coefficient: 20000,
                    delay: 12
                }
            ],
            whitelist: [
                {
                    address: '0x00000000219ab540356cbb839cbe05303d7705fa',
                    allowance: 0
                }
            ]
        })

        expect(suffix.build()).toBe(
            '000c004e200000000000000000219ab540356cbb839cbe05303d7705faf486570009'
        )
    })

    it('should create suffix with specified public resolving deadline', () => {
        const suffix = new AuctionSuffix({
            points: [
                {
                    coefficient: 20000,
                    delay: 12
                }
            ],
            whitelist: [
                {
                    address: '0x00000000219ab540356cbb839cbe05303d7705fa',
                    allowance: 0
                }
            ],
            publicResolvingDeadline: 1673549418
        })

        expect(suffix.build()).toBe(
            '000c004e200000000000000000219ab540356cbb839cbe05303d7705fa63c0566a09'
        )
    })

    it('should decode auction suffix', () => {
        const encodedSuffix =
            '000c004e200000000000000000219ab540356cbb839cbe05303d7705fa63c0566a09'
        // const encodedSuffix =
        //     '0x2cc2878d000064106ced00000000000025cd05bba1487cd5ee97538dcb970c4040454b976b175474e89094c44da98b954eedeac495271d0f00000000000000000000000025cd05bba1487cd5ee97538dcb970c4040454b970000000000000000000000001111111254eeb25477b68fb85ed929f73a9605820000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006411bd4c0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000001c33d0869c3c6d85d201aaa4a8bc8cec1da73255e0593a1cec52c1c3769f79ec55271e3390a0ac8fff36ca58703d70cdafd9c59deb84bed027ed594e7953bf2a0a0000000084d99aa569d93a9ca187d83734c8c4a519c4e9b100000000c6c7565644ea1893ad29182f7b6961aab7edfed000000000d1742b3c4fbb096990c8950fa635aec75b30781a000000007636a5bfd763cefec2da9858c459f2a9b0fe8a6c00000000bd4dbe0cb9136ffb4955ede88ebd5e92222ad09a0000000069313aec23db7e4e8788b942850202bcb603873400000000cfa62f77920d6383be12c91c71bd403599e1116f000000005989136e561cbabc53e963f4cf2e0e880a82af4e64106cab40'

        const suffix = AuctionSuffix.decode(encodedSuffix)
        console.log(suffix)

        expect(suffix.build()).toBe(encodedSuffix)
    })
})
