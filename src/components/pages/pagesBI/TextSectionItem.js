import "./graphs.css";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import NavbarSub from "./NavbarSub";
import { Container, Row, Col } from "react-grid-system";
import "./BoxLegend.css";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import GraphItem from "./GraphItem";


function TextSectionItem(props) {
    return (
        <section class="page-section-sub bg-primary" id="about">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="text-white mt-0">{props.titlesection}</h2>
              <hr class="divider divider-light" />
              <p class="text-white-75 mb-4"> {props.textsection}
  
              </p>
            </div>
          </div>
        </div>
      </section>
        );
    }
export default TextSectionItem;
