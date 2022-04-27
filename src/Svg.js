import React from "react";

function SVGMap(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={props.map.viewBox}
            className={props.className}
            role={props.role}
            aria-label={props.map.label}
        >
            {props.childrenBefore}
            {props.map.locations.map((location, index) => {
                return (
                    <path
                        id={location.id}
                        name={location.name}
                        d={location.path}
                        className={
                            typeof props.locationClassName === "function"
                                ? props.locationClassName(location, index)
                                : props.locationClassName
                        }
                        tabIndex={
                            typeof props.locationTabIndex === "function"
                                ? props.locationTabIndex(location, index)
                                : props.locationTabIndex
                        }
                        role={props.locationRole}
                        aria-label={
                            typeof props.locationAriaLabel === "function"
                                ? props.locationAriaLabel(location, index)
                                : location.name
                        }
                        aria-checked={props.isLocationSelected && props.isLocationSelected(location, index)}
                        onMouseOver={props.onLocationMouseOver}
                        onMouseOut={props.onLocationMouseOut}
                        onMouseMove={props.onLocationMouseMove}
                        onClick={props.onLocationClick}
                        onDoubleClick={props.onLocationClick}
                        // onKeyDown={props.onLocationKeyDown}
                        onFocus={e => props.onLocationFocus(e, location)}
                        onBlur={props.onLocationBlur}
                        key={location.id}
                    />
                );
            })}
            {props.childrenAfter}
        </svg>
    );
}

export default SVGMap;
