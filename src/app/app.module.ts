import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReedemComponent } from './reedem/reedem.component';
import { KeysService } from './keys.service';


@NgModule({
  declarations: [
    AppComponent,
    ReedemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [KeysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
