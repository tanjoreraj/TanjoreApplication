import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRegistrationComponent } from '../app/registrationcomponent/registerUser.component';
import { InterestListsComponent } from '../app/interestsListComponent/interestLists.component';

const appRoutes: Routes = [
  {path: 'UserRegistration', component: UserRegistrationComponent},
    {path: 'InterestList', component: InterestListsComponent}
    /*children: [
      { path: 'InterestList', component: InterestListsComponent },
      { path: 'ProductOffer/:productOfferId', component: ProductOfferComponent, canDeactivate: [preventUnsavedChangesGuard], 
              canActivate: [AccessGuard] },
      { path: 'Bundle/:bundleId', component: BundleComponent, canDeactivate: [preventUnsavedChangesGuard] },
      { path: 'CreateProductOffer', component: ProductOfferComponent, canDeactivate: [preventUnsavedChangesGuard] },
      { path: 'ProductOfferListComponent', component: ProductOfferListComponent },
      { path: 'PackagingWorkspace', component: PackagingWorkspaceComponent },
      { path: 'PriceableItem/:productOfferId/:itemInstanceId/:PIType/:child', component: PriceableItemDetailsComponent, 
              canDeactivate: [priceableItemDetailsUnsavedChangesGuard], canActivate: [AccessGuard] },
      { path: 'Localization', component: LocalizationComponent, canDeactivate: [UnsavedChangesGuard] },
      { path: 'PriceableItem/:productOfferId/:itemInstanceId/:PIType', component: PriceableItemDetailsComponent, 
              canDeactivate: [priceableItemDetailsUnsavedChangesGuard, UnsavedChangesGuard], canActivate: [AccessGuard] },
      { path: 'BundleProductOffer/:bundleId/:productOfferId', component: ProductOfferComponent, 
              canDeactivate: [preventUnsavedChangesGuard], canActivate: [AccessGuard] },
      { path: 'SharedRatelist', component: SharedPricelistComponent },
      { path: 'AuditLog', component: AuditLogComponent},
      { path: 'ratelistDetails/:pricelistId', component: SharedPricelistDetailsComponent},
      { path: 'SubscriptionProperties', component: SubscriptionPropertyDetailsComponent, canDeactivate: [UnsavedChangesGuard] },
      { path: 'PriceableItemTemplates', component: PriceableItemTemplateComponent },
      { path: 'PriceableItemTemplates/:templateId/:kind', component: PiTemplateDetailsComponent, canDeactivate: [UnsavedChangesGuard] },
      { path: 'PriceableItemTemplates/:templateId/:kind/:isChild', component: PiTemplateDetailsComponent, canDeactivate: [UnsavedChangesGuard] },
      { path: 'AdjustmentReasonsGrid', component: AdjustmentReasonsGridComponent, canDeactivate: [UnsavedChangesGuard]},
      { path: 'PriceableItemTemplates', component: PriceableItemAdjustmentComponent}
    ]
  },
  { path: '', redirectTo: 'UserRegistration/InterestList', pathMatch: 'full' },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }