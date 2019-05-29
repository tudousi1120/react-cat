import React ,{Component} from 'react';
import IndexHeader from '../Components/IndexHeader'

const homeWarp={
    marginTop:'0.9rem'
}
class Home extends Component{
    render(){
        return(
            <div>
                <IndexHeader/>
                <div style={homeWarp}>
                    {this.props.children}
                </div>
            </div>
        )
    }

}
export default Home;