import { convertDatetoNum, convertHttps } from './helper'

test('should convert date strings to numbers', () => {
  const today = convertDatetoNum('2020-01-23');
  expect(today).toBe(20200123);
});

test('should convert http to https', () => {
  const url = convertHttps('http://swapi.dev/api/');
  expect(url).toBe('https://swapi.dev/api/');
});
