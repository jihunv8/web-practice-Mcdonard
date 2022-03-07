//전페이지 공통 푸터 컴포넌트
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <a href="">개인정보 처리방침</a>
          <a href="">위치정보 이용약관</a>
          <a href="">사이트맵</a>
          <a href="">임차문의</a>
          <a href="">고객문의</a>
          <a href="">인재채용</a>
        </nav>
        <div className="footer-contact">
          <span>한국맥도날드(유)</span>
          <span>대표이사: 앤토니 마티네즈</span>
          <span>사업자등록번호: 123-12-12345</span>
          <span>전화주문: 1600-1234</span>
          <span>COPYRIGHT © 2022 BY DevPP</span>
        </div>
        <nav className="sns-nav">
          <a
            className="sns-facebook"
            href="/facebook"
            title="페이스북"
            target="_blank"
          ></a>
          <a
            className="sns-instagram"
            href="/instagram"
            title="인스타그램"
            target="_blank"
          ></a>
          <a
            className="sns-youtube"
            href="/youtube"
            title="유튜브"
            target="_blank"
          ></a>
          <a
            className="sns-kakaostory"
            href="/kakakostory"
            title="카카오 스토리"
            target="_blank"
          ></a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
