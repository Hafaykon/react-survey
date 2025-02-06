import "../App.css";

const CheckBox = (props) => {


    return(
        <>
            <ul>
                <li>
                    <label
                    ><input
                        name="spend-time"
                        type="checkbox"
                        value="swimming"
                        onChange={props.handleChange}
                    />Swimming</label
                    >
                </li>
                <li>
                    <label
                    ><input name="spend-time" type="checkbox" value="bathing" onChange={props.handleChange} checked={props.surveyData.spendTime.add(value)}/>Bathing</label
                    >
                </li>
                <li>
                    <label
                    ><input
                        name="spend-time"
                        type="checkbox"
                        value="chatting"
                        onChange={props.handleChange}
                    />Chatting</label
                    >
                </li>
                <li>
                    <label
                    ><input name="spend-time" type="checkbox" value="noTime" onChange={props.handleChange}/>I don't like to
                    spend time with it</label
                    >
                </li>
            </ul>
        </>
    )
}

export default CheckBox