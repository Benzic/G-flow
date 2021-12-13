
import { Circle as _Circle, Polyline as _Polyline, DisplayObjectConfig, INode, PolylineStyleProps } from '@antv/g'
import { Base } from '../base';
export default class PolyLine extends Base {
    private canvas: INode = null;
    constructor(props) {
        super(props)
        this.canvas = props?.canvas;
    }
    draw(props: DisplayObjectConfig<PolylineStyleProps>): INode {
        const cell: INode = new _Polyline(props)
        this.canvas.appendChild(cell);
        this.onAnamate(cell);
        return cell
    }
    onAnamate(cell): void {
        cell.animate([{ lineDashOffset: -20 }, { lineDashOffset: 0 }], {
            duration: 500,
            iterations: Infinity,
        });
    }
}