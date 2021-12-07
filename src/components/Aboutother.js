import React, { useState, useEffect } from 'react';
import { CgSearch } from 'react-icons/cg';
import { BsGraphUp } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { AiOutlineAim } from 'react-icons/ai';
import './Aboutother.css';

function Aboutother() {
    return (
      <>
        <section class="page-section bg-primary" id="about">
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-lg-8 text-center">
                <h2 class="text-white mt-0">Sobre o Observatório</h2>
                <hr class="divider divider-light" />
                <p class="text-white-75 mb-4">
                  É um portal voltado ao monitoramento e planejamento do
                  desenvolvimento do Município de Parauapebas. Consiste em um
                  Repositório único de dados para exposição de informações que
                  visam subsidiar e oferecer ao Governo do Município, suporte ao
                  planejamento de políticas públicas, investimentos, tomada de
                  decisões e análise dos principais fatores que afetam a
                  competitividade e desempenho econômico do Município em
                  diversos segmentos tais como: saúde, educação, agronegócios,
                  indústria, segurança, infra-estrutura e economia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="page-section" id="services">
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5">
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <div class="mb-2">
                    <i class="bi-gem fs-1 text-primary">
                      {" "}
                      <AiOutlineAim color="#00773D;" />
                    </i>
                  </div>
                  <h3 class="h4 mb-2">Objetivos</h3>
                  <ol class="text-muted mb-0">
                    <li>
                      • Contribuir para monitoramento de fatores de desempenho
                      do Município;
                    </li>
                    <li>
                      • Transparência das ações relativas ao desenvolvimento
                      econômico e infra-estrutural;
                    </li>
                    <li>
                      • Funcionar como ferramenta de apoio à gestão pública;
                    </li>
                    <li>• Subsidiar as tomadas de decisões;</li>
                  </ol>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <div class="mb-2">
                    <i class="bi-gem fs-1 text-primary">
                      {" "}
                      <CgSearch color="#00773D;" />
                    </i>
                  </div>
                  <h3 class="h4 mb-2">O que encontra</h3>
                  <ol class="text-muted mb-0">
                    <li>• Dashboards, gráficos, infográficos e mapas;</li>
                    <li>• Relatórios estatísticos;</li>
                    <li>• Indicadores de desempenho;</li>
                    <li>• Georreferenciamento de Informações;</li>
                    <li>• Transparências de ações e investimentos</li>
                  </ol>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <div class="mb-2">
                    <i class="bi-laptop fs-1 text-primary">
                      <BsGraphUp color="#00773D;" />
                    </i>
                  </div>
                  <h3 class="h4 mb-2">Tipos de indicadores</h3>
                  <ol class="text-muted mb-0">
                    <li>
                      • <b>Sociais</b>: População, trabalho, educação;
                    </li>

                    <li>
                      • <b>Econômicos</b>: agricultura, pecuária, indústria,
                      construção, comércio;
                    </li>

                    <li>
                      • <b>Outros</b>: Gênero, cultura, recreação e esporte,
                      turismo, meio ambiente.
                    </li>
                  </ol>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-center">
                <div class="mt-5">
                  <div class="mb-2">
                    <i class="bi-globe fs-1 text-primary">
                      <BsPeopleFill color="#00773D;" />
                    </i>
                  </div>
                  <h3 class="h4 mb-2">A quem se destina?</h3>
                  <ol class="text-muted mb-0">
                    <li class="text-muted mb-0">
                      • Gestores públicos para monitoramento e tomada de
                      decisão;{" "}
                    </li>
                    <li> • Empresários e Investidores; </li>
                    <li> • Comunidade Científica;; </li>
                    <li>
                      {" "}
                      • Comunidade Universitária e Estudantes do ensino
                      Fundamental e Médio;
                    </li>
                    <li> • Público em Geral; . </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
} 

export default Aboutother;