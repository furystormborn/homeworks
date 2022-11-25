export class Point {

    private coordX: number;
    private coordY: number;

    constructor(coordData: string[]) {
        this.coordX = Number(coordData[0]);
        this.coordY = Number(coordData[1]);
    }

    /**
     * 
     * @param pointO 
     * @param pointA 
     * @param pointB 
     * @param pointC 
     */
    public static isPointInTriangle(pointO: Point, pointA: Point, pointB: Point, pointC: Point ): boolean {
        let a:number = (pointA.coordX - pointO.coordX) * (pointB.coordY - pointA.coordY) - (pointB.coordX - pointA.coordX) * (pointA.coordY - pointO.coordY);
        let b:number = (pointB.coordX - pointO.coordX) * (pointC.coordY - pointB.coordY) - (pointC.coordX - pointB.coordX) * (pointB.coordY - pointO.coordY);
        let c:number = (pointC.coordX - pointO.coordX) * (pointA.coordY - pointC.coordY) - (pointA.coordX - pointC.coordX) * (pointC.coordY - pointO.coordY);

        if( (a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0) ) {
            return true;
        }

        return false;
    }

    /**
     * 
     * @param coordData 
     * @returns 
     */
    public static processCoordinate(coordData: string[]): string[] | boolean {
        coordData = coordData.filter((el) => {
            if(Math.abs(Number(el)) > 100) {
                return false;
            }
            return true;
        });

        return coordData.length === 2 ? coordData : false;
    }
}