
import { DisplayObjectConfig, Line as _Line, LineStyleProps, INode,Animation } from '@antv/g'
import { Base } from '../base';
export default class Line extends Base {
    private canvas: INode = null;
    constructor(props) {
        super(props)
        this.canvas = props?.canvas
    }
    draw(props: DisplayObjectConfig<LineStyleProps>): INode {
        const cell: INode = new _Line(props)
        this.canvas.appendChild(cell);
        this.onAnamate(cell);
        this.onEventListen(cell);
        return cell
    }
    onAnamate(circle): void {
        circle.animate([{ lineDashOffset: -20 }, { lineDashOffset: 0 }], {
            duration: 2000,
            iterations: Infinity,
        });
    }
    onEventListen(cell): void {
        cell.addEventListener('mouseenter', () => {
            cell.style.fill = '#2FC25B';
        });
        cell.addEventListener('mouseleave', () => {
            cell.style.fill = '#1890FF';
        });
    }
}