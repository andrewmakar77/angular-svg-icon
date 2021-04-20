import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SvgIconsModule } from "@ngneat/svg-icon";

import { AppComponent } from "./app.component";

import { appFirst } from "./svg/app-first.icon";
import { appSecond } from "./svg/app-second.icon";

const icons = [appFirst, appSecond];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SvgIconsModule.forRoot({
      icons,
      sizes: {
        lg: "64px"
      },
      defaultSize: "md"
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
