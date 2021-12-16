
import { Text as _Text, Canvas, INode, Image } from '@antv/g'
import { Base } from '../base';
import { Line, Point } from '.';
interface BackGroundCofig<StyleProps> {
    type: "point" | "line" | "image",
    style?: StyleProps,
    animate?: AnimateProps,
}
interface AnimateProps {
    keyframes?: Keyframe[],
    EffectTiming?: KeyframeEffectOptions
}
interface BaseProps {
    width?: number,
    height?: number,
}
interface LineProps extends BaseProps {
    lineWidth?: number,
    stepX?: number,
    stepY?: number,
    stroke?: string,
    bgColor?: string,
}
interface PointProps extends BaseProps {
    r?: number,
    lineWidth?: number,
    stepX?: number,
    stepY?: number,
    stroke?: string,
    fill?: string,
    bgColor?: string,
}
interface ImageProps extends BaseProps {
    img?: string
}
export default class BackGround extends Base {
    private canvas: Canvas = null;
    private backgrounConfig: BackGroundCofig<PointProps & LineProps & ImageProps> = null;
    constructor(props: { displayLayer: Canvas, activeLayer: Canvas, canvas: Canvas, backgrounConfig: BackGroundCofig<PointProps & LineProps & ImageProps> }) {
        super(props)
        this.canvas = props?.canvas;
        this.backgrounConfig = props?.backgrounConfig
        this.draw({
            ...props?.backgrounConfig
        })
    }
    drawPoint(props: PointProps) {
        const { r = 0.5, width, height, stepX = 20, stepY = 20, stroke = "#dddddd", fill = "#dddddd", lineWidth = 0.5 } = props
        const { width: _wrapperWidth, height: _wrapperHeight } = this.canvas?.getConfig();
        const _rWidth = width ?? _wrapperWidth, _rHeight = height ?? _wrapperHeight
        for (let i = 0; i < _rWidth; i += stepX) {
            for (let j = 0; j < _rHeight; j += stepY) {
                const cell = new Point({ canvas: this.canvas });
                cell.draw({
                    style: {
                        x: i,
                        y: j,
                        r,
                        fill,
                        stroke,
                        lineWidth
                    }
                })
            }
        }
    }
    drawLine(props: LineProps) {
        const { lineWidth = 0.5, width, height, stepX = 20, stepY = 20, stroke = "#dddddd" } = props
        const { width: _wrapperWidth, height: _wrapperHeight } = this.canvas?.getConfig();
        const _rWidth = width ?? _wrapperWidth, _rHeight = height ?? _wrapperHeight
        for (let i = 0; i < _rWidth; i += stepX) {
            const cell = new Line({ canvas: this.canvas });
            cell.draw({
                style: {
                    x1: i,
                    y1: 0,
                    x2: i,
                    y2: _rHeight,
                    stroke,
                    lineWidth,
                    lineDash: [20, 20]
                },
            })
        }
        for (let j = 0; j < _rHeight; j += stepY) {
            const cell = new Line({ canvas: this.canvas });
            cell.draw({
                style: {
                    x1: 0,
                    y1: j,
                    x2: _rWidth,
                    y2: j,
                    stroke,
                    lineWidth,
                    lineDash: [20, 20]
                },
            })
        }
    }
    drawImage(props: ImageProps) {
        const { width, height, } = props
        const { width: _wrapperWidth, height: _wrapperHeight } = this.canvas?.getConfig();
        const _rWidth = width ?? _wrapperWidth, _rHeight = height ?? _wrapperHeight
        const cell: INode = new Image({
            style: {
                x: 0,
                y: 0,
                width: _rWidth,
                height: _rHeight,
                img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11695386033%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642214723&t=31ff1b32c68ff483729ee5e74a1bbf46"
            }
        })
        this.canvas.appendChild(cell);
    }
    draw({ style, type }: BackGroundCofig<PointProps & LineProps & ImageProps>): void {
        switch (type) {
            case "point":
                this.drawPoint(style ?? {})
                break;
            case "line":
                this.drawLine(style ?? {})
                break;
            case "image":
                this.drawImage(style ?? {})
                break;
            default:
                break
        }
    }
}