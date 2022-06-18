import React from "react";
export default function Home() {
  const handlePrint = () => {
    window.print();
  }
  return (
    <>
      <div className="print:hidden w-full mt-5 flex items-center flex-col">
        <button onClick={handlePrint} className="rounded-[20px] p-3 w-max bg-secondary">
          PRINT INVOICE
        </button>
      </div>
      <div className="mx-auto container flex flex-col border-black border-2 my-10">
        <div className="p-2 border-black border-b-2">
          <div className="w-full flex flex-row justify-between">
            <span className="">
              GSTIN: 06596FSFSDSDSD
            </span>
            <span className="italic">
              Original Copy
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <span className="text-2xl font-bold underline">
              TAX INVOICE
            </span>
            <span className="text-[40px] font-bold">
              KRISHNA BATTERY HOUSE & AIR CONDITIONING
            </span>
            <span>
              H:0 YADAV MARKET, SHOP NO. 2, NEAR RIDGEWOOD GATE No 1, DLF PHASE IV
            </span>
            <span>
              GURUGRAM, HARAYANA 122001, B.0 PLOT NO B747B, SUSHANT LOK , PH-1, GURUGRAM HARAYANA
            </span>
            <p className="italic">
              Tel. : 9999075545, 99999998565 email: krishnabatteryhouse1982@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-row border-black border-b-2">
          <div className="border-black p-2 border-r-2 w-[50%]">
            <div>
              <ul>
                <li className="flex flex-row">
                  <div className="w-[22%]">Invoice No.</div>
                  <span className="px-2">:</span>
                  <span>
                    22-23/791
                  </span>
                </li>
                <li className="flex flex-row">
                  <div className="w-[22%]">Dated</div>
                  <span className="px-2">:</span>
                  <span>
                    02-06-2022
                  </span>
                </li>
                <li className="flex flex-row">
                  <div className="w-[22%]">Place of Supply</div>
                  <span className="px-2">:</span>
                  <span>
                    Delhi (07)
                  </span>
                </li>
                <li className="flex flex-row">
                  <div className="w-[22%]">Reverse Charge</div>
                  <span className="px-2">:</span>
                  <span>
                    N
                  </span>
                </li>
                <li className="flex flex-row">
                  <div className="w-[22%]">GR/RR No.</div>
                  <span className="px-2">:</span>
                  <span>

                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-black p-2 w-[50%]">
            <div>
              <ul>
                <li className="flex flex-row">
                  <div className="w-[22%]">Transport</div>
                  <span className="px-2">:</span>
                  <span>
                    BY HAND
                  </span>
                </li>
                <li className="flex flex-row">
                  <div className="w-[22%]">Vehicle No.</div>
                  <span className="px-2">:</span>
                  <span>

                  </span>
                </li>
                <li className="flex flex-row">
                  <div className="w-[22%]">Station</div>
                  <span className="px-2">:</span>
                  <span>
                  </span>
                </li>
                <li className="flex flex-row">
                  <div className="w-[22%]">P.O No</div>
                  <span className="px-2">:</span>
                  <span>
                  </span>
                </li>
                <li className="flex flex-row">
                  <div className="w-[22%]">P.O DATE</div>
                  <span className="px-2">:</span>
                  <span>

                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row border-black border-b-2">
          <div className="border-black p-2 border-r-2 w-[50%] flex flex-col justify-between">
            <ul>
              <li className="flex flex-row">
                <div className="w-[14%] italic font-bold">Billed to  :</div>
              </li>
              <li className="flex flex-row">
                YELOW PAYMENTS PVT LTD<br />
                4/380 STREET NO 13 BHOLA NATH NAGAR<br />
                SHAHDARA DELHI
              </li>
            </ul>
            <div>
              <br />
              <br />
              <div className="flex flex-row">
                <div className="w-[22%]">GSTIN/ UIN</div>
                <span className="px-2">:</span>
                <span>
                  06596FSFSDSDSD
                </span>
              </div>
            </div>
          </div>
          <div className="border-black p-2 w-[50%] flex flex-col justify-between">
            <ul>
              <li className="flex flex-row">
                <div className="w-[20%] italic font-bold">Shipped to  :</div>
              </li>
              <li className="flex flex-row">
                YELOW PAYMENTS PVT LTD<br />
                4/380 STREET NO 13 BHOLA NATH NAGAR<br />
                SHAHDARA DELHI<br />
              </li>
            </ul>
            <div>
              <br />
              <br />
              <div className="flex flex-row">
                <div className="w-[22%]">GSTIN/ UIN</div>
                <span className="px-2">:</span>
                <span>
                  06596FSFSDSDSD
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="flex flex-row border-black border-y-2">
          <ul className="border-black border-r-2 w-[48px] text-right">
            <li className="p-2 border-black border-b-2">S.N.<br />&nbsp;</li>
            <li className="pr-1">
              1.
            </li>
            <li className="pr-1">
              2.
            </li>
          </ul>
          <ul className="border-black border-r-2 text-left w-[350px]">
            <li className="p-2 border-black border-b-2">Descripltion of Goods<br />&nbsp;</li>
            <li className="pl-1">
              LUMINOUS 1650 ECO WATT+
            </li>
            <li className="pl-1">
              EXIDE BATTERY 12V
            </li>
          </ul>
          <ul className="border-black border-r-2 w-[88px] text-left">
            <li className="p-2 border-black border-b-2">HSN/SAC<br />Code</li>
            <li className="pl-1">
              8504
            </li>
            <li className="pl-1">
              8507
            </li>
          </ul>
          <ul className="border-black border-r-2 w-[90px] text-right">
            <li className="p-2 border-black border-b-2">Qty.<br />&nbsp;</li>
            <li className="pr-1">
              1.00
            </li>
            <li className="pr-1">
              2.00
            </li>
          </ul>
          <ul className="border-black border-r-2 w-[70px] text-left">
            <li className="p-2 border-black border-b-2">Unit<br />&nbsp;</li>
            <li className="pl-1">
              Pcs.
            </li>
            <li className="pl-1">
              Pcs.
            </li>
          </ul>
          <ul className="border-black border-r-2 w-[100px] text-right">
            <li className="p-2 border-black border-b-2">Price<br />&nbsp;</li>
            <li className="pr-1">
              6,100.69
            </li>
            <li className="pr-1">
              14,843.75
            </li>
          </ul>
          <ul className="border-black border-r-2 w-[80px] text-right">
            <li className="p-2 border-black border-b-2">IGST<br />Rate</li>
            <li className="pr-1">
              18.00 %
            </li>
            <li className="pr-1">
              28.00 %
            </li>
          </ul>
          <ul className="border-black border-r-2 w-[100px] text-right">
            <li className="p-2 border-black border-b-2">IGST<br />Amount</li>
            <li className="pr-1">
              1,098.31
            </li>
            <li className="pr-1">
              4,156.25
            </li>
          </ul>
          <ul className=" text-right w-[170px] mb-[240px]">
            <li className="p-2 border-black border-b-2">Amount<br />&nbsp;</li>
            <li className="pr-1">
              7,200.00
            </li>
            <li className="pr-1">
              19,000.00
            </li>
          </ul>
        </div>
        <div className="flex flex-row font-bold justify-between">
          <div className="flex flex-row w-[920px] justify-between">
            <div className="text-right w-[63%] p-2">Grand Total <span className="ml-2 underline underline-offset-1 mr-1">3.00</span>Pcs.</div>
            <div className="p-2">
              ₹
            </div>
          </div>
          <div className="border-l-2 flex items-end flex-col p-2 border-b-2 w-[172px] border-black text-right">
            26,200.00
          </div>
        </div>
        <div className="flex flex-col p-2">
          <div className="flex w-max flex-row">
            <ul className="border-black border-b-2 w-[90px]">
              <li className="underline font-bold underline-offset-2">HSN/SAC</li>
              <li>8504</li>
              <li>8507</li>
            </ul>
            <ul className="border-black border-b-2 w-[66px]">
              <li className="underline font-bold underline-offset-2">Tax Rate</li>
              <li>18%</li>
              <li>28%</li>
            </ul>
            <ul className="text-right border-black border-b-2 w-[140px]">
              <li className="underline font-bold underline-offset-2 pl-4">&nbsp;&nbsp;&nbsp;&nbsp;Taxable Amt.</li>
              <li>6,100.69</li>
              <li>14,843.75</li>
            </ul>
            <ul className="text-right border-black border-b-2 w-[132px]">
              <li className="underline font-bold underline-offset-2 pl-4">&nbsp;&nbsp;&nbsp;&nbsp;IGST Amt.</li>
              <li>1098.31</li>
              <li>4156.25</li>
            </ul>
            <ul className="text-right border-black border-b-2 w-[110px]">
              <li className="underline font-bold underline-offset-2 pl-4">&nbsp;&nbsp;&nbsp;&nbsp;Total Tax</li>
              <li>1098.31</li>
              <li>4156.25</li>
            </ul>
          </div>
          <div className="font-bold flex flex-row w-[538px] border-black border-b-2">
            <span className="w-[156px]">Total</span>
            <span className="w-[140px] text-right">20,944.44</span>
            <span className="w-[132px] text-right">5,254.56</span>
            <span className="w-[110px] text-right">5,254.56</span>
          </div>
          <br />
          <div className="font-bold">
            Rupees Twenty Six Thousand Two Hundred Only
          </div>
          <div className="font-bold text-sm">
            Party - 26,200.00
          </div>
        </div>
        <div className="flex flex-row p-2 border-black border-b-2 border-t-2">
          <span className="font-bold mr-2">
            Bank Details :
          </span>
          <span>
            A/C No : 90008000001, IFS Code: CNRB0019012, BANK: CANARA BANK<br />
            BRANCH: BIJWASAN, NEW DELHI 110061
          </span>
        </div>
        <div className="flex flex-row">
          <div className="border-black p-2 border-r-2 w-[50%] flex flex-col justify-between">
            <div className="font-bold underline underline-offset-2">Terms and conditions</div>
            <span>
              E.& O.E
            </span>
            <ol className="list-decimal ml-5">
              <li>
                Goods once sold will not be taken back.
              </li>
              <li>
                Interest @18% per annum will be charged on all overdue bills.
              </li>
              <li>
                Subject to 'Harayana Jurisdiction only'.
              </li>
            </ol>
            <br />
            <br />
          </div>
          <div className="w-[50%] flex flex-col">
            <div className="font-bold p-2 flex flex-row border-black border-b-2">
              <span>Reciever&apos;s Signature  :</span>
              <img className="h-[60px]" src="/sign.png" />
            </div>
            <div className="flex flex-col h-full items-end justify-between p-2">
              <span>for KRISHNA BATTERY HOUSE & AIR CONDITIONING</span>
              <span>
                Authorised Signatory
              </span>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}