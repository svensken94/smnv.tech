import { Component, HostBinding, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ApplicationManifest } from 'ui/system'

@Component({
	selector: 'ui-dock-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './dock-icon.component.html',
	styleUrls: ['./dock-icon.component.scss'],
})
export class DockIconComponent {
	@Input({ required: true }) manifest!: ApplicationManifest

	@HostBinding('style.background-image')
	get icon() {
		return `url(${this.manifest.icon})`
	}
}
