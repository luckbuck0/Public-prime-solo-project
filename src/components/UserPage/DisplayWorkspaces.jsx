
export default function DisplaySpaces (props) {
    let workSpace = props.spaces
    console.log('this is workspace inside displaySpaces',workSpace);
   
    return (
        <div className="workspaceContent">
            <img className="displayImage" src={workSpace.image_url} alt="" />
        </div>
    )
}