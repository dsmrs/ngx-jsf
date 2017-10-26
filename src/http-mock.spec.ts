import { TestBed, inject, async, fakeAsync, tick } from '@angular/core/testing';
import { JsfModule, HttpMock } from "./";

describe('SampleTest', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ HttpMock ],
            imports: [ JsfModule ]
        })
    })

    it('should expect', () => {
        expect(true).toBeTruthy()
    })

    it('should expect async', async(() => {
        setTimeout(() => {
            expect(true).toBeTruthy()
        }, 500)
    }))

    it('should expect fakeAsync', fakeAsync(() => {
        tick()
        expect(true).toBeTruthy()
    }))

    it('should inject', inject([HttpMock], (service: HttpMock) => {
        expect(service).toBeTruthy()
    }))
})
