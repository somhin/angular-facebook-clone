import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PostComponent,
  ],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialModule],
  exports: [HeaderComponent, SidebarComponent, FooterComponent, PostComponent],
})
export class SharedModule {}
