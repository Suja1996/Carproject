function hasCollided(awall,abullet){
    var walledge=awall.x-awall.width/2;
    var bulletedge=abullet.x+abullet.width/2;
    
    if(awall.x-abullet.x<abullet.width/2+awall.width/2){
      return true
    }else{
      return false
    }
    
    }