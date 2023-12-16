import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ProductService from "../Service/ClockService";
import '../css/AddClock.css';

const AddClock = () => {
    const[nameclock, setNameClock] = useState('');
    const[trademark, setTrademark] = useState('');
    const[size, setSize] = useState('');
    const[price, setPrice] = useState('');
    const[shape, setShape] = useState('');
    const[wireMaterial, setWireMaterial] = useState('');
    const[glassMaterial, setGlassMaterial] = useState('');
    const[style, setStyle] = useState('');
    const[functions, setFunctions] = useState('');
    const[faceColor, setFaceColor] = useState('');
    const[origin, setOrigin] = useState('');
    const[image, setImage] = useState(null);    // image
    const navigate = useNavigate();
    const {id} = useParams();

    const saveClock =(e) => {
      e.preventDefault();

      const product = {nameclock, trademark, size, price, shape, wireMaterial, glassMaterial, style, functions, faceColor, origin, image};

      ProductService.add(product) 
        .then(response => {
          console.log(response.data);
          navigate('/list')
        })
        .catch(error => {
          console.log('Error: ', error)
        })

    }


    useEffect(() => {
      if (id) {
          ProductService.get(id)
              .then(product => {
                  setNameClock(product.data.nameclock);
                  setTrademark(product.data.trademark);
                  setSize(product.data.size);
                  setPrice(product.data.price);
                  setWireMaterial(product.data.wireMaterial);
                  setGlassMaterial(product.data.glassMaterial);
                  setStyle(product.data.style);
                  setFunctions(product.data.functions);
                  setFaceColor(product.data.faceColor);
                  setOrigin(product.data.origin);
                  setShape(product.data.shape);
                  setImage(product.data.image);
              })
              .catch(error => {
                  console.log('Something went wrong', error);
              })
      }
  }, [])

  const handleImage = (e) => {
    const file = e.target.files[0]; // Use 'files' instead of 'file'
  
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const backHome = () => {
    navigate('/list')
  }
  

  return(
    <div class="container">
        <h2 class="title" onClick={() => {backHome()}}>Shop bán đồng hồ</h2>
        <hr/>
        <form class="form-container">
            <div class="form-group">
                <input  // name clock
                    type="text" 
                    className="form-control col-4"
                    id="nameclock"
                    value={nameclock}
                    onChange={(e) => setNameClock(e.target.value)}
                    placeholder="Tên đồng hồ"
                />
            </div>

            <div class="form-group">
                <input  // trademark
                    type="text" 
                    className="form-control col-4"
                    id="trademark"
                    value={trademark}
                    onChange={(e) => setTrademark(e.target.value)}
                    placeholder="Thương hiệu"
                />
            </div>

            <div class="form-group">
                <input // size
                    type="text" 
                    className="form-control col-4"
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    placeholder="Kích thước"
                />
            </div>

            
            <div class="form-group">
                <input // size
                    type="text" 
                    className="form-control col-4"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Giá tiền"
                />
            </div>

            
            <div class="form-group">
                <input // size
                    type="text" 
                    className="form-control col-4"
                    id="shape"
                    value={shape}
                    onChange={(e) => setShape(e.target.value)}
                    placeholder="Hình dạng"
                />
            </div>

            
            <div class="form-group">
                <input // size
                    type="text" 
                    className="form-control col-4"
                    id="wireMaterial"
                    value={wireMaterial}
                    onChange={(e) => setWireMaterial(e.target.value)}
                    placeholder="Loại dây"
                />
            </div>

            
            <div class="form-group">
                <input // size
                    type="text" 
                    className="form-control col-4"
                    id="glassMaterial"
                    value={glassMaterial}
                    onChange={(e) => setGlassMaterial(e.target.value)}
                    placeholder="Loại kính"
                />
            </div>

            
            <div class="form-group">
                <input // size
                    type="text" 
                    className="form-control col-4"
                    id="style"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    placeholder="Phong cách"
                />
            </div>

            
            <div class="form-group">
                <input // size
                    type="text" 
                    className="form-control col-4"
                    id="functions"
                    value={functions}
                    onChange={(e) => setFunctions(e.target.value)}
                    placeholder="Chức năng"
                />
            </div>

            
            <div class="form-group">
                <input // size
                    type="text" 
                    className="form-control col-4"
                    id="faceColor"
                    value={faceColor}
                    onChange={(e) => setFaceColor(e.target.value)}
                    placeholder="Màu mặt đồng hồ"
                />
            </div>

            
            <div class="form-group">
                <input // size
                    type="text" 
                    className="form-control col-4"
                    id="origin"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="Xuất xứ"
                />
            </div>

             <div class="form-group">
                <input
                    type="file"
                    onChange={handleImage}
                    className="form-control col-4"
                    accept="image/*"
                />
            </div>

            
        </form>
        <hr/>
        <div >
                <button onClick={(e) => saveClock(e)} className="btn btn-create">Create</button>
        </div>
    </div>
  )
};

export default AddClock;
