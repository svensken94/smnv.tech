import { Component } from '@angular/core'
import { DockComponent } from 'ui/dock'
import { DockIconComponent } from 'ui/icon'

@Component({
	selector: 'app-os',
	standalone: true,
	imports: [DockComponent, DockIconComponent],
	templateUrl: './os.component.html',
	styleUrls: ['./os.component.scss'],
})
export class OsComponent {}
export default OsComponent
