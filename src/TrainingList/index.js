// import React from 'react';

// Components
import TrainingItem from './TrainingItem';
import TrainingTitle from './TrainingTitle';

// Datas
import trainings from '../datas/datas';

// Styles
import './style.css'
import Status from './Status';
import React from 'react';

const TrainingList = () => (
    <div className="trainingList">
        <TrainingTitle title="Formations"></TrainingTitle>
        <ul>
            {trainings.map(training => 
            <TrainingItem key={training.id + training.name} listContent={training.name}></TrainingItem>
            )}
        </ul>
        <Status></Status>
    </div>
)

// class TrainingList extends React.Component {
//     state = {
//         status: true
//     }

//     changeStatus = (param) => {
//         this.setState({ status: param });
//     }

//     render() {
//         return (
//             <div className="trainingList">
//                 <TrainingTitle title="Formations"></TrainingTitle>
//                 <ul>
//                     <TrainingItem listContent="React.js"></TrainingItem>
//                     <TrainingItem listContent="React Native"></TrainingItem>
//                     <TrainingItem listContent="Angular"></TrainingItem>
//                     <TrainingItem listContent="Typescript"></TrainingItem>
//                 </ul>
//                 <Status changeStatus={this.changeStatus} status={this.state.status}></Status>
//             </div>
//         )
//     }
// }

export default TrainingList;