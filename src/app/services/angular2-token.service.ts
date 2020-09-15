import { Injectable }       from '@angular/core';
import { CanActivate }      from '@angular/router';
import { Http, Response, Headers, Request, RequestMethod, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router }   from '@angular/router';
import { Observable }       from 'rxjs/Observable';
import { SERVER_URL } from '../common';
import { GeneralService } from './general.service';
import 'rxjs/add/operator/share';
export const USER_SIGNED_INFO = {
  SIGNED_IN: 1,
  VALIDATING: 2,
  NOT_SIGNED_IN: 0
};
import { UserType, UserData, User } from '../models';
declare var firebase: any;
declare var window: any, opr: any, safari: any, InstallTrigger:any, document: any;
@Injectable()
export class Angular2TokenService implements CanActivate {
    private _currentUserType: UserType;
    private _currentAuthData: string;
    private _currentUserData: User;
    private _isValidating: boolean = false;
    private _options: any = {
      signInPath: "/users/sign_in",
      validateTokenPath: "/users/data/",
      signOutPath: "/users/sign_out",
      signInRedirect: '/login'
    };
    private firebaseToken: any = null;
    get currentUserData(): User {
        return this._currentUserData;
    }

    set currentUserData(user: User){
      this._currentUserData = user;
    }

    get currentAuthData(): string {
        return this._currentAuthData;
    }

    constructor(
        private _http: Http,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private general: GeneralService
    ) {
      this.validateToken();
    }

    _constructUserPath(): string {
      // return '/assets/api/v1';
      return SERVER_URL;
    }

    public userVoted(remainingVotes: number){
      if(remainingVotes < 0)
        return;
      this._currentUserData.user_votes = remainingVotes;
    }

    userSignedIn(): number {
      if(this._isValidating)
        return USER_SIGNED_INFO.VALIDATING;
      if(this._currentUserData == null)
        return USER_SIGNED_INFO.NOT_SIGNED_IN;
      return USER_SIGNED_INFO.SIGNED_IN;
    }

    canActivate() {
         if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
 
        else {
            // Redirect user to sign in if signInRedirect is set
            if(this._options.signInRedirect)
                this._router.navigate([this._options.signInRedirect]);

            return false;
        }
    }

    isValidating(){
      return this._isValidating;
    }

    // Sign in request and set storage
    signIn(email: string, password: string, userType?: string): Observable<Response> {
        let body = 'user[password]=' + (password) + '&user[email]=' + (email);
        let observ = this.postFormData(this._options.signInPath, body);
        observ.subscribe(res => {
          this._currentUserData = res.json();
          this._setAuthData("authenticated");
          this.validateToken();
        }, error => {
          this._setAuthData(null);
        });
        localStorage.setItem('currentUser', JSON.stringify(this._currentUserData));
        
        return observ;
    }

    // Sign out request and delete storage
    signOut(): Observable<Response> {
        // let observ = this.delete(this._options.signOutPath );
        let baseHeaders: { [key:string]: string; } = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        };
        let requestOptions = new RequestOptions({
            headers: new Headers(baseHeaders),
            withCredentials: true,
            method: RequestMethod.Delete,
            url:    this._constructUserPath() + this._options.signOutPath,
            body:   'user[email]=' + encodeURI(this._currentUserData.email)
        });
        localStorage.clear();
        this._currentAuthData = null;
        this._currentUserType = null;
        this._currentUserData = null;
        localStorage.removeItem('currentUser');
        
        return this.sendHttpRequest(requestOptions);
    }

    postFormData(path: string, data: any): Observable<Response> {
      let baseHeaders: { [key:string]: string; } = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      };
      let requestOptions = new RequestOptions({
          headers: new Headers(baseHeaders),
          withCredentials: true,
          method: RequestMethod.Post,
          url:    this._constructUserPath() + path,
          body:   encodeURI(data)
      });
      return this.sendHttpRequest(requestOptions);
    }

    // Validate token request
    validateToken(): Observable<Response> {
        let observ = this.get(this._options.validateTokenPath);
        this._isValidating = true;
        observ.subscribe(res => {
          let result = res.json();
          if(result.success == true){
            this._currentUserData = result.user;
            this._setAuthData("authenticated");
            this._router.navigate(['default']);
          }
          else
            this._router.navigate([this._options.signInRedirect]);
          this._isValidating = false;
        }, error => {
          this._setAuthData(null);
          this._isValidating = false;
          this._router.navigate([this._options.signInRedirect]);
        });

        return observ;
    }

    // Write auth data to storage
    private _setAuthData(authData: string) {
      this._currentAuthData = authData;
    }

    // Try to load user config from storage
    private _tryLoadAuthData() {
      if (this._currentAuthData != null)
          this.validateToken();
    }


    // Construct and send Http request
    sendHttpRequest(requestOptions: RequestOptions): Observable<Response> {

        let baseRequestOptions: RequestOptions;
        let baseHeaders: { [key:string]: string; } = {
          'Content-Type': 'application/json',//'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        };
        // Merge auth headers to request if set
        baseRequestOptions = new RequestOptions({
            headers: new Headers(baseHeaders),
            withCredentials: true,
        });

        // Merge standard and custom RequestOptions
        baseRequestOptions = baseRequestOptions.merge(requestOptions);

        let response = this._http.request(new Request(baseRequestOptions)).share();

        this._handleResponse(response);

        return response;
    }


    // Check if response is complete and newer, then update storage
    private _handleResponse(response: Observable<Response>) {
        response.subscribe(res => {
            this._parseAuthHeadersFromResponse(<any>res);
        }, error => {
            this._parseAuthHeadersFromResponse(<any>error);
        });
    }

    private _parseAuthHeadersFromResponse(data: any){
      let headers = data.headers;
    }

    get(path: string): Observable<Response> {
        return this.sendHttpRequest(new RequestOptions({
            method: RequestMethod.Get,
            url:    this._constructUserPath() + path
        }));
    }

    post(path: string, data: any): Observable<Response> {
        return this.sendHttpRequest(new RequestOptions({
            method: RequestMethod.Post,
            url:    this._constructUserPath() + path,
            body:   data
        }));
    }
}
