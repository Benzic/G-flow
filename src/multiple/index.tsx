/*
 * @Author: benzic
 * @Date: 2021-03-17 10:59:36
 * @LastEditTime: 2021-11-03 17:35:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\flow\mutiple.tsx
 */
import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Flow } from "../base/Flow";
import BgImg from '../assets/bg.png'
import ResizeObserver from "resize-observer-polyfill";
import "./index.less";
import {
  nodeType,
  lineCfg,
  rectCfg,
  grdCfg,
  dbClickType,
  lineType,
} from "./../types/index";
const MultipleFlow: React.FC<{
  flowNodes: nodeType[];
  flowLines?: lineType[];
  rectConfig?: rectCfg;
  lineConfig?: lineCfg;
  cref?: any;
  gradConfig?: grdCfg;
  onChange?: (val: any) => void;
  onConnect?: (val: any) => boolean;
  onDBClick?: (val: dbClickType) => void;
  onChangePosition?: (val: { translateX: number; translateY: number }) => void;
}> =
  ({
    flowNodes = [],
    flowLines = [],
    rectConfig,
    lineConfig,
    gradConfig,
    cref,
    onChange,
    onConnect,
    onDBClick,
    onChangePosition,
  }) => {
    const canvas: any = useRef(null);
    const wrapper: any = useRef(null);
    const flow: any = useRef(null);
    const resizeObserver = new ResizeObserver((entries) => {
      // flow.current.resize(entries[0].contentRect);
    });
    useImperativeHandle(cref, () => ({
      flow: flow.current,
    }));
    useEffect(() => {
      flow.current = new Flow({
        flowNodes,
        canvas: canvas.current,
        wrapper: wrapper.current,
        rectConfig,
        lineConfig,
        flowLines: [{
          rgbData: { rgb: Array(3), color: 'rgb(11,31,86)' },
          source: { x: 398, y: 313 },
          sourceDir: { xDir: 100, yDir: 15 },
          sourceRgb: { rgb: Array(3), color: 'rgb(151,140,164)' },
          target: { x: 448, y: 398 },
          targetDir: { xDir: 50, yDir: 0 },
          targetRgb: { rgb: Array(3), color: 'rgb(57,56,45)' },
          turnPoints: [],
          type: "line",
          _color: "rgb(11,31,86)",
        }],
        gradConfig,
        config: {
          gradConfig: true,
          bgImg: BgImg,
          bgColorConfig: {
            normalBgColor: "gray", activeBgColor: "red", hoverBgColor: "green"
          },
          cellPoint: {
            width: 4, height: 4, bgColor: "red",
            lineConfig: {
              strokeColor: "blue", lineWidth: 2
            },
            shadowConfig: {},
            triggerArea: {
              width: 10, height: 10
            }
          },
          cellBorder: { lineWidth: 2, strokeColor: "red" },
          lineConfig: { lineWidth: 2, color: "red", dash: [5, 2], anamation: true },
          cellShadow: {
            shadowBlur: 4,
            shadowColor: "red",
            shadowOffsetX: -4,
            shadowOffsetY: -4
          },
        },
        onChange,
        onConnect,
        onDBClick,
        onChangePosition,
      });
      resizeObserver.observe(wrapper.current);
    }, []);
    // useEffect(() => {
    //   flow.current.nodes = flowNodes;
    //   flow.current.resetValues();
    // }, [flowNodes]);
    // useEffect(() => {
    //   flow.current.lines = flowLines;
    // }, [flowLines]);
    return (
      <div
        ref={wrapper}
        style={{ width: "100%", height: "100%", position: "relative" }}
        id="wrapper"
      >
        <div
          style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}
          id="canvas1"
        >
        </div>
        <div
          style={{ width: "100%", height: "100%", position: "absolute", left: 0, top: 0 }}
          id="canvas2"
        >
        </div>
      </div>
    );
  }

export default MultipleFlow;
