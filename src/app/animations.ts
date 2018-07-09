// import the required animation functions from the angular animations module
import { trigger, query, animate, transition, style, stagger, state } from '@angular/animations';

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [

        // route 'enter' transition
        transition('* <=> *', [
            query(':enter', [

                // css styles at start of transition
                style({ opacity: 0 }),

                // animation and styles at end of transition
                animate('100ms ease-in-out', style({ opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ opacity: 1 }),
                // animation and styles at end of transition
                animate('100ms ease-in-out', style({ opacity: 0 }))
            ], { optional: true }),
        ]),
    ])

export const staggerAnimationList =
    trigger('staggerAnimation', [
        transition('void => *', [
            query('.movie-list', style({ transform: 'translateX(-250px)' })),
            query('.movie-list',
                stagger(
                    '10ms', [
                        animate('150ms ease-in', style({ transform: 'translateX(0px)' }))
                    ])
            )
        ]),
        transition('* => void', [
            query('.movie-list', style({ transform: 'translateX(0px)' })),
            query('.movie-list',
                stagger(
                    '5ms', [
                        animate('150ms', style({ transform: 'translateX(250px)' }))
                    ])
            )
        ])
    ])

export const shrinkAnimation =
    trigger('shrinkOut', [
        state('in', style({ height: '*' })),
        transition('* => void', [
            style({ height: '*' }),
            animate(250, style({ height: 0 }))
        ])
    ])