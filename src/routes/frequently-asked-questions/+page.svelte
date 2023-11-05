<script>
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
  <title>Frequently Asked Questions - Muhammad Zakir</title>
  <meta name="description" content="Frequently Asked Questions page of Muhammad Zakir's personal website"/>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="space-y-10 text-center flex flex-col items-center">
    <div class="bg-primary-500 card p-4">
    <header class="card-header">Frequently Asked Questions</header>
  	<section class="p-4">
      <Accordion>
        <AccordionItem>
          <svelte:fragment slot="lead">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </svelte:fragment>
          <svelte:fragment slot="summary">What is this website?</svelte:fragment>
          <svelte:fragment slot="content">
            <p>
              This is my personal website, my main reason for building this website is to make it as somekind of portofolio for myself.
              Since I mostly worked on propertiary applications, hence I can't really show them off to the public.
            </p>
            <p>
              That's why instead of doing so, I built this website with tools that I thought would be of use for myself, and others.
              This website also serves as a playground for me to tinker around frontend related tech-stack that piqued my interest.
            </p>
            <p>
              As of now, there's only a single tool that can be used here, which is the
              <a href="/tools/whatsapp-click-to-chat">
                WhatsApp Click to Chat
              </a>.
            </p>
            <p>
              My plan for this website is to add more useful tools for everyone, including myself.
              I might even add an actual portofolio, or even a personal blog too.
            </p>
          </svelte:fragment>
        </AccordionItem>
        <AccordionItem>
          <svelte:fragment slot="lead">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </svelte:fragment>
          <svelte:fragment slot="summary">Most websites usually tracks it's user, is it also the case for this website?</svelte:fragment>
          <svelte:fragment slot="content">
            <p>
              Nope, I'm not really fond of those kind of things, since I'm kind of a privacy freak myself.
              You don't need to take my word for it, you can see
              <a href="https://github.com/muhammad-zakir/muhammad-zakir.github.io">
                this website's source code
              </a>
              for yourself.
            </p>
          </svelte:fragment>
        </AccordionItem>
        <AccordionItem>
          <svelte:fragment slot="lead">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </svelte:fragment>
          <svelte:fragment slot="summary">What is WhatsApp Click to Chat?</svelte:fragment>
          <svelte:fragment slot="content">
            <p>
              <a href="/tools/whatsapp-click-to-chat">
                WhatsApp Click to Chat
              </a>
              is a free tool that I mainly use for initiating a new WhatsApp conversation with a phone number that I haven't added to my contact list and nor will I need nor plan to do so.
            </p>
            <p>
              Usually I'll need to save a phone number first before having the ability to initiate a conversation with that specific phone number.
              I built this simple tool by masking a number input to automatically generate the link format for
              <a href="https://www.whatsapp.com/">
                WhatsApp
              </a>
              's very own
              <a href="https://faq.whatsapp.com/5913398998672934">
                Click to Chat feature
              </a>
              .
            </p>
          </svelte:fragment>
        </AccordionItem>
        <AccordionItem>
          <svelte:fragment slot="lead">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </svelte:fragment>
          <svelte:fragment slot="summary">I've an idea for a new tool, how can I submit it?</svelte:fragment>
          <svelte:fragment slot="content">
            <p>
              If you, or anyone else got any kind of critic or suggestion for this website, I'll be very grateful for it.
              Please do reach out to me, by sending an email to:
              <a href="mailto:someone@example.com">
                hi@zakir.id          
              </a>
            </p>
          </svelte:fragment>
        </AccordionItem>
      </Accordion>
    </section>
    </div>
  </div>
</div>