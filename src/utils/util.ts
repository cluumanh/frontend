import {v4 as uuid4} from "uuid";
import {Common} from "../constants/common.ts";

export const Util = {
    getDeviceId(): string {
        let deviceId = localStorage.getItem(Common.DEVICE_ID_TYPE);
        if (!deviceId) {
            deviceId = uuid4();
            localStorage.setItem(Common.DEVICE_ID_TYPE, JSON.stringify(deviceId));
        }
        return deviceId;
    }
}