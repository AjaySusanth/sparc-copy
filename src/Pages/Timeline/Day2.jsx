import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const textStyle = {
  fontFamily: 'Nunito Sans, sans-serif',
  fontSize: '20px',
  lineHeight: '26px',
  fontWeight: '550',
};

const dotStyle = {
  backgroundColor: '#07194B',
};

const connectorStyle = {
  backgroundColor: '#07194B',
};

export default function OppositeContentTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent style={textStyle}>
          08:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dotStyle} />
          <TimelineConnector style={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={textStyle}>Inauguration</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={textStyle}>
          8:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dotStyle} />
          <TimelineConnector style={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={textStyle}>Ice Breaking</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={textStyle}>
          09:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dotStyle} />
          <TimelineConnector style={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={textStyle}>Session 1</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={textStyle}>
          10:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dotStyle} />
          <TimelineConnector style={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={textStyle}>To be announced</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={textStyle}>
          11:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dotStyle} />
          <TimelineConnector style={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={textStyle}>To be announced</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={textStyle}>
          01:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dotStyle} />
          <TimelineConnector style={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={textStyle}>To be announced</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={textStyle}>
          02:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dotStyle} />
          <TimelineConnector style={connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={textStyle}>To be announced</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={textStyle}>
          04:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dotStyle} />
        </TimelineSeparator>
        <TimelineContent style={textStyle}>To be announced</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
