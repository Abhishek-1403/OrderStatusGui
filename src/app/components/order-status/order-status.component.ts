import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { elementAt } from 'rxjs';
@Component({
  selector: 'order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css'],
})
export class OrderStatusComponent implements OnInit {
  constructor(private snack: MatSnackBar, private orderService: OrderService) {}

  ngOnInit(): void {}

  data = {
    mobileNo: '',
    orderId: '',
    paymentId: '',
    refundAmount: BigInt,
    status: '',
    password:''
  };
  // status=false;
  isLoading = false;
  result = {};
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.data.orderId = form.value.orderId;
    this.data.paymentId = form.value.paymentId;
    this.data.mobileNo = '+91' + form.value.mobileNo;
    this.data.status = form.value.status;
    this.data.refundAmount = form.value.refundAmount;
    this.data.password = form.value.password;

    if((this.data.password != '#Admin@1234')){
      this.snack.open("Incorrect Password..",'ok',{duration:6000})
      this.isLoading=false;
      return;
    }
    if (
      (this.data.status == 'CONFIRMED' && this.data.paymentId == '') 
    ) {
      this.snack.open(
        'Please Insert Payment Id',
        'ok',
        { duration: 3000 }
      );
      this.isLoading = false;
      return;
    }
    if (
      (this.data.status == 'REFUND ' &&
        (this.data.mobileNo == '' || this.data.refundAmount.length == 0)) 
    ) {
      this.snack.open(
        'Please Insert MobileNo and Refund amount',
        'ok',
        { duration: 3000 }
      );
      this.isLoading = false;
      return;
    }


    this.orderService.sendRequest(this.data).subscribe(
      (response: any) => {
        this.isLoading = false;
        if (response['response'] === 'SUCCESSFUL') {
          this.snack.open('Update Successfully..', 'OK', { duration: 6000 });
        } else {
          this.snack.open('Update Failed.. Try again!!', 'OK', {
            duration: 6000,
          });
        }
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.snack.open("An unknown error occour connect with tech team !!","ok",{duration:6000})
        console.log(error);
      }
    );
  }
}