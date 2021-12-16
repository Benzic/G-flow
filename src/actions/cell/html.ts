
import { HTML as _HTML, HTMLStyleProps, DisplayObjectConfig, INode } from '@antv/g'
import { Base } from '../base';
export default class HTML extends Base {
    private canvas: INode = null;
    constructor(props) {
        super(props)
        this.canvas = props?.canvas
    }
    draw(props: DisplayObjectConfig<HTMLStyleProps & { width: string | number, height: string | number }>): INode {
        const cell: INode = new _HTML(props)
        this.canvas.appendChild(cell);
        return cell
    }
}