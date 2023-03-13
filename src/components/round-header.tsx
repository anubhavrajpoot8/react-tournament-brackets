import React from 'react';
import styled from 'styled-components';
import { Options } from '../types';

export type RoundHeaderProps = {
  x: number;
  y?: number;
  width: number;
  roundHeader: Options['roundHeader'];
  canvasPadding: number;
  numOfRounds: number;
  tournamentRoundText: string;
  columnIndex: number;
};

const Text = styled.text`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.textColor.highlighted};
`

export default function RoundHeader({
  x,
  y = 0,
  width,
  roundHeader,
  canvasPadding,
  numOfRounds,
  tournamentRoundText,
  columnIndex,
}: RoundHeaderProps) {
  return (
    <g>
      <rect
        x={x}
        y={y + canvasPadding}
        width={width}
        height={roundHeader.height}
        fill={roundHeader.backgroundColor}
        rx="3"
        ry="3"
      />
      <Text
        x={x + width / 2}
        y={y + canvasPadding + roundHeader.height / 2}
        style={{
          fontFamily: roundHeader.fontFamily,
          fontSize: `${roundHeader.fontSize}px`,
          color: roundHeader.fontColor,
        }}
        fill="currentColor"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {!roundHeader.roundTextGenerator &&
          columnIndex + 1 === numOfRounds &&
          'Final'}
        {!roundHeader.roundTextGenerator &&
          columnIndex + 1 === numOfRounds - 1 &&
          'Semi-final'}
        {!roundHeader.roundTextGenerator &&
          columnIndex + 1 < numOfRounds - 1 &&
          `Round ${tournamentRoundText}`}
        {roundHeader.roundTextGenerator &&
          roundHeader.roundTextGenerator(columnIndex + 1, numOfRounds)}
      </Text>
    </g>
  );
}
