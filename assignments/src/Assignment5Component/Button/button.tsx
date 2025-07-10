'use client'
import { Button } from "@mui/material";

export default function ButtonComponent({ color, clickHandler }: { color: string, clickHandler: () => void }) {
    return (
        <>
        {
            color == 'primary'? <Button color='primary' variant="contained" onClick={clickHandler}> Click </Button>: color == 'secondary' ? <Button color='secondary' variant="contained" onClick={clickHandler}> Click </Button> : <Button color='error' variant="contained" onClick={clickHandler}> Click </Button>
        }
        </>
    );
}