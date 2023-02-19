import { createContext, useReducer } from "react";

import EventTypes from "./eventTypes";
const initialState = {

};

const store = createContext(initialState);
const { Provider } = store;

const Stateprovider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
           case EventTypes.UPDATE_BOOKINGS:
              return {
                ...state,
                activeBookings: action.payload.activeBookings,
                upcomingOrders: action.payload.upcomingOrders,
                completedOrders: action.payload.completedOrders,
                canceledBookings: action.payload.canceledBookings
              };
            default:
              throw new Error();
        }
    }, initialState);
    // eslint-disable-next-line react/react-in-jsx-scope
    return <Provider
      value={ { state,
        dispatch } }>
      {children}
    </Provider>;
};

export { store, Stateprovider };