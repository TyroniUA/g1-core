import React, { useEffect, useState } from "react";

export default function Tab_group({ active, callBack, activeClassName, edit, isMobile, children}) {
    const [tabBodies, setTabBodies] = useState({});
    const [headers, setHeaders] = useState();

    useEffect(() => {
        if (children && children.length) {
          const map = {};
          const headersArray = children.map((element, index) => {
              let cloneElement = React.cloneElement(element, {
                active: index === active ? true : false,
                callBack: () => callBack(index)
              });
              if (typeof (cloneElement.props.children) === "object" && !cloneElement.props?.children?.length) {
                map[index] = cloneElement.props.children;
              }
              if (cloneElement?.props?.children?.length) {
                map[index] = cloneElement.props.children;
              }
              return cloneElement;
          });
          setTabBodies(map);
          setHeaders(headersArray);
        }
    }, [children]);

    const renderBody = () => {
        return (
          <>
            {
              tabBodies[active]
                ? tabBodies[active]
                : null
            }
          </>
        );
    };

    return (
      <div
        className={ "tab-group " + (!isMobile ? "w-60" : "w-100") + (activeClassName ? activeClassName : "") 
        + (edit? "edit" : "") }>
        <div className="tab-group-header">
          {headers && headers.map((header) => header)}
        </div>
        <div 
        >
          {renderBody()}
        </div>
      </div>
    );
}
