import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Understanding Personal Loans</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, Helvetica, sans-serif;
                background-color: #0b1a4a;
                color: #ffffff;
                line-height: 1.6;
            }
            .container {
                max-width: 900px;
                margin: auto;
                padding: 20px;
            }
            .meta {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: #d1d5db;
                margin-bottom: 10px;
            }
            h1 {
                font-size: 28px;
                margin-bottom: 15px;
            }
            p {
                margin-bottom: 16px;
                font-size: 16px;
            }
            h2 {
                margin-top: 25px;
                color: #ffffff;
                border-bottom: 2px solid #22c55e;
                padding-bottom: 5px;
            }
            ul {
                padding-left: 20px;
            }
            li {
                margin-bottom: 10px;
            }
            .cta {
                margin: 30px 0;
                text-align: center;
            }
            .btn {
                display: block;
                background: linear-gradient(90deg, #22c55e, #16a34a);
                color: white;
                text-decoration: none;
                padding: 18px;
                margin: 15px auto;
                border-radius: 12px;
                font-size: 18px;
                font-weight: bold;
                width: 80%;
                max-width: 400px;
                transition: 0.3s ease;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            }
            .btn:hover {
                background: linear-gradient(90deg, #16a34a, #15803d);
                transform: scale(1.03);
            }
            .footer {
                font-size: 13px;
                color: #cbd5f5;
                margin-top: 30px;
                border-top: 1px solid #ccc;
                padding-top: 15px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="meta">
                <span>Published on Feb 7, 2026</span>
                <span>3 min read</span>
            </div>

            <h1>
                Understanding Personal Loans: A Practical Guide to Options and
                Considerations in 2026
            </h1>

            <p>
                A personal loan is an unsecured borrowing option for needs like major
                purchases or debt consolidation. Loans may have fixed payments and
                varying approval timelines; some lenders advertise fast decisions or
                same-day funding but terms depend on creditworthiness and documentation.
                In 2026, a mix of online and traditional lenders offer products for
                different credit profiles. Understanding loan types and trade-offs helps
                you compare options.
            </p>

            <!-- Call-to-Action Buttons -->
            <div class="cta">
                <a href="https://epesa-loan.vercel.app/" class="btn">Apply for Loan without Proof ➤</a>
                <a href="https://epesa-loan.vercel.app/" class="btn">Apply for Epesa Loan ➤</a>
                <a href="https://epesa-loan.vercel.app/" class="btn">Get loan for Business ➤</a>

            </div>

            <h2>Understanding Personal Loans</h2>
            <p>
                A personal loan is a type of unsecured loan that allows individuals to
                borrow money for various purposes, such as financing a major purchase,
                consolidating debt, or covering unexpected expenses. These loans can be
                accessed from banks, credit unions, or online lenders, and usually have
                fixed interest rates and monthly payments.
            </p>

            <h2>Types of Personal Loans</h2>
            <ul>
                <li><strong>Unsecured Personal Loan:</strong> Requires no collateral but may have higher interest rates.</li>
                <li><strong>Personal Installment Loan:</strong> Repaid in fixed installments over time.</li>
                <li><strong>Expedited Funding Personal Loan:</strong> Offers fast funding for urgent needs.</li>
                <li><strong>Bad Credit Personal Loan:</strong> Designed for individuals with low credit scores.</li>
                <li><strong>Low-Interest Personal Loan:</strong> Helps reduce overall repayment costs.</li>
                <li><strong>Fast-Processing Personal Loan:</strong> Ideal for emergencies requiring quick approval.</li>
            </ul>

            <h2>Benefits of Personal Loans</h2>
            <ul>
                <li>Flexibility in how funds are used.</li>
                <li>Potential improvement of credit scores.</li>
                <li>Fixed monthly payments for easier budgeting.</li>
                <li>Expedited approval processes.</li>
            </ul>

            <h2>Applying for a Personal Loan</h2>
            <p>To apply, you typically need:</p>
            <ul>
                <li>Identification number</li>
                <li>Safaricom phone number</li>
            </ul>

            <h2>Where to Find Personal Loans</h2>
            <ul>
                <li>LendingTree</li>
                <li>SoFi</li>
                <li>Avant</li>
                <li>Upstart</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
                Personal loans can be a powerful financial tool if used wisely. By
                researching and comparing options, you can secure a loan that meets your
                specific financial needs.
            </p>

            <div class="footer">
                <p>
                    The information on this site is of a general nature only and is not
                    intended to address the specific circumstances of any individual or
                    entity. It is not intended to be a substitute for professional advice.
                </p>
            </div>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
