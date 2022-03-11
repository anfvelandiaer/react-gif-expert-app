import { getGifs } from "../../helpers/getGifs"


describe('Pruebas en getGifsFetch', () => {

    test('should traer 10 elementos', async() => { 
        const gifs = await getGifs('OnePunch');

        expect(gifs.length).toBe(10)
     })

     test('should traer 10 elementos', async() => { 
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0)
     })
})