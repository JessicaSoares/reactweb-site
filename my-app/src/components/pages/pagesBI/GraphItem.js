import React from "react";
import { Link } from "react-router-dom";
import "./graphs.css";
import Iframe from "react-iframe";
import NavbarSub from "./NavbarSub";
import { Container, Row, Col } from "react-grid-system";
import "./BoxLegend.css";
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Footer from '../../GraphFooter';
import wave from "../../../assets/waves.svg";
import styled, { keyframes } from "styled-components";

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

function GraphItem(props) {
  return (
      <>
      <Col sm={12}>
        {" "}
        <div className="boxlegend">
          <h1 className="titulobi">
            {props.titulobi}
          </h1>
          <Iframe url={props.url} className="economia" height="100%" /> <br />
        <Footer />
        <div class="relative-parent">
   <div class="relative">
   </div>
</div>
          <Accordion classname = "maisinfos" defaultActiveKey="1" >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Mais informações</Accordion.Header>
              <Accordion.Body >
              <div className="legend">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu purus, lacinia sit amet tellus eget, iaculis vehicula massa. Quisque in dignissim purus. Sed ultricies nulla eget semper sollicitudin. Vestibulum vel congue mauris, in posuere nibh. Praesent luctus nec nibh et tincidunt. Sed maximus diam nunc, sit amet sollicitudin eros dignissim eget. Nullam sit amet condimentum elit.
Duis non neque semper lectus rhoncus sagittis at sed libero. Maecenas felis justo, aliquam vel dui id, sodales gravida justo. Donec commodo tincidunt purus in vulputate. Integer varius massa ac nisl gravida, vel efficitur ante posuere. Cras a ipsum dolor. Nulla pellentesque malesuada orci consectetur tincidunt. Suspendisse congue nec augue sit amet sollicitudin. Nam tristique ipsum urna, ac consectetur nisl tincidunt ut. Aenean rutrum tortor sit amet felis scelerisque, aliquam mollis ante ultricies. Etiam ultricies diam odio, vel auctor sem efficitur at. Vestibulum rutrum orci bibendum magna congue eleifend. Cras ultricies, lacus vitae aliquet sagittis, dolor magna pulvinar nisi, non efficitur arcu est vel enim. Ut tincidunt augue id leo porta dignissim.
Nulla dolor tellus, semper ac elit in, ultricies vehicula tortor. Integer non consectetur lorem. Pellentesque vel feugiat velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In blandit, diam vitae vestibulum bibendum, ligula magna mollis odio, nec dapibus nulla ligula ac tortor. Nulla sodales sapien quam, sed malesuada metus fringilla vulputate. Sed lacinia venenatis gravida. Pellentesque pharetra venenatis nisi, quis sodales ipsum volutpat nec. Aliquam elementum ante velit, eu commodo ligula viverra ut. Ut sed lacinia erat. Nulla rutrum mi purus, vel varius nibh semper at. Morbi sed fermentum odio.
Maecenas sit amet felis eget felis pharetra malesuada sollicitudin eu mi. Sed sit amet ultrices nulla. In hac habitasse platea dictumst. Morbi dignissim mattis dolor sed egestas. Sed efficitur sagittis massa non eleifend. Vestibulum vel venenatis arcu, ut faucibus velit. Phasellus vulputate, massa euismod accumsan scelerisque, erat neque imperdiet enim, eget consectetur orci tellus id mauris. Cras facilisis nulla pellentesque tellus pharetra, luctus sodales lorem viverra. Nulla non lobortis arcu. Etiam sit amet porta sapien.</div>{" "}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
      </Col>
    </>
  );
}

export default GraphItem;
