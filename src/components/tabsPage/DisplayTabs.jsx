
export default function DisplayTabs (props) {

    const tabs =props.tabs
    return (
        <div className="workspaceContent">
        <p>Name:{tabs.name} </p>
        <p>Url: <br />{tabs.url}</p>
        <img className="displayImage" src={tabs.photo} alt="" />
        <p>Notes <br />{tabs.notes}</p>
        <span  >🖊</span><span  className="text">🪣</span>
    </div>
    )
}