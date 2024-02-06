import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var [no1, setno1] = useState(0);
  var [no2, setno2] = useState(0);
  var val3;
  var val4;
  // var [val5, setval5] = useState(0);
  // var [val6, setval6] = useState(0);
  var slot1;
  var slot2;
  var [s1, sets1] = useState();
  var [dis1, setdis1] = useState([]);
  var c = [];
  var val1, val2;
  var a, b;
  var i;
  var j, g;
  var h;
  function slot() {
    var k = 0;
    val1 = no1;
    val2 = no2;
    c = [];
    val4 = (val1.split(":"));
    // console.log("val4="+val4);
    val3 = (val2.split(":"));
    // console.log("val3="+val3);
    a = ((parseFloat(val3[0]) - parseFloat(val4[0])) * 6);
    b = ((parseFloat(val3[0]) - parseFloat(val4[0])) * 6);
    a = ((parseFloat(val3[1]) - parseFloat(val4[1])) / 10);
    // console.log(slot1);
    if (parseFloat(val4[0]) > parseFloat(val3[0])) {
      slot2 = (parseFloat(a) + parseFloat(b));
      h = -72 - parseFloat(slot2);
      slot1 = (Math.ceil(Math.abs(h)));
      // console.log("slot=" + slot2);
      // setslot1(h);
    }
    else {
      slot1 = (Math.ceil(parseFloat(a) + parseFloat(b)));
    }
    // console.log(typeof(i));
    i = (parseInt(val4[1]));
    j = parseInt(val4[0]);
    // console.log(val3[0]);
    // console.log(val3[1]);
    // i = Math.ceil(parseInt(val4[1]));
    for (k = 0; k <=parseInt(slot1); k++) {
      if (i >= 60) {
        j++;
        if(parseInt(val4[1])>=10)
        {
        i=parseInt(val4[1])%10;
        }
        else{
        i=parseInt(val4[1]);
        }
      }
      if (j > 11) {
        j = parseInt(0);
      }
      if(i<10)
      {
        i="0"+i;
      }
      g = "  " + j + ":" + i;
      c[k]=g;
      c[slot1]=" "+val3[0]+":"+val3[1];
      i=parseInt(parseInt(i)+10);
      // console.log(i);
    }
    // console.log(typeof(j));
    setdis1(c);
    sets1(slot1);
    // console.log("c="+c);
    // console.log("dis1="+dis1)
  }

  return (
    <div className="App">
      <input type='text' onChange={(e) => setno1(e.target.value)}></input>
      <input type='text' onChange={(e) => setno2(e.target.value)}></input>
      <input value='submit' type='button' onClick={slot}></input>
      <h1>TOTAL NO SLOT:{s1}</h1>
      <table border={5} ellPadding={4}>
        <tr><th>Slots</th></tr>
        {
          dis1.map((i) => {
            return (
              <>

                <tr><td>{i}</td></tr>
              </>
            );
          }
          )
        }
      </table>

    </div>
  );
}

export default App;
