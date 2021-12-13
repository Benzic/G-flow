
import { Ellipse as _Ellipse, EllipseStyleProps, DisplayObjectConfig, INode, Group } from '@antv/g'
import { Base } from '../base';
import Text from './text';
import DragFunction from '../event/drag'
import Point from './point';
export default class Ellipse extends Base {
    private canvas: INode = null;
    private points: INode[] = [];
    constructor(props) {
        super(props)
        this.canvas = props?.canvas
    }
    draw(props: DisplayObjectConfig<EllipseStyleProps>): INode {
        const cell: INode = new _Ellipse(props)
        this.canvas.appendChild(cell);
        this.onDrag(cell);
        this.onAnamate(cell);
        this.drawText(cell);
        this.onEventListen(cell);
        return cell
    }
    onAnamate(cell): void {
        cell.animate([{ lineDashOffset: -20 }, { lineDashOffset: 0 }], {
            duration: 500,
            iterations: Infinity,
        });
    }
    onCreatePoint(_cell, x, y, parent, r) {
        const cell = new Point({ canvas: _cell, parent });
        const point: any = cell.draw({
            style: {
                x,
                y,
                r: 10,
                fill: '#1890FF',
                stroke: '#F04864',
                lineWidth: 4
            }
        })
        this.points.push(point)
    }
    onEventListen(cell) {
        cell.addEventListener('mouseenter', () => {
            cell.style.fill = '#2FC25B';
            const { halfExtents } = cell.getGeometryBounds()
            const points = new Group();
            this.onCreatePoint(points, 0, halfExtents[1], cell, 1);
            this.onCreatePoint(points, halfExtents[0], 0, cell, 2);
            this.onCreatePoint(points, -halfExtents[0], 0, cell, 3);
            this.onCreatePoint(points, 0, -halfExtents[1], cell, 4);
            cell.appendChild(points)
        });
        cell.addEventListener('mouseleave', () => {
            cell.style.fill = '#1890FF';
            this.points.map((item) => {
                item.destroy()
            })
            this.points = []
        });
    }
    onDrag(cell) {
        const _drag = new DragFunction(cell);
        _drag.onDragEvent();
    }
    drawText(cell) {
        const _text = new Text(cell)
        _text.draw({
            id: 'text',
            style: {
                fill: '#000',
                fontFamily: `Avenir, -apple-system, system-ui, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
                fontSize: 22,
                fontStyle: 'normal',
                fontVariant: 'normal',
                fontWeight: 'normal',
                text: 'Drag me',
                textAlign: 'center',
                textBaseline: 'middle',
            },
        })
    }
}