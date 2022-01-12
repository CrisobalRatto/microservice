import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Producto</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Agregar Nuevo Producto</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Ventas"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                  <span className="productName">Apple Airpods</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">sku:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">marca:</span>
                      <span className="productInfoValue">apple</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">descripcion:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">precio:</span>
                      <span className="productInfoValue">120000</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">fecha creacion:</span>
                      <span className="productInfoValue">01/01/2020</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">fecha modificacion:</span>
                      <span className="productInfoValue">01/01/2020</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Nombre Producto</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>En Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Actualizar</button>
              </div>
          </form>
      </div>
    </div>
  );
}
