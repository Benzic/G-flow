
import { DisplayObjectConfig, Path as _Path, PathStyleProps, INode } from '@antv/g'
import { Base } from '../base';
export default class Path extends Base {
    private canvas: INode = null;
    constructor(props) {
        super(props)
        this.canvas = props?.canvas
    }
    draw(props: DisplayObjectConfig<PathStyleProps>): INode {
        const cell: INode = new _Path(props)
        this.canvas.appendChild(cell);
        this.onAnamate(cell);
        this.onEventListen(cell);
        return cell
    }
    onAnamate(circle): void {
        circle.animate([{ lineDashOffset: -20 }, { lineDashOffset: 0 }], {
            duration: 500,
            iterations: Infinity,
        });
    }
    onEventListen(cell): void {
        cell.addEventListener('mouseenter', () => {
            cell.style.stroke = '#2FC25B';
        });
        cell.addEventListener('mouseleave', () => {
            cell.style.stroke = '#1890FF';
        });
    }
}