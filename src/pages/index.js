import React from "react"
import {
	Link
} from "gatsby"
import Header from "../components/header"

export default () => (
	<div style={{ color: `purple` }}>
    <Link to="/contact/">联系方式</Link>
    <br />
    <Link to="/pics/">图片</Link>
    <Header headerText="Hello everyone!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)