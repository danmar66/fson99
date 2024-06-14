const parseGender = (gender) => {
  const isString = typeof gender === 'string';
  if (!isString) return;
  const isGender = (gender) => ['male', 'female', 'other'].includes(gender);

  if (isGender(gender)) return gender;
};

const parseNumber = (number) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    return;
  }

  return parsedNumber;
};

export const parseFilterParams = (query) => {
  const { gender, maxAge, minAge, maxAvgMark, minAvgMark } = query;

  const parsedGender = parseGender(gender);
  const parsedMaxAge = parseNumber(maxAge);
  const parsedMinAge = parseNumber(minAge);
  const parsedMaxAvgMark = parseNumber(maxAvgMark);
  const parsedMinAvgMark = parseNumber(minAvgMark);

  return {
    gender: parsedGender,
    maxAge: parsedMaxAge,
    minAge: parsedMinAge,
    maxAvgMark: parsedMaxAvgMark,
    minAvgMark: parsedMinAvgMark,
  };
};
