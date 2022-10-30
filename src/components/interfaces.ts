export interface ITodo {
    desc: string,
    date: string,
    priority: string,
  }

  export interface Props {
    todos: Array<ITodo>,
    deleteTodo: Function,
  }