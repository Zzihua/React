import './App.css';
import { QRCodeSVG } from 'qrcode.react';
import { QRCodeCanvas } from 'qrcode.react';


function App(){
  

  return (
    <div className='App'>
      <h2>SVG QRcode</h2>
      <QRCodeSVG value='https://reactjs.org'/>
      <h2>Canvas QRcode</h2>
      <QRCodeCanvas value='https://reactjs.org'/>

      <QRCodeSVG
          value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#756fce"}
          level={"L"}
          includeMargin={false}
          imageSettings={{
            src: "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png",
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
    </div>
  );
};
export default App;