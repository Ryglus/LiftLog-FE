import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WorkoutsComponent } from './pages/workouts/workouts.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'workouts', component: WorkoutsComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'exercises', component: ExercisesComponent }
    ]
  }
];
