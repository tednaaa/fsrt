#!/usr/bin/env node

import arg from 'arg';
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

export async function createProject(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };

  const currentFileUrl = import.meta.url;
  const templateDir = path.resolve(
    new URL(currentFileUrl).pathname,
    '../../template'
  );
  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (err) {
    console.error('%s Invalid template name', chalk.red.bold('ERROR'));
    process.exit(1);
  }

  console.log('Copy project files');
  await copyTemplateFiles(options);

  console.log('%s Project ready', chalk.green.bold('DONE'));
  return true;
}

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--git': Boolean,
      '--install': Boolean,
      '-g': '--git',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
    git: args['--git'] || false,
    template: args._[0],
    runInstall: args['--install'] || false,
  };
}

async function promptForMissingOptions(options) {
  const questions = [];

  if (!options.targetDirectory) {
    questions.push({
      type: 'input',
      name: 'targetDirectory',
      message: 'Please write the project name',
      default: 'my-app',
    });
  }

  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository?',
      default: false,
    });
  }

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    targetDirectory: options.targetDirectory || answers.targetDirectory,
    template: options.template || answers.template,
    git: options.git || answers.git,
  };
}

async function boostrap() {
  let options = parseArgumentsIntoOptions(process.argv);
  options = await promptForMissingOptions(options);
  await createProject(options);
}

boostrap();
