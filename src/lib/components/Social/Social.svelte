<script lang="ts">
	import { socialLinks } from '$lib/data/social';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	export let variant = 'variant-soft-primary hover:variant-filled-primary';
	import { clipboard } from '@skeletonlabs/skeleton';


	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';


	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'right'
	};

	function handleCopy(event: MouseEvent) {
		let el = document.createElement('div');
		el.innerHTML = 'Copied';
		el.style.position = 'fixed';
		el.style.left = event.clientX + 'px';
		el.style.top = event.clientY + 'px';
		el.className = 'text-sm rounded py-1 px-2 bg-black text-white';
		document.body.appendChild(el);
		setTimeout(() => document.body.removeChild(el), 600);
	}
</script>

<div class="flex space-x-4">
	{#each socialLinks as link}
		{#if link.title === 'Email'}
			<button class="btn variant-soft-primary hover:variant-filled-primary" use:popup={popupClick}
				><i class="far fa-envelope-open" /> &nbsp;Email</button
			>
			<div class="card p-4 variant-filled-primary" data-popup="popupClick">
				<p>
					<a href="mailto:{link.url}">{link.url}</a>
					<button use:clipboard={link.url} on:click={handleCopy}>&nbsp;&nbsp;
						<i class="far fa-clone" />
					</button>
				</p>
				<div class="arrow variant-filled-primary" />
			</div>
		{:else}
			<a
				class="btn {variant}"
				href={link.url}
				target={link.target}
				rel="noreferrer"
				title={link.title}
			>
				<i class={link.icon} />
				&nbsp;{link.title}
			</a>
		{/if}
	{/each}
</div>
