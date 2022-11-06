export interface AppConfig{
    sdkVersion?:string;
    historyVersion?:string;
    targetRootID?:string;
    layout?:{
        componentName?:string;
        props?:Record<string,any>;
    }
    theme?:{
        package:string;
        version:string;
        primary:string;
    }
    [key:string]:any;

}
