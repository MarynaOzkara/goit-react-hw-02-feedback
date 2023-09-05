
import {WrapOptions, Option} from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onFeedbackClick}) => (
    <WrapOptions>{
       options.map(option => (
        <Option 
          key={option} 
          onClick={() => onFeedbackClick(option)}>{option}</Option>
       ))}
    </WrapOptions>
);
 export default FeedbackOptions;