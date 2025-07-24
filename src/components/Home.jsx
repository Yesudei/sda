import React from "react";
import "../css/Home.css"
function Home() {
  return (
    <div>
      <div className="home-container">
        <header className="navbar">
          <div className="logoo">e-Drum</div>

          <nav className="nav-buttons">
            <button className="nav-btn">Хичээлүүд</button>
            <button className="nav-btn">Дэлгүүр</button>
            <button className="nav-btn">Үнэ</button>
            <button className="nav-btn">Холбоо барих</button>
          </nav>

          <div className="auth-buttons">
            <button className="loginn-btn">Нэвтрэх</button>
            <button className="registerr-btn">Бүртгүүлэх</button>
          </div>
        </header>

        <section className="hero">
          <div className="hero-text">
            <h1>Хөгжмийн хичээлийг гэрээсээ сур</h1>
            <p>
              Барабан, гитар, төгөлдөр хуур зэрэг хөгжмийн зэмсгүүдийг
              мэргэжлийн багш нараас суралцаарай
            </p>
            <div className="hero-buttons">
              <button className="hero-btn">Үнэгүй эхлэх</button>
              <button className="hero-btn">Хичээлүүд үзэх</button>
            </div>
          </div>
          <div className="hero-video">
            <img src="/images/hg.jpg" alt="container" />
          </div>
        </section>
        <section className="second-hero">
          <div className="second-hero-header">
            <h2>Биднийг яагаад сонгох вэ?</h2>
            <p>
              Орчин үеийн технологи болон уламжлалт арга барилыг хослуулан, үр
              дүнтэй сургалтын орчинг бүрдүүлэх
            </p>
          </div>
          <div></div>{" "}
          <div className="feature-grid">
            <div className="feature-card">
              <img src="/images/placeholder.png" alt="icon" />
              <h3>Видео хичээлүүд</h3>
              <p>
                Өндөр чанартай видео хичээлүүдээр тодорхой заавар авч, дахин
                дахин үзэх боломжтой
              </p>
            </div>

            <div className="feature-card">
              <img src="/images/placeholder.png" alt="icon" />
              <h3>Мэргэжлийн багш нар</h3>
              <p>
                Олон жилийн туршлагатай, мэргэжсэн багш нарын удирдлага дор
                суралцаарай
              </p>
            </div>

            <div className="feature-card">
              <img src="/images/placeholder.png" alt="icon" />
              <h3>Ахиц хянах систем</h3>
              <p>
                Өөрийн сурсан хичээл, оноо, шагналыг хянаж, дэвшлээ харах
                боломжтой
              </p>
            </div>

            <div className="feature-card">
              <img src="/images/placeholder.png" alt="icon" />
              <h3>Уян хатан цаг</h3>
              <p>
                24/7 хүссэн цагааар хичээллэж, өөрийн хуваарьт тохируулан
                суралцаарай
              </p>
            </div>

            <div className="feature-card">
              <img src="/images/placeholder.png" alt="icon" />
              <h3>Багш-сурагч харилцаа</h3>
              <p>
                Асуулт асуух, зөвлөгөө авах, туршлага хуваалцах боломжтой
                платформ
              </p>
            </div>

            <div className="feature-card">
              <img src="/images/placeholder.png" alt="icon" />
              <h3>Нарийвчилсан статистик</h3>
              <p>
                Өөрийн сурах процесс, цаг зарцуулалт, дэвшлийг дэлгэрэнгүй харах
              </p>
            </div>
          </div>
        </section>
        <section className="third-hero">
          <div className="second-hero-header">
            <h2> Манай багш нар</h2>
            <p>Мэргэжлийн хөгжимчид таныг хөгжмийн замд дагуулна.</p>
          </div>
          <div className="teachers-container">
            <div>
              <img
                src="/images/person.jpg"
                alt="teacher"
                className="teacher-photo"
              />{" "}
              <h2>Болд</h2> <p>Товч танилцуулга</p>
            </div>
            <div>
              <img
                src="/images/person.jpg"
                alt="teacher"
                className="teacher-photo"
              />{" "}
              <h2>Болд</h2> <p>Товч танилцуулга</p>
            </div>
            <div>
              <img
                src="/images/person.jpg"
                alt="teacher"
                className="teacher-photo"
              />{" "}
              <h2>Болд</h2> <p>Товч танилцуулга</p>
            </div>
          </div>
        </section>
        <section className="section-price">
          <div className="second-hero-header">
            <h2>Хичээлийн үнэ</h2>
            <p>Тус бүр нь төлж, хүссэн хичээлээ ав</p>
          </div>
          <div className="price-cards">
            <div className="price-card" style={{backgroundColor:"white", color:"black"}}>
              <h3>Үнэгүй хичээлүүд</h3>
              <h3>₮0</h3>
              <p>Эхний 3 хичээл</p>
              <p>Эхлэл хичээлүүд</p>
              <p>Хөгжмийн зэмсэгтэй танилцах</p>
              <p>Анхан шатны техник</p>
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: " all 0.3s ease",
                  marginTop: "30px",
                }}
              >
                Одоо эхлэх
              </button>
            </div>
            <div
              className="price-card"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <h3>Хичээл тус бүр</h3>
              <h3>₮5,000</h3>
              <p>4-р хичээлээс эхлэх</p>
              <p>Дэлгэрэнгүй хичээлүүд</p>
              <p>Багшийн зөвөлгөө</p>
              <p>Удаан хугацаагаар үзэх</p>
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: " all 0.3s ease",
                  marginTop: "30px",
                }}
              >
                Төлбөр төлөх
              </button>
            </div>
          </div>
        </section>
      </div>
      <section className="footer">
        <div className="footer-header">
          <div className="second-hero-header">
            {" "}
            <h2>Хөгжмийн аялалаа өнөөдөр эхлүүлээрэй</h2>
            <h3>Эхний 3 хичээл үнэгүй. Бүртгүүлж, хөгжмийн ертөнцөд орцгооё</h3>
            <button>Үнэгүй эхлэх</button>
          </div>
        </div>
      </section>
      <section className="footer-footer">
        <div className="footer-container">
          <div className="footer-left">
            <p className="footer-description">
              Бөмбөр хөгжимийг орчин үеийн технологийн тусламжтай хүн бүрт
              хүртээмжтэй болгох зорилготой.
            </p>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Холбоосууд</h3>
            <ul className="footer-list">
              <li>Хичээлүүд</li>
              <li>Багш нар</li>
              <li>Үнэ</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Хичээлүүд</h3>
            <ul className="footer-list">
              <li>Бөмбөр</li>
              <li>Гитар</li>
              <li>Төгөлдөр хуур</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Тусламж</h3>
            <ul className="footer-list">
              <li>Холбоо барих</li>
              <li>Түгээмэл асуултууд</li>
              <li>Дэмжлэг</li>
            </ul>
          </div>
        </div>
        <div className="footer-container">
          <p className="footer-tagline">
            Монгол хэл дээрх хөгжмийн хичээлийн платформ
          </p>
          <hr className="footer-divider" />
          <p className="footer-copyright">©2025 Нүдэн Солюшн ХХК.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
