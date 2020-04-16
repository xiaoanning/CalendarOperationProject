import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TaskComponent } from './components/task/task.component';

const COMPONENTS = [NavBarComponent, TaskComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [COMPONENTS, NgZorroAntdModule],
})
export class SharedModule {}
