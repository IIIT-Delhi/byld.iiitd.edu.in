<script>
  import Icon, { Code } from "svelte-hero-icons";
  import Container from "./Container.svelte";
  import Logo from "./Logo.svelte";
</script>

<section class="border-t bg-sec-900 border-sec-400">
  <Container className="py-7">
    <div class="flex flex-col space-y-3 text-sm">
      <Logo size="sm" backgroundColor="black" />
      <p class="text-gray-500">Bylt by Mihir Chaturvedi and Ananya Lohani</p>
      <a
        class="flex items-center space-x-2 text-gray-500"
        href="https://github.com/IIIT-Delhi/byld.iiitd.edu.in"
      >
        <Icon src="{Code}" size="17" solid />
        <span> Source on GitHub</span>
      </a>
    </div>
  </Container>
</section>
