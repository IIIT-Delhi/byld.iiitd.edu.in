<script>
  import { Icon, Code } from "svelte-hero-icons";
  import Container from "./Container.svelte";
  import Logo from "./Logo.svelte";
</script>

<section class="border-t bg-sec-900 border-sec-400">
  <Container className="py-7">
    <div class="flex flex-col text-sm space-y-3">
      <a href="/"> <Logo size="sm" backgroundColor="black" /></a>
      <p class="text-gray-500">Bylt by Mihir Chaturvedi and Ananya Lohani</p>
      <a
        class="flex items-center text-gray-500 space-x-2"
        href="https://github.com/IIIT-Delhi/byld.iiitd.edu.in"
      >
        <Icon src="{Code}" size="17" solid />
        <span> Source on GitHub</span>
      </a>
    </div>
  </Container>
</section>
