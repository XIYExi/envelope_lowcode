
export interface Info{
    componentName?:string;
    package?:string;
    version?:string;
    exportName?:string;
    //子组件名字
    subName?:string;
    //组件路径
    main?:string;
}

export interface LowCodeComponentType{
    devMode:'lowCode';
    componentName:string;
}

export type CodeComponentType = Info;
export type ComponentMap = CodeComponentType | LowCodeComponentType;
export type ComponentsMap = ComponentMap[];
