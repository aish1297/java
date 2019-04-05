import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Icecreams } from '../model/icecream.model';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-delete-icecream-dialog',
  templateUrl: './delete-icecream-dialog.component.html',
  styleUrls: ['./delete-icecream-dialog.component.scss']
})
export class DeleteIcecreamDialogComponent implements OnInit {

  deleteFlag: boolean;

  icecreams: Icecreams[];


  constructor(private formBuilder: FormBuilder ,
    public dialogRef: MatDialogRef<DeleteIcecreamDialogComponent>, private deleteService: DeleteService) { }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDeleteSelect() {
    this.deleteFlag = true;
    this.dialogRef.close(this.deleteFlag);
  }

  onCancelSelect() {
    this.dialogRef.close();
  }
}
