import PrivacyHeader from "../components/PrivacyPolicy/PricayHeader"
import PrivacyPolicyFeatures from "../components/PrivacyPolicy/PrivacyPolicyFeatures.jsx"
import PPForm from "../components/PrivacyPolicy/PPForm.jsx"
import Faq from "../components/DefoultFaq.jsx"
import Form from "../components/Contact/Contact.jsx"

export default function PrivacyPolicy() {
  return (
    <>
    <PrivacyHeader/>
    <PrivacyPolicyFeatures/>
    <PPForm/>
    <Faq/>
    <Form/>
    </>
  )
}
