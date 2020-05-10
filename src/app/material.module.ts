import {NgModule} from '@angular/core'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
//import {MatIconModule} from '@angular/material/icon';
//import {MatIconRegistry } from '@angular/material/icon';
 
@NgModule({
    imports: [MatInputModule, MatButtonModule],
    exports: [MatInputModule, MatButtonModule]
})
export class MaterialModule {}