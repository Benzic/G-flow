export default class EventFunction {
    private node: any = null;
    constructor(node) {
        this.node = node
    }
    initEventListenter() {

    }
    onMouseEnter() {
        this.node.addEventListener('mouseenter', () => {
            console.log(this.node, 'enter');
            this.node.style.fill = '#2FC25B';
        });
    }
    onMouseLeave() {
        this.node.addEventListener('mouseleave', () => {
            this.node.style.fill = '#1890FF';
        });
    }
}