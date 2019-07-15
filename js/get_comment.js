$.ajax({
    async: true,
    url: "https://tomcat.ourfor.top/db2json/query",
    type: "GET",
    dataType: "json",
    data: null,
    success: function(result,status,xhr){
        let $table = $('<table></table>');
        result.forEach(item => {
            let $tr = $('<tr></tr>');
            for(let e in item){
                let $td = $('<td>' + item[e] + '</td>');
                $tr.append($td);
            }
            $table.append($tr);
        });
        $('.comment').append($table);
    }
});