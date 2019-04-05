import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { Flavours } from '../icecreams/icecreams.component';
import { Icecreams } from '../model/icecream.model';

@Component({
  selector: 'app-update-icecream-dialog',
  templateUrl: './update-icecream-dialog.component.html',
  styleUrls: ['./update-icecream-dialog.component.scss']
})
export class UpdateIcecreamDialogComponent implements OnInit {


  flavour_id: number;
  flavour_name: string;
  price: number;
  updateForm: FormGroup;

  constructor(private formBuilder: FormBuilder ,
    private dialogRef: MatDialogRef<UpdateIcecreamDialogComponent> , @Inject(MAT_DIALOG_DATA) public data: Icecreams){ }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
  this.updateForm = new FormGroup({
    flavour_id : new FormControl(this.data.flavour_id, [
      Validators.required
    ]),
    flavour_name : new FormControl(this.data.flavour_name, [
      Validators.required
    ]),
    price : new FormControl(this.data.price, [
      Validators.required
    ])
  });
}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateFlavour(element) {
    this.dialogRef.close();

  }

  cancelSelect() {
    this.dialogRef.close();
  }

}
