import React from "react";
import App from "../../App";
import { Card } from "antd";
const { Meta } = Card;
function Html() {
  return (
    <App>
      <Card
        style={{
          width: "70%",
        }}
        bodyStyle={{ fontSize: "Bolder", color: "black" }}
        cover={<img alt="example" src="Top-Uses-Of-HTML.jpg" />}
      >
        <Meta
          title="HTML5"
          description="
HTML5 is the latest version of the HyperText Markup Language (HTML), which is the standard markup language used to create web pages and other online content. HTML5 was first released in 2014, and it introduces many new features and enhancements compared to earlier versions of HTML.

HTML5 provides a number of benefits and uses, including:

1.Improved multimedia support: HTML5 includes new features for embedding multimedia content, such as video and audio, directly into web pages without requiring plugins like Adobe Flash. This makes it easier to deliver rich media experiences to users across different devices and platforms.

2.Better accessibility: HTML5 includes new elements and attributes that make it easier to create accessible web pages that can be used by people with disabilities, such as screen readers and other assistive technologies.

3.Mobile-friendly design: HTML5 includes features like responsive design, which allows web pages to adapt to different screen sizes and device types, making them easier to use on smartphones and other mobile devices.

4.Improved semantic markup: HTML5 introduces new semantic elements, such as <header>, <footer>, and <nav>, that make it easier to structure web pages in a way that is both meaningful to humans and machine-readable by search engines and other tools.

5.Offline storage and caching: HTML5 includes new features for local storage and caching, which allow web applications to work offline and load faster by storing data locally on the user's device.

Overall, HTML5 is a powerful and versatile markup language that offers many benefits for web developers and users alike. By leveraging its new features and capabilities, developers can create more dynamic and interactive web experiences that are accessible, mobile-friendly, and optimized for different devices and platforms."
        />
      </Card>
    </App>
  );
}

export default Html;
