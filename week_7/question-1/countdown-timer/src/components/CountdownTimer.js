import React, { useState, useEffect } from "react"
import { Button, TextField, Typography } from "@mui/material"

const CountdownTimer = () => {
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")
  const [timerActive, setTimerActive] = useState(false)
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(0)

  const startCountdown = () => {
    if (!timerActive) {
      const totalSeconds =
        parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)
      if (totalSeconds > 0) {
        setTotalTimeInSeconds(totalSeconds)
        setTimerActive(true)
      }
    }
  }

  useEffect(() => {
    let interval

    if (timerActive) {
      if (totalTimeInSeconds > 0) {
        interval = setInterval(() => {
          const h = Math.floor(totalTimeInSeconds / 3600)
          const m = Math.floor((totalTimeInSeconds % 3600) / 60)
          const s = totalTimeInSeconds % 60

          if (totalTimeInSeconds <= 0) {
            clearInterval(interval)
            setTimerActive(false)
          } else {
            setHours(h.toString().padStart(2, "0"))
            setMinutes(m.toString().padStart(2, "0"))
            setSeconds(s.toString().padStart(2, "0"))
          }

          setTotalTimeInSeconds((prevTotalTime) => prevTotalTime - 1)
        }, 1000)
      } else {
        setTimerActive(false)
      }
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerActive, totalTimeInSeconds])

  return (
    <div>
      <Typography variant="h4">Countdown Timer</Typography>
      <div>
        <TextField
          label="Hours"
          variant="outlined"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <TextField
          label="Minutes"
          variant="outlined"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <TextField
          label="Seconds"
          variant="outlined"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={startCountdown}
        disabled={timerActive}
      >
        Start Countdown
      </Button>
      {timerActive && (
        <Typography variant="h5">
          Remaining Time: {hours}:{minutes}:{seconds}
        </Typography>
      )}
      {!timerActive && (
        <Typography variant="h5">
          {hours === "00" && minutes === "00" && seconds === "00"
            ? "Set a time to start the countdown."
            : "Time's up!"}
        </Typography>
      )}
    </div>
  )
}

export default CountdownTimer
