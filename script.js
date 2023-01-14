.card {  
    position: relative;  
    width: 50%;  
    max-width: 300px;  
  }  
    
  . {  
    display: block;  
    width: 100%;  
    height: auto;  
  }  
    
  .overlay {  
    position: absolute;   
    bottom: 0;   
    background: rgba(0, 0, 0, 0.2);   
    width: 100%;  
    opacity:0;   
    transition: .9s ease;  
    font-size: 25px;  
    padding: 20px;  
  }  
    
  .container:hover .overlay {  
    opacity: 1.5;  
  }  