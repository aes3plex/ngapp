import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-profile-icon',
    template: `
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <linearGradient id="linear-gradient">
                <stop offset="0%" stop-color="var(--color-active-start)" />
                <stop offset="100%" stop-color="var(--color-active-finish)" />
            </linearGradient>

            <path
                id="Mask"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 7C14 5.897 13.103 5 12 5C10.897 5 10 5.897 10 7C10 8.103 10.897 9 12 9C13.103 9 14 8.103 14 7ZM16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20Z"
                [attr.fill]="getIconColor()"
            />
        </svg>
    `,
    styles: [
        `
            svg {
                vertical-align: middle;
            }
        `,
    ],
})
export class ProfileIconComponent {
    @Input() public isActive: boolean;

    public getIconColor(): string {
        return this.isActive ? 'url(#linear-gradient)' : 'currentColor';
    }
}
