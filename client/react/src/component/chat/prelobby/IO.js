import React, {Component} from "react";

class IO extends Component {
    render(){
        return(
            <table className='pt-8 grid gap-4 grid-cols-2 griflex place-self-center dark:text-white text-xl'>
                <td>Input Device</td>
                <td>
                    <select className='bg-transparent w-36 border-2 rounded-lg' id="input">
                        <option className='bg-dark' value="male"> Male </option>
                            <option className='bg-dark' value="female"> Female</option>
                        </select>
                </td>
                <td>Output Device</td>
                <td>
                    <select className='bg-transparent w-36 border-2 rounded-lg' id="output">
                        <option className='bg-dark' value="male"> Male </option>
                        <option className='bg-dark' value="female"> Female</option>
                    </select>
                </td>
            </table>
        )
    }
}
export default IO