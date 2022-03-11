import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';



describe("Pruebas en el hook use fetch", () => {
    test("Debe retornar el estado inicial", async() => {

            // Forma de usar el custom hook con la libreria externa para testinff
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'))
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
     
    });
    
    test('debe Retornar un arreglo de imgs y el loading en false', async() => { 
        // waitForNextUpdate funcion que regresa promesa cuando hay un cambio en el stado del custom hook
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        // Esta funcion molesta las otras pruebas
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);


     })

  });
  