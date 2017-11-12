var user = [];
var url = "http://institute.dev/";

export default {
	/**
	 * The logged in user information is stored here
	 * @return {object} user details
	 */
	user : ()=>{
		return user;
	},
	/**
	 * base url of application for ajax request
	 * @return {string} url
	 */
	url : url,
	/**
	 * Check whether logged in user has a particular status
	 * @param  {string} type required status of user
	 * @return {boolean}      whether user have particular status
	 */
	checkStatus: function(type){
		console.log(this.user.status);
		return (this.user.status===type)?true:false;
	},
	/**
	 * To retrive saved access token from localStorage
	 * @return {string} Token string
	 */
	getToken: function(){
        let token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        return token;
    },
    /**
     * Get information of current logged in user
     * @return {Promise} user data is returned through promise
     */
    getUser: function(){
        let token = this.getToken();

        return new Promise(function(resolve, reject){
        	if(token){
	            axios.get(config.url+'api/user')
	            .then((response)=>{resolve(response.data); })
	            .catch((error)=>{ reject(error); });
	        }
	        else{
	        	reject("No token");
	        }
        });
    },
    /**
     * Check whether user has access to route
     * @param  {route object}   to  the target Route Object being navigated to
     * @param  {router object} next this function must be called to resolve the hook.
     * @return {null}        nothing is returned the next path is followed
     */
	routeAccess: function(to, next){
		if(to.meta.access){
			if(!this.user.status){
				this.getUser().then(data=>{
					console.log(data);
					this.user = data;
					if(this.checkStatus(to.meta.access)){
						next();
					}
					else{
						alert("You donot have access to this route");
					}
				})
				.catch((error)=>{
					console.log(error);
					next('/');
				});
			}
			else{
				if(this.checkStatus(to.meta.access)){
					next();
				}
				else{
					alert("You donot have access to this route");
				}
			}
		}
		else{
			next();
		}
	}
}
