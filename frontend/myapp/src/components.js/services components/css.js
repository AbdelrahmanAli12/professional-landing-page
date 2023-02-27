import React from "react";
import App from "../../App";
import { Card } from "antd";
const { Meta } = Card;
function Css() {
  return (
    <App>
      <Card
        style={{
          width: "60%",
          alignContent: "center",
          marginLeft: "18%",
        }}
        bodyStyle={{ fontSize: "Bolder", color: "black" }}
        cover={
          <img alt="example" src="cssCover.jpg" style={{ height: "300px" }} />
        }
      >
        <Meta
          style={{ fontWeight: "bolder" }}
          title="What is Css?"
          description="CSS is used for defining the styles for web pages. It describes the look and formatting of a document which is written in a markup language. It provides an additional feature to HTML. It is generally used with HTML to change the style of web pages and user interfaces.

It is easier to make the web pages presentable using CSS. It is easy to learn and understand and used to control the presentation of an HTML document. CSS helps us to control the text color, font style, the spacing between paragraphs, sizing of columns, layout designs, and many more. It is independent of HTML, and we can use it with any XML-based markup language.

It is recommended to use CSS because the HTML attributes are being deprecated. So, for making HTML pages compatible with future browsers, it is good to start using CSS in HTML pages.

There are several uses of CSS that are discussed as follows:

Solves a big problem
Before CSS, tags like font, color, background style, element alignments, border, and size had to be repeated on every web page. This was a very long process.

For example: If we are making a large website where fonts and color information are required to add on every page, it will be a long process. CSS was created to solve this problem. It was a W3C recommendation.

Saves a lot of time
CSS style definitions are saved in external CSS files, so it is possible to change the entire website by changing just one file.

Provide more attributes
CSS provides more detailed attributes than plain HTML to define the look and feel of the website.

Pages load faster
CSS does not require the writing of HTML tag attributes every time. There is the writing of rule just once for a tag, which can be applied to all the occurrences of the corresponding tag. So using CSS, there is less code, which means faster downloading.

Easier Website maintenance
CSS makes the maintenance of the website easier. It plays an essential role in website maintenance. If we require a global change in the file, it can be simply done by changing the style by which all the elements on the web page will update automatically. The CSS file provides a flexible look to the website, which can be altered in a convenient way. It also makes HTML formatting and modification of corresponding data elements easier.

Multiple device compatibility
CSS is compatible with the older language versions so that we can use CSS with the earlier language versions. Because of this, if the CSS application is developed with the older programming language versions and if the developer combines the same with new improvements, then CSS can be easily implemented with the corresponding changes so the developer can update the existing code successfully. CSS allows the content to be optimized for more than one type of device.

After discussing the uses of CSS, it is clear that CSS is very helpful to style across different domains."
        />
      </Card>
    </App>
  );
}

export default Css;
