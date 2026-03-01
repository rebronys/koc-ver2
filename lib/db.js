// lib/db.js (ioredis 버전)

import IORedis from 'ioredis';

// .env.local 파일의 REDIS_URL을 자동으로 읽어와서 데이터베이스에 연결합니다.
const redis = new IORedis(process.env.REDIS_URL);

// 모든 함수는 동일하지만, 내부적으로 redis(새 부품)를 사용합니다.

export async function getConsumers() {
  const data = await redis.get('consumers');
  return data ? JSON.parse(data) : []; // 데이터를 가져와서 자바스크립트 객체로 변환
}

export async function getBrands() {
  const data = await redis.get('brands');
  return data ? JSON.parse(data) : [];
}

export async function addConsumer(consumerData) {
  const consumers = await getConsumers();
  consumers.push({ id: Date.now(), ...consumerData });
  await redis.set('consumers', JSON.stringify(consumers)); // 데이터를 문자열로 변환하여 저장
}

export async function addBrand(brandData) {
  const brands = await getBrands();
  brands.push({ id: Date.now(), ...brandData });
  await redis.set('brands', JSON.stringify(brands));
}

export async function findMatches() {
  const consumers = await getConsumers();
  const brands = await getBrands();
  const matches = [];

  consumers.forEach(consumer => {
    brands.forEach(brand => {
      // 로직은 이전과 동일
      if (consumer.categories.includes(brand.category) && brand.sports.includes(consumer.sport)) {
        matches.push({
          matchId: `${consumer.id}-${brand.id}`,
          consumer,
          brand
        });
      }
    });
  });

  return matches;
}
