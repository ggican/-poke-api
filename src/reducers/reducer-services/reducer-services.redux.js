import types from "./reducer-services.type";
import initialState from "./reducer-services.state";

export const servicesState = initialState;

const resultReduxFn = (state, action) => {
    return {
        ...state,
        [action.group]: {
            ...state[action.group],
            [action.key]: { ...action },
        },
    };
};

export const servicesRedux = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.CLEAR:
            return {
                ...state,
                [action.group]: {
                    ...state[action.group],
                    [action.key]: action.defaultData,
                },
            };
        default:
            return resultReduxFn(state, action);
    }
};
