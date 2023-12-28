import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { OrderService } from './services/order.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
// import { order} from './services/order.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TestingComponent } from './testing/testing.component';
import { NewTestComponent } from './new-test/new-test.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderStatusComponent,
    LoginComponent,
    TestingComponent,
    NewTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [MatSnackBar,OrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
