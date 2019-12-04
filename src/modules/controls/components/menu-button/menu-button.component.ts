import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-menu-button',
    template: `
        <div
            class="menu-button"
            [class.active]="active"
            (click)="handleClick()"
        >
            <div class="active-indicator"></div>
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `
            .menu-button {
                display: grid;
                align-items: center;
                grid-template-columns: auto 1fr;
                background-color: var(--color-white);
                height: inherit;
                padding: inherit;
                cursor: pointer;
                font-weight: 600;
                font-size: 1.6rem;
                color: var(--color-base-grey);
                user-select: none;
            }

            .menu-button:hover {
                color: var(--color-active);
            }

            .active-indicator {
                width: 0.3rem;
                height: 100%;
                background-color: var(--color-active);
                border-radius: 0.3rem;
                box-shadow: 0.4rem 0rem 2.5rem rgba(var(--color-indicator-shadow), 0.75),
                0rem 0rem 1rem rgba(var(--color-indicator-shadow), 0.55),
                0.1rem 0rem 1rem rgba(var(--color-indicator-shadow), 0.45);
            }
        `,
    ],
})
export class MenuButtonComponent {
    @Input() public active: boolean;
    @Input() public height: number;

    @Output() public onselect: EventEmitter<void> = new EventEmitter();

    public handleClick(): void {
        this.onselect.emit();
    }
}
