/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages 프로젝트 페이지(username.github.io/repo)로 배포할 경우
  // BASE_PATH=/repo 환경변수로 지정. 커스텀 도메인·user page면 비워둠.
  basePath: process.env.BASE_PATH || '',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
