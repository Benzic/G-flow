
import { DisplayObjectConfig, Text as _Text, TextStyleProps, INode, Canvas } from '@antv/g'
export default class Text {
    private canvas: Canvas | INode = null;
    constructor(canvas) {
        this.canvas = canvas;
    }
    draw(props: DisplayObjectConfig<TextStyleProps>): INode {
        const text = new _Text(props);
        this.canvas.appendChild(text);
        return text
    }
}