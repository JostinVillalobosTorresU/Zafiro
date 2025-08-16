import Form from 'react-bootstrap/Form';

export function DesplegableDestinos ({nombre, oUno, oDos, oTres}) {
    return (
      <Form.Select aria-label="Default select example" size="lg">
        <option>{nombre}</option>
        <option value="1">{oUno}</option>
        <option value="2">{oDos}</option>
        <option value="3">{oTres}</option>
      </Form.Select>
    );
}