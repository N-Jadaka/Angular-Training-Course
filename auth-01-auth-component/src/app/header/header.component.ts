import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements  OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}


  ngOnInit(): void{
   this.userSub =  this.authService.user.subscribe(user => {
     this.isAuthenticated = !user ? false : true;
     //or !!user
     console.log(!user);
     console.log(!!user);
   });

  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
