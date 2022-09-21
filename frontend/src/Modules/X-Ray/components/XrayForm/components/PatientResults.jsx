import { Row, Col, Container } from 'reactstrap';
import { memo } from 'react';
import classNames from 'classnames/bind';
import Styles from '../xRayForm.module.scss';
const cx = classNames.bind(Styles);
function PatientResult({selectResult,onCLickHandle,finishPatient}) {
    return (
        <Container style={{padding:0}}>
            <Row>
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
                        {finishPatient ? (finishPatient.map((el,i)=>{
                                return(
                                    <tr onClick={()=>onCLickHandle(el,i) || selectResult(i)} key={i}>
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

export default memo(PatientResult);
