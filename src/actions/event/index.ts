export default class EventFunction {
    private node: any = null;
    constructor(node) {
        this.node = node
    }
    onMouseEnter() {
        this.node.addEventListener('mouseenter', () => {
            this.node.style.fill = '#2FC25B';
        });
    }
    onMouseLeave() {
        this.node.addEventListener('mouseleave', () => {
            this.node.style.fill = '#1890FF';
        });
    }
}