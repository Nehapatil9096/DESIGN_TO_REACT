import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css';
import mail_icon from "/mail.png";
import samsung_icon from "/samsung.png";
import visma_icon from "/visma.png";
import bolt_icon from "/bolt.png";
import aws_icon from "/aws.png";
import accenture_icon from "/accenture.png";
import atnt_icon from "/atnt.png";
import settings_icon from "/Settings.png"; // Import the settings icon
import temp_mail_image from "/temp_mail.jpeg"; // Import the settings icon

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: '',
      companyName: '',
      workEmail: '',
      phoneNumber: '',
      companySize: '1-10',
      team: 'Engineering',
      projectBudget: '$25,000+',
      message: ''
    }
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Handle form submission here
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <a href="/" className="back-link">← Home</a>
        <h1>Contact</h1>    
        <div className="contact-wrapper">
          <div className="contact-sales">        
            <img src={mail_icon} alt="Mail Icon" />
          </div>
          <span className="contact_name">CONTACT SALES</span>
        </div> 
        
        <h2>Talk to our account expert</h2>
        <p>Have questions about integrating our APIs? Fill out the form and a senior web expert will be in touch shortly.</p>
        
        <div className="companies-section">
          <p className="join-text">Join 6,000+ forward-thinking companies:</p>
          <div className="company-logos">
            <img src={samsung_icon} alt="Samsung" />
            <img src={visma_icon} alt="Visma" />
            <img src={bolt_icon} alt="Bolt" />
            <img src={aws_icon} alt="AWS" />
            <img src={accenture_icon} alt="Accenture" />
            <img src={atnt_icon} alt="AT&T" />
          </div>
        </div>
      </div>

      <div className="contact-right">
        <div  className="form-box">
        <h3>Fill the form below</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                id="fullName"
                type="text"
                className={errors.fullName ? 'error' : ''}
                {...register('fullName', { required: 'Full Name is required' })}
              />
              {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="companyName">Company Name *</label>
              <input
                id="companyName"
                type="text"
                className={errors.companyName ? 'error' : ''}
                {...register('companyName', { required: 'Company Name is required' })}
              />
              {errors.companyName && <span className="error-message">{errors.companyName.message}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="workEmail">Work Email *</label>
              <div className="input-wrapper">
              <input
                id="workEmail"
                type="email"
                className={errors.workEmail ? 'error' : ''}
                {...register('workEmail', {
                  required: 'Work Email is required',
                  pattern: { value: /\S+@\S+\.\S+/, message: 'Please enter a valid email' }
                })}
              />
               <img src={temp_mail_image} alt="Temp Mail" className="email-icon" />
               </div>
              {errors.workEmail && <span className="error-message">{errors.workEmail.message}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                id="phoneNumber"
                type="tel"
                className={errors.phoneNumber ? 'error' : ''}
                {...register('phoneNumber', {
                  required: 'Phone Number is required',
                  pattern: { value: /^[0-9+-\s()]*$/, message: 'Please enter a valid phone number' }
                })}
              />
              {errors.phoneNumber && <span className="error-message">{errors.phoneNumber.message}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="companySize">Company Size</label>
              <select id="companySize" {...register('companySize')}>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201+">201+</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="team">Team</label>
              <select id="team" {...register('team')}>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="projectBudget">Project Budget *</label>
            <select id="projectBudget" {...register('projectBudget')}>
              <option value="$25,000+">$20,000+</option>
              <option value="$50,000+">$50,000+</option>
              <option value="$100,000+">$100,000+</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message </label>
            <textarea
              id="message"
              className={errors.message ? 'error' : ''}
              {...register('message', {
                
                minLength: { value: 10, message: 'Message must be at least 10 characters' }
              })}
            />
            {errors.message && <span className="error-message">{errors.message.message}</span>}
          </div>

          <div className="form-submit">
            <button type="submit" className="submit-button">Let's Talk</button>
          </div>
          
          <p className="privacy-text">
            By submitting this, you agree to the{' '}
            <a href="/privacy">Privacy Policy</a> and{' '}
            <a href="/cookie">Cookie Policy</a>
          </p>
        </form>
        </div>
        <button type="button" className="settings-button">
    <img src={settings_icon} alt="Settings" />
  </button>
      </div>
    </div>
  );
};

export default ContactForm;
