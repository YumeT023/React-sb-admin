import { Person } from "./Types";

// all of the function in this file aren't complete (they are used somewhere as a helper (tools))

export const sortString = (a: string, b: string): number => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    // ignore case
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}

export const sortStringByDigitIgnoringNonDigit = (a: string, b: string): number => {
    return parseInt(a.replace(/\D/g, "")) - parseInt(b.replace(/\D/g, ""));
    // using regEx to remove all non-digit and (parseInt to convert it into number)
}

export const filterPersonArrayByRegex = (arr: Array<Person>, patt: RegExp): Array<Person> => {
    const tmp = [...arr.filter(p => (
        patt.test(p.age) || patt.test(p.name) || patt.test(p.office) ||
        patt.test(p.position) || patt.test(p.startDate) || patt.test(p.salary)
    ))];
    // filter the array of person (p) as follow: p will be in the array if and if only,
    // one of his information matches the patt (regExp)
    return tmp;
} 