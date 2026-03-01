// src/app/actions.js (경로 최종 수정 버전)

'use server'; // 이 파일의 모든 함수는 서버에서만 실행됩니다!

// 경로 수정: '..'을 하나 더 추가하여 두 단계 위인 프로젝트 최상위로 올라갑니다.
import { addConsumer, addBrand } from '../../lib/db';

// 소비자(선수/팀) 데이터를 저장하는 함수
export async function submitConsumer(data) {
  try {
    await addConsumer(data);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// 브랜드 데이터를 저장하는 함수
export async function submitBrand(data) {
  try {
    await addBrand(data);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
