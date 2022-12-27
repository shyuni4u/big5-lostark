import { createSlice } from '@reduxjs/toolkit'

export type testType = {
  newbie: boolean
  firstClass: string
  firstTalent: string
  secondClass: string
  secondTalent: string
  thirdClass: string
  thirdTalent: string
  inputValues: number[]
  extraversionScore: number
  opennessToExperienceScore: number
  agreeablenessScore: number
  neuroticismScore: number
  conscientiousnessScore: number
  extraversionCount: number
  opennessToExperienceCount: number
  agreeablenessCount: number
  neuroticismCount: number
  conscientiousnessCount: number
}

const initialState: testType = {
  newbie: false,
  firstClass: '',
  firstTalent: '',
  secondClass: '',
  secondTalent: '',
  thirdClass: '',
  thirdTalent: '',
  inputValues: [],
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
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    set: (state, action) => {
      state.newbie = action.payload.newbie
      state.firstClass = action.payload.firstClass
      state.firstTalent = action.payload.firstTalent
      state.secondClass = action.payload.secondClass
      state.secondTalent = action.payload.secondTalent
      state.thirdClass = action.payload.thirdClass
      state.thirdTalent = action.payload.thirdTalent
      state.inputValues = action.payload.inputValues
      state.extraversionScore = action.payload.extraversionScore
      state.opennessToExperienceScore = action.payload.opennessToExperienceScore
      state.agreeablenessScore = action.payload.agreeablenessScore
      state.neuroticismScore = action.payload.neuroticismScore
      state.conscientiousnessScore = action.payload.conscientiousnessScore
      state.extraversionCount = action.payload.extraversionCount
      state.opennessToExperienceCount = action.payload.opennessToExperienceCount
      state.agreeablenessCount = action.payload.agreeablenessCount
      state.neuroticismCount = action.payload.neuroticismCount
      state.conscientiousnessCount = action.payload.conscientiousnessCount
    },
    reset: (state) => {
      state.newbie = false
      state.firstClass = ''
      state.firstTalent = ''
      state.secondClass = ''
      state.secondTalent = ''
      state.thirdClass = ''
      state.thirdTalent = ''
      state.inputValues = []
      state.extraversionScore = 0
      state.opennessToExperienceScore = 0
      state.agreeablenessScore = 0
      state.neuroticismScore = 0
      state.conscientiousnessScore = 0
      state.extraversionCount = 0
      state.opennessToExperienceCount = 0
      state.agreeablenessCount = 0
      state.neuroticismCount = 0
      state.conscientiousnessCount = 0
    }
  },
  extraReducers: {}
})

export const { set, reset } = testSlice.actions

export const selectTest = (state) => state.test

export default testSlice
