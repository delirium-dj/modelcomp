# Claude Sonnet 5 — findings by Space Bunny

- Source: Anthropic (`claude-sonnet-5`; adaptive reasoning, effort defaults to `high`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (adaptive thinking, max effort)
- **Short description:** Anthropic's most agentic Sonnet model — released 2026-06-30 as an upgrade to Sonnet 4.6, aimed at browser/terminal tool use, autonomous coding, and multi-step knowledge work at Sonnet pricing. Anthropic's own summary: "in almost all cases it trails our Opus and Mythos-class models."
- **Provider / access:** Claude API (`claude-sonnet-5`), Claude Platform on AWS, Amazon Bedrock (`anthropic.claude-sonnet-5`), Google Cloud (`claude-sonnet-5`), Microsoft Foundry. Default model for Free and Pro plans in Claude; available on Max, Team, and Enterprise; shipped in Chat, Cowork, and Claude Code.
- **Lifecycle:** **Active.** Not deprecated. Anthropic's model-deprecations table lists `claude-sonnet-5` as Active with tentative retirement **not sooner than 2027-06-30** (Anthropic-operated platforms). Partner-operated Bedrock and Google Cloud set their own schedules. **Superseded within the family by Claude Sonnet 5.5** (2026-09-28) at identical $2/$10 pricing but half the prompt-cache read rate ($0.10 vs $0.20 per MTok).
- **Release / knowledge:** Announced 2026-06-30. Knowledge cutoff **January 2026** (reliable), training-data cutoff June 2026 — four months behind Opus 5's May 2026 cutoff.
- **IDs:** `claude-sonnet-5`; Bedrock `anthropic.claude-sonnet-5`; Google Cloud `claude-sonnet-5`; Foundry `claude-sonnet-5`.
- **Context window:** **1M tokens** (Anthropic annotates this as ≈ **555,000 words** or ~2.5M Unicode characters); **128K max output** on the synchronous Messages API, and up to **300K output tokens** on the Message Batches API via the `output-300k-2026-03-24` beta header.
- **Tokenizer caveat:** Sonnet 5 uses the Opus 4.7 tokenizer, which produces **~30% more tokens for the same text** than the Sonnet 4.6 tokenizer — the same paragraph, code file, or agent transcript costs more tokens than it did on 4.6. This materially changes cost-per-unit-of-work, not just sticker price.
- **Modalities:** Text and image input; text output; multilingual, vision, and tool use supported. Audio and video are not listed. **Priority Tier is not available** on Sonnet 5 (the one feature it drops relative to Sonnet 4.6).
- **Pricing (as of 2026-08-10, permanent):** **$2 per 1M input / $10 per 1M output**. Anthropic launched at these rates as introductory pricing through 2026-08-31, then made them permanent and **cancelled the scheduled 2026-09-01 step-up to $3/$15**. Prompt caching gives up to 90% savings; batch processing 50%. A 1.1× pricing tier exists for some long-running workloads.
- **API behavior:** Adaptive thinking (`thinking: {type: "adaptive"}`) is **on by default** and replaces extended thinking — manual `thinking: {type: "enabled", budget_tokens: N}` returns a 400 error. `effort` defaults to `high`; non-default `temperature` / `top_p` / `top_k` return 400 errors. Latency rated **Fast** (Opus 5 Moderate, Haiku 4.5 Fastest).
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Vendor-reported (Claude Sonnet 5 System Card, 2026-06-30 — the authoritative source; most launch-post comparisons were published only as chart images):

Coding:

- SWE-bench Pro: **63.2%** — up from Sonnet 4.6's 58.1%; below Opus 4.8 (69.2%) and Fable 5 (80.3%), **above GPT-5.5 (58.6%) and Gemini 3.1 Pro (54.2%)** on the one like-for-like column all three vendors report
- SWE-bench Verified: **85.2%** (system-card body only, not in the launch chart)
- SWE-bench Multilingual (9 languages): **78.3%**
- SWE-bench Multimodal: **28.1%**
- Terminal-Bench 2.1: **80.4%** — a major jump from Sonnet 4.6's 67.0%
- FrontierCode v1 (Cognition, real pull requests): **38.8%** (42.7% on the 1.1 "Main" split) — more than double Sonnet 4.6's 15.1%
- ProgramBench (long-context reconstruction, episodes out to the full 1M window): **76%–86%**
- CursorBench 3.2: **61.5%**; CursorBench 4.0: **34.1%**
- Toolathlon: **54.3%** Pass@1
- **Anti-fabrication note:** Anthropic led with SWE-bench **Pro** (the harder, less contamination-prone variant) while OpenAI and Google led with SWE-bench **Verified** (saturated). Numbers quoted as "82.1%" or "92.4% SWE-bench Verified" for Sonnet 5 in third-party blogs appear nowhere in Anthropic's announcement, pricing docs, or system card and should not be cited.

Independent:

- Terminal-Bench 2.1 (Vals AI): **74.5%** — 5.9 points below the vendor's 80.4%
- Terminal-Bench **3.0** (official leaderboard): **14.6%**
- SWE-bench (Vals AI): **79.6%**
- LiveCodeBench (Vals AI): **82.4%**
- AA-SciCode: **54.3%**; AA Coding Index: **71.5%**
- VulcanBench CII v1 (frontier results): **89.2%**
- ApprenticeBench GUI (NeoCognition): **16%**

Agent / tool use:

- BrowseComp (agentic search): **84.7%**
- OSWorld-Verified (computer use): **81.2%** (system card). **Conflict noted:** the launch post's body text states **78.5%**; Morph quotes HLE 34.6% / 46.8% and OSWorld 78.5% from the announcement where BenchLM and o-mega quote 43.2% / 57.4% and 81.2% from the system card. These are almost certainly different effort levels on the same benchmarks — the system card values are used here.
- GDPval-AA: **1603 Elo** (system card; o-mega cites 1609); AA's own GDPval-AA figure **48.3%**
- AA Agentic Index: **44.3%**
- Anthropic published cost-performance curves rather than absolutes for BrowseComp and OSWorld-Verified, showing Sonnet 5 as a strict improvement over 4.6, a wider cost-performance spread than Opus 4.8, and **matching Opus 4.8 on some tasks at higher effort** — while being substantially cheaper at medium effort. Anthropic corrected the original BrowseComp chart on 2026-06-30 (the first version used a simpler methodology that *underestimated* Sonnet 5).

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (Artificial Analysis); **88.9%** (Vals AI) — **not published in the system card**
- MMLU-Pro (Vals AI): **87.5%**
- HLE: **43.2%** without tools; **57.4%** with tools (system card). AA's independent HLE: **41.3%**
- Artificial Analysis Intelligence Index v4.3: **38.2** — consistent with the 38 / #54-of-210 recorded on 2026-09-24
- AA-Omniscience: Index **16.5**, Accuracy **40.1**, **Hallucination rate 39.4%** — a materially better grounding profile than GPT-5.5's 86% hallucination rate, and the reason Anthropic models tend to hold up on knowledge work

Long context:

- 1M input tokens, 128K output (300K on the Batches beta). **ProgramBench 76%–86% is the only published retrieval-at-length evidence**, and it is a reconstruction test rather than a needle-in-a-haystack measurement.

Multimodal:

- System Card §8.10 publishes GDP.pdf, OSWorld-Verified, BenchCAD, ChartMuseum, and CharXiv Reasoning, but **no absolute multimodal scores were extractable** for Sonnet 5. SWE-bench Multimodal **28.1%** is the only absolute multimodal number available.

Speed / cost profile:

- Output speed **76.8 tokens/s**; Artificial Analysis Intelligence Index task cost **$5.09** (accessed 2026-09-24) — among the most expensive per task in this dataset despite the $2/$10 headline, because of the 30% token inflation and heavy reasoning output.

Safety (System Card):

- Includes Cyber capability evaluations (ExploitBench, OSS-Fuzz, CyberGym), RSP risk assessments for chemical/biological/cyber, agentic-safety red teaming (malicious Claude Code use, computer use, agentic influence campaigns, adaptive prompt-injection robustness), a full alignment assessment, an honesty-and-hallucinations section, and a model welfare assessment — the most detailed public safety documentation of any model here.

Sources consulted: [Introducing Claude Sonnet 5 (Anthropic, 2026-06-30)](https://www.anthropic.com/news/claude-sonnet-5), [Claude Sonnet 5 System Card (PDF)](https://www-cdn.anthropic.com/73ad94ca3c0502e75e46637cc62c8bd9532a7f2c/Claude%20Sonnet%205%20System%20Card.pdf), [Anthropic model overview / Sonnet page](https://www.anthropic.com/claude/sonnet), [Claude Platform model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations), [Claude Platform release notes (2026-09-30 entry)](https://platform.claude.com/docs/en/release-notes/overview), [Claude Sonnet 5.5 migration guide](https://platform.claude.com/docs/en/models/sonnet-5-5/migration-guide), [BenchLM Claude Sonnet 5](https://benchlm.ai/models/claude-sonnet-5), [o-mega Sonnet 5 benchmarks and cost breakdown](https://o-mega.ai/articles/claude-sonnet-5-benchmarks-and-cost-breakdown), and [Morph — Claude Sonnet 5 pricing, context, benchmarks](https://www.morphllm.com/sonnet-5), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 92/100.** Raised from 89. The prior pass recorded "no Terminal-Bench, Tau, GDPval, or OSWorld value found" because Anthropic published most comparisons as chart images — but the System Card body carries absolutes. BrowseComp **84.7%**, OSWorld-Verified **81.2%**, GDPval-AA **1603 Elo**, Toolathlon **54.3%** Pass@1, AA Agentic Index **44.3%**, and Anthropic's own claim that higher effort **matches Opus 4.8 on some BrowseComp and OSWorld tasks**. Held below the mid-90s by Terminal-Bench 3.0 at only **14.6%**, CursorBench 4.0 at 34.1%, and ApprenticeBench GUI at 16%.
- **Reasoning: 88/100.** Raised from 82. GPQA Diamond **91.1%** (AA) / **88.9%** (Vals), MMLU-Pro **87.5%**, HLE **43.2%** no-tools and **57.4%** with tools. The distinguishing strength is grounding: AA-Omniscience hallucination rate of **39.4%** against GPT-5.5's 86% makes Sonnet 5 the safer choice for knowledge work at comparable benchmark scores. Not higher because the AA Intelligence Index sits at 38.2 — mid-pack — and FrontierMath-class results were not published.
- **Context window: 97/100.** Slightly reduced from 98. 1M input with 128K output, extendable to **300K output** on the Batches API, and — unusually — ProgramBench **76%–86%** is real retrieval-at-length evidence out to the full window. Deducted for the tokenizer: 1M tokens is now only ≈ **555,000 words** (vs. ~750,000 on Sonnet 4.6), so the effective context in *content* shrank even though the token count did not.
- **Multimodal: 78/100.** Raised from 65. The System Card §8.10 suite (GDP.pdf, BenchCAD, ChartMuseum, CharXiv Reasoning) plus SWE-bench Multimodal **28.1%** confirm substantial vision capability. Not higher because **no absolute multimodal score is publicly available** for this model — Anthropic published the section titles without quotable numbers — and audio/video remain unsupported.
- **Coding: 91/100.** Raised from 86. SWE-bench Pro **63.2%** (beating GPT-5.5 and Gemini 3.1 Pro on a like-for-like column), SWE-bench Verified **85.2%**, Terminal-Bench 2.1 **80.4%**, SWE-bench Multilingual **78.3%** across nine languages, LiveCodeBench **82.4%** (Vals), AA Coding Index **71.5%**, and FrontierCode more than doubling over Sonnet 4.6. Deducted for the harder-harness results: Terminal-Bench **3.0 at 14.6%**, CursorBench 4.0 at 34.1%, FrontierCode still below 43%, and Vals' Terminal-Bench 2.1 at 74.5% sitting 5.9 points under the vendor number.
- **Cost efficiency: 82/100.** Reduced from 85. The $2/$10 rate is genuinely permanent and 40% below Opus 5's $5/$25, with up to 90% cache savings and 50% batch. But the **new tokenizer produces ~30% more tokens for identical work**, so real cost-per-task is materially higher than the sticker suggests — Artificial Analysis measures **$5.09 per Intelligence Index task**, among the worst in this dataset. Also deducted: no Priority Tier on this model, and Claude Sonnet 5.5 delivers identical list pricing with half the cache-read rate.
- **Overall Score: 89.2/100.** (92 + 88 + 97 + 78 + 91) / 5 = 446 / 5 = 89.2, up from 84.0. The prior pass under-scored this model mainly on Coding and Multimodal for lack of quotable System Card values. **Best fit:** production coding agents and knowledge-work automation where Anthropic's hallucination profile and the 1M window matter, and where Sonnet-class cost beats Opus-class cost. **Caveats worth pricing in:** the ~30% tokenizer inflation, the Jan-2026 knowledge cutoff, and the fact that Claude Sonnet 5.5 is now the current Sonnet at the same price — Sonnet 5 stays Active (not sooner than 2027-06-30 retirement) but is no longer the family's newest.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Anthropic's Sonnet 5 launch post, the full Claude Sonnet 5 System Card, the Claude Platform model-overview/deprecation/release-note pages, the Sonnet 5.5 migration guide, and independent trackers (BenchLM, Vals AI, Artificial Analysis, Cognition, Cursor, NeoCognition); scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the HLE and OSWorld-Verified launch-post vs. system-card discrepancy is retained as an effort-level conflict rather than reconciled; system-card values were used throughout. Third-party "82.1% / 92.4% SWE-bench Verified" claims for this model are explicitly rejected as unsourced.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_5_Recheck.md`, using the same headings.