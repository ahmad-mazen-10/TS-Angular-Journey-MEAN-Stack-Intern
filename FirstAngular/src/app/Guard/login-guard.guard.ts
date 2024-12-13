import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const LoginGuard: CanActivateFn = (route, state) => {
  const _tokenServices = inject(TokenService);
  const _router = inject(Router);
  if (_tokenServices.token !== null) {
    return true;
  } else {
    _router.navigate(['/signup']);
    return false;
  }
};
