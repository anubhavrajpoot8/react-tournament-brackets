import { Match } from '../types';

const simpleDoubleFull: { upper: Match[]; lower: Match[] } = {
  upper: [
    {
      id: 20512,
      name: 'UB Semi Final',
      nextMatchId: 20515,
      nextLooserMatchId: 20502,
      tournamentRoundText: 'UB 3',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: null,
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'BTC',
        },
        {
          id: null,
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'Towby',
        },
      ],
    },
    {
      id: 20513,
      name: 'UB 2.1',
      nextMatchId: 20512,
      nextLooserMatchId: 20506,
      tournamentRoundText: 'UB 2',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '8cf422cd-a99d-4184-b2cd-70ee481f46b3',
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'GlootOne',
        },
        {
          id: 'a3fb4b05-d4ee-4efe-84cf-b500cdbdbbe0',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'Towby',
        },
      ],
    },
  
    {
      id: 20515,
      name: 'Final',
      nextMatchId: null,
      nextLooserMatchId: null,
      tournamentRoundText: 'UB 4',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '3d1a5ddb-85b7-4724-b94d-8747454d66e9',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'SeatloNfkslf',
        },
        {
          id: 'a3fb4b05-d4ee-4efe-84cf-b500cdbdbbe0',
          resultText: '1',
          isWinner: false,
          status: 'PLAYED',
          name: 'Towby',
        },
      ],
    },
  
   
    {
      id: 20510,
      name: 'UB 2.2',
      nextMatchId: 20512,
      nextLooserMatchId: 20504,
      tournamentRoundText: 'UB 2',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'a3c107d2-ded2-4f33-85e7-2215805f664b',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'BTC',
        },
        {
          id: '3d1a5ddb-85b7-4724-b94d-8747454d66e9',
          resultText: '1',
          isWinner: false,
          status: 'PLAYED',
          name: 'SeatloN',
        },
      ],
    },
  
  ],
  lower: [
   
  
    {
      id: 20504,
      name: 'LB 2.1',
      nextMatchId: 20507,
      nextLooserMatchId: null,
      tournamentRoundText: 'LB 2',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '3d1a5ddb-85b7-4724-b94d-8747454d66e9',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'SeatloN',
        },
        {
          id: 'e1e48aad-5e29-41dc-b904-16f152a7ec74',
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'spacefudg3',
        },
      ],
    },
   
    {
      id: 20507,
      name: 'LB 3.1',
      nextMatchId: 20515,
      nextLooserMatchId: null,
      tournamentRoundText: 'LB 3',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '3d1a5ddb-85b7-4724-b94d-8747454d66e9',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'SeatloN',
        },
        {
          id: '8cf422cd-a99d-4184-b2cd-70ee481f46b3',
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'GlootOne',
        },
      ],
    },
    
  ],
};


// for participant 4 
const participant4 : { upper: Match[]; lower: Match[] } = {
  upper: [
    {
      id: 20512,
      name: 'UB Semi Final',
      nextMatchId: 20515,
      nextLooserMatchId: 20502,
      tournamentRoundText: 'UB 3',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'a3c107d2-ded2-4f33-85e7-2215805f664b',
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'BTC',
        },
        {
          id: 'a3fb4b05-d4ee-4efe-84cf-b500cdbdbbe0',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'Towby',
        },
      ],
    },
    {
      id: 20513,
      name: 'UB 2.1',
      nextMatchId: 20512,
      nextLooserMatchId: 20506,
      tournamentRoundText: 'UB 2',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '8cf422cd-a99d-4184-b2cd-70ee481f46b3',
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'GlootOne',
        },
        {
          id: 'a3fb4b05-d4ee-4efe-84cf-b500cdbdbbe0',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'Towby',
        },
      ],
    },
  
    {
      id: 20515,
      name: 'Final',
      nextMatchId: null,
      nextLooserMatchId: null,
      tournamentRoundText: 'UB 4',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '3d1a5ddb-85b7-4724-b94d-8747454d66e9',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'SeatloNfkslf',
        },
        {
          id: 'a3fb4b05-d4ee-4efe-84cf-b500cdbdbbe0',
          resultText: '1',
          isWinner: false,
          status: 'PLAYED',
          name: 'Towby',
        },
      ],
    },
  
   
    {
      id: 20510,
      name: 'UB 2.2',
      nextMatchId: 20512,
      nextLooserMatchId: 20504,
      tournamentRoundText: 'UB 2',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: 'a3c107d2-ded2-4f33-85e7-2215805f664b',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'BTC',
        },
        {
          id: '3d1a5ddb-85b7-4724-b94d-8747454d66e9',
          resultText: '1',
          isWinner: false,
          status: 'PLAYED',
          name: 'SeatloN',
        },
      ],
    },
  
  ],
  lower: [
   
  
    {
      id: 20504,
      name: 'LB 2.1',
      nextMatchId: 20507,
      nextLooserMatchId: null,
      tournamentRoundText: 'LB 2',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '3d1a5ddb-85b7-4724-b94d-8747454d66e9',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'SeatloN',
        },
        {
          id: 'e1e48aad-5e29-41dc-b904-16f152a7ec74',
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'spacefudg3',
        },
      ],
    },
   
    {
      id: 20507,
      name: 'LB 3.1',
      nextMatchId: 20515,
      nextLooserMatchId: null,
      tournamentRoundText: 'LB 3',
      startTime: 'August 05, 2021',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '3d1a5ddb-85b7-4724-b94d-8747454d66e9',
          resultText: '2',
          isWinner: true,
          status: 'PLAYED',
          name: 'SeatloN',
        },
        {
          id: '8cf422cd-a99d-4184-b2cd-70ee481f46b3',
          resultText: '0',
          isWinner: false,
          status: 'PLAYED',
          name: 'GlootOne',
        },
      ],
    },
    
  ],
};


export default simpleDoubleFull;
