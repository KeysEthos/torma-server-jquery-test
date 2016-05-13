# edtrics-api
Edtrics RESTapi (node, express)
Edtrics application Enviroment SetUp (Mongodb, Express.js, Angular.js, Node.js)

Update linux AWS:

    sudo yum update

Install NPM and Node.js:

    sudo yum install gcc-c++ make
    sudo yum install openssl-devel
    
Install Git and Clone node repo:

    sudo yum install git 
    git clone git://github.com/joyent/node.git

Move to node directory:

    cd node
    
git checkout with stable express version and install availbe git versions:

    git tag -l   //Check for current tag releases
    git checkout v0.12.0  //Find and use the specific flavor you like
    ./configure 
    make 
    sudo make install

Add user path to sudoers:

    sudo su
    vim /etc/sudoers
    
Edit path in sudoers: # Path = secure_path = /sbin:/bin:/usr/bin 
Add to the end:

    :/usr/local/bin

Install express in desired directory

    sudo npm install express-generator -g
    
express scaff setup:

    express-generator fileName
    
Install MongoDb:

    sudo su 
    vim /etc/yum.repos.d/mongodb-org-3.0.repo 
    
Add file content as follows:  (AWS linux specific)

    [mongodb-org-3.2]
    name=MongoDB Repository
    baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.2/x86_64/
    gpgcheck=0
    enabled=1
    
Install Mongo .repo file:

    sudo yum install -y mongodb-org

Make data directory for MongoDB output:

    mkdir -p /data/db
    
When starting Mongod if (errno:13 data lock) use

    sudo chown -R `id -u` /data/db
    
to reset the id:
