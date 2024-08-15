const loading = document.getElementById('loading')
const skipLoading = document.getElementById('skipLoading')
const siteBody = document.querySelector('.site-body')

const scrollInterval = setInterval(() => {
    loading.scrollTop = loading.clientHeight
}, 100)

const typeIt = new TypeIt("#loadingText", {
    speed: 50,
    cursorChar: '▐'
})

function displayWebsite() {
    loading.style.zIndex = -9999
    loading.style.overflow = 'hidden'
    skipLoading.style.display = 'none'
    siteBody.style.display = 'block'

    clearInterval(scrollInterval)
    
    loadSong(currentSongIndex);
    
    audioPlayer.play().then(() => {
        console.log("Started playing music");
        updatePlayPauseIcon();
    }).catch(error => {
        console.log("Error while playing music:", error);
    });
}

function startLoading() {
    typeIt
    .type('<span style="color: #118c0a;">salem@Life</span>: <span style="color: #2c5bc7;">/</span> $ ', { instant: true, delay: 500 })
    .type('where is love')
    .break({ instant: true })
    .type('love:', { instant: true })
    .break({ instant: true })
    .type('<span style="color: #118c0a;">salem@Life</span>: <span style="color: #2c5bc7;">/</span> $ ', { instant: true, delay: 2000 })
    .type('cats love')
    .break({ instant: true })
    .type('cats love: No such file or directory', { instant: true })
    .break({ instant: true })
    .type('<span style="color: #118c0a;">salem@Life</span>: <span style="color: #2c5bc7;">/</span> $ ', { instant: true, delay: 4000 })
    .type(':(', { delay: 1000 })
    .options({ speed: 1000 })
    .delete(2, { delay: 500 })
    .options({ speed: 50 })
    .type('sudo rm -rf --no-preserve-root /', { delay: 300 })
    .break({ instant: true })
    .type('[sudo] password for salem: ', { instant: true, delay: 800 })
    .break({ instant: true })
    .type('<span style="color: #118c0a;">salem@Life</span>: <span style="color: #2c5bc7;">/</span> $ ^C', { instant: true, delay: 300 })
    .break({ instant: true })
    .type('<span style="color: #118c0a;">salem@Life</span>: <span style="color: #2c5bc7;">/</span> $ ', { instant: true, delay: 500 })
    .type('ssh website@scods.xyz')
    .break({ instant: true })
    .type('The authenticity of host \'scods.xyz (185.199.108.153)\' can\'t be established.', { instant: true })
    .type('ECDSA key fingerprint is SHA256:Bhvy0+Nafdu90JBR2OzKcPye7vmFcgqPPnBo4ywMDV9.', { instant: true })
    .break({ instant: true })
    .type('Are you sure you want to continue connecting (yes/no/[fingerprint])? ', { instant: true, delay: 500 })
    .type('yes', { delay: 200 })
    .break({ instant: true })
    .type('Warning: Permanently added \'scods.xyz,185.199.108.153\' (ECDSA) to the list of known hosts.', { instant: true })
    .break({ instant: true })
    .type('website@scods.xyz\'s password: ', { instant: true, delay: 500 })
    .type('****', { delay: 150 })
    .type('***', { delay: 500 })
    .delete(2)
    .type('***', { delay: 400 })
    .type('*****')
    .break({ instant: true })
    .type('website@scods.xyz: ~/ $ ', { instant: true, delay: 500 })
    .type('sudo atp install salme', { delay: 300 })
    .type('-website -y')
    .options({ speed: 25 })
    .move(-11)
    .options({ speed: 50 })
    .delete(2)
    .type('em')
    .options({ speed: 25 })
    .move(-14)
    .options({ speed: 50 })
    .delete(2)
    .type('pt')
    .options({ speed: 25 })
    .move(null, { to: 'END' })
    .options({ speed: 80 })
    .break({ instant: true })
    .type('[sudo] password for website: ', { instant: true, delay: 800 })
    .type('***', { delay: 150 })
    .type('*****', { delay: 500 })
    .delete(1)
    .type('*', { delay: 400 })
    .type('***')
    .options({ speed: 50 })
    .break({ instant: true })
    .type('Reading package lists... Done', { instant: true })
    .break({ instant: true, delay: 100 })
    .type('Building dependency tree', { instant: true })
    .break({ instant: true, delay: 70 })
    .type('Reading state information... Done', { instant: true })
    .break({ instant: true, delay: 150 })
    .type('The following NEW packages will be installed:', { instant: true })
    .break({ instant: true, delay: 120 })
    .type('googletagmanager font-inter highlightjs highlightjs-atom-one-theme jbox jquery analytics typeit', { instant: true })
    .break({ instant: true, delay: 140 })
    .type('0 upgraded, 8 newly installed, 0 to remove and 0 not upgraded.', { instant: true })
    .break({ instant: true, delay: 90 })
    .type('Need to get 548 kB of archives.', { instant: true })
    .break({ instant: true, delay: 50 })
    .type('After this operation, 2.4 MB of additional disk space will be used.', { instant: true })
    .break({ instant: true, delay: 130 })
    .type('<span style="color: #b89a28;">0% [Working]</span>', { instant: true, delay: 350 })
    .delete(12, { instant: true })
    .type('<span style="color: #b89a28;">0% [Waiting for headers]</span>', { instant: true, delay: 100 })
    .delete(24, { instant: true, delay: 100 })
    .type('Get:1 https://scods.xyz/download googletagmanager font-inter salem-website highlightjs highlightjs-atom-one-theme jbox jquery analytics typeit [548 kB]', { instant: true })
    .break({ instant: true, delay: 560 })
    .type('Fetched 548 kB in 1s (1972 kB/s)', { instant: true })
    .break({ instant: true, delay: 300 })
    .type('Selecting previously unselected package stef-website.', { instant: true })
    .break({ instant: true })
    .type('(Reading database ... ', { instant: true })
    .type('45%', { instant: true, delay: 150 })
    .delete(3, { instant: true })
    .type('80%', { instant: true, delay: 200 })
    .delete(3, { instant: true })
    .type('41938 files and directories currently installed.)', { instant: true })
    .break({ instant: true, delay: 400 })
    .type('Preparing to unpack .../salem-website_latest.deb ...', { instant: true })
    .break({ instant: true })
    .type('Unpacking salem-website (latest) ...', { instant: true })
    .break({ instant: true, delay: 450 })
    .type('Setting up salem-website (latest) ...', { instant: true })
    .break({ instant: true, delay: 300 })
    .type('Processing triggers for man-db (2.9.1-1) ...', { instant: true })
    .break({ instant: true, delay: 80 })
    .type('website@scods.xyz: ~/ $ ', { instant: true })
    .type('salem-website dlpeoy --pr')
    .options({ speed: 25 })
    .move(-7)
    .options({ speed: 50 })
    .delete(3)
    .type('pel')
    .options({ speed: 25 })
    .move(null, { to: 'END' })
    .options({ speed: 50 })
    .type('odcut')
    .options({ speed: 25 })
    .move(-12)
    .options({ speed: 50 })
    .delete(3)
    .type('epl')
    .options({ speed: 25 })
    .move(null, { to: 'END' })
    .options({ speed: 50 })
    .type('ion')
    .options({ speed: 25 })
    .move(-4)
    .options({ speed: 50 })
    .delete(2)
    .type('uc')
    .options({ speed: 25 })
    .move(null, { to: 'END' })
    .options({ speed: 50 })
    .break({ instant: true, delay: 80 })
    .type('Deploying...', { instant: true })
    .break({ instant: true, delay: 600 })
    .type('<span style="cursor: pointer;" onclick="displayWebsite()">Successfully deployed the website, avaible at <u>http://localhost:5500</u>. click <b><u>HERE</u></b> to open it</span>', { instant: true })
    .exec(() => {
        setTimeout(() => {
            typeIt.destroy(true)
            displayWebsite()
        }, 1500)
    })
    .go()
}