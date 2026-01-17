const Submit = document.getElementById("Submit").addEventListener("click", function(){
    const FirstName = document.getElementById("FirstName").value;
    const LastName = document.getElementById("LastName").value;
    const Umur = document.getElementById("Umur").value;
    const ProgramStudi = document.getElementById("ProgramStudi").value;

    let Umurs = Umur;
    Umurs= Number(Umurs);
    
    if (typeof (FirstName && LastName && ProgramStudi) != "string")
    {
        alert("Nama Harus Berbentuk Text!!!");
    }else if(typeof Umurs != "number")
    {
        alert("Umur Berupa Angka!!!");
    }else
    {
        let Identitas = {
            FirstName: FirstName,
            LastName: LastName,
            Umurs: Umurs,
            ProgramStudis: ProgramStudi,
        }

        console.log("Nama:", Identitas.FirstName, Identitas.LastName);
        console.log("Usia:", Identitas.Umurs);
        console.log("Program Studi:", Identitas.ProgramStudis);
    }
});