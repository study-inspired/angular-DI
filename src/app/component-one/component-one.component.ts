import {Component, OnInit} from '@angular/core';
import {MyService} from "../my.service";

@Component({
	selector: 'app-component-one',
	templateUrl: './component-one.component.html',
	styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent implements OnInit
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
