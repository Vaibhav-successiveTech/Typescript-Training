'use client'
import { use, useEffect, useState } from "react"
import { Button } from '@mui/material'

type initialLayout = {
    [key: number]: any
}

const circle: string = 'O';
const cross: string = 'X';

const LayoutComponent: React.FC = () => {
    const [layout, setLayout] = useState<initialLayout>({
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: ''
    });

    const [move, setMove] = useState<string>('user');
    const [end, setEnd] = useState<boolean>(false);
    const [ai, setAi] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [win, setWin] = useState<string>('');
    const [int, setInt] = useState<any>(null);

    useEffect(() => {
        let i: any = null;
        if (!end) {
            i = setTimeout(() => {
                GenerateAiMove();
            }, 1000);
        }
        CheckWin();
        setInt(i);
        if (end) {
            clearTimeout(int);
        }
    }, [move, end]);

    const GenerateAiMove = () => {
        if (move == 'ai') {
            for (let i: number = 0; i < 10; i++) {
                const num: number = (Math.round(Math.random() * 10)) % 9;
                if (layout[num] == '') { 
                    setMove('user');
                    setLayout({...layout,[num]:ai});
                }
            }
        }
    }

    const handleClick = (id: number) => {
        if (move == 'user') {
            setMove('ai');
            setLayout({...layout,[id]:user});
        }

    }

    const CheckWin = () => {
        if (layout[0] != '' && layout[0] == layout[1] && layout[1] == layout[2]) {
            if (layout[0] == user) {
                setWin('user');
            } else {
                setWin('ai');
            }
            setEnd(true);
        } else if (layout[3] != '' && layout[3] == layout[4] && layout[4] == layout[5]) {
            if (layout[3] == user) {
                setWin('user');
            } else {
                setWin('ai');
            }
            setEnd(true);
        } else if (layout[6] != '' && layout[6] == layout[7] && layout[7] == layout[8]) {
            if (layout[6] == user) {
                setWin('user');
            } else {
                setWin('ai');
            }
            setEnd(true);
        } else if (layout[0] != '' && layout[0] == layout[3] && layout[3] == layout[6]) {
            if (layout[0] == user) {
                setWin('user');
            } else {
                setWin('ai');
            }
            setEnd(true);
        } else if (layout[1] != '' && layout[1] == layout[4] && layout[4] == layout[7]) {
            if (layout[1] == user) {
                setWin('user');
            } else {
                setWin('ai');
            }
            setEnd(true);
        } else if (layout[2] != '' && layout[2] == layout[5] && layout[5] == layout[8]) {
            if (layout[2] == user) {
                setWin('user');
            } else {
                setWin('ai');
            }
            setEnd(true);
        } else if (layout[0] != '' && layout[0] == layout[4] && layout[4] == layout[8]) {
            if (layout[0] == user) {
                setWin('user');
            } else {
                setWin('ai');
            }
            setEnd(true);
        } else if (layout[2] != '' && layout[2] == layout[4] && layout[4] == layout[6]) {
            if (layout[2] == user) {
                setWin('user');
            } else {
                setWin('ai');
            }
            setEnd(true);
        }
    }

    return (
        <>
            {
                !open ? <div>
                    <h2> Set Your Move </h2>
                    <br />
                    <Button variant='outlined' onClick={() => {
                        setAi(cross);
                        setUser(circle);
                        setOpen(true);
                    }}> {circle} </Button> <Button variant='outlined' onClick={() => {
                        setAi(circle);
                        setUser(cross);
                        setOpen(true);
                    }}> {cross} </Button>
                </div> : <>
                    <h1> TicTackToe </h1>
                    <br />
                    <Button size="large" variant="outlined" id="0" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(parseInt(e.currentTarget.id)) }}> {layout[0] ? layout[0] : <> . </>} </Button>
                    <Button size="large" variant="outlined" id="1" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(parseInt(e.currentTarget.id)) }}> {layout[1] ? layout[1] : <> . </>} </Button>
                    <Button size="large" variant="outlined" id="2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(parseInt(e.currentTarget.id)) }}> {layout[2] ? layout[2] : <> . </>} </Button>
                    <br /><br />
                    <Button size="large" variant="outlined" id="3" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(parseInt(e.currentTarget.id)) }}> {layout[3] ? layout[3] : <> . </>} </Button>
                    <Button size="large" variant="outlined" id="4" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(parseInt(e.currentTarget.id)) }}> {layout[4] ? layout[4] : <> . </>} </Button>
                    <Button size="large" variant="outlined" id="5" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(parseInt(e.currentTarget.id)) }}> {layout[5] ? layout[5] : <> . </>} </Button>
                    <br /><br />
                    <Button size="large" variant="outlined" id="6" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(parseInt(e.currentTarget.id)) }}> {layout[6] ? layout[6] : <> . </>} </Button>
                    <Button size="large" variant="outlined" id="7" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(parseInt(e.currentTarget.id)) }}> {layout[7] ? layout[7] : <> . </>} </Button>
                    <Button size="large" variant="outlined" id="8" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(parseInt(e.currentTarget.id)) }}> {layout[8] ? layout[8] : <> . </>} </Button>
                    <br />
                    <br />
                    {
                        win == '' ? <></> : win == 'user' ? <h2> You Won </h2> : <h2> Ai won </h2>
                    }
                </>
            }
        </>
    );

}

export default LayoutComponent;