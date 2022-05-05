import React from "react";

interface Props {
    title?: string,
    children: string,
}

const Layout: React.FC<Props> = ( props ) => {
    const {title, children} = props;
    return(
        <div className="container">
            {title && <div className="row">
                <div className="col-sm-12">
                    <h1>{title}</h1>
                </div>
            </div>}
            <div className="row">
                <div className="col-sm-12">{children}</div>
            </div>
        </div>
    );
}
export default Layout;