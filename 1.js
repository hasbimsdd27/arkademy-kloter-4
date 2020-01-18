function dataDiri(nama,umur){
    let biodata ={
        name: nama,
        age: umur,
        address: 'Jalan Arjuno, Rt 01 Rw 05 Kelurahan Babadan, Kecamatan Wlingi, kabupaten Blitar, Provinsi Jawa Timur',
        hobbies: ['running', 'self traveling', 'coding'],
        is_married: false,
        list_school: [
            {
                name: 'Land Transport Academy',
                year_in: '2016',
                year_ot: '2019',
                major: 'Road Traffic and Road Transportation'
            },
            {
                name: 'Senior High School 1 Talun',
                year_in: '2013',
                year_ot: '2016',
                major: 'Science'
            },
            {
                name: 'Junior High School 1 Wlingi',
                year_in: '2010',
                year_ot: '2013',
                major: null
            },
            {
                name: 'Islamic Elementary School Al-Azhar Wlingi',
                year_in: '2004',
                year_ot: '2010',
                major: null
            },
            
        ],
        skills:[
            {
                skill_name:'GIS',
                level:'begineer'
            },
            {
                skill_name:'CAD Drawing',
                level:'begineer'
            },
            {
                skill_name:'Web Programming',
                level:'advanced'
            },
            {
                skill_name:'Graphic Design',
                level:'begineer'
            },
            {
                skill_name:'Transport Analisys',
                level:'advanced'
            },
        ],
        interest_in_coding: true
    }
    return biodata;
}

console.log(dataDiri('Muhammad Mudai Hasbi Musaddad', 21));