import {AppSchema} from "./schema";
import {CodeComponentType, ComponentMap, LowCodeComponentType} from "./info";

export function isEnExpression(EnExpression:any):boolean{
    return EnExpression && EnExpression.type === 'Expression';
}

export function isEnFunction(EnFunction:any):boolean{
    return EnFunction && EnFunction.type=='Function' && EnFunction ==='object';
}

export function isEnSlot(EnSlot:any):boolean{
    return EnSlot && EnSlot.type==='Slot';
}

export function isNodeSchema(NodeSchema:any):boolean{
    return NodeSchema && NodeSchema.componentName;
}

export function isAppSchema(app:any): app is AppSchema{
    return app && app.componentTree;
}

export function isCodeComponentType(component:ComponentMap):component is CodeComponentType{
    return 'package' in component;
}

export function isLowCodeComponentType(component:ComponentMap):component is LowCodeComponentType{
    return 'devMode' in component;
}
