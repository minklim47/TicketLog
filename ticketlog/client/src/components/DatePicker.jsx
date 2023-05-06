import { Stack } from '@mui/material'
import React, { useState } from 'react'


function DatePicker() {
    const [selectedDate, setSelectedDate] = useState<Date | null >(null)
  return (
    <Stack spacing={4} sx={{width:'250px'}}>
        <DatePicker />
        </Stack>
  )
}

export default DatePicker