import axios from 'axios'

    export const fetchShow = () => {
      
      return axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
          return res
        })
        .catch(error =>
            console.log(error)
        )
    };

export const data = [
    {
        "id": 315235,
        "url": "http://www.tvmaze.com/episodes/315235/pinky-and-the-brain-1x01-das-mouse",
        "name": "Das Mouse",
        "season": 1,
        "number": 1,
        "airdate": "1995-09-09",
        "airtime": "",
        "airstamp": "1995-09-09T16:00:00+00:00",
        "runtime": 20,
        "image": null,
        "summary": "",
        "_links": {
        "self": {
        "href": "http://api.tvmaze.com/episodes/315235"
        }
        }
        },
        {
        "id": 315236,
        "url": "http://www.tvmaze.com/episodes/315236/pinky-and-the-brain-1x02-of-mouse-and-man",
        "name": "Of Mouse and Man",
        "season": 1,
        "number": 2,
        "airdate": "1995-09-10",
        "airtime": "",
        "airstamp": "1995-09-10T16:00:00+00:00",
        "runtime": 20,
        "image": null,
        "summary": "",
        "_links": {
        "self": {
        "href": "http://api.tvmaze.com/episodes/315236"
        }
        }
        },
        {
        "id": 315237,
        "url": "http://www.tvmaze.com/episodes/315237/pinky-and-the-brain-1x03-tokyo-growsthat-smartsbrainstem",
        "name": "Tokyo Grows/That Smarts/Brainstem",
        "season": 1,
        "number": 3,
        "airdate": "1995-09-17",
        "airtime": "",
        "airstamp": "1995-09-17T16:00:00+00:00",
        "runtime": 7,
        "image": null,
        "summary": "<p>3 shorts.</p>",
        "_links": {
        "self": {
        "href": "http://api.tvmaze.com/episodes/315237"
        }
        }
        }
]