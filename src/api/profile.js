// JavaScript Document
import axios from 'axios'

class InstagramProfile {
	
	// Properties
	constructor () {
		this.type = 'InstagramProfile';
		this.id = '';
		this.nickname = '';
		this.object = {};
	}


	// Get profile with post lists || Dona error not-logged-in
	getProfile() {

		var url = 'https://www.instagram.com/' + this.nickname + '/?__a=1';

		// return new Promise(function(resolve, reject) {
		return new Promise(function(resolve) {

			// axios.get(url, function(html, status) {
			var object = {};
            axios.get(url)
                .then( json => {

				// Init response
				object['profile'] = {};
				object['profile'] ['id_instagram'] = json.graphql.user.id;
				object['profile'] ['posts'] = json.graphql.user.edge_owner_to_timeline_media.count;
				object['profile'] ['biography'] = json.graphql.user.biography;
				object['profile'] ['external_url'] = json.graphql.user.external_url;
				object['profile'] ['edge_followed_by'] = json.graphql.user.edge_followed_by.count;
				object['profile'] ['edge_follow'] = json.graphql.user.edge_follow.count;
				object['profile'] ['full_name'] = json.graphql.user.full_name;
				object['profile'] ['profile_pic_url'] = json.graphql.user.profile_pic_url;
				object['profile'] ['username'] = json.graphql.user.username;
				object['profile'] ['edge_owner_to_timeline_media'] = json.graphql.user.edge_owner_to_timeline_media.count;

				console.log(object);

				// Response
				resolve(object);

			})
			.catch(error => {
				console.log(error)
				resolve(object)
			});


		});

	}


	// Get profile with post lists || Dona error not-logged-in
	getPosts(instagramId, first, endCursor) {
        console.log('instagramId:'+instagramId+', first:'+first+', endCursor:'+endCursor)
		// return new Promise(function(resolve, reject) {
		return new Promise(function(resolve) {

			// init
			var object = {};

			// First time
			var query_hash = '42323d64886122307be10013ad2dcc44';
			var url = 'https://www.instagram.com/graphql/query/?query_hash=' + query_hash;
			var variables = '"id":"' + instagramId + '","first":' + first;

			// Save end cursor for the second time | endCursor(sample) = QVFEMzJ5dkxyd01fQUFjQ0gtV2o0bGJWUFdjLTNncGdKZEROQVdxTFB4bGZ3bGx1ODRkelpTZmtwa3hSVWxHQ25meTB1UjAxYy1QaF9pck5meU5rM1ZzVQ==
			if (endCursor != '') {
				variables = variables + ',"after":"' + endCursor + '"'
			}
			url = url + '&variables={' + variables + '}'

			// Get data from instagram
			// axios.get(url, function(responseData, status) {
            axios.get(url)
                .then(responseData => {
                // console.log(responseData)
				object['posts'] = responseData.data.data.user.edge_owner_to_timeline_media.edges
				// console.log(object['posts']); // Here the post list data

				// Save end cursor for the second time | Get from responseData
				object['endCursor'] = responseData.data.data.user.edge_owner_to_timeline_media.page_info.end_cursor; 
				// console.log(object['endCursor']); // cursor to get more posts from instagram API. You need to add it in next call of the same instagramId
				
				// Response
				resolve(object);
				console.log(object)

                })
                .catch(error =>{
                    console.log(error)
                })

		});

	}


}



// TEST
// var obj = new InstagramProfile();
// obj.nickname = 'gramupy1';
// obj.getProfile();
// instagramId = 22686243;
// first = 20;
// endCursor = '';
// obj.getPosts(instagramId,first,endCursor);

export function getProfile(nickname) {
    console.log('profile getprofile'+nickname)
    var obj = new InstagramProfile()
    obj.nickname = nickname
    return new Promise(resolve => {
        obj.getProfile(nickname)
            .then(( data ) => {
            resolve(data);
            })
    })
}

export function getPosts(instagramId, first, endCursor) {
    var obj = new InstagramProfile()
    
	return new Promise(resolve => {
        obj.getPosts(instagramId, first, endCursor)
            .then(data => {
                resolve(data)
            })
        })
}
