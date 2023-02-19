export default function Tab(props) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (props.callBack && active) {
          props.callBack(true);
        }
    }, [active]);

    useEffect(() => {
        if(!active && props.active){
          setActive(true);
        }
        if (!props.active && active) {
          setActive(false);
        }
    }, [props.active]);

    return (
      <div className={ `tab ${props.edit? "edit" : ""}` } >
        <h5
          className={ `tab-title ${props.active ? "tab-active" : ""} margin-zero` }
          onClick={ () => {
              setActive(true);
          } }>
          {props.title}
        </h5>

      </div>
    );
}