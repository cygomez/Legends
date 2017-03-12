import {Injectable} from '@angular/core';
import { CREWDATA } from '../shared/mock-crew';

Injectable();
export class CrewService {
    getCrew() {
        return Promise.resolve(CREWDATA);
    }
}