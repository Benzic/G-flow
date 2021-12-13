
export class Base {
    static displayLayer: any = null;
    static activeLayer: any = null;
    static lastPoint: any = {};
    static line: any = []
    constructor({ displayLayer, activeLayer }) {
        if (activeLayer) {
            Base.activeLayer = activeLayer;
        }
        if (displayLayer) {
            Base.displayLayer = displayLayer;
        }
    }
    static getDisplayLayer() {
        return Base.displayLayer
    }
    static getActiveLayer() {
        return Base.activeLayer
    }
    static setLastPoint(cell) {
        Base.lastPoint = cell
    }
    static getLastPoint() {
        return Base.lastPoint
    }
    static addLine(cell) {
        Base.line.push(cell)
    }
    static removeLine(cell) {
        Base.line = Base.line.filter((item) => item === cell)
    }
    static getLine() {
        return Base.line
    }
}