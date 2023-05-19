import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core'
import { ApplicationManifest, ApplicationsService } from 'ui/system'
import { DockIconComponent } from '../../public-api'
import { NgFor } from '@angular/common'

@Component({
	selector: 'ui-dock',
	standalone: true,
	imports: [DockIconComponent, NgFor],
	templateUrl: './dock.component.html',
	styleUrls: ['./dock.component.scss'],
})
export class DockComponent implements OnInit {
	appsService = inject(ApplicationsService)
	@Output() run = new EventEmitter<ApplicationManifest>()

	async ngOnInit() {
		await this.appsService.init()
	}

	get apps() {
		return this.appsService.apps
	}

	start(manifest: ApplicationManifest) {
		this.run.emit(manifest)
	}
}
export default DockComponent
