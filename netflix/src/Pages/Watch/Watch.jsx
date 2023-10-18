import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "./Watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://www.youtube.com/watch?v=S4wKoTXyl3k&list=RDGMEMCMFH2exzjBeE_zAHHJOdxg&start_radio=1&rv=lsc3iYzLdOo&ab_channel=TheVibeGuide"
      />
    </div>
  );
}