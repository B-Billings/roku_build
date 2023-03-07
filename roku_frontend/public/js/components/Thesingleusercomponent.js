export default{
    name: 'TheUserComponent',
    props: ['user'],

    template: `
    <section>
    <h1> {{ user.username }}</h1>
    <p>and maybe an avatar or someting</p>
    <button @click="navtohomepage">Home</button>
    </section>
    `,

    methods:{
        navtohomepage(){
            console.log('this user has this level:', this.user.permissions);
            // let targethome = 'home';
//everyuser has permission as part of their data (this is coming from the database)
//it is set in the permissions column
//we can use the data to figure out what home page they should have access to
//if less than 3 they dont get the adult content
//if greater than 3 they are full access and get reg home page
            // if (this.user.permissions < 4){
            //     targethome = 'kidshome';
            // } else {
            //     targethome = 'home'
            // }
        let targethome =(this.user.permissions < 4) ? "kidshome" : "home";

            this.$router.push ({ name: targethome});
        }
    }
}