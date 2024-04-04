import Card from "./Card"
import { useEffect, useState } from 'react'

export default function Grid({resetScore, incrementScore}){
    const [images, setImages] = useState([]);
    const [reset, setReset] = useState(0);

    async function getNewImages(){
        let newImages = [];
        for (let i = 0; i < 10; i++){
            const response = await fetch('https://api.giphy.com/v1/gifs/random/?api_key=atN7g4bhr7KjccXKVy3CQ9EpuIpNBdE7&tag=cats', {mode: 'cors'})
      
            const catData = await response.json();
            newImages.push({src : catData.data.images.original.url, clicked : false});
        }
        setImages(newImages);
    }

    function resetImages(){
        setReset(reset + 1);
    }

    useEffect(() => {
        getNewImages()
    }, [reset])

    function scrambleImages(a){
        let newImages = [];
        let oldImages = a;

        for(let i = 0; i < 10; i++){
            let randIndex = Math.floor(Math.random()*oldImages.length)
            let oldImg = oldImages.splice(randIndex, 1)[0];
            newImages.push({src : oldImg.src, clicked : oldImg.clicked});
        }

        return newImages;
    }

    const performTurn = (image) => {
        if(!image.clicked){
            incrementScore();
            image.clicked = true;
            let scrambledImages = scrambleImages(images)
            setImages(scrambledImages);
        }
        else{
            resetScore()
            getNewImages()
        }
    }

    return(
        <div className="grid">
            {images.map((image, index) => (
              <Card 
                key={index} 
                img={image.src} 
                handleClick={() => performTurn(image)}
              />
            ))}
        </div>
    )
}