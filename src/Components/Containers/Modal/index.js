import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as InterfaceActions from '../../../Redux/Actions/interfaceActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { List, ListItem } from '../../Elements/List';
import Button from '../../Elements/Button';
import Select from '../../Elements/Select';
import image from '../../../Assets/images/anhanguera.png';
import './Modal.scss';


class Modal extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            Modal: props.Modal,
            toogleStatusModal: props.toogleStatusModal,
            addOffersFavorite: props.addOffersFavorite,
            data: [false, false, false, false, false],
            cities: null,
            courses:null,
            Form:{
                Range: 10000,
                Type: {EaD: true, Presencial: true},
                course: null,
                city: null,
                sort: "university"
            },
            chartList: []
        }
    }
    componentDidUpdate = async (prevProps) => {
        if (this.props.Modal !== prevProps.Modal) {
            await this.setState({...this.state, Modal: this.props.Modal});
        }
    }
    componentDidMount = async () => {
        let array = await this.handleRequest();
        let cities, courses;
        if(array[0].campus){
            cities = [...new Set(array.map((e)=>e.campus.city))].sort((a, b) => a.localeCompare(b));
            courses = [...new Set(array.map((e)=>e.course.name))].sort((a, b) => a.localeCompare(b));
            courses.unshift(null);
            cities.unshift(null);
        }
        await this.setState({...this.state, cities, courses, Form:{...this.state.Form, city:cities[0], course:courses[0]}, data: array});

    }
    applyFilter = (array) =>{
        array = array.filter((e)=>{
            if(!((e.campus.city === this.state.Form.city) || (this.state.Form.city === null))){
                console.log("1º")
                return false;
            }
            if(!((e.course.name === this.state.Form.course) || (this.state.Form.course === null))){
                console.log("2º")
                return false;
            }
            if(!(e.price_with_discount <= this.state.Form.Range)){
                console.log("3º")
                return false;
            }
            if(!this.state.Form.Type.EaD && e.course.kind === "EaD"){
                console.log("4º")
                return false;
            }
            if(!this.state.Form.Type.Presencial && e.course.kind === "Presencial"){
                console.log("5º")
                return false;
            }
            return e;
        })
        return array;
    }
    applySort = (array) =>{
        array = array.slice(0);
        if(this.state.Form.sort === "university"){
            array.sort((a, b) => a.university.name.localeCompare(b.university.name))
        }
        else if(this.state.Form.sort === "course"){
            array.sort((a, b) => a.course.name.localeCompare(b.course.name))
        }
        else if(this.state.Form.sort === "lowest_price"){
            array.sort((a, b) => a.price_with_discount - b.price_with_discount)
        }
        else if(this.state.Form.sort === "biggest_price"){
            array.sort((a, b) => b.price_with_discount - a.price_with_discount)
        }
        return array;
    }
    handleRequest = async () =>{
        let result = false;
        await axios({method: 'get', url: 'http://localhost:5000/', responseType: 'json', timeout: 10000}).then(async (response)=>{
            let array = response.data;
            result = array;

        }).catch((error)=>{console.log("Error:", error)})
        return result;
    }
    handleModalStatus = () => {
        this.state.toogleStatusModal(!this.state.Modal.status);
    }
    handleSubmit = async (e) =>{
        e.preventDefault();
        await this.state.addOffersFavorite(this.state.chartList)
        await this.handleModalStatus(!this.state.Modal.status);
        //console.log(e.target.elements);
    }
    handleRangeInput = (Range) =>{
        this.setState({...this.state, Form:{...this.state.Form, Range}});
        this.changeResult()
    }
    handleCitySelect = (city) =>{
        this.setState({...this.state, Form:{...this.state.Form, city: city===""?null:city}});
        this.changeResult()
    }
    handleCourseSelect = (course) =>{
        this.setState({...this.state, Form:{...this.state.Form, course: course===""?null:course}});
        this.changeResult()
    }
    handleSortSelect = (sort) =>{
        this.setState({...this.state, Form:{...this.state.Form, sort}});
        this.changeResult()
    }
    handleCheckBoxEaD = (e) =>{
        this.setState({...this.state, Form:{...this.state.Form, Type:{...this.state.Form.Type, EaD: e}}})
        this.changeResult()
    }
    handleCheckBoxPresencial = (e) =>{
        this.setState({...this.state, Form:{...this.state.Form, Type:{...this.state.Form.Type, Presencial: e}}})
        this.changeResult()
    }
    toogleChart = (e) =>{
        let index = this.state.chartList.indexOf(e);
        if(index>=0){
            this.state.chartList.splice(index, 1);
        }
        else{
            this.state.chartList.push(e);
        }        
        if(this.state.chartList.length<=1){
            this.forceUpdate()
        }
    }
    changeResult = async () =>{
        let array = await this.handleRequest();
        array = await this.applyFilter(array);
        array = await this.applySort(array);
        await this.setState({...this.state, data: array, chartList: []})
    }
    render(){
        if(this.state.Modal.status === true){
            return (
                <div className="UX-Modal">
                    <form className="ModalWrapper" onSubmit={this.handleSubmit}>
                        <button className="Close" onClick={()=>this.handleModalStatus()}><FontAwesomeIcon icon={faTimes}/></button>
                        <fieldset className="TitleArea">
                            <span className="title">Adicionar bolsa</span>
                            <span className="subtitle">Fitlre e adicione as bolsas de seu interesse</span>
                        </fieldset>
                        <fieldset className="FilterArea">
                            <div className="Group">
                                <div className="SubGroup">
                                    <label htmlFor="city" className="Title">Selecione sua cidade</label>
                                    <Select id="city" semifull onChange={(e)=>this.handleCitySelect(e.target.value)}>
                                        {this.state.cities?(
                                            this.state.cities.map((e,i)=>{
                                                return (<option key={i} value={e}>{e}</option>)
                                            }
                                            )):<option value=""></option>}
                                    </Select>
                                </div>
                                <div className="SubGroup">
                                    <label htmlFor="course" className="Title">Selecione o cursos de sua preferência</label>
                                    <Select id="course" semifull onChange={(e)=>{this.handleCourseSelect(e.target.value)}}>
                                        {this.state.courses?(
                                            this.state.courses.map((e,i)=>{
                                                return (<option key={i} value={e}>{e}</option>)
                                            }
                                            )):<option value=""></option>}
                                    </Select>
                                </div>
                            </div>
                            <div className="Group">
                                <div className="SubGroup">
                                    <label className="Title">Como você quer estudar?</label>
                                    <div className="CheckBox">
                                        <input type="checkbox" id="kind1" name="kind1" value="Presencial" defaultChecked={this.state.Form.Type.Presencial} onChange={(e)=>this.handleCheckBoxPresencial(e.target.checked)}/> 
                                        <label htmlFor="kind1">Presencial</label>
                                        <input type="checkbox" id="kind2" name="kind2" value="EaD" defaultChecked={this.state.Form.Type.EaD} onChange={(e)=>this.handleCheckBoxEaD(e.target.checked)}/>
                                        <label htmlFor="kind2">EaD</label>
                                    </div>
                                </div>
                                <div className="SubGroup">     
                                    <label className="Title">Até quanto você pode pagar?</label>
                                    <div className="Range">
                                        <label htmlFor="price">R$ {new Intl.NumberFormat().format(this.state.Form.Range)}</label>
                                        <input id="price" type="range" min="0" max="10000" step="50" value={this.state.Form.Range} onChange={(e)=>this.handleRangeInput(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="ResultArea">
                            <legend>
                                <span className="Title">Resultado:</span>
                                <span className="OderFilter">Ordernar por 
                                    <Select onChange={(e)=>this.handleSortSelect(e.target.value)} inline>
                                        <option value="university">Nome da Faculdade</option>
                                        <option value="course">Nome do Curso</option>
                                        <option value="lowest_price">Menor Preço</option>
                                        <option value="biggest_price">Maior Preço</option>
                                    </Select>
                                </span>
                            </legend>
                            <div className="UX-Result">
                                <List>
                                    {this.state.data?(
                                        this.state.data.map((e,i)=>{
                                            const name = e.course?e.course.name:null;
                                            const course = e.course?e.course.level.split(" ")[0]:null;
                                            const price = e.course?e.price_with_discount:null;
                                            const discount = e.course?e.discount_percentage:null;
                                            const data = e?e:"";
                                            return (
                                                <ListItem key={i}>
                                                    <div className="UX-Line">
                                                        <input className="chk-course" type="checkbox" defaultChecked={false} onClick={(el)=>this.toogleChart(data,el)}/><img src={image}/>
                                                        <div className="description">
                                                            <p><span>{name}</span></p><p>{course}</p>
                                                        </div>
                                                        <div className="price">
                                                            <p>Bolsa de <span>{discount}%</span></p>
                                                            <p><span>R$ {price}/mês</span></p>
                                                        </div>
                                                    </div>
                                                </ListItem>
                                            );
                                        })
                                    ):null}
                                </List>
                            </div>
                        </fieldset>
                        <fieldset className="CommandsArea">
                            <Button color="Primary-Blue" onClick={()=>this.handleModalStatus()}>Cancelar</Button>
                            <Button color="Primary-Yellow" disabled={this.state.chartList.length>0?false:true}>Adicionar bolsa(s)</Button>
                        </fieldset>
                    </form>
                </div>
            );

        }
        else{
            return (null);
        }
        
    }
}
const mapStateToProps = store => {
    return {
        Modal: store.InterfaceState.Modal
    }
}
const mapDispatchToProps = {
    ...InterfaceActions
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);