import { Component } from '@angular/core'
import { NavigationBarComponent } from '@components/navigation-bars'
import { HeroComponent } from './components/hero/hero.component'
import { StatsComponent } from './components/stats/stats.component'
import { FeaturesComponent } from './components/features/features.component'
import { InfoComponent } from './components/info/info.component'
import { LogosComponent } from './components/logos/logos.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { FaqComponent } from './components/faq/faq.component'
import { CtaComponent } from './components/cta/cta.component'
import { FooterComponent } from './components/footer/footer.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { CountriesComponent } from './components/countries/countries.component'
import { StepsComponent } from './components/steps/steps.component'
import { AllDestinationComponent } from './components/all-destination/all-destination.component'
import { AboutComponent } from './components/about/about.component'



@Component({
  selector: 'landings-mobile-showcase',
  standalone: true,
  imports: [
    NavigationBarComponent,
    HeroComponent,
    StatsComponent,
    FeaturesComponent,
    InfoComponent,
    LogosComponent,
    TestimonialComponent,
    FaqComponent,
    CtaComponent,
    FooterComponent,
    NavbarComponent,
    CountriesComponent,
    StepsComponent,
    AllDestinationComponent,
    AboutComponent
  ],
  templateUrl: './mobile-showcase.component.html',
  styles: ``,
})
export class MobileShowcaseComponent {}
