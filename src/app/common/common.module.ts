import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [HeaderComponent, SearchBarComponent],
  imports: [CommonModule],
  exports: [CommonModule, HeaderComponent],
})
export class AppCommonModule {}
