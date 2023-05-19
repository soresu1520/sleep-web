import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

const App = () => {
  const lol = '123';
  // comment

  return (
    <div>
      <h1>Test</h1>
      <CustomizedSlider defaultValue={30} />
    </div>
  );
};

export default App;
