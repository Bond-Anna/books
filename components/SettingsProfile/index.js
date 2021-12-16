import React, {useState} from 'react';
import styles from './index.module.scss'
import Pencil from "../shared/icons/pencil";
import Bell from "../shared/icons/Bell";
import Lock from "../shared/icons/Lock";
import EditingProfile from "./editingProfile";
import SettingPassword from "./settingPassword";
import SettingNotification from "./settingNotification";


const SettingsProfile = () => {
    const settingMenu = [
        {text: 'Редактировать профиль'},
        {text: 'Настройки уведомлений'},
        {text: 'Настройки пароля'}
    ]

    const [currentIndexMenu, setCurrentIndexMenu] = useState(0)


    return (
        <div className={styles.container}>
            <div className={styles.setting}>
                <div className={styles.settingMenu}>
                    <h1>
                        Настройки профиля
                    </h1>
                    <ul>
                        {settingMenu.map((r, index) => {
                            return (
                                <li onClick={() => setCurrentIndexMenu(index)} key={r.text}>
                                    {index === 0 ? <Pencil/> : index === 1 ? <Bell/> : <Lock/>}
                                    <span>{r.text}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.settingContent}>
                    {currentIndexMenu === 0 ?
                        <>
                            <h1>Редактировать профиль</h1>
                            <EditingProfile/>
                        </>
                        : currentIndexMenu === 1 ?
                            <>
                                <h1>Настройки уведомлений</h1>
                                <SettingNotification/>
                            </>
                         :
                            <>
                                <h1>Настройки пароля</h1>
                                <SettingPassword/>
                            </>}
                </div>
            </div>
        </div>
    );
};

export default SettingsProfile;