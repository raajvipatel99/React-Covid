import React, { Component } from "react";
import Covid19Navbar from "./covid19Navbar";
class Covid19Wiki extends Component {
  state = {};
  styles = {
    fontSize: 20,
    margin: 15,
  };
  render() {
    return (
      <div>
        <Covid19Navbar />
        <div
          style={{
            backgroundColor: "#F5F5F5",
            height: 3150,
            width: 1300,
            margin: 20,
            borderRadius: 5,
            fontFamily: "cursive",
          }}
        >
          <br></br>
          <h1>
            The Center for Coronavirus Information
            <br></br>
            <br></br> What is the Coronavirus?
          </h1>
          <ol style={this.styles}>
            <li>
              2019 Novel Coronavirus (2019-nCoV) is a virus (more specifically,
              a coronavirus) identified as the cause of an outbreak of
              respiratory illness first detected in Wuhan, China.
            </li>
            <li>
              Early on, many of the patients in the outbreak in Wuhan, China
              reportedly had some link to a large seafood and animal market,
              suggesting animal-to-person spread.
            </li>
            <li>
              However, a growing number of patients reportedly have not had
              exposure to animal markets, indicating person-to-person spread is
              occurring.
            </li>
            <li>
              The name coronavirus is derived from the Latin corona, meaning
              "crown" or "halo", which refers to the characteristic appearance
              reminiscent of a crown.
            </li>
          </ol>
          <h1>What does it look like?</h1>
          <div style={{ display: "inline-block" }}>
            <img src={require("./microCovid1.jpg")} /> &nbsp;&nbsp;
            <img src={require("./microCovid2.jpg")} />
          </div>
          <h1>How do you get infected? </h1>
          <ol>
            <li>
              The main route of transmission is respiratory droplets and close
              contact.
            </li>
            <li>
              When you sneeze or cough, you send out droplets of fluid from your
              nose and mouth.
            </li>
            <li>
              Those droplets can carry infections, and when they enter someone
              else's enter the eyes, nose or mouth, the infection can make them
              sick. This is the way the flu and many viruses are spread.
            </li>
            <li>
              Most often, you need to be close to the person (within 6 feet) for
              it to spread this way.
            </li>
            <li>
              There is the possibility of aerosol transmission when exposed to
              high concentration aerosol for a long time in a relatively closed
              environment.
            </li>
            <li>
              The WHO has stated that the risk of spread from someone without
              symptoms is "very low" and that fecal transmission is "low".
            </li>
          </ol>
          <h1>Mythbusters</h1>
          <ol>
            <li>
              COVID-19 virus can be transmitted in areas with hot and humid
              climates.
            </li>
            <li>Cold weather and snow CANNOT kill the new coronavirus.</li>
            <li>
              Taking a hot bath does not prevent the new coronavirus disease.
            </li>
            <li>
              The new coronavirus CANNOT be transmitted through mosquito bites.
            </li>
            <li>
              Are hand dryers effective in killing the new coronavirus? No. Hand
              dryers are not effective in killing the 2019-nCoV.
            </li>
            <li>
              Can an ultraviolet disinfection lamp kill the new coronavirus? UV
              lamps should not be used to sterilize hands or other areas of skin
              as UV radiation can cause skin irritation.
            </li>
            <li>
              Can spraying alcohol or chlorine all over your body kill the new
              coronavirus? No. Spraying alcohol or chlorine all over your body
              will not kill viruses that have already entered your body.
            </li>
            <li>
              Do vaccines against pneumonia protect you against the new
              coronavirus? No. Vaccines against pneumonia, such as pneumococcal
              vaccine and Haemophilus influenza type B (Hib) vaccine, do not
              provide protection against the new coronavirus.
            </li>
            <li>
              Can regularly rinsing your nose with saline help prevent infection
              with the new coronavirus? No. There is no evidence that regularly
              rinsing the nose with saline has protected people from infection
              with the new coronavirus.
            </li>
            <li>
              Can eating garlic help prevent infection with the new coronavirus?
              Garlic is a healthy food that may have some antimicrobial
              properties. However, there is no evidence from the current
              outbreak that eating garlic has protected people from the new
              coronavirus.
            </li>
            <li>
              Are antibiotics effective in preventing and treating the new
              coronavirus? No, antibiotics do not work against viruses, only
              bacteria.
            </li>
          </ol>
          <h1>How can I protect myself?</h1>
          <h2>Handwashing</h2>
          <ol>
            <li>
              A number of governments advise against all non-essential travel to
              countries and areas affected by the outbreak.
            </li>
            <li>
              There are misconceptions circulating about how to prevent
              infection: rinsing the nose, gargling with mouthwash, and eating
              garlic are not effective.
            </li>
            <li>
              The CDC recommends that people wash hands often with soap and
              water for at least 20 seconds, especially after going to the
              toilet or when hands are visibly dirty.
              <ul>
                <li>
                  It further recommended using an alcohol-based hand sanitiser
                  with at least 60% alcohol by volume (or 120 proof) when soap
                  and water are not readily available.
                </li>
                <li>
                  The WHO also advise people to avoid touching the eyes, nose,
                  or mouth with unwashed hands.
                </li>
              </ul>
            </li>
          </ol>
          <h2>Respiratory hygiene</h2>
          <ol>
            <li>
              HealthThere is no evidence to show that the wearing of surgical
              masks by uninfected people at low risk is effective. organizations
              recommended that people cover their mouth and nose with a tissue
              when coughing or sneezing (which should then be disposed of
              immediately), or with a sleeve if a tissue is not available.
            </li>
            <li>
              The use of surgical masks by those who may be infected has also
              been recommended, as they can limit the volume and travel distance
              of expiratory droplets dispersed when talking, sneezing, and
              coughing.
            </li>
            <li>
              There is no evidence to show that the wearing of surgical masks by
              uninfected people at low risk is effective.
            </li>
            <li>
              Only China has specifically recommended the use of masks by
              healthy members of the public, while face masks have been widely
              used by healthy people in Hong Kong, Japan, Malaysia, and
              Singapore.
            </li>
          </ol>
          <h2>How to use a mask</h2>
          <ol>
            <li>Wear a mask if you are coughing or sneezing.</li>
            <li>
              If you wear a mask, then you must know how to use it and dispose
              of it properly.
            </li>
            <li>
              Before putting on a mask, clean your hands with alcohol-based hand
              rub or soap and water.
            </li>
            <li>
              Cover your mouth and nose with the mask and make sure there are no
              gaps between your face and the mask.
            </li>
            <li>Avoid touching the mask while using it.</li>
            <li>
              Replace the mask with a new one as soon as it is damp and do not
              re-use single-use masks.
            </li>
            <li>
              To remove the mask, remove it from behind (do not touch the front
              of the mask), discard it immediately in a closed bin, and then
              clean your hands with alcohol-based hand rub or soap and water.
            </li>
          </ol>
          <h2>How do I know if I am infected?</h2>
          <ul type="none">
            <li>
              Common signs of infection include respiratory symptoms, fever,
              cough, shortness of breath and breathing difficulties. In more
              severe cases, infection can cause pneumonia, severe acute
              respiratory syndrome, kidney failure and even death.
              <br></br>
              <br></br>
              <table style={{ width: 800 }}>
                <tr>
                  <td>Symptoms</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td>Fever</td>
                  <td>87.9%</td>
                </tr>
                <tr>
                  <td>Dry cough</td>
                  <td>67.7%</td>
                </tr>
                <tr>
                  <td>Fatigue</td>
                  <td>38.1%</td>
                </tr>
                <tr>
                  <td>Sputum production</td>
                  <td>33.4%</td>
                </tr>
                <tr>
                  <td>Shortness of breath</td>
                  <td>18.6%</td>
                </tr>
                <tr>
                  <td>Muscle pain or joint pain</td>
                  <td>14.8%</td>
                </tr>
                <tr>
                  <td>Sore throat</td>
                  <td>13.9%</td>
                </tr>
                <tr>
                  <td>Headache</td>
                  <td>13.6%</td>
                </tr>
                <tr>
                  <td>Chills</td>
                  <td>11.4%</td>
                </tr>
                <tr>
                  <td>Nausea or vomiting</td>
                  <td>5.0%</td>
                </tr>
                <tr>
                  <td>Nasal congestion</td>
                  <td>4.8%</td>
                </tr>
                <tr>
                  <td>Diarrhea</td>
                  <td>3.7%</td>
                </tr>
                <tr>
                  <td>Haemoptysis</td>
                  <td>0.9%</td>
                </tr>
                <tr>
                  <td>Conjunctival congestion</td>
                  <td>0.8%</td>
                </tr>
              </table>
            </li>
          </ul>
          <h2>Ok I think I'm infected, now what?</h2>
          <ol>
            <li>
              Self-isolation at home has been recommended for those diagnosed
              with COVID-19 and those who suspect they have been infected.
            </li>
            <li>
              Public health agencies have issued self-isolation instructions
              that include notification of healthcare providers by phone and
              restricting all activities outside of the home, except for getting
              medical care.
            </li>
            <li>
              Do not go to work, school, or public areas. Avoid using public
              transportation, ride-sharing, or taxis
            </li>
            <li>
              Those who have recently travelled to a country with widespread
              transmission or who have been in direct contact with someone
              diagnosed with COVID-19 have also been asked by some government
              health agencies to self-quarantine or practise social distancing
              for 14 days from the time of last possible exposure.
            </li>
            <li>
              Attempts to relieve the symptoms may include taking regular
              (over-the-counter) cold medications, drinking fluids, and resting.
              Depending on the severity, oxygen therapy, intravenous fluids, and
              breathing support may be required.
            </li>
            <li>The use of steroids may worsen outcomes.</li>
          </ol>
          <h2>Is there a vaccine or a cure?</h2>
          <ol>
            <li>No vaccine is currently available.</li>
            <li>
              Several organisations around the world are developing vaccines,
              using several different methods.
            </li>
            <li>
              By early March 2020, 30 vaccine candidates were in development,
              with products by Gilead Sciences and Ascletis Pharma in Phase III
              clinical trials.
            </li>
            <li>
              Several compounds, which were previously approved for treatment of
              other viral diseases, such as favipiravir, ribavirin, remdesivir
              and galidesivir, are being investigated against the coronavirus.
            </li>
            <li>
              Clinical trials are underway in for lopinavir/ritonavir and of
              remdesivir.
            </li>
            <li>
              Bruce Aylward, an assistant director-general of the WHO, has
              stated "there is only one drug right now that we think may have
              real efficacy and that's remdesivir."
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Covid19Wiki;
