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

    {#if whatsAppNumber.length >= 10}
      <a href="https://wa.me/{whatsAppNumber}" class="bg-primary-500 btn btn-lg">
        <span class="flex-auto">Start chat</span>
      </a>
    {/if}
  </div>
</div>
