function pilcomp(){
const comp = Math.random();
if(comp < 0.4 )
return 'batu';
if(comp > 0.3 && comp < 0.6 )
    return 'gunting';
    return 'kertas';
}
function gethasil(player,comp){
    if (player == comp) return 'seri';
    if ((player == 'batu' && comp == 'gunting') || (player == 'gunting' && comp == 'kertas') || (player == 'kertas' && comp == 'batu')) return 'Kalah';
    if((player == 'batu' && comp == 'kertas') || (player == 'gunting' && comp == 'batu') || (player == 'kertas' && comp == 'gunting')) return 'Menang';
}

function putar(){
    const imgcomp = document.querySelector('.comp img')
    const img = ['batu','gunting','kertas']
    let i = 0;
    const waktuawal = new Date().getTime();
    setInterval(function(){
    if(new Date().getTime() - waktuawal>1000){
        clearInterval;
        return;
    }
    imgcomp.setAttribute('src','../'+'image/'+img[i++]+'.jpeg')
    if(i == img.length)i = 0;
    },100 )
}

const hsl = document.querySelector('.hasil h1')
const pilihan = document.querySelectorAll('.user img')
const winn = document.getElementById('win')
const losee = document.getElementById('lose')
const draww = document.getElementById('draw')
const button = document.getElementById('btn')
let win = 0;
let draw = 0;
let lose = 0;
pilihan.forEach(function(pil){
  pil.addEventListener('click',function(){
      const pilihancomp = pilcomp();
      const pilihanplayer = pil.className;
      const hasil = gethasil(pilihancomp,pilihanplayer); 
      if(hasil == 'Menang'){
        win++
      }
      else if(hasil == 'seri'){
        draw++
      }
      else {
        lose++
      }
      winn.innerHTML = 'Win : '+win;
      losee.innerHTML = 'Lose : '+lose;
      draww.innerHTML = 'Draw : '+draw;
      putar()
      setTimeout(function(){
        const imgcomp = document.querySelector(".comp img")
        imgcomp.setAttribute('src','../' + 'image/' + pilihancomp + '.jpeg')
        hsl.innerHTML = hasil ; 

      },1000)
    })

})
function reset(){
  win = 0;
  lose = 0;
  draw = 0;
  winn.innerHTML = 'Win : '+win;
  losee.innerHTML = 'Lose : '+lose;
  draww.innerHTML = 'Draw : '+draw;
}

