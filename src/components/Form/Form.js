import { useState } from "react";
import styles from "./Form.module.css";

function Form(props) {
    const {provinces, setProvinces} = props;

    const [formdata, setFormData] = useState({
        provinsi: "",
        status: "",
        jumlah: "",
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({...formdata, [name]: value})
    }

    const [handleErrors, setHandleErrors] = useState({
        provinsiError: false,
        statusError: false,
        jumlahError: false,
    });

    const {provinsi, status, jumlah} = formdata;
    const {provinsiError, statusError, jumlahError} = handleErrors;

    function validate() {
        if (provinsi === "") {
            setHandleErrors({...handleErrors, provinsiError:true});
            return false;
        } else if (status === "") {
            setHandleErrors({...handleErrors, statusError:true, provinsiError:false});
            return false;
        } else if (jumlah === "") {
            setHandleErrors({...handleErrors, jumlahError:true, statusError:false});
            return false;
        } else {
            setHandleErrors({...handleErrors,
                provinsiError: false,
                statusError: false,
                jumlahError: false
            });
            return true;
        }
    }

    function addData() {
        const covidData = provinces.map((item) => ({...item}));
        const validateData = covidData.find((item) => item.kota === provinsi);
        if (validateData) {
            if (status === "kasus") {
                validateData.kasus = validateData.kasus + Number(jumlah);
            } else if (status === "sembuh") {
                validateData.sembuh = validateData.sembuh + Number(jumlah);
            } else if (status === "dirawat") {
                validateData.dirawat = validateData.dirawat + Number(jumlah);
            } else if (status === "meninggal") {
                validateData.meninggal = validateData.meninggal + Number(jumlah);
            } else {
                if (status === "kasus") {
                    covidData.push({
                        province: {
                            kota: provinsi,
                            kasus: Number(jumlah),
                            sembuh: 0,
                            meninggal: 0,
                            dirawat: 0,
                        },
                    });
                } else if (status === "sembuh") {
                    covidData.push({
                        province: {
                            kota: provinsi,
                            kasus: 0,
                            sembuh: Number(jumlah),
                            meninggal: 0,
                            dirawat: 0,
                        },
                    });
                } else if (status === "dirawat") {
                    covidData.push({
                        province: {
                            kota: provinsi,
                            kasus: 0,
                            sembuh:0,
                            meninggal: 0,
                            dirawat: Number(jumlah),
                        },
                    });
                } else if (status === "meninggal") {
                    covidData.push({
                        province: {
                            kota: provinsi,
                            kasus: 0,
                            sembuh:0,
                            meninggal: Number(jumlah),
                            dirawat: 0,
                        },
                    });
                }
            }
        }
        setProvinces(covidData);
    }

    function handleSubmit(e) {
        e.preventDefault();
        validate() && addData();
    }


  return (
    <div className={styles.container}>
      <section className={styles.forms}>
        <div className={styles.forms__left}>
            <img className={styles.forms__image} src="https://picsum.photos/536/354" alt="" />
        </div>
        <div className={styles.forms__right}>
            <h2 className={styles.forms__title}>Add Movie</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.form__group}>
                    <label className={styles.form__inputLabel} htmlFor="provinsi">Provinsi</label><br />
                    <select className={styles.form__input} name="provinsi" id="provinsi"  onChange={handleChange}>
                        {provinces.map((item)=>{
                            return <option value={item.kota}>{item.kota}</option>;
                        })}
                    </select>
                    <br />
                    {provinsiError && <span>Kota wajib dipilih</span>}
                </div>
                <div className={styles.form__group}>
                    <label className={styles.form__inputLabel} htmlFor="status">Status</label><br />
                    <select className={styles.form__input} name="status" id="status"  onChange={handleChange}>
                        <option value="kasus">Positive</option>
                        <option value="sembuh">Sembuh</option>
                        <option value="dirawat">Dirawat</option>
                        <option value="meninggal">Meninggal</option>
                    </select>
                    <br />
                    {statusError && <span>Status wajib dipilih</span>}
                </div>
                <div className={styles.form__group}>
                    <label className={styles.form__inputLabel} htmlFor="jumlah">Jumlah</label><br />
                    <input className={styles.form__input} id="jumlah" name="jumlah" type="number" onChange={handleChange}/>
                    <br />
                    {jumlahError && <span>Jumlah wajib diisi</span>}
                </div>
                <div className={styles.form__group}>
                    <button className={styles.form__button}>Submit</button>
                </div>
            </form>
        </div>
      </section>
    </div>
  );
}

export default Form;