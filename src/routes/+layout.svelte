<script>
	import '../app.postcss';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppBar, AppRail, AppRailAnchor, AppShell, Drawer } from '@skeletonlabs/skeleton';
	import { getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores'

	initializeStores();
	const drawerStore = getDrawerStore();

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Drawer width="w-fit">
	<AppRail>
		<svelte:fragment slot="lead">
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'} on:click={() => (drawerStore.close())}>
				<svelte:fragment slot="lead">
					<span class="badge">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
	  					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
						</svg>
					</span>
				</svelte:fragment>
				<span>Home</span>
			</AppRailAnchor>
		</svelte:fragment>
		<svelte:fragment slot="default">
			<AppRailAnchor href="/tools/whatsapp-click-to-chat" selected={$page.url.pathname === '/tools/whatsapp-click-to-chat'} on:click={() => (drawerStore.close())}>
				<svelte:fragment slot="lead">
					<span class="badge">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
						</svg>
					</span>
				</svelte:fragment>
				<span>WhatsApp Click to Chat</span>
			</AppRailAnchor>
			<AppRailAnchor href="/frequently-asked-questions" selected={$page.url.pathname === '/frequently-asked-questions'} on:click={() => (drawerStore.close())}>
				<svelte:fragment slot="lead">
					<span class="badge">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
						</svg>
					</span>
				</svelte:fragment>
				<span>Frequently Asked Questions</span>
			</AppRailAnchor>
		</svelte:fragment>
	</AppRail>
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<button type="button" class="btn bg-initial" on:click|preventDefault={() => (drawerStore.open())}>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</span>
				</button>
			</svelte:fragment>
			<strong class="text-xl uppercase">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
				</svg>
			</strong>
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
