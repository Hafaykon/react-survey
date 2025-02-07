import "../App.css";

const CheckBox = (props) => {
    return(
        <>
            <ul>
                <li>
                    <label
                    ><input
                        name="spendTime"
                        type="checkbox"
                        value="Swimming"
                        onChange={props.handleChange}
                        checked={props.surveyData.spendTime.includes("Swimming")}
                    />Swimming</label
                    >
                </li>
                <li>
                    <label
                    ><input name="spendTime" type="checkbox" value="Bathing" onChange={props.handleChange} checked={props.surveyData.spendTime.includes("Bathing")}/>Bathing</label
                    >
                </li>
                <li>
                    <label
                    ><input
                        name="spendTime"
                        type="checkbox"
                        value="Chatting"
                        onChange={props.handleChange} 
                        checked={props.surveyData.spendTime.includes("Chatting")}
                    />Chatting</label
                    >
                </li>
                <li>
                    <label
                    ><input name="spendTime" type="checkbox" value="noTime" onChange={props.handleChange} checked={props.surveyData.spendTime.includes("noTime")}/>I don't like to
                    spend time with it</label
                    >
                </li>
            </ul>
        </>
    )
}

export default CheckBox