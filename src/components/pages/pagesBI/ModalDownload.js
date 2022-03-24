import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Form } from "react-bootstrap";


function ModalDownload(props) {

  const customStyles = {
    content: {
      top: '70px',
      left: '50px',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },};

  const [estado, setEstado] = useState(4);

const editarEstado = e => {
  e.preventDefault();
  console.log(estado);
}

  function update() {
    var select = document.getElementById('language');
    var option = select.options[select.selectedIndex];

    document.getElementById('value').value = option.value;
    document.getElementById('text').value = option.text;
  }
  
const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  if (estado ==0 ) {
    var clique =props.download1()
  }
  
  if (estado ==1) {
    var clique =props.download2()
  }
  if (estado ==2 ) {
    var clique =props.download3()
  }
  if (estado ==3 ) {
    var clique =props.download4()
  }
  if (estado ==4 ) {
    var clique =props.download5()
  }

  return (
    <div>
    
      <Button onClick={onOpenModal}  color="success"  startIcon= {< AiOutlineCloudDownload />} variant="contained">Download dos dados</Button><br/>
      <Modal open={open} style={customStyles}  onClose={onCloseModal} center>
      <br/>
      
        <h4>Escolha a categoria: </h4>
        <br/>

  
        <Form.Select aria-label="Escolha a categoria"  name="estado" value={estado} onChange={texto => setEstado(texto.target.value)}>
        <option  className={props.classeSecundaria1} value="0" >{props.titulo1} </option>
          <option className={props.classeSecundaria2} value="1">{props.titulo2} </option>
          <option className={props.classeSecundaria3} value="2">{props.titulo3} </option>
          <option className={props.classeSecundaria4} value="3">{props.titulo4} </option>
          <option className={props.classeSecundaria5} value="4">{props.titulo5} </option>
</Form.Select>
        <br/>
      
        <Button onClick={clique}  color="success"  startIcon= {< AiOutlineCloudDownload />} variant="contained">Baixar dados</Button><br/>
      </Modal>
    </div>
    
  );
}

export default ModalDownload;