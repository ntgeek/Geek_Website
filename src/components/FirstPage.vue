<template>

    <ul>
        <li><a  href="https://new-thread.com/" id="newth"><button id="NewThread" >NewThread</button></a></li>

        <li><a href="#introuduce1"><button id="Introuduce">Introduction</button></a></li>

        <li><a href="#foremo"><button id="MoreQ">Q&Ask</button></a></li>

        <li><a href="#leftx"><button id="Contact">Contact Us</button></a></li>

        <li><a href="#dingwei"><button id="Aboutus">About Us</button></a></li>
    </ul>

</template>



<style>
@media(min-width: 551px){
li{
    display: inline;
}

.hide{
top:-20vw;
}



a{
    text-decoration: none;
    text-align: center;
    top: 9%;
}

button{
    position: relative;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    transition-duration: 0.4s;
}

button:hover{
    transform: scale(1.1);
    color: white;

}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 96%;
    z-index: 20;
    left: 2%;
    top: 1%;
    border-radius: 50%;
    background-color: #fff4c3;
    height: 3.6vw; /* 全屏高度 */
    position: fixed; 
    overflow: none; /* 如果导航栏选项多，允许滚动 */
    transition: top 0.5;
}
#Introuduce{
    position: absolute;
    left: 25vw;
    top: 17%;
    font-size: 1.8vw;
        font-family: FZYaoti;
}

#MoreQ{
    position: absolute;
    left: 65vw;
    top: 17%;
    font-size: 1.8vw;
        font-family: FZYaoti;
}

#Aboutus{
    position: absolute;
    left: 12vw;
    top: 17%;
    font-size: 1.8vw;
        font-family: FZYaoti;
}

#Contact{
    position: absolute;
    left: 78vw;
    top: 17%;
    font-size: 1.8vw;
        font-family: FZYaoti;
}

#NewThread{
    position: relative;
    left: 40vw;
    font-size: 2.5vw;
    font-family:Agency FB;
    font-weight: 800;
    width: 20vw;
    color: rgb(92, 92, 92);
}

#newth{
    position: absolute;
    left: -0.7%;
}

}
@media(max-width: 550px){
    ul{
        display: none;
    }
}

</style>