import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Row, Col} from 'reactstrap';
import Styles from './Xray.module.scss';
import classNames from 'classnames/bind';
import ResultXray from './ResultXray/resultXray';
import XRayForm from './components/XrayForm/xRayForm';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
const cx = classNames.bind(Styles);
function XRayRender() {
    // eslint-disable-next-line no-unused-vars
    const [showLocal, setshowLocal] = useState([]);
    const [data, setData] = useState({});
    useEffect(()=>{
        axios.get('http://localhost:4000/api/recep')
    .then((res)=>{
        setshowLocal(res.data)
    })
    },[])
    const [finishPatient,setFinishPatient]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/api/xray')
        .then((res)=>{
            setFinishPatient(res.data)
        })
    },[])
    let idItem = useRef();
    let patientResult = useRef();
    const deletePatient = (i) => {
        console.log(i);
        idItem.current = i;
    };
    const selectResult = (k) => {
        console.log(k)
        patientResult.current = k;
    };
    const handleClick = (data) => {
        setData(data);
    };
    return (
        <div className={cx('wrapper')}>
            <Row>
                <Col sm={8}>
                    <ResultXray finishPatient={finishPatient} selectPatient={patientResult.current} setdata={setData} setshowLocal={setshowLocal} count={idItem.current} showLocal={showLocal} data={data} onCLick={handleClick} />
                </Col>
                <Col sm={4}>
                    <XRayForm finishPatient={finishPatient} selectResult={selectResult} handleDelete={deletePatient} showLocal={showLocal} onCLick={handleClick} />
                </Col>
            </Row>
        </div>
    );
}
export default XRayRender;
