import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import { Icecreams } from '../model/icecream.model';
import { IcecreamService } from '../service/icecream.service';

// import { MatTableDataSource, MatSort } from '@angular/material';\
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import { AddIcecreamDialogComponent } from '../add-icecream-dialog/add-icecream-dialog.component';
import { UpdateIcecreamDialogComponent } from '../update-icecream-dialog/update-icecream-dialog.component';
import { DeleteIcecreamDialogComponent } from '../delete-icecream-dialog/delete-icecream-dialog.component';
import { DeleteService } from '../delete.service';

// export interface Flavours {
//   flavour_id: number;
//   flavour_name: string;
//   price: number;
// }

@Component({
  selector: 'app-icecreams',
  templateUrl: './icecreams.component.html',
  styleUrls: ['./icecreams.component.scss']
})
export class IcecreamsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'flavour_id', 'flavour_name', 'price', 'update', 'delete'];


  flavour_id: number;
  flavour_name: string;
  price: number;

  icecreams: Icecreams[];
  data: any;

  constructor(private icecreamService: IcecreamService, private dialog: MatDialog, private deleteService: DeleteService) { }


  ngOnInit() {
    this.getIcecreams();

  }

  dialogRefAdd: MatDialogRef<AddIcecreamDialogComponent>;
  dialogRefUpdate: MatDialogRef<UpdateIcecreamDialogComponent>;
  dialogRefDelete: MatDialogRef<DeleteIcecreamDialogComponent>;

  public getIcecreams() {
    this.icecreamService.getIcecreams().subscribe((data: Icecreams[])=> {
      this.icecreams = data;
      console.log(this.icecreams);
    })
  }

    openAddDialog() {
      this.dialogRefAdd = this.dialog.open(AddIcecreamDialogComponent, {
        // data: {flavour_id: this.flavour_id, flavour_name: this.flavour_name, price: this.price}
    });

    // dialogRef.afterClosed().pipe(filter(data)).subscribe(data => {
    //   this.icecreams = data;
    //   console.log(data);

    // });

  }

  openEditDialog(element) {
    this.dialogRefUpdate = this.dialog.open(UpdateIcecreamDialogComponent, {
      data: {element}

    });
    // this.dialogRefUpdate.afterClosed().subscribe(newData => {
      // this.icecreams.
    // })

  }

  openDeleteDialog(index) {

    this.dialogRefDelete = this.dialog.open(DeleteIcecreamDialogComponent);
    this.dialogRefDelete.afterClosed().subscribe(data => {
      if (data) {
        this.icecreams.splice(index, 1);
        this.icecreams = [...this.icecreams];
      }
    })

}

  }


