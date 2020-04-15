import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const COMPONENTS = [NavBarComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [COMPONENTS, NgZorroAntdModule],
})
export class SharedModule {}
