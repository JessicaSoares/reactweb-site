import React, { useState, useEffect } from 'react';

import { NavLink,Link } from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import { BsGraphUp } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';






import './Aboutother.css';


function Aboutother() {
    return (
        <>
                <section class="page-section" id="services">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">Sobre o Observatório</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-gem fs-1 text-primary"> <CgSearch color='#0f295a' /></i></div>
                            <h3 class="h4 mb-2">O que encontra</h3>
                            <p class="text-muted mb-0"><p>•  Dashboards, gráficos, infográficos e mapas;</p>
<p>•  Relatórios estatísticos;</p>
<p>•  Indicadores de desempenho;</p>
<p>•  Georreferenciamento de Informações;</p>
<p>•  Transparências de ações e investimentos</p></p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"><BsGraphUp color='#0f295a' /></i></div>
                            <h3 class="h4 mb-2">Tipos de indicadores</h3>
                            <p class="text-muted mb-0"><p>•  Sociais: População, trabalho, educação, saúde, habitação.</p>
<p></p>
<p>• Econômicos: agricultura, pecuária, indústria, construção, comércio;</p>
<p></p>
<p>• Outros: Gênero, cultura, recreação e esporte, turismo, meio ambiente.</p></p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-globe fs-1 text-primary"><BsPeopleFill color='#0f295a' /></i></div>
                            <h3 class="h4 mb-2">A que se destina?</h3>
                            <p class="text-muted mb-0">•  Gestores públicos para monitoramento e tomada de decisão;
                            <p>• Dashboards, gráficos, infográficos e mapas; </p>
<p>• Relatórios estatísticos; </p>
<p>• Indicadores de desempenho;</p>
<p>• Georreferenciamento de Informações;</p>
</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    );
} 

export default Aboutother;