import React from "react";
import _ from 'lodash'
import { Worker } from "./Worker";
import { Row, Col, Button } from "antd";

const RowStyle = {
  display: "flex",
  flexWrap: "wrap"
};

const ColStyle = {};

export class TaskAssignment extends React.Component {
  constructor(props) {
    super(props);
    const workers = Array.from(Array(7).keys()).map(key => ({
      id: key,
      tasks: 0
    }));

    this.state = { workers };
  }


  render() {
    const addTaskToWorker = ({ id, tasks }) => {
      const workers = _.cloneDeep(this.state.workers);
      console.log(id)
      workers[id].tasks++;
      this.setState({ workers });
    };

    const addRandomTask = () => {
        const min =_(this.state.workers).map('tasks').min();
        const worker = _(this.state.workers).filter({tasks: min}).shuffle().first();
        addTaskToWorker(worker);
    }
    return (
      <div>
        <div style={RowStyle}>
          {this.state.workers.map(w => (
            <div style={ColStyle} key={w.id}>
              <Worker worker={w} addTaskToWorker={addTaskToWorker} />
            </div>
          ))}
        </div>
        <br />
        <Row>
          <Button onClick={() => addRandomTask()}>Add Task</Button>
        </Row>
      </div>
    );
  }
}
