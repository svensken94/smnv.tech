import { ComponentFixture, TestBed } from '@angular/core/testing'

import { OsComponent } from './os.component'

describe('OsComponent', () => {
	let component: OsComponent
	let fixture: ComponentFixture<OsComponent>

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [OsComponent],
		})
		fixture = TestBed.createComponent(OsComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
