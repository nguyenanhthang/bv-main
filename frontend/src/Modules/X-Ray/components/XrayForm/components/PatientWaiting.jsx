import { Row, Col, Container } from 'reactstrap';
import "../xRayForm.module.scss"
import classNames from 'classnames/bind';
import Styles from '../xRayForm.module.scss';
const cx = classNames.bind(Styles);
function PatientWaiting(props) {
    const{showLocalWaiting,onCLickHandle,onClickDelete}=props
    return (
        <Container style={{padding:0}}>
            <Row sm="12">
                <Col sm="12">
                    <table style={{ width: '100%'}}>
                        <thead>
                            <tr className={cx('Presult')}>
                                <th>STT</th>
                                <th>Mã bệnh nhân</th>
                                <th>Bệnh nhân</th>
                            </tr>
                        </thead>
                        <tbody className={cx('Presult')}>
                            {showLocalWaiting ? (showLocalWaiting.map((el,i)=>{
                                return(
                                    <tr onClick={()=>onCLickHandle(el,i) || onClickDelete(i)} key={i}>
                                    <td>{i+1}</td>
                                    <td>{el.user_id}</td>
                                    <td>{el.user_name}</td>
                                </tr>
                                )
                            })):(<tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>)}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}

export default PatientWaiting;
