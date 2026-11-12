# MiMo-V2.6-Flash Free — findings by Qwen 4 Max

- Source: Xiaomi/mimo-v2.6-free
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash Free (OpenCode model ID `mimo-v2.6-flash-free`; AIHubMix route `xiaomi-mimo-v2.6-flash-free`)
- **Short description:** **Limited-time $0 serving tier of MiMo-V2.6-Flash** — the same 309B/15B MIT open checkpoint (`XiaomiMiMo/MiMo-V2.6-Flash-RL`), not a separate model. Announced **Sept 21, 2026** alongside the V2.6 launch as a one-week feedback promotion (third-party coverage); still listed in OpenCode's live docs on Nov 12 with no stated end date (kingy.ai noted the same on Oct 10). OpenCode: "The team is using this time to collect feedback and improve the model" — **collected data may be used to improve the model**, unlike the zero-retention GLM-5.3-Flash/DS-V4.1-Flash/MiniMax-M3.1 free tiers.
- **Provider / access:** OpenCode Console/Zen (`https://opencode.ai/inference/openai/v1/chat/completions`, `@ai-sdk/openai-compatible`) — **free-tier chat models require the OpenCode client**; other clients must use paid routes. Separate AIHubMix free route: **5 RPM / 100 requests per day / 1M tokens per day**. Paid fallbacks: Xiaomi MiMo Open Platform, OpenRouter, OpenCode catalog. **No AA/BenchLM tracking of the free SKU** (both 404) — quality evidence comes from the base Flash model.
- **Release / knowledge:** Free endpoint Sept 21, 2026; base model Sept 21–22, 2026 (OpenCode Data lists release 2026-09-22). Knowledge cutoff not stated in sources read.
- **IDs:** `mimo-v2.6-flash-free` (OpenCode) / `xiaomi-mimo-v2.6-flash-free` (AIHubMix); base `mimo-v2.6-flash`; checkpoint `MiMo-V2.6-Flash-RL`. **Not** `xiaomi-mimo-v2.6-pro-free` (AIHubMix's separate Pro free route, TTFT 9.199s / 33 tok/s) and not MiMo-V2.5-free.
- **Context window:** **1M tokens** (OpenCode Data; AIHubMix lists 1,050,000 with 131K max output — precision difference, same as base). Hybrid SWA/GA backbone (39 SWA + 9 GA layers, window 128). Base-model AA-LCR **74.3**; no free-route retrieval evals.
- **Modalities:** **Text, image, audio, video in; text out** (OpenCode Data + AIHubMix agree with the vendor's native-omni claim). AA's hosted base-API tracks text+image only — access-path gap labelled. Thinking, tool calling, streaming, prompt caching listed on both routes.
- **Pricing (as of 2026-11-12):** **$0 input / $0 output / $0 cached read** on both free routes (OpenCode docs pricing table; AIHubMix). Paid-route reference prices conflict by provider: **$0.14/$0.28** (AA/OpenRouter, 98% cache), **$0.16/$0.32** cache $0.004 (OpenCode catalog list), **$0.155/$0.31** (AIHubMix) — labelled, never averaged. AIHubMix free-route measured **TTFT 5.916s, 24 tok/s** (provider card); base AA measurement 38 tok/s / TTFT 36.73s.
- **Architecture:** Inherited from Flash — sparse MoE **309B total / 15B active**, 48 layers, 256 routed experts (8 active), 5-layer SWA MTP speculative decoder (DFlash-style), MiMo ViT 681M + audio encoders. Open weights MIT; the free tier is a serving arrangement, not a new checkpoint.

### Raw benchmarks found

**No independent benchmark runs exist for the free endpoint** (AA + BenchLM 404). Evidence below is the base Flash model's, inherited with labels:

Vendor-reported (HF `MiMo-V2.6-Flash-RL` README / technical report, Flash column — rows re-confirmed via OpenCode Data's sourced table):

- Agent/tool: TB2.1 **87.6**, OSWorld-Verified **80.8**, Toolathlon-Verified **73.6**, AutomationBench **52.3**, JobBench **61.2**, ALE **27.6**, TB4.0 **28.8**
- Coding: DeepSWE v1.1 **67.9**, MiMo Code Bench **61.2**, ProgramBench **26.0**
- Cyber: CyberGym **95.1**, MiMo Cyber Bench 77.2, SEC-Bench Pro 47.5, ExploitBench 25.3, ExploitGym **6.0**
- Visual: MiMo VisualCoding **71.5**

Independent runs (base model, not the free route):

- AA (live): Intelligence Index **27** (v5.0.1), AA-HLE **35.1**, AA-Omniscience **−10.8** (hallucination 52.2), AA-LCR **74.3**, CritPt **12.0**, GDPval-AA normalized **55.4%**, SciCode 51.3, MMMU-Pro 73.1; 38 tok/s, TTFT 36.73s, 58.4 min/task
- Real-world scale (OpenCode Data, updated 2026-11-12T08:10Z): **#7 by tokens last week**; past 2 months **58T tokens (4.1% share), 1.2M unique users, 41.27M sessions**, avg 1.4M tokens/session, **$0.0035 avg cost/session**, **93.8% of input served from cache**, 80.2% weekly retention; daily volume peaked ~2.4T (Oct 7–8) and settled ~0.5T/day in November

### Normalized scores (1–100)

- **Tool use: 86/100.** Inherited from Flash (same checkpoint): OSWorld-V 80.8, Toolathlon-V 73.6, AutomationBench 52.3, JobBench 61.2, GDPval normalized 55.4%, CyberGym 95.1; capped by ALE 27.6, TB4.0 28.8, ExploitGym 6.0. Free-route tool support confirmed (OpenCode/AIHubMix capability lists); no free-route-specific agent evals.
- **Reasoning: 78/100.** Inherited: AA-HLE 35.1, index 27 (v5.0.1); capped by CritPt 12.0, Omniscience −10.8 (52.2% hallucination), no GPQA/FrontierMath rows. Free-tier serving shows no published reasoning degradation, but none is independently verified either.
- **Context window: 84/100.** Inherited: 1M hybrid SWA/GA with 98%-class cache economics (93.8% real-world cache-hit share on OpenCode); deducted for AA-LCR 74.3 (mid-pack) and no MRCR depth rows. AIHubMix free route caps daily tokens at 1M — long-context use is quota-bound there.
- **Multimodal: 80/100.** Inherited: native omni input (text/image/audio/video) claimed by vendor and listed by both free routes; VisualCoding 71.5; capped by AA hosted text+image only, MMMU-Pro 73.1, no CharXiv/Video-MME/audio rows.
- **Coding: 85/100.** Inherited: DeepSWE 67.9, TB2.1 87.6, MiMo Code Bench 61.2, SciCode 51.3; capped by TB4.0 28.8, ProgramBench 26.0. Massive real-world coding-agent adoption (41M sessions, 1.4M tokens/session) is usage evidence, not a quality benchmark.
- **Cost efficiency: 100/100.** **$0 input/output/cache-read** on two independent free routes — the cheapest possible access to a near-Pro agentic checkpoint; even paid fallbacks run $0.13–0.16/task-class. Deductions considered but outweighed by $0: limited-time availability, data-use-for-training caveat, OpenCode-client-only gate, AIHubMix 5 RPM/100 req/day quotas, and slow free-route delivery (24 tok/s).
- **Overall Score: 82.6/100.** Mean of the five quality dims (86+78+84+80+85)/5 = 82.6 — identical to my base MiMo-V2.6-Flash report because the checkpoint is identical; only the cost dim changes (95→100). Best-fit: budget coding-agent and computer-use experimentation at zero token cost, accepting the feedback-collection data terms; unsuitable for confidential data or production SLAs (limited-time promo, quota caps, no independent free-route evals). For guaranteed capacity use paid Flash ($0.14/$0.28) or self-host the MIT weights.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (OpenCode's official Console docs fetched in full — free-tier listing, $0 pricing table, privacy exceptions, endpoint/SDK; OpenCode Data usage page fetched in full with sourced benchmark table; AIHubMix's Flash-free and Pro-free route pages fetched in full; sulat.com aggregator + kingy.ai/Xiaomi-launch snippets via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **promo duration** — announced as one week (Sept 21) vs still listed Oct 10 and Nov 12 (no end date); **paid-route prices** $0.14/$0.28 (AA/OpenRouter) vs $0.16/$0.32 (OpenCode catalog) vs $0.155/$0.31 (AIHubMix) — provider spreads; **modalities** vendor/OpenCode/AIHubMix omni vs AA hosted text+image; **speed** AIHubMix free 24 tok/s / TTFT 5.9s vs AA base 38 tok/s / TTFT 36.7s — different routes/harnesses; context 1M vs 1,050,000 precision difference. Identity: mimo-v2.6-free resolves to **MiMo-V2.6-Flash Free** (OpenCode `mimo-v2.6-flash-free`), a serving tier of MiMo-V2.6-Flash — ≠ MiMo-V2.6-Pro-free (separate AIHubMix route) ≠ MiMo-V2.5-free ≠ base paid Flash; no independent benchmarks exist for the free SKU (AA/BenchLM 404), so quality dims inherit the base Flash evidence with labels; AA index 27 is v5.0.1 (never compared with older-version indices).
- Reference URLs:
  - [OpenCode Console models — official docs (free tier, pricing, privacy)](https://opencode.ai/docs/console/models/)
  - [MiMo-V2.6-Flash usage, cost & rank — OpenCode Data](https://opencode.ai/data/xiaomi/mimo-v2-6-flash)
  - [Xiaomi MiMo V2.6 Flash (free) — AIHubMix](https://aihubmix.com/model/xiaomi-mimo-v2.6-flash-free)
  - [Xiaomi MiMo V2.6 Pro (free) — AIHubMix (sibling route, identity contrast)](https://aihubmix.com/model/xiaomi-mimo-v2.6-pro-free)
  - [MiMo-V2.6-Flash Free by OpenCode — Sulat models](https://models.sulat.com/models/opencode-mimo-v26-flash-free-ef3367c6)
  - [MiMo-V2.6-Flash-RL model card — Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  - [Introducing MiMo-V2.6 series — Xiaomi](https://mimo.xiaomi.com/mimo-v2-6)
  - [Is MiMo-V2.6-Pro Free? — kingy.ai (403; Oct 10 availability via search snippet)](https://kingy.ai/blog/mimo-v2-6-pro-free-access-pricing-setup/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.