$(document).ready(function(){

    //Get page title
    var title = $(document).find('title').text();
    var url = window.location.href; 
    var referrer =  document.referrer;
    var userLang = navigator.language || navigator.userLanguage;
    //On page load
    if( window.location.href.indexOf("/holiday-coaching/") > -1){
            analytics.track('Viewed Landing Page',{
               page_title:  title,
               page_url: url,
               referrer_url: referrer,
               language: userLang
            });
    }
     if( window.location.href.indexOf("/ask-tony/") > -1){
        analytics.track('Viewed Core Concept',{
           core_concept_title:  title,
           core_concept_url: url,
           language: userLang
        });
    }else if($('body').hasClass( "single-stories" )){
        var title = $('h1').text();
        analytics.track('Viewed Story', {
            story_title: title,
            language: userLang
            });
    }else if($('body').hasClass( "category" ) && $('a[rel="category tag"]').first().text() ==  'News'){
        var category = $('h1').text();
        analytics.track('Viewed News Category', {
            news_article_category: category,
            language: userLang
            });
    }else if($('a[rel="category tag"]').first().text() ==  'News'){
        console.log('test');
        var author = $('.article-author').text();
        var category = $('a[rel="category tag"]').first().text();
        analytics.track('Viewed News Article', {
            blog_post_title:  title,
            blog_post_url: url,
            blog_post_author: author,
            blog_post_category: category,
            language: userLang
            });
    }else if($('body').hasClass( "category" )){
        var category = $('h1').text();
        analytics.track('Viewed Blog Category', {
            blog_post_category: category,
            language: userLang
            });
    }else if(window.location.href.indexOf("/events") > -1){
        analytics.track('Viewed Event Page',{
           page_title:  title,
           page_url: url,
           page_referrer: referrer,
            language: userLang
        });
    }else if($('body').hasClass( "single-post" )){
        
        var author = $('.article-author').text();
        var category = $('a[rel="category tag"]').first().text();
        analytics.track('Viewed Blog Post', {
            blog_post_title:  title,
            blog_post_url: url,
            blog_post_author: author,
            blog_post_category: category,
            language: userLang
            });
    }else {
        analytics.track('Viewed Marketing Page',{
           page_title:  title,
           page_url: url,
           page_referrer: referrer,
           language: userLang
        });
    };
    
    //On CTA click
    $('.btn-blue').click(function(){
        var dest = $(this).attr('href');
        var text = $(this).text();
        analytics.track('Clicked Marketing CTA', {
            type: 'button',
            text: text,
            page_url: url,
            destination: dest,
            language: userLang
        });
    });
     $('.shopify-buy__btn').click(function(){
        analytics.track('Clicked Buy Button', {
            page_url: url,
            language: userLang
        });
    });
    //On CTA click
    $('.btn').click(function(){
        var dest = $(this).attr('href');
        var text = $(this).text();
        analytics.track('Clicked Marketing CTA', {
            type: 'button',
            text: text,
            page_url: url,
            destination: dest,
            language: userLang
        });
    });
    //On inline ad click
    $('.shortcode-ad').click(function(){
        var dest = $(this).attr('href');
        var text = $(this).text();
        analytics.track('Clicked Marketing CTA', {
            type: 'Inline Ad',
            text: text,
            page_url: url,
            destination: dest,
            language: userLang
        });
    });
    
    //On sidebar ad click
    $('.tr-sidebar-ad').click(function(){
        var dest = $(this).attr('href');
        var text = $(this).text();
        analytics.track('Clicked Marketing CTA', {
            type: 'Sidebar Ad',
            text: text,
            page_url: url,
            destination: dest,
            language: userLang
        });
    });
    
    
    
    //Request a coaching session
    $('#mktoForm_1373').submit(function(){
        var fname = $('#FirstName').val();
        var lname = $('#LastName').val();
        var email = $('#Email').val();
        var phone = $('#Phone').val();
        var country = $('#Country').val();
        var title = $('#Title').val();
        analytics.track('Requested a Coaching Session', {
            first_name: fname,
            last_name: lname,
            email: email,
            phone: phone,
            country: country,
            title: title,
            language: userLang
        });
        analytics.identify(email, {
            first_name: fname,
            last_name: lname,
            email: email,
            phone: phone,
            country: country,
            title: title,
            language: userLang
        });
    });
    //Free Trial
    $('#orderForm').submit(function(){
        var fname = $('#Contact0FirstName').val();
        var lname = $('#Contact0LastName').val();
        var email = $('#Contact0Email').val();
        var billingaddress1 = $('#Contact0StreetAddress1').val();
        var billingaddress2 = $('#Contact0StreetAddress2').val();
        var billingcity = $('#Contact0City').val();
        var billingstate = $('#Contact0State').val();
        var billingzip = $('#Contact0PostalCode').val();
        var billingcountry = $('#Contact0Country').val();
        var shippingaddress1 = $('Contact0Address2Street1').val();
        var shippingaddress2 = $('Contact0Address2Street2').val();
        var shippingcity = $('Contact0City2').val();
        var shippingstate = $('Contact0State2').val();
        var shippingzip = $('Contact0PostalCode2').val();
        var shippingcountry = $('#Contact0Country2').val();
        analytics.track('Free Trial', {
            first_name: fname,
            last_name: lname,
            email: email,
            billingaddress1: billingaddress1,
            billingaddress2: billingaddress2,
            billingcity: billingcity,
            billingstate: billingstate,
            billingzip: billingzip,
            billingcountry: billingcountry,
            shippingaddress1: shippingaddress1,
            shippingaddress2: shippingaddress2,
            shippingcity: shippingcity,
            shippingstate: shippingstate,
            shippingzip: shippingzip,
            shippingcountry: shippingcountry,
            product: title,
            language: userLang
        });
        analytics.identify(email, {
            first_name: fname,
            last_name: lname,
            email: email,
            billingaddress1: billingaddress1,
            billingaddress2: billingaddress2,
            billingcity: billingcity,
            billingstate: billingstate,
            billingzip: billingzip,
            billingcountry: billingcountry,
            shippingaddress1: shippingaddress1,
            shippingaddress2: shippingaddress2,
            shippingcity: shippingcity,
            shippingstate: shippingstate,
            shippingzip: shippingzip,
            shippingcountry: shippingcountry,
            product: title,
            language: userLang
        });
    });
    //Subscribe to blog newsletter 
    $('#mktoForm_1397').submit(function(){
        var fname = $('#FirstName').val();
        var lname = $('#LastName').val();
        var email = $('#Email').val();
        analytics.track('Subscribed to Blog', {
            first_name: fname,
            last_name: lname,
            email: email,
            language: userLang
        });
        analytics.identify(email, {
            first_name: fname,
            last_name: lname,
            email: email,
            language: userLang
        });
    });
    //Referred a Colleague
    $('#mktoForm_2008').submit(function(){
        var fname = $('#FirstName').val();
        var lname = $('#LastName').val();
        var email = $('#Email').val();
        var rfname = $('#Referral1FirstName').val();
        var rlname = $('#ReferralLastName').val();
        var remail = $('#Referral1EmailAddress').val();
        var rphone = $('#Referal1PhoneNumber').val();
        analytics.track('Referred a Colleague', {
            referrer_first_name: fname,
            referrer_last_name: lname,
            referrer_email_address: email,
            referred_first_name: rfname,
            referred_last_name: rlname,
            referred_email: remail,
            referred_phone: rphone,
            language: userLang
        });
        analytics.identify(email, {
            referrer_first_name: fname,
            referrer_last_name: lname,
            referrer_email_address: email,
            referred_first_name: rfname,
            referred_last_name: rlname,
            referred_email: remail,
            referred_phone: rphone,
            language: userLang
        });
    });
    $('#mktoForm_1397').submit(function(){
        var fname = $('#FirstName').val();
        var lname = $('#LastName').val();
        var email = $('#Email').val();
        analytics.track('Subscribed to Blog', {
            first_name: fname,
            last_name: lname,
            email: email,
            language: userLang
        });
        analytics.identify(email, {
            first_name: fname,
            last_name: lname,
            email: email,
            language: userLang
        });
    });
    
    //submited search form
    $('.proinput > form').submit(function(){
         var term = $('.proinput > form > input[type="search"]').val();
        analytics.track('Searched', {
            search_term: term
        });
        
    })
    //Selected search result
    $('.search-result > .col-md-9 > a').click(function(){
        var result = $(this).attr('href');;
        analytics.track('Selected Search Result', {
            selected_result: result,
            language: userLang
        });
    })
    //Submitted events specialists form
    $('#mktoForm_1549').submit(function(){
        var fname = $('#FirstName').val();
        var lname = $('#LastName').val();
        var email = $('#Email').val();
        var phone = $('#Phone').val();
        analytics.track('Submitted Event Specialist Inquiry', {
            first_name: fname,
            last_name: lname,
            email: email,
            phone: phone,
            language: userLang
        });
        analytics.identify(email, {
            first_name: fname,
            last_name: lname,
            email: email,
            phone: phone,
            language: userLang
        });
    });
    //Submited coaching workshop form
    $('#mktoForm_1389').submit(function(){
        var fname = $('#FirstName').val();
        var lname = $('#LastName').val();
        var email = $('#Email').val();
        var phone = $('#Phone').val();
        var country = $('#Country').val();
        if($('#State').length){
            var state = $('#State').val();
        };
        var jobtitle = $('#Title').val();
        if($('#State').length){
            analytics.track('Submitted Coaching Results Workshop Inquiry', {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone,
                country: country,
                state: state,
                jobtitle: jobtitle,
                language: userLang
            });
            analytics.identify(email, {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone,
                country: country,
                state: state,
                jobtitle: jobtitle,
                language: userLang
            });
        }else{
           analytics.track('Submitted Coaching Results Workshop Inquiry', {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone,
                country: country,
                jobtitle: jobtitle,
               language: userLang
            }); 
            analytics.identify(email, {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone,
                country: country,
                jobtitle: jobtitle,
                language: userLang
            });
        }; //end state if 
    });
    //submitted disc assessment
    $('#mktoForm_1740').submit(function(){
            var fname = $('#FirstName').val();
            var lname = $('#LastName').val();
            var email = $('#Email').val();
            var phone = $('#Phone').val();
            var country = $('#Country').val();
            var gender = $('#Gender__c_account').val();
            analytics.track('Submitted disc Personality Assessment Inquiry', {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone, 
                country: country,
                gender: gender,
                language: userLang
            });
            analytics.identify(email, {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone, 
                country: country,
                gender: gender,
                language: userLang
            });
        });

    //submited BM application form
    $('#mktoForm_1407').submit(function(){
        var fname = $('#FirstName').val();
        var lname = $('#LastName').val();
        var email = $('#Email').val();
        var phone = $('#Phone').val();
        var country = $('#Country').val();
        var company = $('#Company_Name__c').val();
        if($('#State').length){
            var state = $('#State').val();
        };
        var industry = $('#Industry').val();
        var business = $('#Business_Owner__c_account').val();
        var rev = $('#Revenue__c_account').val();
        if($('#State').length){
            analytics.track('Applied for Business Mastery', {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone,
                country: country,
                state: state,
                company: company,
                industry: industry,
                business_owner: business,
                annual_revenue: rev,
                language: userLang
            });
            analytics.identify(email, {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone, 
                country: country,
                state: state,
                company: company,
                industry: industry,
                business_owner: business,
                annual_revenue: rev,
                language: userLang
            });
        }else{
           analytics.track('Applied for Business Mastery', {
            first_name: fname,
            last_name: lname,
            email: email,
            phone: phone,
            country: country,
            company: company,
            industry: industry,
            business_owner: business,
            annual_revenue: rev,
               language: userLang
            }); 
            analytics.identify(email, {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone, 
                country: country,
                company: company,
                industry: industry,
                business_owner: business,
                annual_revenue: rev,
                language: userLang
            });
        }; //end state if 
        
    });
    //Podcast opened in itunes
    if($('body').hasClass( "single-podcasts" )){
    $('a[href*="https://itunes.apple.com/us/podcast/"]').click(function(){
        var dest = $(this).attr('href');
        var title = $('h1.post-title').text();
        analytics.track('Opened Podcast in iTunes', {
            title: title,
            podcast_link: dest
        });
    });
    }; //end if
    
    //submited plat partnership form
    $('#mktoForm_1466').submit(function(){
        var fname = $('#FirstName').val();
        var lname = $('#LastName').val();
        var email = $('#Email').val();
        var phone = $('#Phone').val();
        var country = $('#Country').val();
        var business = $('#Business_Owner__c_account').val();
        analytics.track('Applied for Platinum Partnership', {
            first_name: fname,
            last_name: lname,
            email: email,
            phone: phone,
            country: country,
            business_owner: business,
            language: userLang
        });
         analytics.identify(email, {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone, 
                country: country,
                business_owner: business,
                language: userLang
            });
    });
    
    //Completed Trial billing info
    $('#orderForm').submit(function(){
        var bAddress = $('#Contact0AddressStreet1').val();
        var bCity = $('#Contact0City').val();
        var bState = $('#Contact0State').val();
        var bZip = $('#Contact0PostalCode').val();
        var bCountry = $('#Contact0Country').val();
        var sAddress = $('#Contact0Street2Address1').val();
        var sCity = $('#Contact0City2').val();
        var sState = $('#Contact0State2').val();
        var sZip = $('#Contact0PostalCode2').val();
        var sCountry = $('#Contact0Country2').val();
        analytics.track('Completed Trial billing Info', {
            billing_street_address: bAddress,
            billing_city: bCity,
            billing_state: bState,
            billing_postal_code: bZip,
            billing_country: bCountry,
            shipping_street_address: sAddress,
            shipping_city: sCity,
            shpping_state: sState,
            shipping_postal_code: sZip,
            shipping_country: sCountry,
            language: userLang
        });
    });
    //Friend referered
    $('#mktoForm_1416').submit(function(){
        var fname = $('#FirstName').val();
        var lname = $('#LastName').val();
        var email = $('#Email').val();
        var phone = $('#Phone').val();
        var rFname = $('#Referral1FirstName').val();
        var rLName = $('#ReferralLastName').val();
        var rEmail = $('#Referral1EmailAddress').val();
        var rPhone = $('#Referal1PhoneNumber').val();
        analytics.track('Referred a friend', {
            referrer_first_name: fname,
            referrer_last_name: lname,
            referrer_email_address: email,
            referred_first_name: rFname,
            referred_last_name: rLname,
            referred_email: rEmail,
            referred_phone: rPhone,
            language: userLang
        });
         analytics.identify(email, {
                first_name: fname,
                last_name: lname,
                email: email,
                referrer_email_address: email,
                referred_first_name: rFname,
                referred_last_name: rLname,
                referred_email: rEmail,
                referred_phone: rPhone,
                language: userLang
            });
    });
    //Friend referered
    $('#mktoForm_2249').submit(function(){
        var fname = $('#FirstName').val();
        var lname = $('#LastName').val();
        var email = $('#Email').val();
        var phone = $('#Phone').val();
        var rFname = $('#Referral1FirstName').val();
        var rLName = $('#ReferralLastName').val();
        var rEmail = $('#Referral1EmailAddress').val();
        var rPhone = $('#Referal1PhoneNumber').val();
        analytics.track('Referred a friend', {
            referrer_first_name: fname,
            referrer_last_name: lname,
            referrer_email_address: email,
            referred_first_name: rFname,
            referred_last_name: rLname,
            referred_email: rEmail,
            referred_phone: rPhone,
            language: userLang
        });
         analytics.identify(email, {
                first_name: fname,
                last_name: lname,
                email: email,
                referrer_email_address: email,
                referred_first_name: rFname,
                referred_last_name: rLname,
                referred_email: rEmail,
                referred_phone: rPhone,
                language: userLang
            });
    });
    //submited free coaching session
    $('#mktoForm_1964').submit(function(){
        var fname = $('#FirstName').val();
        var lname = $('#LastName').val();
        var email = $('#Email').val();
        var phone = $('#Phone').val();
        var country = $('#Country').val();
        var job_title = $('#Title').val();
        analytics.track('Completed Free Coaching Session Form', {
            first_name: fname,
            last_name: lname,
            email: email,
            phone: phone,
            country: country,
            job_title: job_title,
            language: userLang
        });
         analytics.identify(email, {
                first_name: fname,
                last_name: lname,
                email: email,
                phone: phone, 
                country: country,
                job_title: job_title,
                language: userLang
            });
    });
 
});