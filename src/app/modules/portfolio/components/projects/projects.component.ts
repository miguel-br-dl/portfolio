import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/edj.png',
      alt: 'Projeto e-DJ',
      title: 'Diário da Justiça Eletrônico',
      with: '150px',
      height: '92px',
      description:
        '<p>TODO</p>',
      links: [
        {
          name: 'Conheça o e-DJ',
          href: 'https://www.tjpr.jus.br/diario-da-justica',
        },
      ],
    },
    {
      src: 'assets/img/projects/larry.png',
      alt: 'Larry Assessor-IAA',
      title: 'Larry Assessor-IAA',
      with: '92px',
      height: '92px',
      description:
        '<p>TODO</p>',
      links: [
        {
          name: 'Conheça o Larry Assessor-IAA',
          href: 'https://www.tjpr.jus.br/destaques/-/asset_publisher/1lKI/content/robo-larry-assessor-iaa-traz-inteligencia-artificial-para-os-recursos-especiais-e-extraordinarios/18319',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
