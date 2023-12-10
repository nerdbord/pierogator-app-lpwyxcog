import Input from "./Inputs/Input";

function SectionContent(){
    return(
        <>
        <section  
        style={{
          textAlign: 'left'
        }}>
<div style={{padding: "16px"}}>
<h3>Ciasto</h3>
<Input name="Ciasto" />
</div>
<div style={{padding: "16px"}}>
<h3>Nadzienie</h3>
<Input name="Nadzienie" />
</div>
<div style={{padding: "16px"}}>
<h3>Składniki</h3>
<Input name="Składniki" />
</div>


        </section>
        </>
    )
}
export default SectionContent;