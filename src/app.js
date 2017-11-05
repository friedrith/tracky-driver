import SerialPort from 'serialport'

import dotenv from 'dotenv'

dotenv.config()

const serialPort = new SerialPort(process.env.PORT, {
  baudRate: 9600,
})
serialPort.on('open', () => {
  console.log('Serial Port Opened')

  let buffer = ''
  serialPort.on('data', (data) => {
    buffer += (new Buffer(data)).toString()
    if (buffer.match(/\n$/)) {
      console.log(buffer);
      buffer = ''
    }
  })
})
