import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';

import { HeaderComponent } from './components/shared/header/header.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HeroOneComponent } from './components/pages/home-one/hero-one/hero-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { PromoComponent } from './components/pages/home-one/promo/promo.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { CtaOneComponent } from './components/shared/cta-one/cta-one.component';
import { IntegrationOneComponent } from './components/shared/integration-one/integration-one.component';
import { FaqOneComponent } from './components/shared/faq-one/faq-one.component';
import { WorkProcessComponent } from './components/shared/work-process/work-process.component';
import { WhyChooseUsComponent } from './components/pages/home-one/why-choose-us/why-choose-us.component';
import { ImageFeaturesComponent } from './components/pages/home-one/image-features/image-features.component';
import { HeroTwoComponent } from './components/pages/home-two/hero-two/hero-two.component';
import { CustomerReviewComponent } from './components/pages/home-two/customer-review/customer-review.component';
import { WorkProcessTwoComponent } from './components/shared/work-process-two/work-process-two.component';
import { CtaTwoComponent } from './components/shared/cta-two/cta-two.component';
import { ImageFeaturesTwoComponent } from './components/pages/home-two/image-features-two/image-features-two.component';
import { ImageFeaturesThreeComponent } from './components/pages/home-two/image-features-three/image-features-three.component';
import { ImageFeaturesFourComponent } from './components/pages/home-two/image-features-four/image-features-four.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HeroThreeComponent } from './components/pages/home-three/hero-three/hero-three.component';
import { CustomerLogoComponent } from './components/pages/home-three/customer-logo/customer-logo.component';
import { PromoTwoComponent } from './components/shared/promo-two/promo-two.component';
import { FeaturesImageFiveComponent } from './components/shared/features-image-five/features-image-five.component';
import { FeaturesImageSixComponent } from './components/pages/home-three/features-image-six/features-image-six.component';
import { IntegrationTwoComponent } from './components/shared/integration-two/integration-two.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { HomeSevenComponent } from './components/pages/home-seven/home-seven.component';
import { HomeEightComponent } from './components/pages/home-eight/home-eight.component';
import { HeroFourComponent } from './components/pages/home-four/hero-four/hero-four.component';
import { HeroFiveComponent } from './components/pages/home-five/hero-five/hero-five.component';
import { HeroSixComponent } from './components/pages/home-six/hero-six/hero-six.component';
import { HeroSevenComponent } from './components/pages/home-seven/hero-seven/hero-seven.component';
import { HeroEightComponent } from './components/pages/home-eight/hero-eight/hero-eight.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { SingleServiceComponent } from './components/pages/single-service/single-service.component';
import { NewsComponent } from './components/pages/news/news.component';
import { NewsDetailsComponent } from './components/pages/news-details/news-details.component';
import { IntegrationsComponent } from './components/pages/integrations/integrations.component';
import { SingleIntegrationComponent } from './components/pages/single-integration/single-integration.component';
import { CareerComponent } from './components/pages/career/career.component';
import { PromoThreeComponent } from './components/shared/promo-three/promo-three.component';
import { WorkProcessThreeComponent } from './components/shared/work-process-three/work-process-three.component';
import { PriceTabComponent } from './components/shared/price-tab/price-tab.component';
import { FaqTwoComponent } from './components/shared/faq-two/faq-two.component';
import { FaqThreeComponent } from './components/shared/faq-three/faq-three.component';
import { SubscribeCtaComponent } from './components/shared/subscribe-cta/subscribe-cta.component';
import { PageHeaderComponent } from './components/pages/about/page-header/page-header.component';
import { OurStoryComponent } from './components/pages/about/our-story/our-story.component';
import { ImgFeaturesSixComponent } from './components/pages/home-four/img-features-six/img-features-six.component';
import { ImgFeaturesSevenComponent } from './components/pages/home-four/img-features-seven/img-features-seven.component';
import { OthersPageHeaderComponent } from './components/shared/others-page-header/others-page-header.component';
import { OpenPositionComponent } from './components/pages/career/open-position/open-position.component';
import { WhyJoinUsComponent } from './components/pages/career/why-join-us/why-join-us.component';
import { CareerSingleComponent } from './components/pages/career-single/career-single.component';
import { CareerSinglePageHeaderComponent } from './components/pages/career-single/career-single-page-header/career-single-page-header.component';
import { RelatedJobsComponent } from './components/pages/career-single/related-jobs/related-jobs.component';
import { JobDetailsComponent } from './components/pages/career-single/job-details/job-details.component';
import { PromoFourComponent } from './components/pages/home-five/promo-four/promo-four.component';
import { FeatureTabComponent } from './components/pages/home-five/feature-tab/feature-tab.component';
import { CtaThreeComponent } from './components/shared/cta-three/cta-three.component';
import { WorkProcessFourComponent } from './components/shared/work-process-four/work-process-four.component';
import { IntegrationThreeComponent } from './components/shared/integration-three/integration-three.component';
import { BlogColumnComponent } from './components/shared/blog-column/blog-column.component';
import { BrandLogoComponent } from './components/shared/brand-logo/brand-logo.component';
import { PromoFiveComponent } from './components/shared/promo-five/promo-five.component';
import { TestimonialTabsComponent } from './components/shared/testimonial-tabs/testimonial-tabs.component';
import { PriceListComponent } from './components/shared/price-list/price-list.component';
import { PromoEightComponent } from './components/pages/home-eight/promo-eight/promo-eight.component';
import { FeatureImageTenComponent } from './components/pages/home-eight/feature-image-ten/feature-image-ten.component';
import { FeatureImageElevenComponent } from './components/pages/home-eight/feature-image-eleven/feature-image-eleven.component';
import { CtaFourComponent } from './components/shared/cta-four/cta-four.component';
import { VideoPromoComponent } from './components/pages/home-eight/video-promo/video-promo.component';
import { TestimonialThreeComponent } from './components/pages/home-eight/testimonial-three/testimonial-three.component';
import { DownloadCtaComponent } from './components/pages/home-eight/download-cta/download-cta.component';
import { MetricsComponent } from './components/pages/home-seven/metrics/metrics.component';
import { ServicesGridComponent } from './components/shared/services-grid/services-grid.component';
import { FooterWithBgComponent } from './components/shared/footer-with-bg/footer-with-bg.component';
import { FeaturesSectionOneComponent } from './components/pages/home-seven/features-section-one/features-section-one.component';
import { FeaturesSectionTwoComponent } from './components/pages/home-seven/features-section-two/features-section-two.component';
import { ContactPromoComponent } from './components/pages/contact/contact-promo/contact-promo.component';
import { ContactUsFormComponent } from './components/pages/contact/contact-us-form/contact-us-form.component';
import { TeamsComponent } from './components/pages/about/teams/teams.component';
import { OfficeLocationsComponent } from './components/pages/about/office-locations/office-locations.component';
import { ContactSectionComponent } from './components/pages/home-seven/contact-section/contact-section.component';
import { ServiceImageFeatureOneComponent } from './components/pages/single-service/service-image-feature-one/service-image-feature-one.component';
import { ServiceImageFeatureTwoComponent } from './components/pages/single-service/service-image-feature-two/service-image-feature-two.component';
import { ServiceContactFormComponent } from './components/pages/single-service/service-contact-form/service-contact-form.component';
import { NewsPageHeaderComponent } from './components/pages/news/news-page-header/news-page-header.component';
import { HelpCenterComponent } from './components/pages/help-center/help-center.component';
import { HelpCenterDetailsComponent } from './components/pages/help-center-details/help-center-details.component';
import { HelpCenterPageHeaderComponent } from './components/pages/help-center/help-center-page-header/help-center-page-header.component';
import { HelpArticleComponent } from './components/pages/help-center/help-article/help-article.component';
import { HelpCenterDetailsArticleComponent } from './components/pages/help-center-details/help-center-details-article/help-center-details-article.component';
import { RequestForDemoComponent } from './components/pages/request-for-demo/request-for-demo.component';
import { RequestForDemoFormComponent } from './components/pages/request-for-demo-form/request-for-demo-form.component';
import { RequestForDemoFooterComponent } from './components/pages/request-for-demo-footer/request-for-demo-footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { PasswordResetComponent } from './components/pages/password-reset/password-reset.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { IntegrationBoxComponent } from './components/pages/integrations/integration-box/integration-box.component';
import { SingleIntegrationPageHeaderComponent } from './components/pages/single-integration/single-integration-page-header/single-integration-page-header.component';
import { RelatedIntegrationsComponent } from './components/pages/single-integration/related-integrations/related-integrations.component';
import { IntegrationArticleComponent } from './components/pages/single-integration/integration-article/integration-article.component';
import { TestimonialSliderComponent } from './components/shared/testimonial-slider/testimonial-slider.component';
import { LatestNewsComponent } from './components/pages/home-two/latest-news/latest-news.component';
import { AllNewsComponent } from './components/pages/news/all-news/all-news.component';
import { RelatedNewsComponent } from './components/pages/news/related-news/related-news.component';
import { SingleNewsComponent } from './components/pages/news-details/single-news/single-news.component';
import { NewsCtaComponent } from './components/pages/news-details/news-cta/news-cta.component';
import { ImageIconFeaturesComponent } from './components/pages/home-five/image-icon-features/image-icon-features.component';
import { WhyChooseUsListComponent } from './components/pages/home-five/why-choose-us-list/why-choose-us-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeOneComponent,
    HeroOneComponent,
    HomeTwoComponent,
    PromoComponent,
    FooterComponent,
    CtaOneComponent,
    IntegrationOneComponent,
    FaqOneComponent,
    WorkProcessComponent,
    WhyChooseUsComponent,
    ImageFeaturesComponent,
    HeroTwoComponent,
    CustomerReviewComponent,
    WorkProcessTwoComponent,
    CtaTwoComponent,
    ImageFeaturesTwoComponent,
    ImageFeaturesThreeComponent,
    ImageFeaturesFourComponent,
    HomeThreeComponent,
    HeroThreeComponent,
    CustomerLogoComponent,
    PromoTwoComponent,
    FeaturesImageFiveComponent,
    FeaturesImageSixComponent,
    IntegrationTwoComponent,
    HomeFourComponent,
    HomeFiveComponent,
    HomeSixComponent,
    HomeSevenComponent,
    HomeEightComponent,
    HeroFourComponent,
    HeroFiveComponent,
    HeroSixComponent,
    HeroSevenComponent,
    HeroEightComponent,
    ContactComponent,
    AboutComponent,
    PricingComponent,
    ServicesComponent,
    SingleServiceComponent,
    NewsComponent,
    NewsDetailsComponent,
    IntegrationsComponent,
    SingleIntegrationComponent,
    CareerComponent,
    PromoThreeComponent,
    WorkProcessThreeComponent,
    PriceTabComponent,
    FaqTwoComponent,
    FaqThreeComponent,
    SubscribeCtaComponent,
    PageHeaderComponent,
    OurStoryComponent,
    ImgFeaturesSixComponent,
    ImgFeaturesSevenComponent,
    OthersPageHeaderComponent,
    OpenPositionComponent,
    WhyJoinUsComponent,
    CareerSingleComponent,
    CareerSinglePageHeaderComponent,
    RelatedJobsComponent,
    JobDetailsComponent,
    PromoFourComponent,
    FeatureTabComponent,
    CtaThreeComponent,
    WorkProcessFourComponent,
    IntegrationThreeComponent,
    BlogColumnComponent,
    BrandLogoComponent,
    PromoFiveComponent,
    TestimonialTabsComponent,
    PriceListComponent,
    PromoEightComponent,
    FeatureImageTenComponent,
    FeatureImageElevenComponent,
    CtaFourComponent,
    VideoPromoComponent,
    TestimonialThreeComponent,
    DownloadCtaComponent,
    MetricsComponent,
    ServicesGridComponent,
    FooterWithBgComponent,
    FeaturesSectionOneComponent,
    FeaturesSectionTwoComponent,
    ContactPromoComponent,
    ContactUsFormComponent,
    TeamsComponent,
    OfficeLocationsComponent,
    ContactSectionComponent,
    ServiceImageFeatureOneComponent,
    ServiceImageFeatureTwoComponent,
    ServiceContactFormComponent,
    NewsPageHeaderComponent,
    HelpCenterComponent,
    HelpCenterDetailsComponent,
    HelpCenterPageHeaderComponent,
    HelpArticleComponent,
    HelpCenterDetailsArticleComponent,
    RequestForDemoComponent,
    RequestForDemoFormComponent,
    RequestForDemoFooterComponent,
    LoginComponent,
    SignupComponent,
    PasswordResetComponent,
    PageNotFoundComponent,
    ComingSoonComponent,
    IntegrationBoxComponent,
    SingleIntegrationPageHeaderComponent,
    RelatedIntegrationsComponent,
    IntegrationArticleComponent,
    TestimonialSliderComponent,
    LatestNewsComponent,
    AllNewsComponent,
    RelatedNewsComponent,
    SingleNewsComponent,
    NewsCtaComponent,
    ImageIconFeaturesComponent,
    WhyChooseUsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
