import React, { Fragment, useRef, useState, useEffect, useCallback } from 'react';

function Solution() {
    const minsRef = useRef();
    const secondsRef = useRef();
    const [mins, setMins] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [intrvl, setIntrvl] = useState();
    const [paused, setPaused] = useState(false);
    const [action, setAction] = useState(null);


    const reset = useCallback(() => {
        setSeconds(0);
        setMins(0);
        console.log(intrvl)
        clearInterval(intrvl);
        setIntrvl(null);
        minsRef.current.value = 0;
        secondsRef.current.value = 0;
    }, [intrvl]);
    const updateClock = useCallback(() => {
        console.log(` in update clock ${mins} ${seconds}`)
        if (mins === 0 && seconds === 0) {
            reset();
        }
        if (seconds > 0) {
            setSeconds((prvs) => prvs - 1);
        } else if (seconds === 0) {
            if (mins > 0) {
                setSeconds(59);
                setMins(prvs => prvs - 1)
            } else {
                setMins(0);
            }
        }

    }, [mins, seconds, reset])

    const startTimer = useCallback(() => {
        setMins(minsRef.current.value ? parseInt(minsRef.current.value) : 0);
        setSeconds(secondsRef.current.value ? parseInt(secondsRef.current.value) : 0);
        console.log(mins, seconds)
        setPaused(false);
        clearInterval(intrvl);
        setIntrvl(null);
        setIntrvl(setInterval(updateClock, 1000));
    }, [updateClock, intrvl, mins, seconds]);


    const pause = useCallback(() => {
        if (paused) {
            //resume
            setPaused(false);
            setIntrvl(setInterval(updateClock, 1000));
        } else {
            setPaused(true);
            clearInterval(intrvl);
            setIntrvl(null);
        }
    }, [updateClock, intrvl, paused]);
    useEffect(() => {
        switch (action) {
            case 'Start':
                startTimer();
                break;
            case 'Pause':
                pause();
                break;
            case 'Reset':
                reset();
                break;
            default:
                break;
        }
    }, [action, startTimer, pause, reset])
    return (
        <Fragment>
            <label>
                <input type="number" ref={minsRef} />
                Minutes
            </label>
            <label>
                <input type="number" ref={secondsRef} />
                Seconds
            </label>

            <button onClick={() => setAction('Start')} onKeyPress={() => setAction('Start')}>START</button>
            <button onClick={() => setAction('Pause')} onKeyPress={() => setAction('Pause')}>PAUSE / RESUME</button>
            <button onClick={() => setAction('Reset')} onKeyPress={() => setAction('Reset')}>RESET</button>

            <Clock mins={mins} seconds={seconds} />
        </Fragment>
    );
}
