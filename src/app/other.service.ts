import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable()
export class OtherService
{
	message = 'Override';

	constructor(private toastr: ToastrService)
	{

	}

	showSuccess()
	{
		this.toastr.success(this.message);
	}
}
