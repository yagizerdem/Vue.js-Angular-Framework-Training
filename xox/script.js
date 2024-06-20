const app = Vue.createApp({
    data(){
        return{
            board:Array(3).fill().map(()=>Array(3).fill()),
            turn:'X',
            gameEnd:false
        }
    },
    methods:{
        async handleUserClick(e , index){
            if(this.gameEnd) return
            const row = Math.floor(index / 3)
            const col = index % 3
            this.board[row][col] = this.turn
            this.turn = this.turn == 'X' ? 'O' : 'X'

            const flag = checkWinner(this.board)
            if(flag){
                this.gameEnd=true
                await sleep(100)
                alert(`winner is ${flag}`)
            }
        },
        restart(){
            this.board=Array(3).fill().map(()=>Array(3).fill())
            this.gameEnd = false
            this.turn = 'X'
        },
        isActive(e , index){
            const row = Math.floor(index / 3)
            const col = index % 3
            return this.board[row][col]
        }
    },
})
app.mount('#app')

function checkWinner(board){
    var winner = null
    for(let i = 0 ; i < 3 ; i++){
        // row
        if(board[i][0] == board[i][1] &&board[i][1]  == board[i][2] && board[i][0] ) winner = board[i][0]
        // col
        if(board[0][i] == board[1][i] && board[1][i]==   board[2][i] && board[0][i]) winner = board[0][i]
    }
    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0]) winner = board[0][0]
    if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0]) winner = board[1][1]
    return winner
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }