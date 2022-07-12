module.exports = {
    apps : [
        {
            name: "indulge-test",
            scripts: {
                "tsc": "tsc",
                "test": "mocha",
                "ts-start": "npx nodemon src/index.ts",
                "js-start": "node --experimental-specifier-resolution=node build/dist/src/index.js"
              },
            instances: 1,
            exec_mode: "cluster",
            watch: true,
            increment_var : 'PORT',
            env: {
                "PORT": 3000,
                "NODE_ENV": "development",
                "DB_NAME": "indulge_staging",
                "DB_NAME_TEST": "bbtest",
                "DB_HOST": "stagingindulge.cosmfpuv7bqt.us-east-1.rds.amazonaws.com",
                "DB_USER": "postgres",
                "DB_PASSWORD": "Hellohello2022",
                "DB_PORT": 5432,
                "DB_DIALECT": "postgres",
                "REDIS_PORT": 6379,
                "REDIS_HOST": "192.168.99.100",
                "REDIS_PASSWORD": "indulgerediscluster",
                "REDIS_USERNAME": "indulgerediscluster",    
                "LOG_LEVEL": "verbose",
                "SECRET": "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NzMwNzQ1MiwiaWF0IjoxNjU3MzA3NDUyfQ.A1eNIpX-6KBb4NNbZ2PaVeBXNsqRR5N3jkh56FOU0BI",
            },
        },
    ],
  };
