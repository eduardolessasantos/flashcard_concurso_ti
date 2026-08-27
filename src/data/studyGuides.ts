import { StudyGuideTopic } from '../types';
import { PORTUGUESE_TOPIC } from './studyGuides/portuguese';
import { LOGIC_MATH_TOPIC } from './studyGuides/logicMath';
import { ENGLISH_TOPIC } from './studyGuides/english';
import { SOFTWARE_ENG_TOPIC } from './studyGuides/softwareEng';
import { PROGRAMMING_TOPIC } from './studyGuides/programming';
import { DATABASES_TOPIC } from './studyGuides/databases';
import { ARCHITECTURE_TOPIC } from './studyGuides/architecture';
import { SECURITY_TOPIC } from './studyGuides/security';
import { GOVERNANCE_TOPIC } from './studyGuides/governance';
import { BI_TOPIC } from './studyGuides/bi';
import { LEGISLATION_TOPIC } from './studyGuides/legislation';
import { CURRENT_AFFAIRS_AI_TOPIC } from './studyGuides/currentAffairsAI';

export const STUDY_GUIDE_TOPICS: StudyGuideTopic[] = [
  // ================= CONHECIMENTOS GERAIS =================
  PORTUGUESE_TOPIC,
  LOGIC_MATH_TOPIC,
  ENGLISH_TOPIC,
  LEGISLATION_TOPIC,
  CURRENT_AFFAIRS_AI_TOPIC,

  // ================= CONHECIMENTOS ESPECÍFICOS DE TI =================
  SOFTWARE_ENG_TOPIC,
  PROGRAMMING_TOPIC,
  DATABASES_TOPIC,
  ARCHITECTURE_TOPIC,
  SECURITY_TOPIC,
  GOVERNANCE_TOPIC,
  BI_TOPIC
];
