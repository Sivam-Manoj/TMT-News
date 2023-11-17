
import image from "../assets/my.jpg"
const Footer = () => {
  return (
    <footer>
        <h4 className="fs-10">&copy;Sivam Manoj(2023-11-17)</h4>
        <div className="leftside">
            <p><a href="www.linkedin.com/in/sivam-manoj-720012269" target="_blank">Linkedin</a></p>
            <p><a href="https://www.facebook.com/profile.php?id=100086566274957" target="_blank">Facebook</a></p>

        </div>    

         <img className="myimage" src={image} alt="mypic" width={"50px"} height={"50px"}/>
    </footer>
  )
}

export default Footer