const findLowestScoringStudent = require("../src/solution");

describe("findLowestScoringStudent", () => {
    it("should return the student with the lowest score", () => {
        const students = [
          { name: "Leo Yeon-Joo", score: 8.9 },
          { name: "Morgan Sutton", score: 7.4 },
          { name: "Natalee Vargas", score: 9.2 },
        ];

        const expected = students[1];
        const actual = findLowestScoringStudent(students);

        expect(actual).toEqual(expected);
    });
      it("should return null if an empty list is given", () => {
        const students = [];
        const result = findLowestScoringStudent(students);
        expect(result).toBeNull();
    });
});