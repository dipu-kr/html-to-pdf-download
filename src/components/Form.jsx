import React, { useState, useEffect } from "react";
import instance from "../api";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {
  const [formData, setFormData] = useState({
    block: "",
    applicationId: "",
    gender: "",
  });

  const [blockOptions, setBlockOptions] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);

  useEffect(() => {
    instance
      .get("/get-blocks")
      .then((response) => {
        // console.log(response);
        setBlockOptions(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching block options:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ----------------------------testing--------------------
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
	// console.log("hello")
  //   const req = {
  //     block_id: formData.block,
  //     application_id: formData.applicationId,
  //     gender_id: formData.gender,
  //   };

  //   try {
  //     const response = await instance.post("/get-candiate", req);
  //     console.log(response.data)


  //     if (response.data) {
        
  //     } else {
  //       console.error("Server response does not contain valid PDF content.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching block options:", error);
  //   }
  // };

  // -----------------testing code---------------
  const downloadPDF = (e) => {
    e.preventDefault();

    const roll_no = 12345;
	const dist = "Dispur";
    const staticHTMLContent = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi&display=swap" rel="stylesheet">
    <title>बिहार गृह रक्षा वाहिनी</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Arial", sans-serif;
        background-color: #f4f4f4;
        font-family: 'Tiro Devanagari Hindi', serif!important;
      }
    </style>
  </head>
  <body>
    <!-- -------------------------- -->
    <table style="width:100% !important; border:2px solid gray; margin: 50px auto 10px auto;padding-bottom: 10px !important;" id="pdfhtml">
      <tr style="width:100%; display: flex;justify-content: space-around; align-items: center;">
        <td>
          
        </td>
        <td style="text-align: center;">
          <p style="font-size: 28px;">बिहार गृह रक्षा वाहिनी</p>
          <p style="font-size: 28px;margin-bottom:25px !important">कटिहार</p>
        </td>
        <td>
          
        </td>
      </tr>
    </table>
    <!-- ------------------- -->
    <table style="width:100% !important; border:2px solid gray;margin: 15px auto 10px auto; padding-top:5px ; padding-bottom: 18px;">
		<tr>
			<td style="text-align: center;">
				<p style="font-size: 15px;margin-bottom:18px !important">वज्ञापन सं0. 02/2011 के आलोक में कटिहार जिला अन्तर्गत गृह रक्षकों के चयन हेतु षारीरिक दक्षता परीक्षा का प्रवेष पत्र</p>
			</td>
		</tr>
	</table>

    <!-- ---------------------------- -->
    <table style="width:100% !important; border:2px solid gray; margin: 50px auto 10px auto;padding: 7px;">
		<tr>
			<td>
				<table style="width:100% ;">
					<tr>
						<td style="width:85%;padding-left:4px !important">
							<table style="width:100%">
                <tr>
									<td>
                    <table style="width:100% !important;border-collapse: collapse;">
                      <tr>
                      <td style="width:50% !important;border:1px solid black;padding: 8px 4px !important;">
                        <div style="display:flex;">
						  <p>क्रमांक/रोल नं0ः-</p>
						  <span>${roll_no}</span>
						</div>
                    </td>
                    <td style="width:50% !important;border:1px solid black;padding: 8px 4px !important;">
					   <div style="display:flex;">
                         <p>प्रखंडः-</p>
					     <span>${dist}</span>
					   </div> 
                    </td>
                      </tr>
                    </table>
                  </td>
								</tr>
								<tr>
									<td style="width:100%;border:1px solid black;padding: 8px 4px !important;">
										<p class="m-0 fs-14">अभ्यर्थी का नाम/पिता का नामः-</p>
									</td>
								</tr>
								<tr>
									<td style="width:100%;border:1px solid black;padding: 8px 4px !important;" >
										<p class="m-0 fs-14">जन्म तिथिः-</p>
									</td>
									<td class="p-2" ></td>
								</tr>
								<tr>
									<td style="width:100%;border:1px solid black;padding: 8px 4px !important;" >
										<p class="m-0 fs-14">पता:-</p>
									</td>
									<td class="p-2" ></td>
								</tr>
							</table>
						</td>
						<td style="width: 15%;padding:8px 4px !important">
							<table style="width:200px !important;height:180px !important;">
								<tr>
									<td style="border: 2px solid gray; text-align: center;">
										<span>अभ्यर्थी का नवीनतम<br>फोटा</span>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td style="padding-top: 6px;">
				<table style="width:100%">
					<tr>
						<td class="p-1" style="width: 70% !important;">
							<table style="width:100%;border:1px solid black;border-collapse: collapse;">
								<tr>
									<td style="border: 1px solid black;padding: 8px 4px;">
										<p class="m-0 fs-14">शारीरिक दक्षता परीक्षा की तिथि</p>
									</td>
									<td style="border: 1px solid black;padding: 8px 4px;">
										<p class="m-0 fs-14"></p>
									</td>
								</tr>
								<tr>
									<td style="border: 1px solid black;padding: 8px 4px;">
										<p class="m-0 fs-14">शारीरिक दक्षता परीक्षा केन्द</p>
									</td>
									<td style="border: 1px solid black;padding: 8px 4px;">
										<p class="m-0 fs-14"></p>
									</td>
								</tr>
								<tr>
									<td style="border: 1px solid black;padding: 8px 4px;">
										<p class="m-0 fs-14">उपस्थित होने का समय</p>
									</td>
									<td style="border: 1px solid black;padding: 8px 4px;">6:00 AM to 10:00 AM</td>
								</tr>
							</table>
						</td>
						<td class="p-1 text-c" style="width: 30% !important;padding-left: 8px;">
							<table style="width:100%;">
								<tr>
									<td style="height:50%;border: 1px solid black;text-align: center; padding-top: 4px; padding-bottom: 8px;">
										<span class="fs-12">अभ्यर्थी के हस्ताक्षर (हिन्दी में)</span>
									</td>
								</tr>
								<tr>
									<td style="height:50%;border: 2px solid gray;padding: 30px 0px;"></td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
    <!-- ------------------------ -->
    <table style="width:100% !important;height:auto !important; border:2px solid gray; margin: 30px auto 100px auto;">
		<tr>
			<td style="padding: 7px 4px !important;">
				<table>
					<tr>
						<td class="width:100% !important;height:auto; text-justify;padding-left:10px !important">
							<p style="text-align: center;margin-bottom: 15px;">महत्वपूर्ण निर्देशः</p>
							<ol style="font-size: 14px;">
								<li style="margin-bottom: 6px;">1.  पुरूष/ महिला उम्मीदवार को आपके निर्धारित तिथि के अतिरिक्त अन्य तिथि को शारीरिक दक्षता की जॉच परीक्षा में सम्मिलित नहीं हाने दिया जायेगा ।</li>
								<li style="margin-bottom: 6px;"> 2. अभ्यर्थीगण प्रवेश पत्र पर अपना हाल का खिंचाया हुआ रंगीन पासपोर्ट साइज का फोटो प्रवेश पत्र पर दिये गये जगह पर चिपका कर स्वअभिप्रमाणित कर जॉच स्थल पर लायेंगे।</li>
								<li style="margin-bottom: 6px;">3. <b>अभ्यर्थी को प्रवेश पत्र की दो प्रतियॉ लाना अनिवार्य है।</b></li>
								<li style="margin-bottom: 6px;">4.  इस प्रवेश पत्र की मूल प्रति जॉच काउन्टर पर ले ली जायेगी। उम्मीदवार अपने पास इसकी छायाप्रति रखेंगे।</li>
								<li style="margin-bottom: 6px;">5.  प्रवेश पत्र के बिना शारीरिक दक्षता परीक्षा में सम्मिलित हाने की अनुमति नहीं मिलेगी। शारीरिक दक्षता परीक्षा में सम्मिलित हाने से पहले प्रवेश पत्र पर नीचे दिये गये निर्दिष्ट स्थान पर अपना हस्ताक्षर कर लें। इस प्रवेश पत्र को दक्षता परीक्षा होने के बाद अपने पास सुरक्षित रख लें क्यूंकि बाद में इसकी आवश्यकता पड सकती है।</li>
								<li style="margin-bottom: 6px;">6. <b>शारीरिक दक्षता परीक्षा केन्द मे बायोमैट्रिक सत्यापन के लिए आधार कार्ड  लाना अनिवार्य है।</b></li>
								<li style="margin-bottom: 10px;">7.  जॉच परिसर के अन्दर मोबाइल फोन. स्मार्ट वॉच. ब्लूटूथ या अन्य इलेक्ट्रोनिक सामग्री लेकर प्रवेश पूर्णतः वर्जित है।</li>
							</ol>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
  </body>
</html>
    `;

    const pdfOptions = {
      margin: 10,
      filename: "admitCard.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(staticHTMLContent).set(pdfOptions).save();
  };

  return (
    <div className="bg-white shadow-lg py-8 px-16 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">
        Download your Admit Card
      </h2>
      <form onSubmit={downloadPDF}>
        {/* Your form fields */}
        <div className="mb-4">
          <label htmlFor="block" className="block mb-1">
            Block
          </label>
          <select
            id="block"
            name="block"
            value={formData.block}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Block</option>
            {blockOptions.length > 0 &&
              blockOptions.map((block) => (
                <option key={block.id} value={block.id}>
                  {block.block}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="applicationId" className="block mb-1">
            Application ID
          </label>
          <input
            type="text"
            id="applicationId"
            name="applicationId"
            value={formData.applicationId}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter Application ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            onChange={handleChange}
            value={formData.gender}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
          {/* ---------------------------------------------- */}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      <Toaster/>
    </div>
  );
};

export default Form;
