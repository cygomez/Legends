import {Injectable} from '@angular/core';
import { LIST } from './mock-services';

Injectable();
export class ServiceData {
    getServiceData() {
        return Promise.resolve(LIST);
    }
};
