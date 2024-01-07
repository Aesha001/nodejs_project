const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static(__dirname))

const todotask = [
    {taskID:'Task1',taskName:'Take Attendance',taskstat:'Done',},
    {taskID:'Task2',taskName:'Expert Talk',taskstat:'Panding',},
    {taskID:'Task3',taskName:'Take quiz',taskstat:'Done',},
    
]
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/todoApp.html')
})

app.get('/api/getTaskData',(req,res)=>{
    res.send(todotask)
})

app.listen(3000, () => {
    console.log('Server Started')
})
