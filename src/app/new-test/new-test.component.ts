import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // let i:number
   i= 1;
  childrenRow():void {
    this.i++
    $('#childTable').find('tbody').append('<tr><th scope="row">'+this.i+'</th><td class="col-sm-4"><input type="text" name="orderId" class="form-control" /></td><td><input type="text" name="paymentId" class="form-control" /></td><td class="col-sm-2"><input type="text" name="mobileNo" class="form-control" /></td><td class="col-sm-2"><input type="text" name="refundAmount" class="form-control" /></td> <td class="col-sm-2"><input type="text" name="status" class="form-control" /></td> </tr>');
  }

  data =[
    {orderId:0,paymentId:"",mobileNo:"",refundAmount:0,status:""}
  ]
   tempData ={orderId:0,paymentId:"",mobileNo:"",refundAmount:0,status:""}
  onSubmit(form :NgForm){
    // console.log(form)
    if (form.invalid) {
      return;
    }
    // console.log(form);
    // this.isLoading = true;
    for (let i = 0; i < form.value.table.length; i++) {
     
      this.tempData.orderId = form.value.table(i).orderId;
      this.tempData.paymentId = form.value.table(i).paymentId;
      this.tempData.mobileNo = '+91' + form.value.table(i).mobileNo;
      this.tempData.status = form.value.table(i).status;
      this.tempData.refundAmount = form.value.table(i).refundAmount;
      this.data.push(this.tempData)
      console.log(this.tempData);
    }


    console.log(this.data)
  }
  

  

}


// <td class="col-sm-2">
//         <input type="text" name="status" class="form-control" />
//       </td>
