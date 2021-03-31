import React from 'react';

// const Status = ({ changeStatus, status }) => {
//     window.addEventListener("offline", () => changeStatus(false), false);
//     window.addEventListener("online", () => changeStatus(true), true);

//     return (
//         <p className={status ? 'status-on' : 'status-off'}>{status ? 'online' : 'offline'}</p>
//     );
// }

class Status extends React.Component {
    state = {
        status: true
    }

    changeStatus = (param) => {
        this.setState({ status: param });
    }
    
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true; // prevents the component from updateing if false, allow update if true
    }

    render() {
        window.addEventListener("offline", () => this.changeStatus(false), false);
        window.addEventListener("online", () => this.changeStatus(true), true);

        if (this.state.status) {
            return null;
        } else {
            return (
                <p className={this.state.status ? 'status-on' : 'status-off'}>{this.state.status ? 'online' : 'offline'}</p>
            );
        }
    }
}

export default Status;