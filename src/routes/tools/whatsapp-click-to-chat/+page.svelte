<script>
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
    {#if whatsAppNumber.length >= 7}
      <a href="https://wa.me/{whatsAppNumber}" class="btn bg-primary-500">
        <span class="flex-auto">Start chat</span>
      </a>
    {/if}
  </div>
</div>

<style lang="postcss">
    figure {
        @apply flex relative flex-col;
    }
    figure svg,
    .img-bg {
        @apply w-64 h-64 md:w-80 md:h-80;
    }
    .img-bg {
        @apply absolute z-[-1] rounded-full blur-[50px] transition-all;
        animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
        glow 5s linear infinite;
    }
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
