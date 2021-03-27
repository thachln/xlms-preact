import { h } from "preact";
/* import style from './style.css'; */
import axios from "axios";
import { useState, useEffect } from "preact/hooks";
/* import {Cookies} from "react-cookie"; */
import Cookies from 'universal-cookie';
import {Buffer} from 'buffer'


const Aside = () => {
  const [list, setList] = useState([]);
  const cookies = new Cookies();

const _username = "demo"
const _password = "demo"


  const token = Buffer.from(`${_username}:${_password}`, 'utf8').toString('base64')

  const url = 'https://xlms.myworkspace.vn/direct/session'
const data={
  _username:'demo',
  _password : "demo"
}
  axios.post(url,data,{
    headers: {
      'Authorization': `Basic ${token}`
    },
  }).then((res)=>{
    console.log(res.data)
  })

  //Load sản phẩm từ api và sử dung useEffect để quản lí vòng đời
  // useEffect(() => {

  //   axios
  //     .post(
  //       "https://xlms.myworkspace.vn/direct/session?_username=demo&_password=demo")
  //     .then((res) => {
  //       console.log(res.data);
  //       /*       cookies.set("JSESSIONID", res.data,{ path: '/' } ); 
  //              [{path: "/"},{httpOnly:true},{secure :true}]
  //              console.log(...cookies); */
  //       /* axios
  //         .get("https://xlms.myworkspace.vn/direct/session/current.json")
  //         .then((ress) => {
  //           console.log(ress.data);
  //         }); */
  //     });
  // }, []);

  //Load sản phẩm từ api và sử dung useEffect để quản lí vòng đời
  /*   useEffect(() => {
      axios
        .post(
          "https://xlms.myworkspace.vn/portal/site/c508c733-cbd9-4163-9709-e46f338306f6/tool/b57cf8d5-55b2-4fd3-84ac-9b70f95ff8ea/getDataTest/222.json"
        )
        .then((res) => {
          setList(res.data);
          console.log(cookies);
          console.log(res.data);
        });
    }, []); */
  /* const tab1 = list.slice(0, 1).map((item, index) => {
    return (
      <div key={index} class="col-12" id="activity">
        <div class="embed-responsive embed-responsive-16by9 mt-4">
          <iframe
            class="embed-responsive-item form-control"
            src={item.assessment.partsContents[0].itemContents[0].content.image}
            allowfullscreen
          >
            {" "}
          </iframe>
        </div>
        <div class="col-12 mt-4 custom-control">
          <textarea class="form-control">Câu hỏi</textarea>
        </div>
        <div class="mt-4 custom-control">
          <p>Đáp án</p>
        </div>
        <div class="custom-control">
          <button class="btn btn-outline-secondary mr-3" type="submit">
            A
          </button>
          <button class="btn btn-outline-secondary mr-3" type="submit">
            B
          </button>
          <button class="btn btn-outline-secondary mr-3" type="submit">
            C
          </button>
          <button class="btn btn-outline-secondary mr-3" type="submit">
            D
          </button>
        </div>
        <div class="col-12 mt-4 custom-control custom-checkbox">
          <div class="custom-control custom-checkbox custom-control-inline custom-control-right">
            <input
              type="checkbox"
              id="location"
              value="location"
              name="audiotext"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="location">
              Audio text
            </label>
          </div>
        </div>
        <div class="col-12 mt-4 custom-control">
          <textarea class="form-control">Text của Audio</textarea>
        </div>
      </div>
    );
  }); */
  return (
    <aside
      class="notification-sidebar d-none d-sm-none d-md-block"
      id="notification-sidebar"
    >
      <a class="notification-sidebar-close" href="#">
        x
      </a>
      <div class="side-nav notification-sidebar-content">
        <div class="row">
          <div class="col-12 text-center">
            <h4>Luyện nghe TOEIC</h4>
          </div>

          <div class="col-12 notification-nav-tabs">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="base-tab1"
                  data-toggle="tab"
                  aria-controls="activity-tab"
                  href="#1"
                  aria-expanded="true"
                >
                  1
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="base-tab2"
                  data-toggle="tab"
                  aria-controls="settings-tab"
                  href="#2"
                  aria-expanded="false"
                >
                  2
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="base-tab3"
                  data-toggle="tab"
                  aria-controls="settings-tab"
                  href="#3"
                  aria-expanded="false"
                >
                  3
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="base-tab4"
                  data-toggle="tab"
                  aria-controls="settings-tab"
                  href="#4"
                  aria-expanded="false"
                >
                  4
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 notification-tab-content">
            <div class="tab-content">
              <div
                class="row tab-pane active"
                id="1"
                role="tabpanel"
                aria-expanded="true"
                aria-labelledby="base-tab1"
              >
                {/*       {tab1} */}
                {/*    <div class="col-12" id="activity">
                                    <div class="embed-responsive embed-responsive-16by9 mt-4">
                                        <iframe class="embed-responsive-item form-control" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                                    </div>
                                    <div class="col-12 mt-4 custom-control">
                                        <textarea class="form-control">câu hỏi nếu có</textarea>
                                    </div>
                                    <div class="mt-4 custom-control">
                                        <p>Đáp án</p>
                                    </div>
                                    <div class="custom-control">
                          
                                        <button class="btn btn-outline-secondary mr-3" type="submit">A</button>
                                        <button class="btn btn-outline-secondary mr-3" type="submit">B</button>
                                        <button class="btn btn-outline-secondary mr-3" type="submit">C</button>
                                        <button class="btn btn-outline-secondary mr-3" type="submit">D</button>
                                    </div>
                                    <div class="col-12 mt-4 custom-control custom-checkbox">
                                        <div class="custom-control custom-checkbox custom-control-inline custom-control-right">
                                            <input type="checkbox" id="location" value="location" name="audiotext" class="custom-control-input" />
                                            <label class="custom-control-label" for="location">Audio text</label>
                                        </div>
                                    </div>
                                    <div class="col-12 mt-4 custom-control">
                                        <textarea class="form-control">Text của Audio</textarea>
                                    </div>
                                </div>
                            </div> */}
              </div>
              <div class="row tab-pane" id="2" aria-labelledby="base-tab2">
                <div class="col-12" id="tab2"></div>
              </div>
              <div class="row tab-pane" id="3" aria-labelledby="base-tab3">
                <div class="col-12" id="tab3"></div>
              </div>
              <div class="row tab-pane" id="4" aria-labelledby="base-tab4">
                <div class="col-12" id="tab4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Aside;
