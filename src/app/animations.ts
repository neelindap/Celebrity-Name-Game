// import the required animation functions from the angular animations module
import { trigger, query, animate, transition, style, stagger } from '@angular/animations';

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [

        // route 'enter' transition
        transition('* <=> *', [
            query(':enter', [

                // css styles at start of transition
                style({ opacity: 0, transform: 'translateX(-250px)' }),

                // animation and styles at end of transition
                animate('10ms', style({ opacity: 1, transform: 'translateX(0px)' }))
            ], { optional: true }),
            query(':leave', [
                style({ opacity: 1, transform: 'translateX(0px)' }),
                // animation and styles at end of transition
                animate('10ms' , style({ opacity: 0, transform: 'translateX(-250px)'}))
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