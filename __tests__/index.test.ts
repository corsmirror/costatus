import * as costatus from '../src';

it('exports HTTP response status codes', () => {
  expect(costatus).toMatchSnapshot();
});

it('exports 200 OK', () => {
  expect(costatus.OK).toBe(200);
});

it('exports 404 Not Found', () => {
  expect(costatus.NOT_FOUND).toBe(404);
});

it('exports 500 Internal Server Error', () => {
  expect(costatus.INTERNAL_SERVER_ERROR).toBe(500);
});

it('does not contain duplicate status codes', () => {
  const codes = Object.values(costatus);
  // https://stackoverflow.com/a/32122760
  const duplicates = codes.filter(
    (element, index, array) => array.indexOf(element) !== index,
  );
  expect(duplicates).toHaveLength(0);
});
