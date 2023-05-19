import { Component, ViewChild, inject } from '@angular/core'
import { PortalDirective } from 'ui/directives/portal/portal.directive'
import { DockComponent } from 'ui/dock'
import { ApplicationManifest } from 'ui/system'
import { WindowService } from 'ui/window'

@Component({
	selector: 'app-os',
	standalone: true,
	imports: [DockComponent, PortalDirective],
	templateUrl: './os.component.html',
	styleUrls: ['./os.component.scss'],
})
export class OsComponent {
	@ViewChild(PortalDirective) portal!: PortalDirective

	windowService = inject(WindowService)

	spawn(manifest: ApplicationManifest) {
		this.windowService.spawn(this.portal.viewContainerRef, manifest)
	}
}
export default OsComponent
