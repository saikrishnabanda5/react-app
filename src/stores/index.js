import UserService from '../services/UserService/index.api';
import TodoService from '../services/TodoService/index.api'
import CounterStore from './CounterStore';
import UserStore from './UserStore';
import TodoStore from './TodoStore';
const counterStore = new CounterStore();
const userStore = new UserStore(new UserService());
const todoStore= new TodoStore(new TodoService());

export default {counterStore,userStore,todoStore};
