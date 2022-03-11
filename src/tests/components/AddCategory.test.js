import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en AddCategory component", () => {

  // Esta función permite evaluar la función para pruebas
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  //Función de ciclo de vida para antes de cada prueba reiniciar
  beforeEach(() => {
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategories} />);
  })

  test("Debe mostrar el snapshot correcto", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "hola mundo";
    input.simulate("change", { target: { value } });

    // SE PUEDE HACER UN EXPECT DE EL VALOR QUE SE CAMBIO, EN ESTE CASO NO HAY UN ELEMENTO A COMPARAR
  });

  test('No debe postear la información onsubmit si no tiene el length', () => { 
      //La funcion de prevent default es la forma corta de () => {}
      wrapper.find('form').simulate('submit', {preventDefault(){}});
    //La funcion no se debe llamar
      expect( setCategories ).not.toHaveBeenCalled();

   })

   test('Debe de llamar el setCateegories y limpiar la caja de texto', () => { 
    //La funcion de prevent default es la forma corta de () => {}
    const input = wrapper.find("input");
    const value = "hola mundo";
    input.simulate("change", { target: { value } });
    wrapper.find('form').simulate('submit', {preventDefault(){}});
  //La funcion no se debe llamar
    expect( setCategories ).toHaveBeenCalled();
    //Cuantas veces se llamo la función
    expect( setCategories ).toHaveBeenCalledTimes(1);
    //Evaluar como se llamo, en este caso que se llamara cun cualquier funcion
    expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));
    // Input es un String vacio porque se limpia
    expect(wrapper.find('input').prop('value')).toBe('');

 })
});
