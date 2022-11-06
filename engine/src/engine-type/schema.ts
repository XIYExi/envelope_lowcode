// core of type
// package Node similar to ReactNode
import {EnCombinationType, EnCombinationTypeObject, EnExpression, EnFunction, EnJSONObject} from "./value-types";
import {CSSProperties, ReactNode} from "react";
import {ComponentsMap} from "./info";
import {AppConfig} from "./config";


export type DOMText = string;
// 节点描述
// Base Root
export interface NodeSchema {
    id?:string;

    //必填项
    componentName:string;

    props?:{
        children?:NodeData|NodeData[];
    } & PropsMap;

    children?:NodeData | NodeData[];

    // 渲染条件（条件渲染）
    renderCondition?:string;

    loop?:EnCombinationType;

    /**
     * 循环渲染接受参数，规定为item，key
     * dataSource.map((item,item)=>{})
     * */
    loopArgs?:[item:string, index:string];

    locked?:boolean;

    hidden?:boolean;

    topFixed?:boolean;

}

export interface SlotSchema{
    componentName: 'Slot';
    name?: string;
    params?: string[];
}

export type PropsMap = EnCombinationTypeObject;
export interface PropsListInterface{
    name?:string;
    value?:EnCombinationType;
    spread?:boolean;
}
export type PropsList = Array<PropsListInterface>;


export type NodeData = NodeSchema | EnExpression | DOMText | ReactNode;
export type NodeDataType = NodeData | NodeData[];


// 容器描述
export interface ContainerSchema extends NodeSchema{
    componentName:string;
    id?:string;
    fileName:string;
    state?:{
        [key:string]:EnCombinationType;
    };
    methods?:{
        [key:string]:EnExpression | EnFunction;
    }

    lifeCycles?:{
        [key:string]: EnExpression | EnFunction;
    }

    css?:string;

    style?:CSSProperties;

    //dataSource?:DataSource;

    defaultProps?:EnCombinationTypeObject;
}

// 页面Page容器
export interface PageSchema extends ContainerSchema{
    componentName:'Page';
}

//lowCode 组件容器
export interface ComponentSchema extends ContainerSchema{
    componentName: 'Component';
}

// 区块容器Zone
// similar to Semantic‘s <Segment/> or antd’s <Block/>
export interface ZoneSchema extends ContainerSchema{
    componentName: 'Zone';
}

// 定义基础原件, 所有的自定义原件均从这三个上面发展而来
export type BaseSchema = PageSchema | ComponentSchema | ZoneSchema;

// App 描述
export interface AppSchema{
    id?:string;
    version:string;
    // 组件映射关系
    componentsMap: ComponentsMap;
    // 描述所有页面、组件的组件树
    // 保存为长度为1的数组，内部仅保存root节点
    componentTree: BaseSchema[];
    // 全局常量 const 描述
    constants?:EnJSONObject;
    // 全局css
    css?:string;
    style?:CSSProperties;
    //dataSource?:DataSource;
    config?:AppConfig | Record<string, any>;
}
