import "./graphs.css";
import "./BoxLegend.css";
import React from "react";
import styled, { keyframes } from "styled-components";

import ModalDownload from "./ModalDownload"


function TextSectionItem(props) {
    return (
        <section class="page-section-sub bg-primary" id="about">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="text-white mt-0">{props.titlesection}</h2>
              <p class="text-white-75 mb-4"> {props.textsection}
             
              </p>
            </div>
        
          </div>
        </div>
      </section>


        );
    }
export default TextSectionItem;
