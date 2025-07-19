import dayjs from "dayjs";

export function getAgeByDateOfBirth(dateOfBirth: string) {
  const birthDate = dayjs(dateOfBirth);
  const today = dayjs();

  return today.diff(birthDate, "year");
}
