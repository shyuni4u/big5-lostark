export const TEST_INFO_SET = 'TEST-INFO/SET';

export type testInfoState = {
  newbie: boolean;
  classic: boolean;
  firstClass: string;
  firstTalent: string;
  secondClass: string;
  secondTalent: string;
  thirdClass: string;
  thirdTalent: string;
  extraversionScore: number;
  opennessToExperienceScore: number;
  agreeablenessScore: number;
  neuroticismScore: number;
  conscientiousnessScore: number;
  extraversionCount: number;
  opennessToExperienceCount: number;
  agreeablenessCount: number;
  neuroticismCount: number;
  conscientiousnessCount: number;
};

export const initialState: testInfoState = {
  newbie: false,
  classic: false,
  firstClass: '',
  firstTalent: '',
  secondClass: '',
  secondTalent: '',
  thirdClass: '',
  thirdTalent: '',
  extraversionScore: 0,
  opennessToExperienceScore: 0,
  agreeablenessScore: 0,
  neuroticismScore: 0,
  conscientiousnessScore: 0,
  extraversionCount: 0,
  opennessToExperienceCount: 0,
  agreeablenessCount: 0,
  neuroticismCount: 0,
  conscientiousnessCount: 0
};

export const setTestIfno = (obj: testInfoState) => ({
  type: TEST_INFO_SET,
  newbie: obj.newbie,
  classic: obj.classic,
  firstClass: obj.firstClass,
  firstTalent: obj.firstTalent,
  secondClass: obj.secondClass,
  secondTalent: obj.secondTalent,
  thirdClass: obj.thirdClass,
  thirdTalent: obj.thirdTalent,
  extraversionScore: obj.extraversionScore,
  opennessToExperienceScore: obj.opennessToExperienceScore,
  agreeablenessScore: obj.agreeablenessScore,
  neuroticismScore: obj.neuroticismScore,
  conscientiousnessScore: obj.conscientiousnessScore,
  extraversionCount: obj.extraversionCount,
  opennessToExperienceCount: obj.opennessToExperienceCount,
  agreeablenessCount: obj.agreeablenessCount,
  neuroticismCount: obj.neuroticismCount,
  conscientiousnessCount: obj.conscientiousnessCount
});

type actions = {
  type: string;
} & testInfoState;

const reducer = (state: testInfoState = initialState, action: actions): testInfoState | undefined => {
  switch (action.type) {
    case TEST_INFO_SET:
      return {
        ...state,
        newbie: action.newbie,
        classic: action.classic,
        firstClass: action.firstClass,
        firstTalent: action.firstTalent,
        secondClass: action.secondClass,
        secondTalent: action.secondTalent,
        thirdClass: action.thirdClass,
        thirdTalent: action.thirdTalent,
        extraversionScore: action.extraversionScore,
        opennessToExperienceScore: action.opennessToExperienceScore,
        agreeablenessScore: action.agreeablenessScore,
        neuroticismScore: action.neuroticismScore,
        conscientiousnessScore: action.conscientiousnessScore,
        extraversionCount: action.extraversionCount,
        opennessToExperienceCount: action.opennessToExperienceCount,
        agreeablenessCount: action.agreeablenessCount,
        neuroticismCount: action.neuroticismCount,
        conscientiousnessCount: action.conscientiousnessCount
      };
    default:
      return state;
  }
};

export default reducer;
