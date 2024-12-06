function mostrar()
{
    let item1=document.getElementById("prod1");
    let item2=document.getElementById("prod2");
    let item3=document.getElementById("prod3");
    let adic=0;
    //
    if (item1.selectedIndex==0)
    {
        document.getElementById("desc01").value=""; //vacio
        document.getElementById("Vau01").value=0;
        document.getElementById("cant01").value=0;
        document.getElementById("prod01").value=0;
    }
    if(item1.selectedIndex==1)
    {
        document.getElementById("desc01").value="Hamburguesa amaericana + papas francesas";
        document.getElementById("vau01").value=item1.options[item1.selectedIndex].value;
        document.getElementById("vat01").value=(parseFloat(document.getElementById("cant01").value)*parseFloat(document.getElementById("vau01").value)||0).toFixed(0);
    }
    if (item1.selectedIndex==0)
        {
            document.getElementById("desc02").value=""; //vacio
            document.getElementById("Vau02").value=0;
            document.getElementById("cant02").value=0;
            document.getElementById("prod02").value=0;
        }
        if(item1.selectedIndex==1)
        {
            document.getElementById("desc02").value="Hamburguesa amaericana + papas francesas";
            document.getElementById("vau02").value=item1.options[item1.selectedIndex].value;
            document.getElementById("vat02").value=(parseFloat(document.getElementById("cant02").value)*parseFloat(document.getElementById("vau02").value)||0).toFixed(0);
        }
            




