import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'TDD Java',
        p: 'TJPR | 2025 - Present',
      },
      text: '<p>Desde o início de 2025 retorno às origens, como Analista de Sistema, aprimorando meu conhecimento em Desenvolvimento Orientado a Teste (TDD)</p>',
    },
    {
      summary: {
        strong: 'Banco de Robôs - Inteligência Artificial Generativa',
        p: 'TJPR | 2022-2024'
      },
      text: '<p>TODO</p>',
    },
    {
      summary: {
        strong: 'Larry Assessor-IAA - Treinamento de modelos - Inteligência Artificial (clássica)',
        p: 'TJPR | 2021-2022'
      },
      text: '<p>TODO</p>',
    },
    {
      summary: {
        strong: 'Larry 1G - Estatísticas e Mineração de dados',
        p: 'TJPR | 2019-2020'
      },
      text: '<p>TODO</p>',
    },
    {
      summary: {
        strong: 'CONAN Eleitoral',
        p: 'TJPR | 2019'
      },
      text: '<p>TODO</p>',
    },
    {
      summary: {
        strong: 'SDP',
        p: 'TJPR | 2018 - 2020'
      },
      text: '<p>TODO</p>',
    },
    {
      summary: {
        strong: 'GAJUS',
        p: 'TJPR | 2017'
      },
      text: '<p>TODO</p>',
    },
    {
      summary: {
        strong: 'CAJU',
        p: 'TJPR | 2016'
      },
      text: '<p>TODO</p>',
    },
    {
      summary: {
        strong: 'Cível Papel',
        p: 'TJPR | 2012 - 2019'
      },
      text: '<p>TODO</p>',
    },
    {
      summary: {
        strong: 'Jurisprudência',
        p: 'TJPR | 2008 - 2012'
      },
      text: '<p>TODO</p>',
    },
    {
      summary: {
        strong: 'Banco de sentenças',
        p: 'TJPR | 2008 - 2012'
      },
      text: '<p>TODO</p>',
    },
    {
      summary: {
        strong: 'TJPR-Athos e e-DJ',
        p: 'TJPR | 2007 - 2008'
      },
      text: '<p>Em 2007 iniciei minha trajetória como servidor público no cargo de analista de sistemas no Tribunal de Justiça do Estado do Paraná (TJPR). Nesse período, auxiliei no desenvolvimento, manutenção e suporte a sistemas judiciais e administrativos, atuando diretamente na modernização tecnológica do órgão. Meu trabalho envolveu desde a análise de requisitos até a implementação de soluções que otimizassem os fluxos internos e atendessem às demandas do Poder Judiciário.</p><p> Um dos projetos mais relevantes em que estive envolvido foi o desenvolvimento do Diário da Justiça Eletrônico do Estado do Paraná. Essa iniciativa representou um marco na digitalização da comunicação oficial do TJPR, substituindo a publicação impressa feita pela Imprensa Oficial do Estado. O projeto exigiu uma abordagem multidisciplinar, envolvendo integração com outros sistemas jurídicos e administrativos</p><p> O impacto do Diário da Justiça Eletrônico foi significativo, tanto em termos de eficiência quanto de economia. A eliminação da dependência da imprensa oficial resultou em uma expressiva redução de custos para o Judiciário paranaense, além de acelerar a divulgação de atos processuais e administrativos. Essa transformação digital contribuiu para maior transparência, acessibilidade e celeridade na prestação jurisdicional, consolidando-se como uma referência para o Departamento de Tecnologia. </p>',
    },
  ]);
}
