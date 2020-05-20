function q1() {
    $('#names-q1').empty();
    $.ajax({
        type: "GET",
        url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/bikeList/1/99",
        data: {},
        success: function (response) {
            let rows = response["rentBikeStatus"]["row"];
            for (let i = 0; i < rows.lengthl; i++) {
                let rack_name = rows[i]['stationName'];
                let rack_cnt = rows[i]['rackTotCnt'];
                let bike_cnt = rows[i]['parkingBikeTotCnt'];
                let temp_html = ''
                if (bike_cnt < 5) {
                    temp_html = `<tr>
                                        <td><span class="bad">${rack_name}</span></td>
                                        <td><span class="bad"${rack_cnt}</span></td>
                                        <td><span class="bad">${bike_cnt}</span></td>
                                    </tr>`
                } else {
                    temp_html = `<tr>
                                        <td>${rack_name}</td>
                                        <td>${rack_cnt}</td>
                                        <td>${bike_cnt}</td>
                                    </tr>`
                }
                $('#names-q1').append(temp_html);
            }
        }
    })
}