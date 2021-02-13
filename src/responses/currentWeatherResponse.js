const currentWeatherResponse = [
    {
      "LocalObservationDateTime": "2021-02-10T19:55:00+02:00",
      "EpochTime": 1612979700,
      "WeatherText": "Clear",
      "WeatherIcon": 33,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 17.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 64,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      "Version": 1,
      "Key": "215854",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Tel Aviv",
      "EnglishName": "Tel Aviv",
      "PrimaryPostalCode": "",
      "Region": {
          "ID": "MEA",
          "LocalizedName": "Middle East",
          "EnglishName": "Middle East"
      },
      "Country": {
          "ID": "IL",
          "LocalizedName": "Israel",
          "EnglishName": "Israel"
      },
      "AdministrativeArea": {
          "ID": "TA",
          "LocalizedName": "Tel Aviv",
          "EnglishName": "Tel Aviv",
          "Level": 1,
          "LocalizedType": "District",
          "EnglishType": "District",
          "CountryID": "IL"
      },
      "TimeZone": {
          "Code": "IST",
          "Name": "Asia/Jerusalem",
          "GmtOffset": 2,
          "IsDaylightSaving": false,
          "NextOffsetChange": "2021-03-26T00:00:00Z"
      },
      "GeoPosition": {
          "Latitude": 32.045,
          "Longitude": 34.77,
          "Elevation": {
              "Metric": {
                  "Value": 34,
                  "Unit": "m",
                  "UnitType": 5
              },
              "Imperial": {
                  "Value": 111,
                  "Unit": "ft",
                  "UnitType": 0
              }
          }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
          "AirQualityCurrentConditions",
          "AirQualityForecasts",
          "Alerts",
          "ForecastConfidence"
      ]
    }
  ]


export default currentWeatherResponse