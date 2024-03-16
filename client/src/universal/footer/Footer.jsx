import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img
          src="https://indiahemporganics.com/cdn/shop/files/brown_logo_1_180x.png?v=1677160910"
          alt="Loading Error"
        />
      </div>
      <div className="footer-content">
        <div className="footer-main-heading">
          <div className="footer-heading">
            {" "}
            <h2>INFORMATION</h2>{" "}
          </div>
          <div className="footer-heading">
            {" "}
            <h2>SHOP</h2>{" "}
          </div>
          <div className="footer-heading">
            {" "}
            <h2>CONTACT US</h2>{" "}
          </div>
        </div>
        <div className="footer-info-links">
          <div className="footer-sub-links">
            <h2>About Us</h2>
            <h2>Shop All</h2>
            <h2>FAQ</h2>
            <h2>Returns and Exchanges</h2>
            <h2>Terms of Service</h2>
            <h2>Refund</h2>
          </div>
          <div className="footer-sub-links">
            <h2>All Products</h2>
            <h2>Hemp Nutrition</h2>
            <h2>Canna Bliss</h2>
            <h2>Skin Health</h2>
          </div>
          <div className="footer-sub-links">
            <div className="footer-img-align">
              <img src="https://cdn.shopify.com/s/files/1/0716/6872/8111/files/Asset_3_2.svg?v=1689829433" alt="Loading Error" />
              <h2>+91 9876543210</h2>
            </div>
            <div className="footer-img-align">
              <img src="https://cdn.shopify.com/s/files/1/0716/6872/8111/files/sgoElu.svg?v=1689829432" alt="Loading Error" />
              <h2>info@email.com</h2>
            </div>
            <div className="footer-img-align">
              <img src="https://cdn.shopify.com/s/files/1/0716/6872/8111/files/Asset_1.svg?v=1689829432" alt="Loading Error" />
              <h2>123, Street Name, City, State, Country</h2>
            </div>
            <div className="footer-social-links">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="Loading Error" />
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="Loading Error" />
              <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="Loading Error" />
              <img src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png" alt="Loading Error" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
