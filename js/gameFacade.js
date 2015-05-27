var GameFacade = function() {
    var mSelf = this;    
    var mWorld = null;
    var mPlayer = null;    
    var mStars = null;
    var mScore = null;
    
    this.update = function() {       
        mStars.update();
        mPlayer.update();
    };
    
    this.onPlayerCollideWithStar = function() {
        mScore.onPlayerCollideWithStar();  
    };
    
    var enablePhysics = function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);  
    };
        
    (function() {      
        enablePhysics();
        
        mWorld = new World();        
        mStars = new Stars(mWorld.getPhysicsReference());
        mPlayer = new Player(mWorld.getPhysicsReference(), mStars.getPhysicsReference());
        mScore = new Score();
        
        mPlayer.registerListener(mSelf);
    })();
};