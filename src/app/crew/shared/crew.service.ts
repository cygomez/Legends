import {Injectable} from '@angular/core';
import { CREWDATA } from '../shared/mock-crew';

import 'rxjs/add/operator/filter';

Injectable();
export class CrewService {
    getCrew() {
        return CREWDATA;
    }

    getCrewMember(name: string) {
        return CREWDATA.filter(member => member.name === name);
    }
}
