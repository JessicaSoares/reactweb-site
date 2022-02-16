import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from "@material-ui/core/Button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Form } from "react-bootstrap";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



function ModalDownload(props) {

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

  return (
    <div>
      <button onClick={onOpenModal}>Download de dados</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Escolha o tipo de dados</h2>
        <form onSubmit={editarEstado}>
        <label>Estado: </label>
        <select name="estado" value={estado} onChange={texto => setEstado(texto.target.value)}>
          <option  className={props.classeSecundaria1} value={props.download1()} >Selecione</option>
          <option value="1">RS</option>
          <option value="2">SC</option>
          <option value="3">PR</option>
          <option value="4">SP</option>
        </select><br /><br />

        <button  onClick={estado}  type="submit">Editar</button>

      </form>

        <Button onClick={props.download1()}  className={props.classeSecundaria1} color="success"  startIcon= {< AiOutlineCloudDownload />} variant="contained">Empregos por Sexo</Button><br/>
        <Button  className={props.classeSecundaria2} color="success" onClick={props.download2()}  startIcon= {< AiOutlineCloudDownload />} variant="contained">Empregos por Setor   </Button><br/>
        <Button  className={props.classeSecundaria3} color="success" onClick={props.download3()}  startIcon= {< AiOutlineCloudDownload />} variant="contained">Empregos por Município   </Button><br/>
     
     
      </Modal>

 

      

   



    </div>
    
  );
}

export default ModalDownload;
