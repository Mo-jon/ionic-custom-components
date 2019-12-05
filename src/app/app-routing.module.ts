import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "list",
    loadChildren: () => import("./list/list.module").then(m => m.ListPageModule)
  },
  {
    path: "goodsCard",
    loadChildren: "./goods-card/goods-card.module#GoodsCardPageModule"
  },
  {
    path: "evaluateCard",
    loadChildren: "./evaluate-card/evaluate-card.module#EvaluateCardPageModule"
  },
  {
    path: "filterMenu",
    loadChildren: "./filter-menu/filter-menu.module#FilterMenuPageModule"
  },
  {
    path: "shareModal",
    loadChildren: "./share-modal/share-modal.module#ShareModalPageModule"
  },
  {
    path: "searchInput",
    loadChildren: "./search-input/search-input.module#SearchInputPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
