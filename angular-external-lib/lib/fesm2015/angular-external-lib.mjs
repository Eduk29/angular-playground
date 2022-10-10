import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class MastheadComponent {
    constructor() { }
    ngOnInit() {
    }
}
MastheadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MastheadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MastheadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: MastheadComponent, selector: "app-masthead", ngImport: i0, template: "<p>masthead works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MastheadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-masthead', template: "<p>masthead works!</p>\n", styles: [""] }]
        }], ctorParameters: function () { return []; } });

class MastheadModule {
}
MastheadModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MastheadModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MastheadModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MastheadModule, declarations: [MastheadComponent], imports: [CommonModule], exports: [MastheadComponent] });
MastheadModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MastheadModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MastheadModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MastheadComponent],
                    imports: [CommonModule],
                    exports: [MastheadComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MastheadComponent, MastheadModule };
//# sourceMappingURL=angular-external-lib.mjs.map
