import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      height={40}
      viewBox="0 0 32 32"
      width={40}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26 32H6a6 6 0 01-6-6V6a6 6 0 016-6h20a6 6 0 016 6v20a6 6 0 01-6 6z"
        fill="#e3f8fa"
      />
      <path
        d="M10.387 22.131h9.506l-.454-1.47 1.086.932.995.892L23.333 24V9.65C23.288 8.758 22.52 8 21.568 8l-11.178.002c-.951 0-1.723.759-1.723 1.651V20.48c0 .941.77 1.651 1.72 1.651zm7.032-10.342l-.022.008.008-.008zm-5.088.846c1.222-.889 2.354-.847 2.354-.847l.091.09c-1.495.357-2.174 1.025-2.174 1.025s.181-.089.498-.224c2.014-.792 4.213-.734 6.25.268 0 0-.679-.625-2.083-1.025l.125-.122c.194.001 1.221.037 2.32.84 0 0 1.229 2.1 1.229 4.68-.041-.049-.763 1.111-2.621 1.151 0 0-.315-.356-.538-.667 1.087-.312 1.493-.936 1.493-.936-.357.225-.682.358-.946.491-.406.179-.813.267-1.219.357-1.923.312-3.002-.21-4.022-.624l-.349-.177s.406.624 1.449.936c-.274.313-.545.668-.545.668-1.857-.044-2.535-1.204-2.535-1.204.001-2.584 1.223-4.68 1.223-4.68z"
        fill="#26c6da"
      />
      <g fill="#8ce1eb">
        <path d="M17.539 16.514c.474 0 .86-.4.86-.893 0-.49-.384-.89-.86-.89v.002c-.472 0-.859.399-.86.892 0 .489.386.889.86.889zM14.46 16.514c.474 0 .86-.4.86-.893 0-.49-.383-.89-.857-.89l-.003.002c-.474 0-.86.399-.86.892 0 .489.386.889.86.889z" />
      </g>
    </svg>
  );
}

export default SvgComponent;
