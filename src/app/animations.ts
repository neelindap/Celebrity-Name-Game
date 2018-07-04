// import the required animation functions from the angular animations module
import { trigger, query, animate, transition, style,stagger } from '@angular/animations';

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [

        // route 'enter' transition
        transition('* <=> *', [
            query(':enter', [

                // css styles at start of transition
                style({ opacity: 0 }),

                // animation and styles at end of transition
                animate('5s ease-out'
                , style({ opacity: 1 }))
            ], {optional : true}),
            query(':leave', [
                // animation and styles at end of transition
                animate('5s ease-out'
                , style({ opacity: 0 }))
            ], {optional : true}),
    ]),
])

export const staggerAnimation = 
trigger('listStagger', [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger(
            '50ms',
            animate(
              '550ms ease-out',
              style({ opacity: 1, transform: 'translateY(0px)' })
            )
          )
        ],
        { optional: true }
      ),
      query(':leave', animate('50ms', style({ opacity: 0 })), {
        optional: true
      })
    ])
  ])