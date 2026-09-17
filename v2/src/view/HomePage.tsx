
import img1 from "../assets/test2.png";
import img2 from "../assets/moi.png";
import Card from "../component/Card";
import Hero from "../component/Hero";
const HomePage = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${img1})` }}>
        <Card style={"bg-base-100 w-1/2 h-3/4 shadow-xl"} title={""} modal={false}><Hero title={"Qui suis je"} image={img2} style={""}> <p>text de présentation</p></Hero></Card>  
    </div>
  )
}

export default HomePage