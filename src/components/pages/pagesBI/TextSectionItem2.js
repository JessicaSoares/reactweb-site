import "./graphs.css";
import "./BoxLegend.css";
import React from "react";
import styled, { keyframes } from "styled-components";
import wave from "../../../assets/waves.svg";
import ModalDownload from "./ModalDownload"

const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
  img,svg{
    width:100%;
    height:auto;
}
`;

function TextSectionItem(props) {
    return (
        <section class="page-section-sub bg-primary" id="about">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="text-white mt-0">{props.titlesection}</h2>
              <p class="text-white-75 mb-4"> {props.textsection}
             
              </p>

              {props.modaltype}
            </div>
        
          </div>
        </div>
      </section>


        );
    }
export default TextSectionItem;
