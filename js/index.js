/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




document.addEventListener("deviceready",onDeviceReady,false);

// once the device ready event fires, you can safely do your thing! -jm
function onDeviceReady()
{
    console.log("onDeviceReady. You should see this message in Visual Studio's output window.");

    // $('#button').click(function () {
    //     navigator.notification.alert("You clicked me!", onSuccess, "Click", "Ok");
    // });

    //navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, { frequency: 1000 })
}

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);



$(function () {
    $('.distance-btn').click(function () {
        window.localStorage.setItem("distance", $(this).attr('data-distance'));
    });

    $('#confirmation-page').on('pageshow', function () {
        var distanceSet = window.localStorage.getItem("distance");
        if (distanceSet.length > 0) {
            $('#meters').text(distanceSet);
        }


        $('#savebutton').click(function () {
            window.localStorage.setItem("item", $('#item').val());

            var itemSet = window.localStorage.getItem("item");
            if (itemSet.length > 0) {
                $('#item-display').text(itemSet);
                $('#item').val(itemSet);
            }
        });

        
    });


});


