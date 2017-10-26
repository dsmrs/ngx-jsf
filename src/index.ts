import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpMock } from './http-mock.service';

export * from './http-mock.service';

@NgModule({})
export class JsfModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JsfModule,
      providers: [HttpMock]
    };
  }
}
