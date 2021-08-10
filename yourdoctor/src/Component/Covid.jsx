import React , {useState , useCallback , useEffect} from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'

function Covid(props) {

    let [ApiGov , setApiGov] = useState({
        Gov : [] 
    })

    const getApi = () => {
        let promise = Axios({
            url : 'https://api-kent.netlify.app/.netlify/functions/api/vn/daily/covid',
            method : 'GET',
        });
        promise.then((result) => {
            console.log('API : ',result.data);
            setApiGov({
                Gov : result.data.data
            }, console.log('new state : ',result.data.data));
            console.log('Success')
        });
        promise.catch((reponse) => {
            console.log('UnSuccess');
        });
    }

    useEffect(() => {
        getApi();
        return () => {
            //Return of Component UnditMount !
        }
    }, []);

    const RenderCovid = () => {
        let newArr = Object.values(ApiGov.Gov)
        return newArr.map((tt, index) => {
            return (
                 <tr key={index}>
                        <td>{index+1}</td>
                        <td>{tt.date}</td>
                        <td>{tt.total_cases}</td>
                        <td>{tt.new_cases}</td>
                        <td>{tt.total_deaths}</td>
                </tr>
            )
        })
    }

    return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Total Case</th>
                        <th>New Case</th>
                        <th>Total Deaths</th>
                    </tr>
                </thead>
                <tbody>
                   {RenderCovid()}
                </tbody>
            </table>
    )
}

Covid.propTypes = {

}

export default Covid

