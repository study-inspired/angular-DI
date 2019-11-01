import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
	providedIn: 'root'
})
export class MyService
{
	message = 'Hello world!';

	constructor(private toastr: ToastrService)
	{

	}

	showSuccess()
	{
		this.toastr.success(this.message, 'Toastr fun!');
	}
}
