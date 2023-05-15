import { Directive, ViewContainerRef, inject } from '@angular/core'

@Directive({
	selector: '[uiPortal]',
	standalone: true,
})
export class PortalDirective {
	viewContainerRef = inject(ViewContainerRef)
}
