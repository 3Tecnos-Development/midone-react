/* eslint-disable no-plusplus */
import { useEffect, useState } from "react";

interface IPasswordRequirements {
  hasNumber: boolean;
  hasLetterUpper: boolean;
  hasLetterLower: boolean;
  longEnough: boolean;
  hasSpecialChars: boolean;
}

interface IOptions {
  minLength?: number;
}

export const usePasswordRequirements = (
  password: string,
  options?: IOptions,
): IPasswordRequirements => {
  const [hasNumber, setHasNumber] = useState(false);
  const [hasLetterUpper, setHasLetterUpper] = useState(false);
  const [hasLetterLower, setHasLetterLower] = useState(false);
  const [hasSpecialChars, setHasSpecialChars] = useState(false);
  const [longEnough, setLongEnough] = useState(false);

  const checkIsNumber = (word: string) => {
    return /\d/.test(word);
  };
  const checkIsSpecialChars = (word: string) => {
    const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (specialChars.indexOf(letter) > -1 && !/\d/.test(letter)) {
        return true;
      }
    }
    return false;
  };

  const checkLetterIsLowerCase = (word: string) => {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (
        letter === letter.toLowerCase() &&
        !checkIsNumber(letter) &&
        !checkIsSpecialChars(letter)
      ) {
        return true;
      }
    }
    return false;
  };

  const checkLetterIsUpperCase = (word: string) => {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (
        letter === letter.toUpperCase() &&
        !checkIsNumber(letter) &&
        !checkIsSpecialChars(letter)
      ) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const minLength = options && options.minLength ? options.minLength : 8;
    const checkLongEnough = password.length >= minLength;
    setLongEnough(checkLongEnough);

    const checkNumber = checkIsNumber(password);
    setHasNumber(checkNumber);

    const checkLowerCase = checkLetterIsLowerCase(password);
    setHasLetterLower(checkLowerCase);

    const checkUpperCase = checkLetterIsUpperCase(password);
    setHasLetterUpper(checkUpperCase);

    const checkSpecialChars = checkIsSpecialChars(password);
    setHasSpecialChars(checkSpecialChars);
  }, [password]);

  return {
    hasNumber,
    hasLetterUpper,
    hasLetterLower,
    longEnough,
    hasSpecialChars,
  };
};
