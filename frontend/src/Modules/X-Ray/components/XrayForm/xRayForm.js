import { useState ,useLayoutEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Row, Col, Container, Nav, NavItem, TabContent, NavLink, TabPane, Form, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Styles from './xRayForm.module.scss';
import classNames from 'classnames/bind';
import PatientWaiting from './components/PatientWaiting';
import PatientResult from './components/PatientResults';
import Clock from '../../../../Shared/Components/clock/index';

const cx = classNames.bind(Styles);
function XRayForm(props) {
    const {showLocal,onCLick,handleDelete,hide,finishPatient,selectResult}=props
    const [show, setShow] = useState('1');
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [search , setSearch] = useState('');
    const [resListShowLocal , setResListShowLocal] = useState(showLocal);
    useLayoutEffect(() => {
        if(search)
            setResListShowLocal(showLocal.filter((item) => item.user_id.includes(search)))
        else if(showLocal)
            setResListShowLocal(showLocal)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search || showLocal])
    
    return (
        <div className={hide}>
            <div className={cx('clock')}>
                <Clock />
            </div>
            <Container className={cx('list__patient-waiting')} >
                <Row sm={12}>
                    <Col sm={12}>
                        <span style={{marginBottom:12}} className={cx('list-title')}>
                            <FontAwesomeIcon icon={faUsers} />
                            Danh Sách Bệnh Nhân Chờ Chụp X-Quang:
                        </span>
                        <Input bsSize="lg" placeholder="Lọc Theo Mã Họ Tên"  onChange={(e)=>setSearch(e.target.value)}/>
                    </Col>
                </Row>
                <Row className={cx('content')}>
                    <Nav style={{padding:0,display:'flex'}} tabs>
                        <NavItem style={{width:'50%'}}>
                            <NavLink
                                style={{display:'flex',justifyContent:'center',backgroundColor: isActive1 ? 'green' : '' ,color:isActive1 ? 'white':''
                            }}
                                onClick={function noRefCheck() {
                                    setShow('1');
                                    setIsActive2(false)
                                    setIsActive1(true)
                                }}
                            >
                                <span style={{color:isActive1 ? 'white':''
                            }} className={cx('list-title')}>Bệnh Nhân Chờ</span>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{width:'50%'}}>
                            <NavLink
                                style={{display:'flex',justifyContent:'center', backgroundColor: isActive2 ? 'green' : '',color:isActive2 ? 'white' : ''
                            }}
                                onClick={function noRefCheck() {
                                    setShow('2');
                                    setIsActive1(false)
                                    setIsActive2(true)
                                }}
                            >
                                <span style={{color:isActive2 ? 'white':''
                            }} className={cx('list-title')}>Bệnh Nhân Có Kết quả</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent style={{ backgroundColor: '#ffff', height: 300,padding:0,overflowY:'auto',overflowX:'hidden'}} activeTab={show}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <PatientWaiting onClickDelete={handleDelete} onCLickHandle={onCLick} showLocalWaiting={resListShowLocal} />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <PatientResult finishPatient={finishPatient} onCLickHandle={onCLick} selectResult={selectResult}/>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                    <div style={{ display: 'flex',justifyContent:'center',alignItems:'center', marginTop:15}}>
                        <Col sm={9}>
                            <Form action="">
                                <Input bsSize="lg" onChange={(e)=>setSearch(e.target.value)} placeholder="Tìm Kiếm" />
                            </Form>
                        </Col>
                        <Col style={{marginLeft:4}}>
                            <Button size="lg" color="success">
                                Tìm Kiếm
                            </Button>
                        </Col>
                    </div>
                </Row>
                
            </Container>
        </div>
    );
}

export default XRayForm;
