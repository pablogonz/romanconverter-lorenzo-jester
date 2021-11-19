const romanconv=require('./romanconv');
test('Caso1', () => {// en caso de que el valor igual a 4000
    expect(romanconv(40)).toBe(4000);
  });

  
test('Caso2', () => {// en caso de que el valor sea menor a 0
    expect(romanconv(-2)).toBe(-2);
  });
 
test('Caso3', () => {// si es un numero dentro del rango entre 1 y 4000
    expect(romanconv(3999)).toBe("MMMCMXCIX");
  });
  test('Caso4', () => {// En caso de que el valor sea un string
    expect(romanconv("pablo")).toBe("");
  });
  test('Caso5', () => {// En caso de que el valor sea igual a 0
    expect(romanconv(0)).toBe(0);
  });
  test('Caso6', () => {// En caso de que el valor insertado este vacio
    expect(romanconv()).toBe("");
  });