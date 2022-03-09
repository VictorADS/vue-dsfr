declare const _default: import("vue").DefineComponent<{
    field: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    cellAttrs: {
        type: ObjectConstructor;
        default: () => {};
    };
}, unknown, unknown, {
    isObject(): boolean;
    isComponent(): any;
    isString(): boolean;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    field: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    cellAttrs: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    field: string | Record<string, any>;
    cellAttrs: Record<string, any>;
}>;
export default _default;
