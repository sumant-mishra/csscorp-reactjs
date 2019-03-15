import React, {Component} from 'react';

class Main extends Component{
    
    constructor(props)
    {
        console.log("--------> calling constructor")

        super(props);
        this.state = {
            val: 3,
            movies: [
                {
                    id: 0,
                    title: "Dummy Title"
                }
            ]
        }
    }

    shouldComponentUpdate(){
        console.log("--------> calling shouldComponentUpdate");
        return true;
    }

    static getDerivedStateFromProps(props, state) {
        console.log("--------> calling getDerivedStateFromProps")
        console.log("props in Main", props.movies);

        if(state.movies !== props.movies)
        {
            return {
                movies: props.movies
            }
        }
        return null;
    }

    componentDidMount(){
        console.log("--------> calling componentDidMount")
    }

    componentDidUpdate(){
        console.log("--------> calling componentDidUpdate")
    }

    onClickHandler(item){
        this.props.btnClickHandler(item);
    }

    render(){

        console.log("--------> calling render: ")
        const {propsVal} = this.props

        const moviesList = this.state.movies.map((item) => {
            return <li key={item.id} onClick={this.onClickHandler.bind(this, item)}>{item.title}</li>
        })

        return(
            <div>
                
                Hello Main Component {(this.state.val == 10) ? this.state.val : 15} and props is {propsVal}
                <ul>{moviesList}</ul>
            </div>
        )
    }
}

export default Main;