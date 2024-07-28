import React, { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const getResponsiveStyles = () => {
  const width = window.innerWidth;
  if (width <= 480) {
    return {
      textStyle: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '16px',
        lineHeight: '20px',
      },
      dotStyle: {
        backgroundColor: '#07194B',
      },
      connectorStyle: {
        backgroundColor: '#07194B',
      },
    };
  } else if (width <= 768) {
    return {
      textStyle: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '18px',
        lineHeight: '24px',
      },
      dotStyle: {
        backgroundColor: '#07194B',
      },
      connectorStyle: {
        backgroundColor: '#07194B',
      },
    };
  } else {
    return {
      textStyle: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '20px',
        lineHeight: '26px',
      },
      dotStyle: {
        backgroundColor: '#07194B',
      },
      connectorStyle: {
        backgroundColor: '#07194B',
      },
    };
  }
};

export default function OppositeContentTimeline() {
  const [styles, setStyles] = useState(getResponsiveStyles());

  useEffect(() => {
    const handleResize = () => {
      setStyles(getResponsiveStyles());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent style={styles.textStyle}>
          08:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={styles.dotStyle} />
          <TimelineConnector style={styles.connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={styles.textStyle}>Inauguration</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={styles.textStyle}>
          8:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={styles.dotStyle} />
          <TimelineConnector style={styles.connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={styles.textStyle}>Ice Breaking</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={styles.textStyle}>
          09:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={styles.dotStyle} />
          <TimelineConnector style={styles.connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={styles.textStyle}>Session 1</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={styles.textStyle}>
          10:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={styles.dotStyle} />
          <TimelineConnector style={styles.connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={styles.textStyle}>To be announced</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={styles.textStyle}>
          11:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={styles.dotStyle} />
          <TimelineConnector style={styles.connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={styles.textStyle}>To be announced</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={styles.textStyle}>
          01:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={styles.dotStyle} />
          <TimelineConnector style={styles.connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={styles.textStyle}>To be announced</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={styles.textStyle}>
          02:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={styles.dotStyle} />
          <TimelineConnector style={styles.connectorStyle} />
        </TimelineSeparator>
        <TimelineContent style={styles.textStyle}>To be announced</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={styles.textStyle}>
          04:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={styles.dotStyle} />
        </TimelineSeparator>
        <TimelineContent style={styles.textStyle}>To be announced</TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}
