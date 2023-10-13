import React, { useRef, useState } from 'react'
import "./regTeacherTitle.scss"
import newLogo from "../../images/newLogo.svg"
import camera from "../../images/camera.svg"

export function RegTeacherTitle() {
    const ism = useRef();
    const familya = useRef();
    const otchestvo = useRef();
    const PersonImage = useRef();
    const addTeacherForm = useRef();
    const cam = useRef();
    const saveTeacher = useRef();
    const [image, setImage] = useState(null);
    let imgStr;



    function addTeacherTitle(){
        
        if(ism.current.value && familya.current.value && otchestvo.current.value && PersonImage.current.files.length !== 0){

            const formData = new FormData();
            Promise.all([...PersonImage.current.files].map(file =>{
                formData.append("formFile", file);
                return fetch("https://api.oqot.uz/api/1.0/file/upload" ,{
                    method: "POST",
                    body: formData,
                }).then(res =>{
                    if(!res.ok) throw new Error("nimadir xato");
                    return res.json();
                }).catch(err =>{
                    console.log(err);
                })
            }))
            .then(data =>{
                imgStr = data.map((item) =>{
                    return `https://api.oqot.uz/api/1.0/file/download/${item}`
                }).join(" ");
                let newObj = {
                    ism: ism.current.value,
                    familya: familya.current.value,
                    otchestvo: otchestvo.current.value,
                    PersonImage: imgStr,
                }
                fetch(`https://metodiktaminlashplatform-ed37a-default-rtdb.firebaseio.com/teacherFIOblog.json`,{
                    method: "POST",
                    body: JSON.stringify(newObj),
                }).then(res =>{
                    if(!res.ok) throw new Error("nimadir xato");
                    return res.json();
                }).then(data =>{

                }).catch(err =>{
                    console.log(err);
                })
            }).finally(()=>{
                addTeacherForm.current.reset();
                setImage(camera);
                cam.current.classList.remove("borderOut")
                saveTeacher.current.innerHTML="Davom etish"
            })
            saveTeacher.current.innerHTML = `<div style="width: 20px; height: 20px; margin-top:5px;"  class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
             </div>`
        }
        else{
            Array.from(addTeacherForm.current).forEach(item =>{
                if(item.value == "" || PersonImage.current.files.length !== 0){
                    item.classList.add("errorBorder");
                    if(PersonImage.current.files.length == 0){
                        cam.current.classList.add("errorImgBorder");
                    }
                }
            })
            Array.from(addTeacherForm.current).forEach(item =>{
                item.addEventListener("change",(e)=>{
                    if(item.value || PersonImage.current.files.length !== 0){
                        item.classList.remove("errorBorder");
                        if(PersonImage.current.files.length !== 0){
                            cam.current.classList.remove("errorImgBorder")
                        }
                    }
                    else{
                        item.classList.add("errorBorder");
                    }
                })
            })
        }
    }
  return (
    <div className="regTeacherTitle">
        <div className="container">
            <div className="regTeacher">
                <div className="logo">
                    <img src={newLogo} alt=""/>
                </div>
                <div className="title">
                    <h1>PROFESSIONAL TA'LIMNI RIVOJLANTIRISH INSTITUTI</h1>
                        <p>Ro'yxatdan o'tish</p>
                </div>
               
                    <form action="" className="addTeacherForm" ref={addTeacherForm}>
                        <div className="topInput">
                            <div>
                                <label htmlFor="ism">*Ism</label>
                                <input type="text" id="ism" ref={ism}/>
                            </div>
                            <div>
                                <label htmlFor="familya">*Familiya</label>
                                <input type="text" id="familya" ref={familya}/>
                            </div>
                        </div>
                        <div className="bottomInput">
                            <div className="otch">
                                <label htmlFor="otchestvo">*Otasining ismi</label>
                                <input type="text" id="otchestvo" ref={otchestvo}/>
                            </div>
                            
                                <div className="personAddImage">
                                    <input type="file" id="PersonImage" ref={PersonImage} onChange={(e)=> setImage(URL.createObjectURL(e.target.files[0]))}/>
                                    <label htmlFor="PersonImage">
                                        <img id="cam" ref={cam} className={image ? "borderOut" : ""} src={image ? image : camera} alt=""/>
                                        <p>RASM JOYLASH</p></label>
                                </div>
                            
                           
                        </div>
                    </form>
                    <div className="saveTeacherButton">
                        <button onClick={addTeacherTitle} id="saveTeacher" ref={saveTeacher}>Davom etish</button>
                    </div>
               
            </div>
        </div>
    </div>
  )
}
