'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var shell = require('shelljs');

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the ' + chalk.red('node-module-boilerplate') + ' generator!'
    ));

    var authorName;
    var authorEmail;

    if (shell.which('git')) {
      authorName = shell.exec('git config --get user.name', {silent: true}).stdout.trim();
      authorEmail = shell.exec('git config --get user.email', {silent: true}).stdout.trim();
    }

    var prompts = [
      {
        type: 'input',
        name: 'moduleName',
        message: 'Your module name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'moduleDescription',
        message: 'Your module description'
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'Author name',
        default: authorName
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'Author email',
        default: authorEmail
      },
      {
        type: 'confirm',
        name: 'isGitHub',
        message: 'This project will be pushed to github.com?',
        default: true
      },
      {
        when: function (response) {
          return response.isGitHub;
        },
        name: 'githubUser',
        message: 'Github user'
      },
      {
        type: 'confirm',
        name: 'newDirectory',
        message: 'Would you like to create a new directory for your project?',
        default: true
      }
    ];

    return this.prompt(prompts)
      .then(function (answers) {
        this.props = answers;
        this.props.slug = slugify(this.props.moduleName);
        if (this.props.newDirectory) {
          this.destinationRoot(this.props.moduleName);
        }
      }.bind(this));
  },

  writing: {
    config: function () {
      if (this.props.githubUser) {
        this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'), {
            moduleName: this.props.slug,
            moduleDescription: this.props.moduleDescription,
            githubUser: this.props.githubUser,
            authorName: this.props.authorName,
            authorEmail: this.props.authorEmail
          }
        );
      }
      else {
        this.fs.copyTpl(
          this.templatePath('_package_nogithub.json'),
          this.destinationPath('package.json'), {
            moduleName: this.props.slug,
            moduleDescription: this.props.moduleDescription,
            authorName: this.props.authorName,
            authorEmail: this.props.authorEmail
          }
        );
      }
      this.fs.copy(
        this.templatePath('_.travis.yml'),
        this.destinationPath('travis.yml')
      );
      this.fs.copy(
        this.templatePath('_.npmignore'),
        this.destinationPath('.npmignore')
      );
      this.fs.copy(
        this.templatePath('_.gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('_.eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath('_.env'),
        this.destinationPath('.env')
      );
      this.fs.copy(
        this.templatePath('_.editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('_.codeclimate.yml'),
        this.destinationPath('.codeclimate.yml')
      );
      this.fs.copy(
        this.templatePath('_test/_.eslintrc'),
        this.destinationPath('test/.eslintrc')
      );
      this.fs.copy(
        this.templatePath('_test/_mocha.opts'),
        this.destinationPath('test/mocha.opts')
      );
    },
    app: function () {
      if (this.props.githubUser) {
        this.fs.copyTpl(
          this.templatePath('_README.md'),
          this.destinationPath('README.md'), {
            moduleName: this.props.moduleName,
            slug: this.props.slug,
            githubUser: this.props.githubUser,
            moduleDescription: this.props.moduleDescription,
            authorName: this.props.authorName
          }
        );
      }
      else {
        this.fs.copyTpl(
          this.templatePath('_README_nogithub.md'),
          this.destinationPath('README.md'), {
            moduleName: this.props.moduleName,
            slug: this.props.slug,
            moduleDescription: this.props.moduleDescription,
            authorName: this.props.authorName
          }
        );
      }
      this.fs.copy(
        this.templatePath('_LICENSE'),
        this.destinationPath('LICENSE')
      );
      this.fs.copy(
        this.templatePath('_LICENSE'),
        this.destinationPath('LICENSE')
      );
      this.fs.copy(
        this.templatePath('_test/_index.test.js'),
        this.destinationPath('test/index.test.js')
      );
      this.fs.copy(
        this.templatePath('_src/_index.js'),
        this.destinationPath('src/index.js')
      );
    }
  },

  install: function () {

    if (shell.which('git')) {
      shell.exec('git init');
      if (this.props.githubUser) {
        shell.exec(`git remote add origin https://github.com/${this.props.githubUser}/${this.props.slug}.git`);
      }
    }
    this.installDependencies({
      bower: false
    });
  }
});
