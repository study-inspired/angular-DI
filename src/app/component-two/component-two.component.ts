import {Component, OnInit} from '@angular/core';
import {MyService} from "../my.service";
import {OtherService} from "../other.service";

@Component({
	selector: 'app-component-two',
	templateUrl: './component-two.component.html',
	styleUrls: ['./component-two.component.scss'],
	providers: [{provide: MyService, useClass: OtherService}]
})
export class ComponentTwoComponent implements OnInit
{

	constructor(private myService: MyService)
	{
		this.runMessage();
	}

	runMessage()
	{
		this.myService.showSuccess();
	}

	ngOnInit()
	{
	}

}
