import React, { useState } from "react";

import { Header, Content, Footer } from "./styles";

function Main() {
  const [metric, setMetric] = useState("m");
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);

  function handleTradeMetric() {
    metric === "m" ? setMetric("in") : setMetric("m");
  }

  function handleSubmit(e) {
    e.preventDefault();

    let bmi = 0;

    /** Preventing errors */
    if (!weight || !height) {
      return alert("Values are mandatory");
    }

    /** Calculating latin units (default) */
    if (metric === "m") {
      // setBmi(weight / (height * height));
      bmi = weight / (height * height);
    }

    /** Calculating english units*/
    if (metric === "in") {
      // setBmi((weight * 705) / 66 / 66);
      bmi = (weight * 705) / 66 / 66;
    }

    console.log(bmi);

    const tableRow = document.querySelectorAll("tbody tr");

    /** Coloring the table according to the result */
    tableRow.forEach((tr) => {
      let bmiMin = Number(tr.getAttribute("data-result-min"));
      let bmiMax = Number(tr.getAttribute("data-result-max"));

      tr.style.background = "none";
      tr.style.color = "";

      if (bmiMin <= bmi && bmi <= bmiMax) {
        tr.style.background = "var(--theme-color)";
        tr.style.color = "var(--bg-color)";
      }
    });
  }

  return (
    <>
      <Header>
        <h1>BMI Calculator</h1>
      </Header>
      <Content>
        <div className="info">
          <span>Choose your unit and type your weight and height below:</span>
          <button
            onClick={handleTradeMetric}
            type="button"
            id="trade"
            className="notranslate"
            data-metric="m"
          >
            in
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="weight"
            placeholder={metric === "m" ? "kg" : "lbs"}
            autoComplete="off"
            autoFocus
            required
            onBlur={(e) => setWeight(Number(e.target.value.replace(",", ".")))}
          />
          <input
            type="text"
            id="height"
            placeholder={metric === "m" ? "m" : "in"}
            autoComplete="off"
            required
            onBlur={(e) => setHeight(Number(e.target.value.replace(",", ".")))}
          />

          <button type="submit">Calculate</button>
        </form>

        <div className="result">
          <span>Your BMI is:</span>
          <output type="number" id="bmi" disabled readOnly></output>
        </div>

        <table>
          <thead>
            <tr>
              <th>Result</th>
              <th>Situation</th>
            </tr>
          </thead>

          <tbody>
            <tr data-result-min="0" data-result-max="16.99">
              <td>Less than 17</td>
              <td>Far Underweight</td>
            </tr>

            <tr data-result-min="17" data-result-max="18.49">
              <td>17 ~ 18.4</td>
              <td>Underweight</td>
            </tr>

            <tr data-result-min="18.5" data-result-max="24.99">
              <td>18.5 ~ 24.9</td>
              <td>Normal Weight</td>
            </tr>

            <tr data-result-min="25" data-result-max="29.99">
              <td>25 ~ 29.9</td>
              <td>Overweight</td>
            </tr>

            <tr data-result-min="30" data-result-max="34.99">
              <td>30 ~ 34.9</td>
              <td>Obesity</td>
            </tr>

            <tr data-result-min="35" data-result-max="39.99">
              <td>35 ~ 39.9</td>
              <td>Severe Obesity</td>
            </tr>

            <tr data-result-min="40" data-result-max="100">
              <td>More than 40</td>
              <td>Morbid Obesity</td>
            </tr>
          </tbody>
        </table>
      </Content>
      <Footer>
        <a href="https://github.com/octaviobarbosa" title="Author">
          @octaviobarbosa
        </a>

        <a href="https://github.com/octaviobarbosa/bmi" title="Source code">
          Github
        </a>
      </Footer>
    </>
  );
}

export default Main;
