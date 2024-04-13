import React, { useEffect, useState } from 'react'
import gridData from '../../mockData.json';
import '../../App.css';
function Solution() {
    const [grid, setGrid] = useState([ {
        "id":1,
        "isClicked":false,
        "isVisible":true
    },
    {
        "id":2,
        "isClicked":false,
        "isVisible":true
    },
    {
        "id":3,
        "isClicked":false,
        "isVisible":true
    },
    {
        "id":4,
        "isClicked":false,
        "isVisible":true
    },
    {
        "id":5,
        "isClicked":false,
        "isVisible":true
    },
    {
        "id":6,
        "isClicked":false,
        "isVisible":true
    },
    {
        "id":7,
        "isClicked":false,
        "isVisible":true
    },
    {
        "id":8,
        "isClicked":false,
        "isVisible":true
    },
    {
        "id":9,
        "isClicked":false,
        "isVisible":true
    }]);
    console.log(gridData)
    const [queue,setQueue] =useState([])

    const handleClicked = (itemList) =>{
        grid?.map((gridList)=>{
            if(!queue.includes(gridList)){
                if(gridList.id === itemList.id){
                    return setQueue((queueItem)=>[...queueItem,gridList])
                }
            }
        });
        setGrid(grid.map((gridList)=>{
            if(gridList.id === itemList.id){
                gridList.isClicked=true;
            }
            return gridList;
        }))
    }
    useEffect(()=>{
        if(queue?.length===9){
            let i =0;
            setInterval(()=>{
                if(i<9){
                    let newQue = queue[i];
                    newQue.isClicked=false;
                    setQueue((pre)=>[...pre,newQue]);
                    i++;
                }
            },1000)
        }
    },[queue])
    return (
        <>
            <div className='solution-block'>
                <div className='container'>
                    {
                        grid?.map((gridItem, id) => {
                            return gridItem.isVisible && (
                                <div className={'box ' + (gridItem.isClicked ? "green" : "yellow")} key={gridItem.id} onClick={() => handleClicked(gridItem)}>{gridItem.id}</div>
                        )})
                    }
                </div>
            </div>
        </>
    )
}

export default Solution