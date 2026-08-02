import Header from "../components/Header";
import Footer from "../components/Footer";
import companyData from "../../../data/company.json";

export const metadata = {
  title: `Contact | ${companyData.name}`,
  description: `Get in touch with ${companyData.name} for wholesale, distribution, and export enquiries.`,
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="page-hero weave">
        <div className="wrap">
          <div className="breadcrumb"></div>
          <h1 className="display">Let's Talk</h1>
          <p>
            Contact Ali Traders & Ali Polymers for Wholesale, Distribution and
            Export Enquiries. Our Team Responds Within 1 Business Day.
          </p>
        </div>
        <div className="thread"></div>
      </section>

      <div className="contact-layout">
        <div className="contact-card">
          <div className="contact-row">
            <div className="contact-icon">@</div>
            <div>
              <div className="l">EMAIL</div>
              <div className="v">
                {companyData.contact.email || "Add email in company.json"}
              </div>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-icon">#</div>
            <div>
              <div className="l">PHONE</div>
              <div className="v">
                {companyData.contact.phone || "Add phone in company.json"}
              </div>
            </div>
          </div>
          {/* <div className="contact-row">
            <div className="contact-icon">W</div>
            <div>
              <div className="l">WHATSAPP</div>
              <div className="v">
                {companyData.contact.whatsapp || "Add WhatsApp in company.json"}
              </div>
            </div>
          </div> */}
          <div className="contact-row">
            <div className="contact-icon">@</div>
            <div>
              <div className="l">ADDRESS</div>
              <div className="v">
                {companyData.headquarters.addressLine1}
                <br />
                {companyData.headquarters.addressLine2}
              </div>
            </div>
          </div>
        </div>

        {/*
          FORM NOTE FOR DEVELOPER:
          This is a static site — there's no server to handle form submissions.
          Sign up free at https://formspree.io, get your form endpoint, and replace
          "YOUR_FORM_ID" below. Formspree then emails submissions directly to you.
        */}
        <form
          className="contact-card"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <div className="form-field">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-field">
            <label htmlFor="enquiryType">Enquiry Type</label>
            <select id="enquiryType" name="enquiryType">
              <option>Wholesale</option>
              <option>Distribution</option>
              <option>Export</option>
              <option>General Enquiry</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Send Enquiry
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
