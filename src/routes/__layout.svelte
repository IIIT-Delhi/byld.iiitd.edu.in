<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import SvelteSeo from "svelte-seo";
  import navigation_ from "$lib/data/navigation.yml";
  import type { NavLink } from "$lib/types";
  import { page } from "$app/stores";
  import "../app.postcss";

  const navigation = navigation_ as NavLink[];
  let subtitle: String = "";

  $: subtitle =
    $page.path === "/"
      ? "IIIT Delhi"
      : navigation.find((link) => link.href === $page.path)?.name ||
        "IIIT Delhi";
</script>

{#key subtitle}
  <SvelteSeo
    title="Byld • {subtitle}"
    description="The official website of Byld, the Software Development Club of IIIT Delhi."
    openGraph="{{
      title: `Byld • ${subtitle}`,
      description:
        'The official website of Byld, the Software Development Club of IIIT Delhi.',
      url: `https://byld.iiitd.ac.in/${$page.path}`,
      type: 'website',
      images: [
        {
          url: '/images/byld-hero.jpg',
          width: 850,
          height: 480,
          alt: 'Byld • IIIT Delhi',
        },
      ],
    }}"
    twitter="{{
      site: '@username',
      title: 'Twitter Card Title',
      description: 'Description of Twitter Card',
      image: 'https://www.example.com/images/cover.jpg',
      imageAlt: 'Alt text for the card!',
    }}"
  />
{/key}

<Nav />

<main>
  <slot />
</main>

<Footer />
