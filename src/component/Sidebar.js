import React from "react";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import "./Sidebar.css";

export default class Sidebar extends React.Component {
    constructor(props){
        super(props)
        this.state = {    
            selected: this.props.selected,
            changed: false
        }
      }

    componentWillReceiveProps(newProps) {    
        this.setState({
            changed: false
        });
    }

    handleChange(time) {   
        let changed = time.getTime() !== this.props.selected.getTime();  
        this.setState({
            selected: time,
            changed: changed
        });           
    }

    closeMenuLink() {
        return <div class='link-conteiner'>
                    <a href="#" 
                        className="large close-menu-link" 
                        onClick={this.props.onClick}>
                            <FontAwesomeIcon icon={faTimes} />
                    </a>
                </div>
    }

    render() {
        let btClassName = this.state.changed ? "btn btn-danger" : "btn";
        return (
            <div id='component-sidebar'>  
                { this.closeMenuLink() }
                <h2>pick a date</h2>
                <div id="buttons">
                    <DatePicker
                        selected={this.state.selected}
                        inline
                        showTimeSelect
                        onChange={(i) => this.handleChange(i)}
                    />     
                    <div>               
                        <button 
                            className={btClassName} 
                            onClick={() => this.props.onSubmit(this.state.selected)}>
                                Save
                        </button>
                    </div>
                </div>            
            </div>
            
        );
    }
}