/**
 * Created by zhangrxiang on 2016/10/10.
 */
function getAllPost() {
    console.log('getAllPost.....');
    var url = $('.url').val();
    console.log(url);
    console.log(url+"?json=1");
    $.get(
        {
            // url:url+"?json=1",
            url:"http://wp4.6.dev/?json=1",
            // url:"",
            success:function(response){
                console.log( response );
            },
            type:'json'
        }
    );
    // $.ajax( {
    //     // url:"http://wp4.6.dev/wp-json/wp/v2/posts",
    //     url:url+"?json=1",
    //     method: 'GET',
    // } ).done( function ( response ) {
    //     console.log( response );
    // } );
}