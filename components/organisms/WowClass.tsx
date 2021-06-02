import React, { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';

import Panel from '../atoms/Panel';
import Button from '../atoms/Button';
import Modal from '../atoms/Modal';
import Adfit from '../molecules/Adfit';

import reducerTest from '../../reducers/reducerTest';

import wowClassList, { WowClassItemInfo, ParamWowClassInfo } from '../../lib/WowClassInfo';

const StyledWowClassItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 0 1 200px;
  margin: 5px 2px;
  user-select: none;
  cursor: pointer;
  & > span {
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: 600;
  }
`;
const StyledWowClassTalents = styled.ul`
  background-color: rgba(53, 32, 17, 0.8);
  border: 1px solid #f8b700;
  box-shadow: inset 0 -8px 0 #f8b700;
  padding: 20px;
  margin-top: 20px;
  user-select: none;
  cursor: pointer;
  & > .talentInfo {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    & > .img {
      width: 30px;
      height: 30px;
      /* border-radius: 40%;
      border: 2px solid ${({ theme }) => theme.colors.warning}; */
      border: 1px solid #888;
      margin-right: 10px;
      background-color: #000;
    }
    & > .name {
      font-size: ${({ theme }) => theme.fontSizes.h3};
    }
    & > .pos {
      width: 14px;
      height: 14px;
      margin-left: 6px;
    }
  }
  & > .desc {
  }
`;

const wowClassIconWidth = 40;
const StyledWowClassIcon = styled.img`
  width: ${wowClassIconWidth}px;
  height: ${wowClassIconWidth}px;
  border-radius: 40%;
  border: 2px solid ${({ theme }) => theme.colors.warning};
  margin-right: 10px;
`;

const StyledSelectedWowClassList = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
`;
const StyledSelectedWowClassListEmpty = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  height: 40px;
  line-height: 40px;
  overflow: hidden;
`;

const StyledSelectedWowClassItem = styled.div`
  position: relative;
  display: inline-block;
  flex: 0 0 33%;
  min-height: ${wowClassIconWidth}px;
  cursor: pointer;
  ${({ theme }) => theme.media.tablet`
    margin-bottom: 10px;
  `}
  ${({ theme }) => theme.media.mobile`
    margin-bottom: 10px;
  `}
`;
const StyledWowSelectedClassName = styled.div`
  position: absolute;
  top: 20px;
  left: ${wowClassIconWidth + 5}px;
  line-height: ${wowClassIconWidth / 2}px;
  height: ${wowClassIconWidth / 2}px;
  width: calc(100% - ${wowClassIconWidth + 5}px);
  font-size: ${({ theme }) => theme.fontSizes.body14};
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledSelectedWowClassTalent = styled.div`
  position: absolute;
  top: 0px;
  left: ${wowClassIconWidth + 5}px;
  text-transform: capitalize;
  line-height: ${wowClassIconWidth / 2}px;
  height: ${wowClassIconWidth / 2}px;
  width: calc(100% - ${wowClassIconWidth + 5}px);
  font-size: ${({ theme }) => theme.fontSizes.body14};
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MAX_SELECT = 3;

export const Class: React.FC = () => {
  const { t } = useTranslation();

  const { testInfo } = reducerTest();

  const [talentList, setTalentList] = useState<WowClassItemInfo>(undefined);
  const [selectedWowClass, setSelectedWowClass] = useState<ParamWowClassInfo[]>([]);
  const [showTalent, setShowTalent] = useState<boolean>(false);

  const showModal = (wowClass: WowClassItemInfo) => {};

  const selectWowClass = (wowClass: any, talent: any) => {
    if (selectedWowClass.some((el) => el.name === wowClass.name && el.talent === talent.name)) {
      //  Do nothing.
    } else if (selectedWowClass.length === MAX_SELECT) {
      toast.error(t('tw-max-select', { max: MAX_SELECT }), {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      });
    } else {
      const temp: ParamWowClassInfo = {
        name: wowClass.name,
        color: wowClass.color,
        talent: talent.name,
        position: talent.position
      };
      setSelectedWowClass((old) => [...old, temp]);
    }
    setShowTalent(false);
  };

  const unselectWowClass = (item: ParamWowClassInfo) => {
    setSelectedWowClass(selectedWowClass.filter((el) => !(el.name === item.name && el.talent === item.talent)));
  };

  const goTest = () => {
    const temp = testInfo.get;
    if (selectedWowClass.length > 2) {
      temp.thirdClass = selectedWowClass[2].name;
      temp.thirdTalent = selectedWowClass[2].talent;
    }
    if (selectedWowClass.length > 1) {
      temp.secondClass = selectedWowClass[1].name;
      temp.secondTalent = selectedWowClass[1].talent;
    }
    if (selectedWowClass.length > 0) {
      temp.firstClass = selectedWowClass[0].name;
      temp.firstTalent = selectedWowClass[0].talent;
    }
    testInfo.set(temp);
    Router.push('./test');
  };

  return (
    <>
      <div style={{ marginBottom: '10px' }} />
      <Panel>
        <h3 className="panel-sub-title">당신의 직업을 선택하세요. (최대 3개)</h3>
        <h2 className="panel-title">와우 직업 선택</h2>
        <div className="panel-text" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {wowClassList.map((item, index) => (
            <StyledWowClassItem
              key={index}
              style={{ color: item.color }}
              onClick={() => {
                setTalentList(item);
                setShowTalent(true);
              }}
            >
              {item.image && <StyledWowClassIcon src={`/class/${item.image}.jpg`} alt={t(item.name)} />}
              <span>{t(item.name)}</span>
              {/* <StyledWowClassTalents>
                {item.talents &&
                  item.talents.map((subItem, subIndex) => (
                    <StyledWowClassTalentItem
                      key={subIndex}
                      onClick={() => selectWowClass(item, subItem)}
                    >
                      <StyledPositionIcon
                        src={`/class/${subItem.position}.svg`}
                        alt={t(subItem.position)}
                      />
                      {t(subItem.name)}
                    </StyledWowClassTalentItem>
                  ))}
              </StyledWowClassTalents> */}
            </StyledWowClassItem>
          ))}
        </div>
      </Panel>
      <Panel>
        <StyledSelectedWowClassList>
          {selectedWowClass.length === 0 ? (
            <StyledSelectedWowClassListEmpty>{t('tw-select-wow-class')}</StyledSelectedWowClassListEmpty>
          ) : (
            selectedWowClass.map((item, index) => (
              <StyledSelectedWowClassItem key={index} style={{ color: item.color }} onClick={() => unselectWowClass(item)}>
                <StyledWowSelectedClassName>{t(item.name)}</StyledWowSelectedClassName>
                {item.name && <StyledWowClassIcon src={`/class/${item.name}.jpg`} alt={t(item.name)} />}
                <StyledSelectedWowClassTalent>{t(item.talent)}</StyledSelectedWowClassTalent>
              </StyledSelectedWowClassItem>
            ))
          )}
        </StyledSelectedWowClassList>
      </Panel>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Button
          onClick={() => {
            if (selectedWowClass.length > 0) {
              goTest();
            }
          }}
        >
          성향 검사 시작
        </Button>
      </div>
      <Adfit />
      <Modal show={showTalent} onClose={() => setShowTalent(false)}>
        {talentList &&
          talentList.talents.map((item, index) => (
            <StyledWowClassTalents key={index} onClick={() => selectWowClass({ name: talentList.name, color: talentList.color }, item)}>
              <li className="talentInfo">
                <img className="img" src={`/class/${item.image}`} alt={t(item.name)} />
                <span className="name">{t(item.name)}</span>
                <img className="pos" src={`/class/${item.position}.svg`} alt={t(item.position)} />
              </li>
              <li className="desc">{item.desc}</li>
            </StyledWowClassTalents>
          ))}
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Button onClick={() => setShowTalent(false)}>닫기</Button>
        </div>
      </Modal>
    </>
  );
};

export default Class;
