import Style from './style/style.css'

/* <button>C</button>
                <button>()</button>
                <button>%</button>
                <button>/</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>X</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>א</button>
                <button>0</button>
                <button>.</button>
                <button>=</button> 
                
                */

export default function calculator(props){


    const teclas = ['C', '()', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', 'א', '0', '.', '=']
    const [currentOp, setCurrentOP] = props.useState(0)
 
    const displayCOP = (cop)=>{
        if(currentOp == '0'){
            
            setCurrentOP(cop)
        } else {
            setCurrentOP(currentOp + cop)
        }
        
    }


    const Fexpression = (e)=>{
        switch (e){
            case 'C':
                break
            case '()':
                break
            case '%':
                break
            case '/':
                break
            case 'X':
                break
            case '-':
                break
            case '+':
                break
            case '.':
                break
            case '=':
                break       
        }
    }

    const FNumber = (e)=>{
        displayCOP(e.target.value)
    }

    const teclasRender = (tc)=>{ /*renderiza os elementos do calc */
        const a = tc.map((e)=>{
            let elements = <button onClick={(el)=>(isNaN(e) ? Fexpression(el) : FNumber(el))} value={e}>{e}</button>
            return elements
        })
        return a
    }

    

    


    
 

    return(
        <div id='kol'>
            <div id='calculator'>
                <div id="display">
                    <p id='currentOP'>{currentOp}</p>
                    <p id='previousOP'>0</p>

                </div>
                <div id="teclas">
                    {teclasRender(teclas)}
                </div>
                
            </div>
        
        </div>
    )
}