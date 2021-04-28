module.exports = ({ name, role, course }) => {
  const today = new Date();
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>PDF Result Template</title>
      <style type="text/css">
        body,
        html {
          margin: 0;
          padding: 0;
          display:flex;
          justify-content:center;
          align-items:center;
        }
        body {
          color: black;
          display: table;
          font-family: Georgia, serif;
          font-size: 24px;
          text-align: center;
        }
        .container {
          border: 20px solid tan;
          width: 800px;
          height: 610px;
          display: table-cell;
          vertical-align: middle;
        }
        .logo {
          color: tan;
        }
  
        .marquee {
          color: tan;
          font-size: 48px;
          margin: 20px;
        }
        .assignment {
          margin: 20px;
        }
        .person {
          border-bottom: 2px solid black;
          font-size: 32px;
          font-style: italic;
          margin: 20px auto;
          width: 400px;
        }
        .reason {
          margin: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">An Organization</div>
  
        <div class="marquee">Certificate of Completion</div>
  
        <div class="assignment">This certificate is presented to</div>
  
        <div class="person">${name}</div>
  
        <div class="reason">
          For the successfull completion of <strong><em>${course}</em></strong> course
          As a <strong><em>${role}</em></strong>
        </div>
      </div>
    </body>
  </html>
  
    `;
};
