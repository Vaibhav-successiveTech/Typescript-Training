import DenseAppBar from "../../Assignment4Component/navbar";

export default function Layout({children}:{children : React.ReactNode}){
    return (
        <>
        <DenseAppBar/>
            {children}
        </>
)
}