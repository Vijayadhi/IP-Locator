const API_KEY = "ccb02ed605b94202b1909616381a9f51";

let url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}&ip_address=`;

async function getData(url) {
    try {
        const inpIP = document.getElementById("ip_address").value;
        if(!inpIP){
            alert("Enter any IPv4 value")
        }
        let res = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}&ip_address=${inpIP}`)
        let data = await res.json()
        if (data.ip_address) {
            const location_data = document.getElementById("ip_data")
            location_data.innerHTML = `
                                       <tr>
                                            <td>Ip Address</td>
                                            <td>${data.ip_address}</td>
                                        </tr>
                                         <tr>
                                            <td>Continent</td>                                          
                                            <td>${data.continent}</td>
                                        </tr>
                                         <tr>
                                            <td>Country</td>
                                            <td>${data.flag.emoji + "&nbsp;&nbsp;&nbsp;" + data.country}</td>
                                        </tr>
                                         <tr>
                                            <td>State</td>
                                            <td>${data.region}</td>
                                        </tr>
                                         <tr>
                                            <td>City</td>
                                            <td>${data.city}</td>
                                        </tr>
                                         <tr>
                                            <td>Pincode</td>
                                            <td>${data.postal_code}</td>
                                        </tr>
                                        <tr>
                                            <td>Latitude</td>
                                            <td>${data.latitude}</td>
                                        </tr>
                                         <tr>
                                            <td>Longitude</td>
                                            <td>${data.longitude}</td>
                                        </tr>   
                                         <tr>
                                            <td>Time Zone</td>
                                            <td>${data.timezone.name}</td>
                                        </tr>
                                         <tr>
                                            <td>Time</td>
                                            <td>${data.timezone.abbreviation + "&nbsp;&nbsp;&nbsp;" + data.timezone.current_time}</td>
                                        </tr>
                                        <tr>
                                            <td>Connection</td>
                                            <td>${data.connection.autonomous_system_organization}</td>
                                        </tr>
                                        <tr>
                                            <td>ISP</td>
                                            <td>${data.connection.isp_name}</td>
                                        </tr>                                        
                                `
        }
        else if (data.error) {
            const location = document.getElementById("location")
            location.innerHTML = ""
            location.innerHTML = `<p class="text-center">${data.error.details.ip_address[0]}/ Error</p>`
        }
    } catch (error) {
        return error
    }
}


function clearInput() {
    const machine_ip = document.getElementById("ipInput")
    machine_ip.innerHTML = `<input type="text" class="form-control form-control-lg " id="ip_address"
                        placeholder="Enter IPv4 Address">`
}

document.onload(
    fetch(url)
        .then(response => {
            let data = response.json()
            return data
        })
        .then(data => {
            const machine_ip = document.getElementById("ipInput")
            machine_ip.innerHTML = ""
            machine_ip.innerHTML = `<input type="text" class="form-control form-control-lg " id="ip_address"
                        placeholder="Enter IPv4 Address" value=${data.ip_address}>`
            const location_data = document.getElementById("ip_data")
            location_data.innerHTML = `
                                       <tr>
                                            <td>Ip Address</td>
                                            <td>${data.ip_address}</td>
                                        </tr>
                                         <tr>
                                            <td>Continent</td>                                          
                                            <td>${data.continent}</td>
                                        </tr>
                                         <tr>
                                            <td>Country</td>
                                            <td>${data.flag.emoji + "&nbsp;&nbsp;&nbsp;" + data.country}</td>
                                        </tr>
                                         <tr>
                                            <td>State</td>
                                            <td>${data.region}</td>
                                        </tr>
                                         <tr>
                                            <td>City</td>
                                            <td>${data.city}</td>
                                        </tr>
                                         <tr>
                                            <td>Pincode</td>
                                            <td>${data.postal_code}</td>
                                        </tr>
                                        <tr>
                                            <td>Latitude</td>
                                            <td>${data.latitude}</td>
                                        </tr>
                                         <tr>
                                            <td>Longitude</td>
                                            <td>${data.longitude}</td>
                                        </tr>   
                                         <tr>
                                            <td>Time Zone</td>
                                            <td>${data.timezone.name}</td>
                                        </tr>
                                         <tr>
                                            <td>Time</td>
                                            <td>${data.timezone.abbreviation + "&nbsp;&nbsp;&nbsp;" + data.timezone.current_time}</td>
                                        </tr>
                                        <tr>
                                            <td>Connection</td>
                                            <td>${data.connection.autonomous_system_organization}</td>
                                        </tr>
                                        <tr>
                                            <td>ISP</td>
                                            <td>${data.connection.isp_name}</td>
                                        </tr>

                            `
        })
        .catch(error => {
            return error
        })

);

function refreshPage(){
    window.refreshPage()
}