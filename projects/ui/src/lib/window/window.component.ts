import { Component, Input, Type, ViewChild } from '@angular/core'
import { PortalDirective } from 'ui/directives/portal/portal.directive'
import { ApplicationManifest } from 'ui/system'

@Component({
	selector: 'ui-window',
	standalone: true,
	imports: [PortalDirective],
	templateUrl: './window.component.html',
	styleUrls: ['./window.component.scss'],
})
export class WindowComponent<T extends ApplicationManifest['context']> {
	@ViewChild(PortalDirective) portal!: PortalDirective
	@Input({ required: true }) manifest!: ApplicationManifest

	context!: T

	ngAfterViewInit(): void {
		this.start()
	}

	start(): T {
		const componentRef = this.portal.viewContainerRef.createComponent<T>(this.manifest.context as Type<T>)
		this.context = componentRef.instance

		return componentRef.instance
	}
}
