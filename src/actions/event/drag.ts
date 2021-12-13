import { Base } from '../base';
export default class DragFunction extends Base {
    private lastPosition: number[] = [];
    private dragging: boolean = false;
    private cell: any = null;
    constructor(props) {
        super(props)
        this.cell = props
    }
    onDragEvent(): void {
        this.cell
            .on('mousedown', this.onDragStart.bind(this))
            .on('touchstart', this.onDragStart.bind(this))
            .on('mouseup', this.onDragEnd.bind(this))
            .on('mouseupoutside', this.onDragEnd.bind(this))
            .on('touchend', this.onDragEnd.bind(this))
            .on('touchendoutside', this.onDragEnd.bind(this))
            .on('mousemove', this.onDragMove.bind(this))
            .on('touchmove', this.onDragMove.bind(this));
    }
    onDragStart(event?: MouseEvent): void {
        event.stopPropagation()
        this.dragging = true;
        this.cell.attr('opacity', 0.5);
        this.lastPosition = [event.x, event.y];
        console.log(event, "start", this.cell, this.dragging, event?.target === this.cell);
    }
    onDragEnd(event?: MouseEvent): void {
        event.stopPropagation()
        if (event?.target === this.cell) {
            this.dragging = false;
            this.cell.attr('opacity', 1);
        }
        console.log(event, "end", this.cell);
    }
    onDragMove(event?: MouseEvent): void {
        //  console.log(event, "move", this.cell, this.dragging, event?.target === this.cell);
        event.stopPropagation()
        if (this.dragging && event?.target === this.cell) {
            this.onDealLineMove(event)
            this.cell.attr('opacity', 0.5);
            const offset: number[] = [event.x - this.lastPosition[0], event.y - this.lastPosition[1]];
            const position: number[] = this.cell.getPosition();
            this.cell.setPosition(position[0] + offset[0], position[1] + offset[1]);
            this.lastPosition = [event.x, event.y];
        } else {
            return
        }
    }
    onDealLineMove(event) {
        const lines = DragFunction?.getLine();
        lines.map((item) => {
            const { endPoint, startPoint, startParent, endParent, line } = item;
            const startPosition = startParent?.getPosition();
            const endPosition = endParent?.getPosition();
            const startX = startPosition[0] + startPoint[0], startY = startPosition[1] + startPoint[1]
            const endX = endPosition[0] + endPoint[0], endY = endPosition[1] + endPoint[1];
            console.log(startPosition, endPosition, startX, startY, endX, endY, startPoint, endPoint);
            const _midX = startX + (endX - startX) / 2;
            const _midY = startY + (endY - startY) / 2;
            line.attr('points', [[startX, startY],
            [_midX, startY],
            [_midX, _midY],
            [endX, _midY],
            [endX, endY]]);
        })
    }
}