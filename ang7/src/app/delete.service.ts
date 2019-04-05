import { Subject } from 'rxjs';

export class DeleteService {
  deletePerson = new Subject();
  index;
}
