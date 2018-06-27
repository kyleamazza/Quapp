# Quapp!

### I Will update this later with information on the project setup

### Getting setup

**_Note_**: This is a _lot_ easier to run if you're using the Linux Subsystem on Windows with Ubuntu. For Mac OSX, you're good to go since Mac is UNIX-based.

To set up the Linux Subsystem on Windows, go to [this guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10). I recommend installing Ubuntu 16.04 since Ubuntu 18.04 has some issues with a few common packages with NodeJS environments.

### Install [Node v.8.11.2](https://nodejs.org/en/blog/release/v8.11.2/)
* Installing via Linux Subsystem:

Go into bash.exe (or Ubuntu shortcut)

```
curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash
```

This installs __Node Version Manager (NVM)__ which lets you install different versions of Node.js on the same system.

```
nvm install 8.11.2
```

Check that Node is properly installed by running the commands:

```
node -v # should print v8.11.2
npm -v # should print v5.6.0 or something similar
```
* Installing via Windows

Go to the [NodeJS Website](https://nodejs.org/en/blog/release/v8.11.2/) and scroll down until you find the Windows 32-bit/64-bit installers, and download that.

Check that Node is properly installed by opening _Command Prompt_ or _Powershell_ and running the command:

```
node -v # should print v8.11.2
npm -v # should print v5.6.0 or something similar
```
* Installing via MacOSX

Use the **Terminal** application and run the following commands.

```
brew install node@8.11.2
```

Check that Node is properly installed by running the commands:

```
node -v # should print v8.11.2
npm -v # should print v5.6.0 or something similar
```
   
### Clone the repository

Clone the repository by either downloading the ZIP file on Github, or by using your command prompt/terminal of choice and running the command:

```
git clone https://github.com/kylemazza/Quapp.git
```

Change the directory into the project directory

```
cd Quapp
```

---

### Starting up the Project

In the root folder of the project directory, run the following command:

```
npm i
```

This will install all of the packages necessary for the project as declared in the **package.json** file in the root folder.

    _Note_: **npm** is the packet manager for Node environments (**N**ode **P**ackage **M**anager). It handles the installation of various libraries.

Then, run the command:

```
npm run development
```

This will run the project in the _development_ configuration. Your terminal should generate some output that looks something like this: ![cmd-output](https://i.imgur.com/DLTDRbD.jpg)

Then, go to _localhost:3000_, then it should display something on the screen. If not, press _Ctrl + Shift + I_ to open the browser Inspector and see if any errors occurred when rendering the webpage.

To run a production build, use the command:

```
npm run build
```

#### That's it for now! Let me know if you run into any problems!
