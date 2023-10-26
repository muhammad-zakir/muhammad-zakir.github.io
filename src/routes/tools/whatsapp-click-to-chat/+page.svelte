<script>
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

  let whatsAppNumber = '';

  function parseWhatsAppNumber() {
    whatsAppNumber = whatsAppNumber.replaceAll(/[^0-9.]/g, '')

    if (whatsAppNumber.length >= 15) {
      whatsAppNumber = whatsAppNumber.substring(0,15);
    }
  }
</script>

<svelte:head>
  <title>WhatsApp Click to Chat - Muhammad Zakir</title>
  <meta name="description" content="A free tool to initiate a WhatsApp chat to a certain number without having to add it to the contacts first"/>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="space-y-10 text-center flex flex-col items-center">
    <input class="input" title="Input WhatsApp number" type="tel" placeholder="628123456789" bind:value={whatsAppNumber} on:input={parseWhatsAppNumber}/>

    {#if whatsAppNumber.length >= 10}
      <a href="https://wa.me/{whatsAppNumber}" class="bg-primary-500 btn btn-lg">
        <span class="flex-auto">Start chat</span>
      </a>
    {/if}

    <h4 class="h4">Frequently Asked Questions</h4>

    <Accordion class="bg-primary-500">
      <AccordionItem>
        <svelte:fragment slot="lead">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        </svelte:fragment>
        <svelte:fragment slot="summary">What?</svelte:fragment>
        <svelte:fragment slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </svelte:fragment>
      </AccordionItem>
      <AccordionItem>
        <svelte:fragment slot="lead">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        </svelte:fragment>
        <svelte:fragment slot="summary">Why?</svelte:fragment>
        <svelte:fragment slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
  </div>
</div>

<style lang="postcss">
    @keyframes glow {
        0% {
            @apply bg-primary-400/50;
        }
        33% {
            @apply bg-secondary-400/50;
        }
        66% {
            @apply bg-tertiary-400/50;
        }
        100% {
            @apply bg-primary-400/50;
        }
    }
    @keyframes pulse {
        50% {
            transform: scale(1.5);
        }
    }
</style>
