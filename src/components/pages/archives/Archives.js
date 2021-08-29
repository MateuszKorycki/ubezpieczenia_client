import React, {useState, useEffect, useRef } from "react";
import './Archives.css'
import axios from "axios";
import Footer from "../../layout/footer/Footer";
import Navbar from "../../layout/header/Navbar";
import {connect} from "react-redux";

const Archives = (props) => {
    const [items, setItems] = useState([]);
    const fileInputEl = useRef(null);

    useEffect(() => {
        axios.get("https://ubezpieczenia-server.herokuapp.com/api/archives").then(res => {
            setItems(res.data);
        });
    }, ['items']);

    const onDownloadClick = (name) => {
        window.open(`/api/archives/download/${name}`)
    }

    const onDeleteClick = (id) => {
        axios.delete(`https://ubezpieczenia-server.herokuapp.com/api/archives/delete/${id}`).then(res => {
            window.location.reload(true);
        }).catch(res => {
            console.log(res);
        });
    }

    const onDocumentAdd = (evt) => {
        evt.preventDefault();

        const file = fileInputEl.current.files[0];
        const { user } = props.auth;

        if (file) {
            let formData = new FormData();
            formData.append("fileInput", file);
            formData.append("userName", user.name);

            axios({
                method: "post",
                url: "/api/archives",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            }).then(res => {
                window.location.reload(true);
            }).catch(res => {
                console.log(res);
            });
        } else {
            alert("Nie wybrano pliku");
        }
    }

    return (
        <>
            <div>
                <Navbar />
                <div className={"Archives_title_container"}>
                    <div className={"Archives_title"}>
                        <p>Dodaj dokument do Archiwum</p>
                    </div>
                </div>
            <div className={"Archives__form"}>
                <form action="/api/archives" method="post" encType="multipart/form-data"
                      onSubmit={(evt) => onDocumentAdd(evt)}>
                    <input type="file" name="fileInput" ref={fileInputEl}/>
                    <button className={"Archives__new-file-button Archives_new-file-button"} type={"submit"}>Dodaj</button>
                </form>
            </div>
            <div className={"Archives_title_container"}>
                      <div className={"Archives_title"}>
                          <p>Archiwum</p>
                      </div>
            </div>
            <div className={"Archives__item-list"}>
                {
                    items.map((item, index) => {
                        return (
                            <div className={"Archives__item"} key={index}>
                                <div className={"Archives__item-info"}>
                                    <div className={"Archives__item-name"}>{ item.name }</div>
                                    <div className={"Archives__item-author"}>{ item.author }</div>
                                </div>
                                <button className={"Archives__item-button Archives_new-file-button"} onClick={() => onDownloadClick(item.name)}>
                                    Pobierz
                                </button>
                                <button className={"Archives__item-button Archives_new-file-button"} onClick={() => onDeleteClick(item._id)}>
                                    Usuń
                                </button>
                            </div>
                        )
                    })
                }
            </div>
                <Footer/>
            </div>
        </>
    );
};

const mapProps = state => ({
    auth: state.auth
});

export default connect(mapProps)(Archives);