<script>
  import Icon, { ChatAlt2 } from "svelte-hero-icons";
  import Button from "$lib/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
</script>

<section class="border-t py-14 bg-sec-850 border-sec-600">
  <Container className="space-y-5" heading="How to join">
    <p class="text-lg leading-normal text-gray-400">
      Byld organizes a Hackathon once every month of the semester. The members
      of the teams which finish at the top in the Hackathons are recruited into
      the club.
    </p>
    <p class="text-lg leading-normal text-gray-400">
      Byld membership is not permanent and the members of the club need to have
      at least 50% attendance in Byld events to stay a part of the club.
    </p>
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <Button>When's the next hack?</Button>
      <Button
        type="outline"
        as="button-link"
        href="https://t.me/joinchat/Dv6-w41T66YxYWNl"
      >
        <div class="flex items-center justify-center space-x-2">
          <Icon src="{ChatAlt2}" size="20" />
          <span>Telegram Group</span>
        </div>
      </Button>
    </div>
  </Container>
</section>
