// import React from 'react';

import React from "react";

// const TrainingItem = ({listContent}) => (
//     <p>{listContent}</p>
// )
class TrainingItem extends React.Component {
    componentDidMount() {
        console.log(this.props.listContent);
    }

    render() {
        const atClickDo = (evt) => {
            alert(this.props.listContent);
            console.log(evt.nativeEvent.type);
        }
        return (
            <p onClick={(evt) => atClickDo(evt)}>{this.props.listContent}</p>
        )
    } 
}

export default TrainingItem;