import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree.component';
import { NodeComponent } from './node.component';
import { TreeService } from './tree.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    TreeComponent,
    NodeComponent
  ],
  providers:[TreeService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}