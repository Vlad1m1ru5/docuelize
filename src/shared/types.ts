// TODO: dependency inversion
import { store } from "../app/store";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
