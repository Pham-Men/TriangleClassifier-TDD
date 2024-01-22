export class  TriangleClassifier {

    constructor() {
    }

    triangleClassifier (a: number, b: number, c: number): string {
        if (a + b > c && a + c > b && b + c > a) {
            if (a === b && b === c) {
                return "tam giac deu"
            }
            if (a === b || a === c || b === c) {
                return "tam giac can"
            }
            else {
                return "tam giac thuong"
            }
        }
        else {
            return "khong phai tam giac"
        }
    }
}