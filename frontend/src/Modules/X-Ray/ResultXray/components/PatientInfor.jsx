import { Row, Col, Container} from 'reactstrap';
import Styles from './PatientInfor.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(Styles);
function PatientInfor(props) {
    const {data}=props
    return (
        <Container>
            <Row>
                <Col style={{padding:0}}>
                <div className={cx('x-ray-room')} style={{marginTop:10}}>
                    <span>Phòng Chụp X quang - Tầng 1</span>
                </div>
                <div className={cx('information-patient')}>
                    <div className={cx('information-patient-title')}>
                        <span><FontAwesomeIcon icon={faUser} /> Thông Tin Bệnh Nhân</span>
                    </div>
                    <div className={cx('information-body')}>
                        <Row>
                            <Col className={cx('info')} sm={6}>
                                <span>Mã Bệnh Nhân: {data.user_id}</span>
                                <span>Họ Tên: {data.user_name}</span>
                                <span>Địa Chỉ: {data ? data.user_city : ''}, {data ? data.user_district : ''}</span>
                            </Col>
                            <Col className={cx('info')} sm={4}>
                                <span>Giới Tính: {data.user_sex}</span>
                                <span>Ngày Sinh: {data.user_birthday}</span>
                            </Col>
                        </Row>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default PatientInfor;