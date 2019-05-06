### Vocabulary
[Back](/README.md) 

**Blockchain**, originally block chain, is a growing list of records, called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree)

__DAPP__ (decentralized application) consists of a backend code running on a decentralized peer-to-peer network. DAPP can also have a user interface created by the frontend code that accesses the backend. DAPP does not require any central server to operate: interaction between users and providers is carried out directly.

__DLT__ - Distributed Ledger Technology is the first system to bypass the need to trust one another when conducting transactions of value — the implications of which will be profound and far-reaching


__Hyperledger Fabric__ is a distributed blockchain network consisting of various functional components that are installed on network nodes. The components of the Hyperledger Fabric are Docker containers that can be freely downloaded from the DockerHub. Hyperledger Fabric can also be run in a Kubernetes environment.

##Peers (Nodes) come in several roles:

__Endorsing Peer__ is a node that simulates the execution of a transaction (executes a smart contract code). After completing the verification and execution of the smart contract, the node returns the results of the execution to the client application along with its signature.
Ordering Service - a distributed service on several nodes; it is used to form new blocks of a distributed registry and create a sequence for the execution of transactions. Ordering Service does not add new blocks to the registry (For better performance, this function has been moved to Committing Peers).
Committing Peer is the node that contains the distributed registry and adds new blocks to the registry (which were formed by the Ordering Service). All Committing Peers contain a local copy of the distributed registry. Committing Peer before local adding of a new block checks all transactions inside the block for validity.

__Endorsement Policy__ is a validation policy for a transaction. These policies determine the required set of nodes on which a smart contract must be executed in order for a transaction to be recognized as valid.


__Distributed Registry__ - __Lerger__ - consists of two parts: WolrldState (also called State DataBase) and BlockChain.


__WolrldState__ is a component of the distributed registry that stores the current (extreme) values ​​of all objects of the distributed registry.

__Membership Service__ is a service through which members verify that an object belongs to a particular organization or channel.


__Transaction__ is, in most cases, a record of new data in a distributed registry.
There are also transactions to create channels or smart contracts. The transaction is initiated by the user application and ends with writing to the distributed registry.


__Channel__ is a closed subnet consisting of two or more participants of the blockchain network, designed to conduct confidential transactions within a limited, but known, group of participants. The channel is determined by the participants, their distributed registry, smart contracts, Ordering Service, WorldState. Each channel participant must be authorized to access the channel and have the right to perform various types of transactions. Authorization is performed using the Membership Service.
