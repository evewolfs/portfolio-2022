const isGithubPages = process.env.GITHUB_ACTIONS || false;
const repo = 'portfolio-2022'; // Replace with your GitHub repository name

module.exports = {
  reactStrictMode: true,
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  basePath: isGithubPages ? `/${repo}` : '',
};

