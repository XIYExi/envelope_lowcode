import {NodeData} from "./schema";

// 表达式
export interface EnExpression{
    type:'Expression';
    value:string;
    mock?:any;
}

// 函数
export interface EnFunction{
    type:'Function';
    value:string;
    mock?:any;
    [key:string]:any;
}

/**
 * 类似Vue中插槽，用于描述某个标签中有个属性，返回ReactNode，或者传入函数返回Node的情况
 * */
export interface EnSlot{
    type:'Slot';
    name?:string;
    title?:string;
    params:string[];
    return?:NodeData[]|NodeData;
}

// 封装Json对象
export type EnJSON = number|
    string|
    boolean|
    null|
    undefined|
    EnJSONArray|
    EnJSONObject;

export type EnJSONArray = EnJSON[]; // Array
// Json Object
export interface EnJSONObject{
    [key:string]: EnJSON | EnJSONArray | EnJSONObject;
}


// 封装组合类型
export type EnCombinationType = EnJSON |
    EnSlot |
    EnExpression |
    EnFunction |
    EnCombinationTypeArray |
    EnCombinationTypeObject;
export type EnCombinationTypeArray = EnCombinationType[];
export interface EnCombinationTypeObject{
    [key:string]:EnCombinationType;
}


