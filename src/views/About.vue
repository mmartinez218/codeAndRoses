<template>
    <div id="home">
    <Navbar/>
    <div id="indProduct">
      <h2> About Us</h2>
        <iframe id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d334148.1101518304!2d-123.09681139405279!3d49.13352071132864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676e1e49ab735%3A0x3acab7711e1f10d!2sBritish+Columbia+Institute+Of+Technology!5e0!3m2!1sen!2sca!4v1549944650748" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        <div id="indDescription">
            <b>At code and roses </b>. We are family owned and operated. We are committed to offering only the finest floral arrangements and gifts. We are one of Surrey's largest Garden Centers which is backed by service that is friendly, knowlegeable and prompt. Because all of our customers are important, our professional staff is dedicated to making your experience a pleasant one. That is why we always go the extra mile to make your floral gift perfect.
        </div><br/>
        
        <div id="indDescription">
            <b>Store Hours:</b> <br/>
            Monday to Friday 9:00 am to 7:00 pm<br/>Saturday 9:00 am to 5:00 pm<br/> Sunday 9:00 am - 5:00 pm.
            <br/>
            <br/>
          
        </div>
        
    </div>
    </div>

</template>


<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
    
</script>