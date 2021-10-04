import { transition, trigger, useAnimation } from '@angular/animations';
import { bounce, bounceOutUp } from 'ng-animate';

export const boxAnimation = trigger('bounce', [
    transition('void => *', useAnimation(bounce)),
    transition('* => void', useAnimation(bounceOutUp, { params: { timing: 3, delay: 0.3 } }))
])