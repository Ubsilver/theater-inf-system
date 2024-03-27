import {getEmployeesFx} from "@/app/api/employeers";
import {createStore} from "effector";

export const employeesStore = createStore([]);

//employeesStore.on(getEmployeesFx.doneData, (state, employees) => employees);