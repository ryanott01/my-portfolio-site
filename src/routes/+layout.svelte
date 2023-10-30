<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { AppShell, initializeStores, Drawer } from '@skeletonlabs/skeleton';

	// Initilize stores for Drawers, Modals, Toasts
	initializeStores();

	// Components
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';


	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'right'
	};

	// Stylesheets
	import '../app.postcss';

	// Settings
	const stickyHeader = false;

	// (optional) Scroll App Shell to top after route navigation
	afterNavigate((params: any) => {
		const isNewPage: boolean =
			params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) elemPage.scrollTop = 0;
	});
</script>

<!-- Drawer -->
<Drawer position="top" height="w-auto" bgDrawer="bg-transparent">
	<Navigation />
</Drawer>

<!-- App Shell -->
<AppShell slotPageHeader={stickyHeader ? 'sticky top-0 z-10' : ''}>
	<!-- Slot: Page Header -->
	<svelte:fragment slot="pageHeader">
		<Header>
			<Navigation />
		</Header>
	</svelte:fragment>
	<!-- Slot: Page Content -->
	<slot />
	<!-- Slot: Page Footer -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
