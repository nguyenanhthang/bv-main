import React from 'react';
import { Form, Col} from 'reactstrap';
import Styles from './printXray.module.scss';
import classNames from 'classnames/bind';
import logoPK from '../../../Assets/img/logoPK.png';
import QRcode from '../../../Assets//img/QRcode.png';
const cx = classNames.bind(Styles);
function Print({patient}) {
    const time = new Date().toLocaleDateString("en-GB");
    let today = new Date().toLocaleTimeString('en-US', { hour12: false });
    const [Ctime, setCtime] = React.useState(today);
    const updateTime = () => {
        today = new Date().toLocaleTimeString('en-US', { hour12: false });
        setCtime(Ctime)
    }
    setInterval(updateTime, 1000);
    return (
        <div className={cx('print')}>
            <div className={cx('print-form')}>
                <Form>
                    <div className={cx('header')}>
                        <Col sm={8} className={cx('print-form-left')}>
                            <div className={cx('print-form-logo')}>
                                <img src={logoPK} alt="" />
                            </div>
                            <div className={cx('print-form-infoCompany')}>
                                <p className={cx('nameCompany')}>PHÒNG KHÁM ĐA KHOA VIỆT ĐOÀN</p>
                                <span className={cx('company-adress')}>Bách Môn, Việt Đoàn, Tiên Du, Bắc Ninh</span>
                                <br />
                                <span className={cx('company-hotline')}>SĐT: 02222208999 - 0869968688</span>
                            </div>
                        </Col>
                        <Col sm={4} className={cx('print-form-right')}>
                            <div className={cx('QRcode')}>
                                <img alt="aaaa" src={QRcode} />
                            </div>
                            <div className={cx('idcode')}>280810141201</div>
                        </Col>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-header')}>
                            <h2 className={cx('header-title')}>
                                <i>KẾT QUẢ CHỤP X-QUANG</i>
                            </h2>
                            <span className={cx('header-time')}>{Ctime},{time}</span>
                        </div>
                        <div className={cx('content-body')}>
                            <div className={cx('infoUser')}>
                                <div className={cx('layOut')}>
                                    <div className={cx('infoUser-name')}>
                                        Họ Tên:
                                        <b>
                                            <span>{patient ? patient.user_name : ''}</span>
                                        </b>
                                    </div>
                                    <div className={cx('infoUser-sex')}>
                                        Giới tính:
                                        <span>{patient ? patient.user_sex : ''}</span>
                                    </div>
                                </div>
                                <div className={cx('layOut')}>
                                    <div className={cx('infoUser-birthday')}>
                                        Ngày sinh:
                                        <span>{patient ? patient.user_sex : ''} </span>
                                    </div>
                                    <div className={cx('infoUser-phone')}>
                                        Điện thoại:
                                        <span>{patient ? patient.user_phone : ''}</span>
                                    </div>
                                </div>
                                <div className={cx('infoUser-adress')}>
                                    Địa chỉ:
                                    <span>{patient ? patient.user_ward : ''}, {patient ? patient.user_city : ''}, {patient ? patient.user_district : ''}</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('body-result')}>
                            <div className={cx('title-result')}>Mô Tả Chi Tiết Chụp X-Quang</div>
                            <div className={cx('result')}>
                                <div className={cx('description')}>
                                    <span>Chuẩn Đoán:</span><br />
                                    <p style={{marginLeft:12}}>
                                        {patient ? patient.description : ''}
                                    </p>
                                </div>
                                <div className={cx('conclusion')}>
                                    <p><span className={cx('result-conclusion')}>Kết Luận:</span>{patient ? patient.conclusion : ''}</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('content-footer')}>
                            <div className={cx('user')}>
                                <span></span><br />
                                <b>Người nộp tiền</b>
                                <br />
                                <span>(Ký , họ tên)</span>
                            </div>
                            <div className={cx('reception')}>
                            <span className={cx('footer-time')}>Ha noi, {time}</span><br />
                                <b>Người thu tiền</b>
                                <br />
                                <span>(Ký , họ tên)</span>
                                <h4>NGUYỄN THÙY TRINH</h4>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Print;