import { useEffect, useState } from 'react';
import axios from 'axios';

const RightColumn = () => {

  // useState({})

  // useEffect(() => {
    
  // }, [])

  return (
    <div className="col-8 col">
      <div className="section-container mb-16">
        <h1 className="title-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
          </svg>
          Education
        </h1>
        <div className="content-section">
          <div className="content-container">
            <h3>Ming Chuan University</h3>
            <h3>銘傳大學</h3>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              2010&nbsp;-&nbsp;2014
            </span>
            <p className="sub-content">Department of Economics, Bachelor Degree</p>
          </div>
          <div className="content-container">
            <h3>New Taipei Municipal SanChong High School</h3>
            <h3>新北市立三重高中</h3>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              2007&nbsp;-&nbsp;2010
            </span>
            <p className="sub-content">Graduated</p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <h1 className="title-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
          </svg>
          Work Experience
        </h1>
        <div className="content-section">
          <div className="content-container">
            <h3>株式会社ROOT2</h3>
            <h3>飯店櫃檯人員</h3>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              Apr&nbsp;2019&nbsp;-&nbsp;Nov&nbsp;2021
            </span>
            <div className="sub-content">
              地點：日本京都。<br />產業：飯店經營業。<br /><br />
              工作內容：<br />
              <ul>
                <li>處理入住及退房、接洽預約、後台系統管理訂單及安排房間、處理及應對客人入住期間所遇到的問題。</li>
                <li>備品的庫存管理、與預約平台業者或飯店房間內之用品廠商的接洽、英日中三語翻譯、客戶資料建檔及管理。</li>
                <li>處理客訴、分配工讀生工作項目及監管其業務效率、培訓新人、協助打掃人員飯店內各處環境衛生處理、製作及販賣餐點及飲品等所有飯店之相關業務。</li>
              </ul>
            </div>
          </div>
          <div className="content-container">
            <h3>株式会社ハウスネットワーク</h3>
            <h3>助理會計、業務助理</h3>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              Aug&nbsp;2018&nbsp;-&nbsp;Dec&nbsp;2018
            </span>
            <div className="sub-content">
              地點：日本京都。<br />產業：不動產經營與租賃業。<br /><br />
              工作內容：<br />
              <ul>
                <li>接聽電話、接待訪客、記帳、出納、管理店內零用金。</li>
                <li>製作月底報表、協助業務人員檔案建檔、歸檔、支援業務人員工作。</li>
                <li>店內環境衛生管理、辦公室備品庫存管理及採購、日中雙向翻譯。</li>
              </ul>
            </div>
          </div>
          <div className="content-container">
            <h3>くら寿司株式会社</h3>
            <h3>儲備幹部</h3>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              Apr&nbsp;2018&nbsp;-&nbsp;Jul&nbsp;2018
            </span>
            <div className="sub-content">
              地點：日本京都。<br />產業：餐飲業。<br />(跨國連鎖迴轉壽司店-藏壽司)<br /><br />
              工作內容：<br />
              <ul>
                <li>食材期限及衛生管理、食材庫存管理、料理調理、開店準備及備料。</li>
                <li>出餐效率控管、人員調整與各區調配、壽司迴轉鏈控管。</li>
                <li>打掃衛生、關店整理、支援內外場、電話訂單接洽、受理客訴等店內各項事務。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightColumn
