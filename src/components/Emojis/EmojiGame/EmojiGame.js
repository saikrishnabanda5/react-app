import React from 'react'
import {Header} from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import WinOrLose from '../WinOrLose/WinOrLose.js'
import {Image,ImageName,ImageCard,ImageCard1,EmojiDashboard} from '../EmojiGame/styledComponents.js'
class EmojiGame extends React.Component{
    state={
        emojis:[{id:1,name:"Exploding Head",src:""},
        {id:2,name:"Grinning Face with Sweat",src:""},
        {id:3,name:"Smiling Face with Heart-Eyes",src:""},
        {id:4,name:"Smirking Face",src:""},
        {id:5,name:"Thinking Face",src:""},
        {id:6,name:"Winking Face",src:""},
        {id:7,name:"Grinning Face",src:""},
        {id:8,name:"Crying Face",src:""},
        {id:9,name:"Astonished Face",src:""},
        {id:10,name:"Face with Tears of Joy",src:""},
        {id:11,name:"Star-Struck",src:""},
        {id:12,name:"Winking Face with Tongue",src:""}],
        score:0,
        topScore:0,
        render:false,
        gameState:"PLAYING",
    }
    newScore=0;
    list=[];
    count=0;
    onPlayAgainClick=()=>{
        if(this.state.topScore>this.state.score){
            this.setState({
              score:0,
              topScore:this.state.topScore,
              render:false,
            });
        }
        else{
            this.setState({
              score:0,
              topScore:this.state.score,
              render:false,
            });
        }
        this.list=[];
        this.newScore=0;
  }
     componentDidMount(){
        const showEmojis = this.state.emojis.map((eachEmoji)=>{
              eachEmoji.src=`https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${eachEmoji.id}.png`;
              return eachEmoji;
        });
        this.setState({
            emojis:showEmojis,
        });
    }
    emojiCard=(event)=>{
        if(this.list.includes(parseInt(event.currentTarget.id))){
            this.setState({
                render:true,
            })
        }
        else{
            {this.shuffleEmojis(this.state.emojis)}
            if(this.newScore==12){
              this.setState({
                render:true,
            })  
            }
        }
        this.list.push(parseInt(event.currentTarget.id))
    }
    
    shuffleEmojis = (arr) => {
    let j, temp;
        for(let i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        let newArray=arr;
        this.newScore=this.newScore+1;
        if(this.newScore==12){
            this.setState({
                gameState:"Won",
            });
        }
        else{
            this.setState({
                gameState:"Lose",
            });
        }
        this.setState({
            emojis:newArray,
            score:this.newScore
        });
}
    showEmojis1=()=>{
        const  {selectedTheme,onChangeEmojiTheme}=this.props;
        const emoji = this.state.emojis.map((eachEmoji)=>{
            return(
                <div>
                   <ImageCard1 onClick={this.emojiCard} id={eachEmoji.id} selectedTheme={selectedTheme} onChangeEmojiTheme={onChangeEmojiTheme}>
                    <Image src={eachEmoji.src} ></Image>
                    <ImageName selectedTheme={selectedTheme}>{eachEmoji.name} </ImageName>
                   </ImageCard1>
                </div>
                );
        });
        return emoji;
    }
    render(){
        const  {selectedTheme,onChangeEmojiTheme}=this.props;
        const {score,topScore,render,gameState}=this.state
        return(
            <EmojiDashboard>
                <Header score={score} topScore={topScore} selectedTheme={selectedTheme} onChangeEmojiTheme={onChangeEmojiTheme}/>
              {render===false? <ImageCard selectedTheme={selectedTheme} onChangeEmojiTheme={onChangeEmojiTheme}>{this.showEmojis1()} </ImageCard>
                :<WinOrLose score={score} gameState={gameState} onPlayAgainClick={this.onPlayAgainClick} selectedTheme={selectedTheme}/>}
                <Footer selectedTheme={selectedTheme} onChangeEmojiTheme={onChangeEmojiTheme}/>
            </EmojiDashboard>
            );
    }
}


export {EmojiGame};