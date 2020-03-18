import React from 'react';

class ImageName extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        list:[{url:"https://images.daznservices.com/di/library/GOAL/f3/4/lionel-messi-barcelona-2019-20_16ks0znl58amk1kfrldq3l5sj3.jpg?t=1572064900&quality=60&w=1600",name:"Messi"},{url:"https://e2.365dm.com/19/07/768x432/skysports-ronaldo-cristiano_4731685.jpg?20190730120844",name:"Ronaldo"}]
      };
    }
    


    render() {
      return(
        <div>
          <input type="text"/>
          <input type="button" value="Click"/>
          <p>
            { this.state.list.map((elem,index)=>{
                return(
                    <div>
                        <img src={elem.url}/>
                        <p>{elem.name}</p>
                    </div>
                )
            })
        }
          </p>
        </div>
      )
    }
  }

export default ImageName;