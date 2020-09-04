import React from 'react';
import './style.scss';
const ParkingVoilation = () => {
  return (
    <div className={'parking-container'}>
      <div className={"parking-content"}>
        <div className={'drop-down-container'}>
          State Name
        <select name="cars" id="cars">
            <option value="">Select State</option>
            <option value="Haryana">Haryana</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>

        <div className={'drop-down-container'}>
          PinCode
        <select name="cars" id="cars">
            <option value="">Select Pincode</option>
            <option value="Haryana">131001</option>
            <option value="Delhi">131001</option>
            <option value="Mumbai">121205</option>
          </select>
        </div>
        <div className={'drop-down-container'}>
          Vehicle Reg Number
       <input />
        </div>
        <div className={'drop-down-container'}>
          Upload Image
        <input type="file" value="" title=" " />
        </div>
        <div className={'drop-down-container'}>
          <button type="submit">Submit</button>
        </div>
      </div>
      <div className={"parking-content-2"}>
        <div className={'drop-down-container'}>
          District Name
        <select name="cars" id="cars">
            <option value="">Select District</option>
            <option value="Haryana">Sonepat</option>
            <option value="Delhi">Gurgoan</option>
          </select>
        </div>
        <div className={'drop-down-container'}>
          Street Address
    <input />
        </div>
        <div className={'drop-down-container'}>
          State Name
        <select name="cars" id="cars">
            <option value="">Voilation type</option>
          </select>
        </div> <div className={'drop-down-container'}>
          Upload Image
        <input type="file" value="" title=" " />
        </div>
      </div>
      <div className={"parking-content-3"}>
        <div className={'drop-down-container'}>
          State Name
        <select name="cars" id="cars">
            <option value="">City Name</option>
          </select>
        </div>
        <div className={'drop-down-container'}>
          Vehicle Color
       <input />
        </div>
        <div className={'drop-down-container'}>
          State Name
        <select name="cars" id="cars">
            <option value="">Vehicle Subtype</option>

          </select>
        </div>
        <div className={'drop-down-container'}>
          Upload Image
        <input type="file" value="" title=" " />
        </div>
      </div>
    </div>
  )
}
export default ParkingVoilation;