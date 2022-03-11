import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const title = "Un Titulo";
  const url = "httpos://localhost.com";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener un párrafo con el titulo", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Debe tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    //Obtener las props html como src, alt ...
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should tener animate_fadeIn', () => { 
      const div = wrapper.find('div');
      const className = div.prop('className');
     expect(className.includes('animate__fadeIn')).toBe(true)
   })
});
