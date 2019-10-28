import React,{useCallback, useState}  from 'react';


    const ResizableBox = () =>{

    const [height, setHeight] = useState(100);

    const style={
                    target:{
                        height:`${height}px`,
                        width:'50%',
                        backgroundColor: '#00bcd457',
                        margin: '10% auto',
                        cursor: `n-resize`
                    }
                    };


    const getLength = (x, y) => Math.sqrt(x * x + y * y);

    const handlerMouseBown = useCallback((e) =>{

        const { clientX: startX, clientY: startY } = e;

        const onMove = (e) =>{
           e.stopImmediatePropagation();
            const { clientX, clientY } = e;

            const deltaX = clientX - startX;
            const deltaY = clientY - startY;


            setHeight(()=>(height+deltaY));
        };


        const onUp = (e) =>{
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        };


        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);

    });


    return(<>

        <div id={`target`} style={style.target} onMouseDown={handlerMouseBown}>


        </div>


    </>);
};


export default ResizableBox;