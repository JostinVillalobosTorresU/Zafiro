import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./NoticasCarta.css";

export function NoticasCarta ({titulo, audiencia, contenido, img, fecha}) {
    return (
      <Card className='contCartaa'>
        <Card.Img variant="top" src={img} className='cartaImg'/>
        <Card.Body className='cartaBody'>
          <Card.Title className='cartaTitulo'>{titulo}</Card.Title>
          <Card.Text className='cartaFecha'>{fecha}</Card.Text>
          <Card.Text className='cartaAudiencia'>{audiencia}</Card.Text>
          <Card.Text className='cartaTexto'>{contenido}</Card.Text>
        </Card.Body>
      </Card>
    );
}