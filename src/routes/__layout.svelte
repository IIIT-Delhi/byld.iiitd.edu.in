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
    description="Byld is the software development club of IIIT Delhi. We are a group of students who love building new stuff. We aim to create and continuously improve the dev culture at IIITD by bringing together passionate individuals who love to collaborate, innovate, create and byld."
    openGraph="{{
      title: `Byld • ${subtitle}`,
      description:
        'Byld is the software development club of IIIT Delhi. We are a group of students who love building new stuff. We aim to create and continuously improve the dev culture at IIITD by bringing together passionate individuals who love to collaborate, innovate, create and byld.',
      url: `https://byld.iiitd.ac.in/${$page.path}`,
      type: 'website',
      images: [
        {
          url: '/images/byld-hero.jpg',
          width: 1280,
          height: 640,
          alt: 'Byld',
        },
      ],
    }}"
    twitter="{{
      title: `Byld • ${subtitle}`,
      description:
        'Byld is the software development club of IIIT Delhi. We are a group of students who love building new stuff. We aim to create and continuously improve the dev culture at IIITD by bringing together passionate individuals who love to collaborate, innovate, create and byld.',
      image: '/images/byld-hero.jpg',
      imageAlt: 'Byld',
    }}"
  />
{/key}

<Nav />

<main>
  <slot />
</main>

<Footer />
