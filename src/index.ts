import { exec } from 'child_process';

const common = `./src/features/*.feature \
--require-module ts-node/register \
--require ./src/step-definitions/**/**/*.ts`;

interface ProfileCommands {
  [key: string]: string;
}

const profiles: ProfileCommands = {
  smoke: `${common} --tags "@smoke"`,
  regression: `${common} --tags "@regression"`,
  login: `${common} --tags "@login"`,
  contactUs: `${common} --tags "@contact-us"`,
};

const profile = process.argv[2];

let command = `npx cucumber-js ${
  profiles[profile as 'smoke' | 'regression' | 'login' | 'contact-us']
}`;

exec(command, { encoding: 'utf-8' }, (error: Error | null, stdout: string) => {
  console.log(stdout);

  if (error) {
    throw new Error('Some automation test(s) have failed! - Please, review!');
  }
});
