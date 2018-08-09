# FAQ
## No network specified. Cannot determine current network
    - Install and start ganache server first https://truffleframework.com/docs/ganache/quickstart
    Basically, Ganache is a virtual ethereum network
        - Ganache UI, download here https://github.com/trufflesuite/ganache/releases
        - Ganache CLI: <code> npm install -g ganache-cli </code>, then run <code> ganache-cli</code> to start with default configuration
            - <code>
            ganache: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
            }
            <code/>
        - Use docker: <code>docker run -d -p 8545:8545 trufflesuite/ganache-cli:latest</code>
    - Then configue truffle.js file with Ganache host, port, network id
    - Run <code> truffle migrate --network ganache </code>
## Deploy to customer network using Infura
    - <code>npm install -g truffle-hdwallet-provider </code>
    - Update truffle.js
        - <code>
            var HDWalletProvider = require("truffle-hdwallet-provider");
            var mnemonic;
            module.exports = {
            networks: {
                ganache: {
                    host: "127.0.0.1",
                    port: 8545,
                    network_id: "5777"
                },
                // you can use mainnet or any other test networks
                ropsten: {
                    provider: function() {
                        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/<INFURA_Access_Token>")
                    },
                    network_id: 3
                }
            }
            };
        </code>
## For Windows
- Resolving naming conflicts on Windows
    - When using the Command Prompt on Windows, the default configuration file name can cause a conflict with the truffle executable, and so you may not be able to run Truffle commands properly on existing projects.
    This is because of the way that command precedence works on the Command Prompt. The truffle.cmd executable is on the path as part of the npm package, but the truffle.js configuration file is in the actual directory where the truffle command is run. Because .js is an acceptable executable extension by default, truffle.js takes precedence over truffle.cmd, causing unexpected results.
    - Any of the following solutions will remedy this issue:
        - Call the executable file explicitly using its .cmd extension (truffle.cmd compile)
        - Edit the system PATHEXT environment variable and remove .JS; from the list of executable extensions
        - Rename truffle.js to something else (truffle-config.js)
        - Use Windows PowerShell or Git BASH, as these shells do not have this conflict.

