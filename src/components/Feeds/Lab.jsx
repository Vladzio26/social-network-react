import React from "react";
import s from "./Lab.module.css";

import {Line} from 'react-chartjs-2';


const Lab =() => {
   var Pn= prompt("Введіть початковий тиск", this);
   var Pk= prompt("Введіть кінчевий тиск", this);
   var Tn= prompt("Введіть початкову температуру", this);
   var Tk= prompt("Введіть кінцева температуру", this);
   var Tgr= prompt("Введіть температуру грунту", this);
   var k= prompt("Введіть коефіцієнт теплопередачі", this);
   var L= prompt("Введіть довжина газопроводу", this);
   var D= prompt("Введіть діаметр газопроводу", this);
   var d= prompt("Введіть товщина газопроводу", this);

   var Array = [] ;
console.log(Array);
    var Q=0.00002;

    
    
    var del=2.01;
    var N =8.4;
    var Pc = 0.666666667*(Pn + (Math.pow(Pk,2)/(Pn+Pk)));
    var Re = 1810*(Q*del)/(N*D);
    
    var gOpir0 = (158/Re)+(2*k)/d; 
    
    var gOpir = 0.067*Math.pow(gOpir0,0.2); 

    //var a = (k*3.14*D)/Cp;


    var Tc = Tgr + ((Tn - Tk) / L);

    var z = 1 - 550000*((Pc*Math.pow(del,1.3))/Math.pow(Tc,3.3));

    var Qsqrt = Math.sqrt((Math.pow(Pn,2))-(Math.pow(Pk,2))/(gOpir*del*z*Tc*L));

    var Qi = 0.000000326*Math.pow(d,2.5)*Qsqrt;

    var c = (Math.pow(Q,2)*gOpir*del*z*Tc)/(Math.pow(0.000000326,2)*Math.pow(d,5));
 
    var c1 = (Math.pow(Qi,2)*gOpir*del*z*Tc)/(Math.pow(0.000000326,2)*Math.pow(d,5));

    var ris1 = c*L;
    var ris2 =c1*L;
    //  Array.push(Q);
    
   // Array.push(Qi);
    Array.push(ris1)
    Array.push(ris2)
    var e = 0.00000000001;
    if(Qi-Q<=e){
        alert("Значення задовільняють точність, розрахунок закінчено")
       



    }else{
        alert("потрібен перерахунок")
       
        let i = 0
        
            var Qnew = (Qi + Q)/2
    
            var ReNew = 1810*((Qnew*del)/(N*D));
        
            var gOpir0New = (158/ReNew)+(2*k)/d; 
            
            var gOpirNew = 0.067*Math.pow(gOpir0New,0.2); 
        
            //var a = (k*3.14*D)/Cp;
        
        
            var Tc = Tgr +((Tn - Tk)/L);
        
            var z = 1 - 550000*((Pc*Math.pow(del,1.3))/Math.pow(Tc,3.3));
        
            var QsqrtNew = Math.sqrt((Math.pow(Pn,2))-(Math.pow(Pk,2))/(gOpirNew*del*z*Tc*L));
        
            var QiNew = 0.000000326*Math.pow(d,2.5)*QsqrtNew;
            
            
    var cNew = (Math.pow(QiNew,2)*gOpir*del*z*Tc)/(Math.pow(0.000000326,2)*Math.pow(d,5));

    var ris3 = cNew*L;
            console.log(QiNew, Qi, Q);
            console.log("C:",c, c1, cNew);
            console.log("ris:",ris1, ris2, ris3);
            Array.push(ris3);
        

    }










// Графік(не чіпати ) (Вхід Data from "Array")
    const data = {
        labels: [1, 2, 3, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1.000000,
                3.662950,
                15.678712,
                72.034400,
                340.130108,
                1621.943514,
                7761.295895,
                37184.208589,
                178223.761422,
                854350.592614,
                4095705.012010,
                19634907.404123,
                94130788.770248,
                451268956.396682,
                2163413516.821668,
                10371551538.998363,
                49721927877.357620,
                238370332396.291931,
                1142763734197.937500,
                5478487796289.455078,
                26264246645610.734375,
                125912601765045.593750,
                603633658319453.625000,
                2893861205057171.000000,
                13873369317419628.000000,
                66509885091383136.000000,
                318852955880343168.000000,
                1528602963815418880.000000,
                7328227566636656640.000000,
                35132026130824093696.000000,
                168425345533233659904.000000,
                807442671036293709824.000000,
                3870935606194624004096.000000,
                18557531085240155504640.000000,
                88966078234043357331456.000000,
                426509487710956175753216.000000,
                2044715769407190513745920.000000,
                9802507794377116701687808.000000,
                46993895433536250776125440.000000,
                225291961439187009324187648.000000,
                1080065132308542070825418752.000000,
                5177906404545874233351208960.000000,
                24823238832765287051019943936.000000,
                119004311396499537481099640832.000000,
                570514839999925780781956333568.000000,
                2735087316086221362419684343808.000000,
                13112196391975896967380062961664.000000,
                62860769822796305663009233043456.000000,
                301358846724772396681520996155392.000000,
                1444735003330332287802640175202304.000000,
                6926158805466115538556989892198400.000000,
                33204480882621278591730832021389312.000000,
                159184561262765252679641800133050368.000000,
                763141716745871223677847351205036032.000000,
                3658553789500318611373180496543481856.000000,
                17539358073284836811575578950146981888.000000,
                84084886904154967598623813022091575296.000000,
                403108721319376479327296625395764297728.000000,
                1932530888564626060263520099554482454528.000000,
                9264685772693714161560854899714353528832.000000,
                44415539733238749233605473623149713031168.000000,
                212931147174928358657114712735260530966528.000000,
                1020806539997997115400693166554931527680000.000000,
                4893816644150305196029614690655244556173312.000000,
                23461293015040375992777015412110018104786944.000000,
                112475049631360271259987577947864436783972352.000000,
                539213110780679595073465585270380437222457344.000000,
                2585024676945867952620016497129206191327543296.000000,
                12392785796221264174697961879139004136191688704.000000,
                59411866030027684317584270357122215610280837120.000000,
                284824565130967833467161524717486582972882616320.000000,
                1365468522080136346346361676920755000045159317504.000000,
                6546149851696875157960520837211734953222597509120.000000,
                31382691865785911755967532961506181960630662070272.000000,
                150450779626984762228821552959095172052110891024384.000000,
                721271367898340764656096914339973910983364696866816.000000,
                3457824462191320493153678211061633421354522441154560.000000,
                16577047895534797208087221513505108660852193442660352.000000,
                79471505837143367393175884726428980754144372021264384.000000,
                380991855716621144462663873832751518169555469282050048.000000,
                1826501116259864412626535007492940978272938375084244992.000000,
                8756371763967316800254722940678516465823874265166905344.000000,
                41978647473158903895538133305756875793161469567994691584.000000,
                201248518356344204426300469853186951909579132502670311424.000000,
                964799215280103317193426991526926058208444500118746431488.000000,
                4625313683834926739499582903315812417842118311213178814464.000000,
                22174071387132699412084615796381128067849387412156762292224.000000,
                106304020762974314049027138606718913160761623116204159795200.000000,
                509628774665730400853866950453030489208227074504706270167040.000000,
                2443195338268472865841322979305225486991769969822863621881856.000000,
                11712846208207230006975883653913628424545133512914267564670976.000000,
                56152188958556022834922655795049629503346885250088445828661248.000000,
                269197449431890981488576268821934205422789874910090902879862784.000000,
                1290551056417783632121965014271952505073986266045263853094174720.000000,
                6186990377271190446278453410773454337904711103508180104864858112.000000,
                29660856684506479866269288959003186134410829785916700931850764288.000000,
                142196183541966155142638841912529058760497684756823816113815027712.000000,
                681698267483367208839152436935033869048259597181637214060469551104.000000,
                3268108301603430570391069136710829721771243121666794043767621943296.000000,
                15667535595240241492251284367227647045487583039737301777991220592640.000000,
                75111241419901638317004845026702838283367270745893120173301217361920.000000]
      }]
    }



   const print = ()=>{
    console.log(Pn)
   }

        return(
            
            
            <div className={s.tab}>
                
                <h5>Початковий тиск(Pn): {Pn}</h5>
                <h5>Кінцевий тиск(Pk): {Pk}</h5>
                <h5>Початковий температура(Tn): {Tn}</h5>
                <h5>Кінцева температура(Tk): {Tk}</h5>
                <h5>Коефіцієнт теплопередачі(k): {k}</h5>
                <h5>Введіть температуру грунту(Tgr): {Tgr}</h5>
                
                <h5>Довжина газопроводу(L): {L}</h5>
                
                <h5>Діаметр газопроводу(D): {D}</h5>
                       

                <h5>Товщина газопроводу(d): {d}</h5>          


        <h3 className={s.result}>Середній тиск(Pcep):  {Pc}</h3>   
        <h3 className={s.result}>Число Рейнольдса(Re): {Re}</h3> 
        <h3 className={s.result}>коефіцієнт гідравлічного опору(л): {gOpir}</h3>

        <h3 className={s.result}>Середня температура газу (Tcep): {Tc}</h3>
        <h3 className={s.result}>коефіцієнт стисливості (z): {z}</h3>
        <h1 className={s.resultt}>Уточнююче значення продуктивності (Q): {Qi}</h1>

        <h1 className={s.resultt}>газопровідність (с): {c}</h1>

        <h1 className={s.resultt}>газопровідність уточнена (с1): {c1}</h1>


            <Line data={data} />
            </div>
        )
    }

export default Lab;