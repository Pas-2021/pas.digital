function gen_table(){
    document.getElementById("tab").innerHTML="";

    let n=Number(document.getElementById("capital").value);

    let n2=Number(document.getElementById("couta").value);

    let n4=Number(document.getElementById("duracion-meses").value);
    
    let n3=Number(document.getElementById("interes").value); 


    if(n>0){   
        for(i=1;i<=n2;i++){
            ca=n/n2;
            d1=ca.toFixed();
            i2=((n*(n3*n4))/100)/n2;
            d2=i2.toFixed();
            r=ca+i2;
            d3=r.toFixed();
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                       
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=n.toFixed();
        t_i=i2*n2;
        d4=t_i.toFixed();
        t_p=r*n2;
        d5=t_p.toFixed();
        //document.getElementById("t1").innerHTML=n1;
        //document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5;        
    }else{
        alert("Falta ingresar un Número");
    }
}