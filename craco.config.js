const path = require('path');
module.exports = {
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],  //装饰器
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": 'css'
        }
      ]
    ]
  },
  webpack: {
    alias: {
      "@": path.resolve("src")
    }
  },
}