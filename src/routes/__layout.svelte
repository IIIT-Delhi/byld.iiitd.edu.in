<script context="module">
  export async function load({ page }) {
    return {
      props: {
        path: page.path,
      },
    };
  }
</script>

<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import SvelteSeo from "svelte-seo";
  import navigation_ from "$lib/data/navigation.yml";
  import type { NavLink } from "$lib/types";

  const navigation = navigation_ as NavLink[];
  export let path: String = "";
  let subtitle: String = "";

  $: updateSubtitle(path);
  $: console.log(subtitle);

  function updateSubtitle(path: String) {
    if (path === "/") {
      subtitle = "IIIT Delhi";
    } else {
      navigation.forEach((link) => {
        if (link.href === path) {
          subtitle = link.name;
        }
      });
    }
  }
</script>

<SvelteSeo
  title="Byld · {subtitle}"
  description="The official website of Byld, the Software Development Club of IIIT Delhi."
  openGraph="{{
    title: 'Byld · IIIT Delhi',
    description:
      'The official website of Byld, the Software Development Club of IIIT Delhi.',
    url: 'https://byld.iiitd.ac.in/',
    type: 'website',
    images: [
      {
        url: '/images/byld-hero.jpg',
        width: 850,
        height: 480,
        alt: 'Byld · IIIT Delhi',
      },
    ],
  }}"
/>

<Nav />

<main>
  <slot />
</main>

<Footer />
