import { FC, ReactNode } from "react";
import Header from "./Header/Header";

type Props = {children: ReactNode}

const Layout: FC<Props> = ({children}) => {
    return(
        <div>
            <Header/>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    )
}

export default Layout