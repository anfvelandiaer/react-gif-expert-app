import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

// Simula la respuesta del useFetchGifs
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en gif grid", () => {
  const category = "One Punch";

  test("should mostrar el componente correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

     expect(wrapper).toMatchSnapshot();


  });

  test("debe mostrar items cuando se cargan imagenes useFecth", () => {
    const gifs = [
      {
        id: "ABC",
        URL: "HTTPS://localhost",
        title: "Cualquier Cosa",
      },
      {
        id: "123",
        URL: "HTTPS://localhost",
        title: "Cualquier Cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

     // Como ya no está cargando no debe mostrar el mensaje del p
     expect(wrapper.find('p').exists()).toBe(false)
     // Probar que se crea la cantidad correcta
     expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

     // expect(wrapper).toMatchSnapshot();
  });
});
