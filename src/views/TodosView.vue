<template>
    <div class="wrapper">
        <h1>Todos</h1>
        <div class="todos-wrapper">

            <div class="input-container">
                <input type="text" class="input" placeholder="Add Tasks" v-model="title" >
                <TButton @click="addTodo" v-if="!isEditing" name="Add"></TButton>
                <TButton name="Save" v-else="isEditing" @click="saveTodo"> </TButton>
            </div>
            <div class="taskList">
                <div :class="['taskitem', {'is-editing':isEditing === item.id}]" v-for="item in sortedList" :key="item.id">
                    <input type="checkbox" v-model="item.completed">

                    <div class="description">
                        <div :class="['title', {'completed': item.completed}]">{{item.title}}</div>
                        <div class="time-added">Added {{formatDate(item.added)}}</div>
                    </div>

                    <div class="controls">
                        <div class="control-buttons">
                            <div class="edit" @click="editItem(item.id, item.title)">
                                <EditIcon></EditIcon>
                            </div>
                            <div class="delete">
                                <DeleteIcon @click="deleteItem(item.id)" ></DeleteIcon>
                            </div>
                        </div>
                    </div>

                    <div class="priority">
                        <div class="weight">
                            {{item.priority}}
                        </div>
                    </div>

                    <div class="priority-button">
                        <UpIcon @click="item.priority++"></UpIcon>
                        <DownIcon @click="item.priority--"></DownIcon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import EditIcon from '../components/EditIcon.vue'
    import DeleteIcon from '../components/DeleteIcon.vue'
    import UpIcon from '../components/UpIcon.vue'
    import DownIcon from '../components/DownIcon.vue'

    import {format} from 'date-fns'
    export default{
        name:"TodosView",
        data: ()=>({
            title:"",
            isEditing:null,
            todoList:[{id:Math.random(), title:'Go to Sleep', added: new Date(2022, 8, 1),priority:7, completed:false}, {id:Math.random(), title:'Wake Up', added: new Date(2022, 8, 4),priority:7, completed:true}],
        }),
        components:{
            EditIcon,
            DeleteIcon,
            UpIcon,
            DownIcon
        },
        methods:{
            addTodo(){
                if(!this.title)
                return;

                const newTodo = {
                    id: Math.random(),
                    title: this.title,
                    aded:new Date(),
                    priority:0,
                    completed:false
                }
                this.todoList.push(newTodo);
                this.title="";
            },
            deleteItem(itemId){
                this.todoList = this.todoList.filter((item) => item.id != itemId)
            },
            editItem(itemId, title){
                this.isEditing = itemId;
                this.title = title;
            }, 
            saveTodo(){
                if(!this.title)
                return;

                const itemId = this.isEditing;
                this.todoList.forEach((item)=> {
                    if(item.id == itemId){
                        item.title = this.title;
                    }
                })
                this.title = "",
                this.isEditing = null
            },
            formatDate(date){
                return format(date ,'do MMMM yyyy hh: mm aaa') 
            }
        },
        computed:{
            sortedList(){
                return [...this.todoList].sort((a,b)=> b.priority - a.priority)
            }
        }
    }
</script>

<style scoped>
h1{
    text-align: center;
}
.wrapper{
    margin-block: 24px;

}
.todos-wrapper{
    max-width:641px;
    margin-inline:auto;
}
.input-container{
    width:100%;
    display:flex;
    background: white;
    padding:8px;
    border-radius:12px;
    margin-bottom:20px;
}
.input{
    flex-basis: 100%;
    border:none;
    font-size: 16px;
    padding:4px 8px;
    
}
.input:focus,
.input:focus-within,
.input:focus-visible{
    border:none;
    outline:none;
}
.taskitem{
    display:flex;
    align-items:center;
    padding: 16px 20px;
    background-color:white;
    margin-block:4px;
    border-radius:8px;
}
.description{
    margin-left:16px;

}
.title{
    font-weight:600;
    font-size:16px;
    margin-bottom: 6px;
}
.title.completed{
    text-decoration:line-through;
}
.time-added{
    font-size:12px;
    opacity:0.8;
}
.controls{
    display:flex;
    margin-left: auto;
}
.control-buttons{
    display: flex;
    align-items:center;
    gap:10px;
    margin-right: 20px;
}
    
.control-buttons>* {
    cursor:pointer;
}

.control-buttons>*:hover{
    background-color: rgba(0, 0, 0, 0.1);
}

.priority{
    display:flex;
    align-items:center;
}
.priority-button{
    display:flex;
    flex-flow:column;
    gap:4px;
}

.weight{
    padding: 8px 16px;
    background: rgba(0, 0, 0, 0.1);
    border-radius:8px;
    margin-right:8px;
}
.taskitem input[type="checkbox"]{
    width:20px;
    height:20px
}
.taskitem.is-editing{
    opacity:0.4;
    cursor:not-allowed;
}
</style>