# FAQ
## No network specified. Cannot determine current network
    - Install and start ganache server first https://truffleframework.com/docs/ganache/quickstart
    Basically, Ganache is a virtual ethereum network
    - Then configue truffle.js file with Ganache host, port, network id
    - Run <code> truffle migrate --network ganache </code>
## For Windows
- Resolving naming conflicts on Windows
    - When using the Command Prompt on Windows, the default configuration file name can cause a conflict with the truffle executable, and so you may not be able to run Truffle commands properly on existing projects.
    This is because of the way that command precedence works on the Command Prompt. The truffle.cmd executable is on the path as part of the npm package, but the truffle.js configuration file is in the actual directory where the truffle command is run. Because .js is an acceptable executable extension by default, truffle.js takes precedence over truffle.cmd, causing unexpected results.
    - Any of the following solutions will remedy this issue:
        - Call the executable file explicitly using its .cmd extension (truffle.cmd compile)
        - Edit the system PATHEXT environment variable and remove .JS; from the list of executable extensions
        - Rename truffle.js to something else (truffle-config.js)
        - Use Windows PowerShell or Git BASH, as these shells do not have this conflict.

