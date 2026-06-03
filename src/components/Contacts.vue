<script setup>
	import { ref, onMounted, onBeforeMount } from 'vue';

	import { Notyf } from 'notyf';
	import 'notyf/notyf.min.css';

	const notyf = new Notyf();

	const WEB3FORMS_ACCESS_KEY = "5ad54b28-e4c9-46b1-a648-1028821df605";

	const subject = "New message from Portfolio Contact Form";

	const name = ref("");
	const email = ref("");
	const message = ref("");

	const isLoading = ref(false);


	const submitForm = async() => {

		if(!recaptchaToken.value) {
			notyf.error('Please verify that you are not a robot.');
			return;
		}

		isLoading.value = true;

		try {

			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					subject: subject,
					name: name.value,
					email: email.value,
					message: message.value
				})
			});

			const result = await response.json();

			if(result.success) {
				console.log(result)

				isLoading.value = false;
				notyf.success("Message sent!");
			}

		} catch(error) {
			console.log(error);

			isLoading.value = false;
			notyf.error("Failed to send message");

		} finally {

			resetRecaptcha();
		}
	}

	/*recaptcha integration*/

	const SITE_KEY = '6LcFkvUsAAAAAGQ43qL6stLCaX23PCyQR7McMZjr';

	const recaptchaContainer = ref(null);
	const recaptchaWidgetId = ref(null);
	const recaptchaToken = ref('');


	function onRecaptchaSuccess(token) {
		recaptchaToken.value = token;
	}

	function onRecaptchaExpired() {
		recaptchaToken.value = '';
	}

	function renderRecaptcha() {
		if(!window.grecaptcha) {
			console.error('reCAPTCHA not loaded');
			return;
		}

		recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, {
			sitekey: SITE_KEY,
			size: 'normal',
			callback: onRecaptchaSuccess,
			'expired-callback': onRecaptchaExpired
		});
	}

	function resetRecaptcha() {
		if(recaptchaWidgetId.value !== null) {
			window.grecaptcha.reset(recaptchaWidgetId.value);
			recaptchaToken.value = '';
		}
	}

	onMounted(() => {
		const interval = setInterval(() => {
			if(window.grecaptcha && window.grecaptcha.render) {
				renderRecaptcha();
				clearInterval(interval)
			}
		}, 100);

		onBeforeMount(() => {
			clearInterval(interval);
		});
	})

</script>

<template>
    <!-- Contact Section Start -->
    <section id="contact">
        <div class="container">
            <div class="row g-4 align-items-center">

                <div class="col-md-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61753.23242953218!2d121.0846582273863!3d14.679929154400105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bbd0422404fb%3A0xf369cca31a8be513!2sSan%20Mateo%2C%20Rizal!5e0!3m2!1sen!2sph!4v1775636880759!5m2!1sen!2sph" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class="col-md-6">
                    <h1 class="text-black">Let's Connect</h1>

                    <form class="form-text text-white" @submit.prevent="submitForm">
                        
                        <div class="mb-3">
                            <input type="text" v-model="name" class="form-control bg-black text-white border-0 py-3" placeholder="Name">
                        </div>

                        <div class="mb-3">
                            <input type="email" v-model="email" class="form-control bg-black text-white border-0 py-3" placeholder="Email Address">
                        </div>

                        <div class="mb-3">
                            <textarea v-model="message" class="form-control bg-black border-0 text-white py-3" rows="4" placeholder="Message"></textarea>
                        </div>

                        <div class="mt-4">
                            <div class="d-flex justify-content-between align-items-center">
                                
                                <div class="icons d-flex gap-3">
                                    <a href="https://github.com/SebbySol" target="_blank">
                                        <img src="https://www.svgrepo.com/show/330512/github.svg" alt="Github" width="30">
                                    </a>

                                    <a href="https://linkedin.com" target="_blank">
                                        <img src="https://www.svgrepo.com/show/494312/linkedin-rounded.svg" alt="LinkedIn" width="30">
                                    </a>
                                </div>
                                <button type="submit" class="btn btn-black bg-black px-5 py-2 fw-medium" :disabled="isLoading">{{isLoading ? "Sending..." : "Submit"}}</button>                               
                            </div>    

                            <div class="d-flex justify-content-end mt-2">
                                <div class="recaptcha-wrapper" ref="recaptchaContainer" style="width: fit-content; max-width: 80%; overflow: hidden;"></div>
                            </div>
                            
                        </div>
                        

                    </form>
                </div>

            </div>
        </div>
    </section>
    <!-- Contact Section Start -->
</template>

<style scoped>

:deep(.recaptcha-wrapper iframe) {
    border-radius: 0 !important;
}

:deep(input:-webkit-autofill), :deep(input:-webkit-autofill:hover), :deep(input:-webkit-autofill:focus) {
    -webkit-box-shadow: 0 0 0px 1000px black inset !important;
    -webkit-text-fill-color: white !important;
    caret-color: white;
}

</style>