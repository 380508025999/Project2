;(function () {
    window.onload = function () {
        var map,
            point={lat: 49.568518, lng:34.585407 }


        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 16,
                disableDefaultUI:true //чтобы наши элемены управления исчезли
            });
            var image ={
                url:'img/3.png',
                // size: new google.maps.Size(20,32)
            }
            var marker = new google.maps.Marker({
                position: point,
                map: map,
                icon:image
            });

        }

        initMap();
    }




})();
