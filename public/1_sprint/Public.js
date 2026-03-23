const PeopleInfo = [{
    "id": 1,
    "first_name": "Ichabod",
    "last_name": "Nutt",
    "email": "inutt0@google.cn",
    "gender": "Male",
    "ip_address": "56.235.27.196"
    }, {
    "id": 2,
    "first_name": "Anni",
    "last_name": "Craythorne",
    "email": "acraythorne1@wikipedia.org",
    "gender": "Non-binary",
    "ip_address": "138.80.74.201"
    }, {
    "id": 3,
    "first_name": "Codie",
    "last_name": "Yate",
    "email": "cyate2@list-manage.com",
    "gender": "Male",
    "ip_address": "160.27.120.132"
    }, {
    "id": 4,
    "first_name": "Kimbra",
    "last_name": "Meininger",
    "email": "kmeininger3@utexas.edu",
    "gender": "Female",
    "ip_address": "46.194.76.67"
    }, {
    "id": 5,
    "first_name": "Renault",
    "last_name": "Chezier",
    "email": "rchezier4@4shared.com",
    "gender": "Male",
    "ip_address": "108.54.158.251"
    }]
    let CurrPerson = {}
    let f = false
        document.getElementById('operate-btn').addEventListener('click', function() {
            if (f == false){
                f = true
                document.getElementById('results').style.display = 'grid'
                document.getElementById('operate-btn').textContent = "Скрыть результат"
                for (let i = 0; i < PeopleInfo.length; i++)
                {
                    CurrPerson = PeopleInfo[i]
                    document.getElementById('res-first_name').textContent += '👤 ' + CurrPerson.first_name + '\n'
                    document.getElementById('res-ip_adress').textContent +=  '🌐 ' + CurrPerson.ip_address + '\n'
                }}
            else{
                f = false
                document.getElementById('results').style.display = 'none'
                document.getElementById('operate-btn').textContent = "Смотреть результат"
                document.getElementById('res-first_name').textContent = ''
                document.getElementById('res-ip_adress').textContent = ''
            }
        }); 