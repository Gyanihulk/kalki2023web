import React from 'react';

const Privacy = () => {
  const handlePrivacyLink = async () => {
    // const url = 'https://kalkiakhada.com/#/privacy';

    // // Checking if the device supports deep linking
    // // const supported = await Linking.canOpenURL(url);

    // if (supported) {
    //   // Opening the URL
    //   // await Linking.openURL(url);
    // } else {
    //   console.log("Don't know how to open URI: " + url);
    // }
  };
  return (
    <div className="pt-20">
      <div className="text-2xl font-bold mb-10">Privacy Policy for Food Delivery App</div>

      <div className="mb-20">
        <div className="font-bold mb-10">Effective Date:</div>
        <div className="italic">01/06/2023</div>
      </div>

      <div className="mb-20">
        <div className="font-bold mb-10">Information We Collect:</div>
        <p>
          We may collect certain personal information from you when you use our app. The types of information we collect may include:
        </p>
        <ol>
          <li>Information You Provide: When you create an account or use certain features of our app, we may collect personal information such as your name, email address, and any other information you voluntarily provide.</li>
          <li>Usage Information: We may collect information about how you interact with our app, such as the features you use, the pages you visit, and the actions you take.</li>
          <li>Device Information: We may collect information about the device you use to access our app, including the device type, operating system, unique device identifiers, and mobile network information.</li>
          <li>Log Information: Our servers automatically record certain information when you use our app. This may include your IP address, app crashes, and other usage data.</li>
        </ol>
      </div>

      <div className="mb-20">
        <div className="font-bold mb-10">Use of Information:</div>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ol>
          <li>Providing and improving our app's functionality and features.</li>
          <li>Personalizing your experience and delivering tailored content.</li>
          <li>Communicating with you, responding to your inquiries, and providing customer support.</li>
          <li>Analyzing and understanding how our app is used, identifying trends, and improving our services.</li>
          <li>Enforcing our Terms of Service and protecting our rights and the rights of others.</li>
        </ol>
      </div>

      <div className="mb-20">
        <div className="font-bold mb-10">Disclosure of Information:</div>
        <p>
          We may share your personal information with third parties in the following circumstances:
        </p>
        <ol>
          <li>With your consent: We may share your information when you give us explicit consent to do so.</li>
          <li>Service Providers: We may engage third-party service providers to perform functions on our behalf, such as hosting, analytics, and customer support. These providers may have access to your personal information to the extent necessary to perform their services.</li>
          <li>Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
          <li>Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of the transaction.</li>
        </ol>
      </div>

      <div className="font-bold mt-20">Contact Us:</div>
      <p>If you have any questions or concerns about this Policy, please contact us at kumar.adamya2000@gmail.com.</p>

      <div className="font-bold">Food Delivery App is operated by Gyani Technologies.</div>

      <div className="font-bold">Last Updated: 27/06/2023</div>
     
    </div>
  );
};

export default Privacy;
