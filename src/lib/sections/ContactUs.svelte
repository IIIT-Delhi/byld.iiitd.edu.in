<script>
  import Container from "$lib/components/Container.svelte";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import EmailIcon from "svelte-icons-pack/fa/FaEnvelope";
  import TelegramIcon from "svelte-icons-pack/fa/FaBrandsTelegramPlane";
  import GithubIcon from "svelte-icons-pack/fa/FaBrandsGithub";
  import FacebookIcon from "svelte-icons-pack/fa/FaBrandsFacebookF";
  import LinkedinIcon from "svelte-icons-pack/fa/FaBrandsLinkedinIn";
  import Button from "$lib/components/Button.svelte";

  const networks = [
    {
      name: "Email",
      link: "mailto:byld@iiitd.ac.in",
      icon: EmailIcon,
    },
    {
      name: "Telegram",
      link: "https://t.me/byld",
      icon: TelegramIcon,
    },
    {
      name: "GitHub",
      link: "https://github.com/IIIT-Delhi",
      icon: GithubIcon,
    },
    {
      name: "Facebook",
      link: "https://facebook.com",
      icon: FacebookIcon,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com",
      icon: LinkedinIcon,
    },
  ];
</script>

<section class="py-14 bg-sec-800 border-t border-sec-600">
  <Container className="space-y-5" heading="Contact us">
    <p class="text-lg leading-normal text-gray-400">
      For the quickest replies, consider email us or sending a message on Byld's
      public Telegram group.
    </p>
    <div
      class="
        grid gap-5
        grid-row-3 sm:grid-rows-2 lg:grid-rows-1
        grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
      "
    >
      {#each networks as network}
        <Button type="outline">
          <div class="flex items-center justify-center space-x-2">
            <Icon src="{network.icon}" color="rgb(203, 213, 225)" />
            <span class="text-base font-bold text-blueGray-300">
              {network.name}
            </span>
          </div>
        </Button>
      {/each}
    </div>
  </Container>
</section>
