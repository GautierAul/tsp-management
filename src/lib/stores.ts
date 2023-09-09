import { writable } from 'svelte/store';

export let smallScreen = writable(false);
export let headerHeight = writable(0);
export let footerHeight = writable(0);
export let screenHeight = writable(0);

export let selectedPage = writable('home');
