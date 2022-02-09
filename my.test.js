test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
  });

  const userAge = require ('./src/index.js')

  test('Mayor de edad', () => {
    expect(userAge(19)).toBe("Eres mayor de edad, puedes conducir")
  });
  test('Mayor de edad', () => {
    expect(userAge(18)).toBe("Eres mayor de edad, puedes conducir")
  });
  test('Menor de edad', () => {
    expect(userAge(17)).toBe("Eres menor de edad, no tienes permitido conducir")
  });