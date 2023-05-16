import { Component } from '@angular/core'
import { DockComponent } from 'ui/dock'

@Component({
	selector: 'app-os',
	standalone: true,
	imports: [DockComponent],
	templateUrl: './os.component.html',
	styleUrls: ['./os.component.scss'],
})
export class OsComponent {}
export default OsComponent
