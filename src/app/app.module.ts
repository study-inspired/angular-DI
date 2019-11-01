import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentOneComponent} from "./component-one/component-one.component";
import {ComponentTwoComponent} from "./component-two/component-two.component";

@NgModule({
	declarations: [
		AppComponent,
		ComponentOneComponent,
		ComponentTwoComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule, // required animations module
		ToastrModule.forRoot() // ToastrModule added
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
