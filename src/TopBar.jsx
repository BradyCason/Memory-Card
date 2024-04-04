export default function TopBar({score, highScore}){
    return(
        <div className="top-bar">
            <div>
                <h1>Memory Card Game</h1>
                <h5>Get points by clicking on a cat but don't click on the same one more than once!</h5>
            </div>
            <p>Score: <b>{score}</b>  High Score: <b>{highScore}</b></p>
        </div>
    )
}