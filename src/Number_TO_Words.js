import React from 'react'
import { useState } from 'react'
import './style.css'

export default function Number_TO_Words() {
  const [amount, changeAmount] = useState('');
  const [result, changeResult] = useState('');
  let n1, n2, n3, n4, n5;
  let count = 0;
  let arr = [];
  const Change = (event) => {
    // if (amount.length < 5)
    changeAmount(event.target.value);
  }

  const getString = () => {
    arr = [];
    let Amount = amount;
    while (Amount) {
      switch (count) {
        case 0:
          n5 = Amount % 10;
          let str;
          count++;
          Amount = parseInt(Amount / 10);
          if (Amount === 0) {
            if (n5 === 0)
              str = " zero only "
            if (n5 === 1)
              str = ' one only ';
            if (n5 === 2)
              str = ' two only ';
            if (n5 === 3)
              str = ' three only ';
            if (n5 === 4)
              str = ' four only ';
            if (n5 === 5)
              str = ' five only ';
            if (n5 === 6)
              str = ' six only ';
            if (n5 === 7)
              str = ' seven only ';
            if (n5 === 8)
              str = ' eight only ';
            if (n5 === 9)
              str = ' nine only ';
            arr.unshift(str)
          }
          break;
        case 1:
          n4 = Amount % 10;
          count++;
          Amount = parseInt(Amount / 10);
          let string;
          if (n5 === 0)
            string = " zero only "
          if (n5 === 1)
            string = ' one only ';
          if (n5 === 2)
            string = ' two only ';
          if (n5 === 3)
            string = ' three only ';
          if (n5 === 4)
            string = ' four only ';
          if (n5 === 5)
            string = ' five only ';
          if (n5 === 6)
            string = 'six only';
          if (n5 === 7)
            string = ' seven only ';
          if (n5 === 8)
            string = ' eight only ';
          if (n5 === 9)
            string = ' nine only ';
          switch (n4) {
            case 0:
              if (n5 !== 0)
                arr.unshift(string)
              break;
            case 1:
              switch (n5) {
                case 0:
                  arr.unshift(" ten only ")
                  break;
                case 1:
                  arr.unshift(" eleven only ");
                  break;
                case 2:
                  arr.unshift(" twelve only ");
                  break;
                case 3:
                  arr.unshift(" thirteen only ");
                  break;
                case 4:
                  arr.unshift(" fourteen only ");
                  break;
                case 5:
                  arr.unshift("fifteen only");
                  break;
                case 6:
                  arr.unshift(" seventeen only ");
                  break;
                case 7:
                  arr.unshift(" seventeen only ");
                  break;
                case 8:
                  arr.unshift(" eighteen only ");
                  break;
                case 9:
                  arr.unshift(" ninteen only ");
                  break;
              }
              break;
            case 2:
              if (n5 === 0)
                arr.unshift(" twenty only ")
              else
                arr.unshift(" twenty-" + string);
              break;
            case 3:
              if (n5 === 0)
                arr.unshift(" thirty only ")
              else
                arr.unshift(" thirty-" + string);
              break;
            case 4:
              if (n5 === 0)
                arr.unshift(" fourty only ")
              else
                arr.unshift(" fourty-" + string);
              break;
            case 5:
              if (n5 === 0)
                arr.unshift(" fifty only ")
              else
                arr.unshift(" fifty-" + string);
              break;
            case 6:
              if (n5 === 0)
                arr.unshift(" sixty only ")
              else
                arr.unshift(" sixty-" + string);
              break;
            case 7:
              if (n5 === 0)
                arr.unshift(" seventy only ")
              else
                arr.unshift(" seventy-" + string);
              break;
            case 8:
              if (n5 === 0)
                arr.unshift(" eighty only ")
              else
                arr.unshift(" eighty-" + string);
              break;
            case 9:
              if (n5 === 0)
                arr.unshift(" ninty only ")
              else
                arr.unshift(" ninty-" + string);
              break;
          }
          break;
        case 2:
          n3 = Amount % 10;
          count++;
          Amount = parseInt(Amount / 10);
          switch (n3) {
            case 0:
              break;
            case 1:
              arr.unshift("one hundred");
              break;
            case 2:
              arr.unshift("two hundred");
              break;
            case 3:
              arr.unshift("three hundred");
              break;
            case 4:
              arr.unshift("four hundred");
              break;
            case 5:
              arr.unshift("five hundred");
              break;
            case 6:
              arr.unshift("six hundred");
              break;
            case 7:
              arr.unshift("seven hundred");
              break;
            case 8:
              arr.unshift("eight hundred");
              break;
            case 9:
              arr.unshift("nine hundred");
              break;
          }
          // alert(" case 2 " + Amount + "  " + count);
          break;
        case 3:
          n2 = Amount % 10;
          count++;
          Amount = parseInt(Amount / 10);
          switch (n2) {
            case 0:
              break;
            case 1:
              arr.unshift(' one thousand ');
              break;
            case 2:
              arr.unshift(' two thousand ');
              break;
            case 3:
              arr.unshift(' three thousand ');
              break;
            case 4:
              arr.unshift(' four thousand ');
              break;
            case 5:
              arr.unshift(' five thousand ');
              break;
            case 6:
              arr.unshift(' six thousand ');
              break;
            case 7:
              arr.unshift(' seven thousand ');
              break;
            case 8:
              arr.unshift(' eight thousand ');
              break;
            case 9:
              arr.unshift(' nine thousand ');
              break;
          }
          // alert("case 3 " + Amount + "  " + count);
          break;
        case 4:
          n1 = Amount % 10;
          count++;
          Amount = parseInt(Amount / 10);
          switch (n1) {
            case 0:
              break;
            case 1:
              switch (n2) {
                case 0:
                  arr[0] = " Ten thousand ";
                  break;
                case 1:
                  arr[0] = " Eleven thousand ";
                  break;
                case 2:
                  arr[0] = " Twelve thousand ";
                  break;
                case 3:
                  arr[0] = " Thirteen thousand ";
                  break;
                case 4:
                  arr[0] = " Fourteen thousand ";
                  break;
                case 5:
                  arr[0] = " Fifteen thousand ";
                  break;
                case 6:
                  arr[0] = " Sixteen thousand ";
                  break;
                case 7:
                  arr[0] = " Seventeen thousand ";
                  break;
                case 8:
                  arr[0] = " Eighteen thousand ";
                  break;
                case 9:
                  arr[0] = " Ninteen thousand ";
                  break;
              }
              break;;
            case 2:
              switch (n2) {
                case 0:
                  arr[0] = " Twenty thousand ";
                  break;
                case 1:
                  arr[0] = " Twenty one thousand ";
                  break;
                case 2:
                  arr[0] = " Twenty two thousand ";
                  break;
                case 3:
                  arr[0] = " Twenty three thousand ";
                  break;
                case 4:
                  arr[0] = " Twenty four thousand ";
                  break;
                case 5:
                  arr[0] = " Twenty five thousand ";
                  break;
                case 6:
                  arr[0] = " Twenty six thousand ";
                  break;
                case 7:
                  arr[0] = " Twenty seven thousand ";
                  break;
                case 8:
                  arr[0] = " Twenty eight thousand ";
                  break;
                case 9:
                  arr[0] = " Twenty nine thousand ";
                  break;
              }
              break;
            case 3:
              switch (n2) {
                case 0:
                  arr[0] = "Thirty thousand";
                  break;
                case 1:
                  arr[0] = "Thirty one thousand";
                  break;
                case 2:
                  arr[0] = "Thirty two thousand";
                  break;
                case 3:
                  arr[0] = "Thirty three thousand";
                  break;
                case 4:
                  arr[0] = "Thirty four thousand";
                  break;
                case 5:
                  arr[0] = "Thirty five thousand";
                  break;
                case 6:
                  arr[0] = "Thirty six thousand";
                  break;
                case 7:
                  arr[0] = "Thirty seven thousand";
                  break;
                case 8:
                  arr[0] = "Thirty eight thousand";
                  break;
                case 9:
                  arr[0] = "Thirty nine thousand";
                  break;
              }
              break;
            case 4:
              switch (n2) {
                case 0:
                  arr[0] = " Fourty thousand ";
                  break;
                case 1:
                  arr[0] = " Fourty one thousand ";
                  break;
                case 2:
                  arr[0] = " Fourty two thousand ";
                  break;
                case 3:
                  arr[0] = " Fourty three thousand ";
                  break;
                case 4:
                  arr[0] = " Fourty four thousand ";
                  break;
                case 5:
                  arr[0] = " Fourty five thousand ";
                  break;
                case 6:
                  arr[0] = " Fourty six thousand ";
                  break;
                case 7:
                  arr[0] = " Fourty seven thousand ";
                  break;
                case 8:
                  arr[0] = " Fourty eight thousand ";
                  break;
                case 9:
                  arr[0] = " Fourty nine thousand ";
                  break;
              }
              break;
            case 5:
              switch (n2) {
                case 0:
                  arr[0] = " Fifty thousand ";
                  break;
                case 1:
                  arr[0] = " Fifty one thousand ";
                  break;
                case 2:
                  arr[0] = " Fifty two thousand ";
                  break;
                case 3:
                  arr[0] = " Fifty three thousand ";
                  break;
                case 4:
                  arr[0] = " Fifty four thousand ";
                  break;
                case 5:
                  arr[0] = " Fifty five thousand ";
                  break;
                case 6:
                  arr[0] = " Fifty six thousand ";
                  break;
                case 7:
                  arr[0] = " Fifty seven thousand ";
                  break;
                case 8:
                  arr[0] = " Fifty eight thousand ";
                  break;
                case 9:
                  arr[0] = " Fifty nine thousand ";
                  break;
              }
              break;
            case 6:
              switch (n2) {
                case 0:
                  arr[0] = " Sixty thousand ";
                  break;
                case 1:
                  arr[0] = " Sixty one thousand ";
                  break;
                case 2:
                  arr[0] = " Sixty two thousand ";
                  break;
                case 3:
                  arr[0] = " Sixty three thousand ";
                  break;
                case 4:
                  arr[0] = " Sixty four thousand ";
                  break;
                case 5:
                  arr[0] = " Sixty five thousand ";
                  break;
                case 6:
                  arr[0] = " Sixty six thousand ";
                  break;
                case 7:
                  arr[0] = " Sixty seven thousand ";
                  break;
                case 8:
                  arr[0] = " Sixty eight thousand ";
                  break;
                case 9:
                  arr[0] = " Sixty nine thousand ";
                  break;
              }
              break;
            case 7:
              switch (n2) {
                case 0:
                  arr[0] = " Seventy thousand ";
                  break;
                case 1:
                  arr[0] = " Seventy one thousand ";
                  break;
                case 2:
                  arr[0] = " Seventy two thousand ";
                  break;
                case 3:
                  arr[0] = " Seventy three thousand ";
                  break;
                case 4:
                  arr[0] = " Seventy four thousand ";
                  break;
                case 5:
                  arr[0] = " Seventy five thousand ";
                  break;
                case 6:
                  arr[0] = " Seventy six thousand ";
                  break;
                case 7:
                  arr[0] = " Seventy seven thousand ";
                  break;
                case 8:
                  arr[0] = " Seventy eight thousand ";
                  break;
                case 9:
                  arr[0] = " Seventy nine thousand ";
                  break;
              }
              break;
            case 8:
              switch (n2) {
                case 0:
                  arr[0] = " Eighty thousand ";
                  break;
                case 1:
                  arr[0] = " Eighty one thousand ";
                  break;
                case 2:
                  arr[0] = " Eighty two thousand ";
                  break;
                case 3:
                  arr[0] = " Eighty three thousand ";
                  break;
                case 4:
                  arr[0] = " Eighty four thousand ";
                  break;
                case 5:
                  arr[0] = " Eighty five thousand ";
                  break;
                case 6:
                  arr[0] = " Eighty six thousand ";
                  break;
                case 7:
                  arr[0] = " Eighty seven thousand ";
                  break;
                case 8:
                  arr[0] = " Eighty eight thousand ";
                  break;
                case 9:
                  arr[0] = " Eighty nine thousand ";
                  break;
              }
              break;
            case 9:
              switch (n2) {
                case 0:
                  arr.unshift(" Ninty thousand ");
                  break;
                case 1:
                  arr[0] = " Ninty one thousand ";
                  break;
                case 2:
                  arr[0] = " Ninty two thousand ";
                  break;
                case 3:
                  arr[0] = "Ninty three thousand";
                  break;
                case 4:
                  arr[0] = " Ninty four thousand ";
                  break;
                case 5:
                  arr[0] = " Ninty five thousand ";
                  break;
                case 6:
                  arr[0] = " Ninty six thousand ";
                  break;
                case 7:
                  arr[0] = " Ninty seven thousand ";
                  break;
                case 8:
                  arr[0] = " Ninty eight thousand ";
                  break;
                case 9:
                  arr[0] = " Ninty nine thousand ";
                  break;
              }
              break;
          }
      }
    }
    console.log(arr);
    changeResult(arr);
    console.log(result);
   
  }

  return (
    <div className='main'>
      <h1 style={{marginTop:'5rem',fontSize:'4vw',color:'cyan'}}>Please Enter Your Amount upto Five Digits only</h1>
      <input type='text' value={amount} onChange={Change} />
      <button onClick={getString} style={{ cursor: 'pointer' }}>Convert</button>
      <div>
      <h1 style={{marginTop:'5rem',fontSize:'4vw',color:'black'}}>{result}</h1>
      
      </div>
    </div>
  )
}