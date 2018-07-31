import React from "react";
import { Card, Button } from "antd";

export const Worker = ({ worker, addTaskToWorker }) => {
    const {id, tasks} = worker;
  return (
    <Card style={{ height: 200, width: 200 }}>
      <div>Worker {id}</div>
      <div>Tasks: {tasks}</div>
      <Button onClick={() => addTaskToWorker(worker)}>Add Task</Button>
    </Card>
  );
};
