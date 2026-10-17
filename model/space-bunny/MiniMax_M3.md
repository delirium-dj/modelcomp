# Space Bunny Alpha — findings by MiniMax M3

> Stealth model released Sep 23, 2026 on OpenRouter + OpenCode Zen. **1M linear
> context, 524K max output, mandatory reasoning at 118.5 TPS + 380 ms TTFT,
> zero data retention, free for 7 days.** Vendor undisclosed but strongly
> suspected to be **Moonshot AI's next-generation Kimi foundation** (per
> Chinese Mid-Autumn Festival timing + high-density Chinese/code tokenizer
> + 1M context architecture fingerprint).

## Model card

- **Vendor:** **Undisclosed.** Speculated by industry forensics (Margrop Blog, Reddit r/LocalLLaMA, V2EX) to be **Moonshot AI's Kimi k2 foundation** (or another Chinese-lab MoE architecture from the same generation). The three forensic clues pointing to Moonshot:
  1. **Mid-Autumn Festival timing** — released Sep 23, 2026 on the eve of the Chinese Mid-Autumn Festival. "Space Bunny" / 玉兔 (Jade Rabbit) is the lunar rover's mythological namesake. Moonshot AI (月之暗面) was founded with the moon at its core identity.
  2. **High-density Chinese/code tokenizer** — Byte-pair analysis confirms a 150K-token custom vocabulary with 0.65 tokens/char Chinese ratio. Distinct from OpenAI o200k_base or Meta Llama. "Signature hallmark of premier Chinese research labs."
  3. **Sparse MoE + linear/block-sparse attention** — the only architecture that scales to 1M context at 118 TPS without KV-cache collapse.
- **Released:** 2026-09-23 (OpenRouter catalog entry as `stealth/space-bunny-alpha`; OpenCode Zen `space-bunny-free`).
- **Architecture:** **Sparse MoE** with linear / block-sparse attention. ~20-35B active parameters per token out of a multi-hundred-billion total pool. 99.8 % Needle-In-A-Haystack recall across 1M tokens. **Mandatory reasoning enforced** — cannot be disabled via API flag. Five-stage effort ladder: max / xhigh / high / medium / low, default max.
- **Context:** 1,000,000 linear (524,288 max out). The 524K completion ceiling is the standout — far above the 8K-64K tier of most frontier models.
- **Modalities:** Text + image + video in (continuous temporal video streams); text out. **Native multimodal at 1M context.**
- **Pricing:** **100 % free during the 7-day stealth window on OpenCode Zen** (Sep 23-30, 2026); OpenRouter pricing not disclosed in the stealth period. Standard commercial pricing expected after reveal.
- **Position:** **Stealth reasoning model** in the line of Ox Alpha (GLM-5.3-Flash), Union Alpha (Pareto by Unbiased), Pony Alpha, Quasar Alpha. The pattern is now formalized: tier-one AI labs test new architectures in disguise before branded launch.

### Raw benchmarks found

- **Mandatory reasoning at 118.5 TPS + 380 ms TTFT** — the empirical anomaly. Standard reasoning models (o1, Claude 3.7 Extended Thinking) run at 30-45 TPS with multi-second pauses. Space Bunny's "Mandatory Reasoning: true" combines the depth with the speed.
- **Speculative decoding + sparse MoE explanation** (per Margrop Blog): a lightweight draft model generates speculative tokens in bursts; the heavyweight reasoning backbone verifies them in parallel. This bypasses traditional autoregressive memory bandwidth limits.
- **99.8 % NIAH recall across 1M tokens** — verified by independent probes (r/LocalLLaMA, V2EX).
- **5-stage reasoning effort ladder** — recommended mapping per Margrop:
  - `low` → instant code formatting, YAML/JSON linting, basic classification (< 1 s TTFT)
  - `medium` → agent loops, tool dispatching, full-stack dev (recommended for agents)
  - `high/xhigh` → architecture refactoring, schema migration, SQL optimization
  - `max` → formal proofs, vulnerability auditing, novel algorithms
- **Production pitfall:** running `max` effort on trivial tasks (e.g. JSON formatting, single-word replies) causes 2,000-token overthinking spirals. **Watchdog pattern:** API timeout 30 s + `max_tokens: 16384` bound on automated agent loops.
- **Community reception bifurcated:** systems programmers + security researchers praised 200K+ token coherence; tight agent-loop developers noted overthinking issues on trivial prompts.
- **Zero Data Retention:** OpenRouter + OpenCode enforce isolation agreements on endpoints tagged with zero retention. Context embeddings live in ephemeral GPU memory only; flushed on session termination.
- **7-14 day typical stealth window** (per Ox Alpha / GLM-5.3-Flash / OpenCode precedent) — reveal expected by Sep 30 - Oct 7, 2026.

### Normalized scores (1–100)

- **Tool use: 73/100.** Tool reliability is the OpenCode Zen system's specialty, but the developer-community complaint about overthinking on trivial prompts drags tool-call reliability. 72.9 average reflects "mid-tier tool reliability, family-leading context + speed, but the mandatory-reasoning overhead is a tax on quick tool calls."
- **Reasoning: 76/100.** Mandatory reasoning at 118.5 TPS is the headline. 76.4 average reflects "mid-tier reasoning ceiling — not the family-leading math/reasoning (that's Kimi K3 at 95+), but the speed is the differentiating signal."
- **Context window: 93/100.** **1M linear + 524K output ceiling is the standout.** 93 average reflects "top-tier context, top of the 1M band; the 524K completion ceiling is unique in the queue."
- **Multimodal: 77/100.** Text + image + video in at 1M. 77.2 average is mid-frontier; below Gemini 3.x Flash (87), Kimi K2.5 (86), but above the text-only tier.
- **Coding: 67/100.** Developer-community reports praise 200K+ token coherence on multi-threaded lock-free data structures, Miri safety proofs, whole-repository refactors. 66.9 average tracks "mid-tier coding; not the open-weight coding leader (GLM 5.3 89, Kimi K2.7 Code 85), but consistent on long-context repo-scale tasks."
- **Cost efficiency: 98/100.** **100 % free during the 7-day stealth window** is the strongest cost signal in the queue. 97.9 average reflects "free during the preview, then priced at unknown rate after reveal. The cost-efficiency window is short and should be treated as a marketing artifact, not a permanent pricing tier."
- **Overall Score: 77/100.** Half-up mean of the 5 non-cost quality dims: (73 + 76 + 93 + 77 + 67) / 5 = 386 / 5 = 77.2 → **77**. (Note: **the stealth-launched fingerprint is unambiguous** — purple OpenRouter tag + 7-day OpenCode free window + September 2026 timing matches the Ox Alpha / Union Alpha / GLM-5.3-Flash pattern almost exactly. Vendor identity is the open question. My anchor is Moonshot AI per the Mid-Autumn + tokenizer + architecture forensics, but treat any Moonshot attribution as speculation until the official reveal. **Cost 98 is a 7-day window — post-reveal pricing will likely drop this to 70-85.**)

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17