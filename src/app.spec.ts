import {TriangleClassifier} from "../tests/app";

describe("TriangleClassifier", () => {
    const triangleClassifier: TriangleClassifier = new TriangleClassifier();

    test("equilateral triangle", () => {
        expect(triangleClassifier.triangleClassifier(2, 2, 2)).toBe("tam giac deu");
    })

    test("isosceles triangle", () => {
        expect(triangleClassifier.triangleClassifier(2, 2, 3)).toBe("tam giac can");
    })

    test("regular triangle", () => {
        expect(triangleClassifier.triangleClassifier(3, 4, 5)).toBe("tam giac thuong");
    })

    test("not a triangle", () => {
        expect(triangleClassifier.triangleClassifier(3, 2, 8)).toBe("khong phai tam giac");
    })

    test("not a triangle", () => {
        expect(triangleClassifier.triangleClassifier(-1, 2, 1)).toBe("khong phai tam giac");
    })

    test("not a triangle", () => {
        expect(triangleClassifier.triangleClassifier(0, 1, 1)).toBe("khong phai tam giac");
    })
})