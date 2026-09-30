# LongCat 2.5 Preview — findings by Space Bunny Alpha

- Source: Meituan / LongCat 2.5 Preview
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview (available as the `$0` Zen/Go tier `longcat-2.5-preview-free`)
- **Short description:** Meituan's follow-up to its open-source LongCat-2.0 flagship: a closed-weight, multimodal (image-input) reasoning model for coding and agent workflows with a native 1M context. It is not an open-weights release — unlike LongCat-2.0 it shipped with no technical write-up, no MIT weights and no vendor benchmark table, so nearly all public evidence is third-party.
- **Provider / access:** Meituan first-party LongCat API platform (`https://longcat.ai/platform/`), model ID `LongCat-2.5-Preview`, offering both an **OpenAI-compatible Chat Completions** endpoint and an **Anthropic-compatible Messages** endpoint with a `thinking` toggle; canonical third-party ID `meituan/longcat-2.5-preview` (Blackbox AI, NanoGPT, Vercel AI Gateway per CloudPrice); OpenCode Zen and OpenCode Go both expose the free ID `meituan/longcat-2.5-preview-free`. Documented integrations include Claude Code, Codex, OpenCode, Cline, Kilo Code, OpenClaw and Hermes Agent.
- **Release / knowledge:** Released 2026-09-25 (LongCat API platform changelog version 2026-09-25; models.dev); CloudPrice and Blackbox date it 2026-09-26 and TechNode covered it 2026-09-30. No knowledge-cutoff date published.
- **Context window:** 1,000,000 tokens; maximum output 131,072 tokens (128K). Verified from the LongCat quick start plus models.dev, CloudPrice, Blackbox AI and NanoGPT, which all agree on both figures.
- **Modalities:** Text and image input, text output. Verified from models.dev ("image understanding"), CloudPrice (Input Modalities: Image) and Blackbox AI (`text, image` in, `text` out). Reasoning: yes — optional extended thinking with interleaved reasoning traces; native tool calling and structured outputs supported; temperature controllable. No audio input, no video input, no non-text output. Documentation caveat: the published chat-completions reference still types `content` as a plain string and shows no image payload, so the image path is in the changelog but not yet in the API reference — a docs gap, not evidence the capability is absent.
- **Pricing (as of 2026-09-30):** Free tier on OpenCode Zen and OpenCode Go at `$0.00` input / `$0.00` output per 1M (models.dev, both providers). Meituan first-party per 1M: standard `$0.75` uncached input / `$0.015` cached / `$2.95` output, with a limited-time promotional rate of `$0.30` / `$0.006` / `$1.20` (that promo figure is identical to MiniMax M3's list price, not uniquely cheap). Meituan also granted 5M free tokens to existing users at launch. NanoGPT's auto-routed rate is `$0.75` / `$2.95` / `$0.015`.
- **Architecture:** Proprietary for 2.5 — Meituan's launch post advertises **1.6T total / ~48B active** MoE, the same scale figures published for LongCat-2.0, so 2.5 is not a parameter-count or context-length jump. No 2.5 weights are published on Hugging Face; LongCat-2.0's MIT open-weight status must not be assumed for 2.5.

### Raw benchmarks found

> The only measured public numbers for this exact model come from one third-party coding leaderboard (below). Meituan published no benchmark table, and Artificial Analysis has not evaluated it (its LongCat provider page shows "0 of 0 models").

Coding / agentic (single third-party harness, one run):

- AI Coding Daily LLM Coding Leaderboard, evaluated 2026-09-28 with the **OpenCode** harness: **44.25 / 60** total points (73.75% of available), average time per prompt **16:50**, average cost `N/A` (tested on a subscription, not per-token API billing), listed at rank **#34** on that leaderboard. This scores a model-and-harness configuration, not the bare model.
- Per-project breakdown from the same run: Laravel Code Quality **16.98 / 20** (84.9%); React-TS Code Quality **16.67 / 20** (83.4%); Bank Feed (Dart/Flutter) **4 / 5**; CSV Import (PHP) **3 / 5**; Offline Sync (PHP) **2.7 / 5**; Shipping Quotes (Go) **0.9 / 5** (18%).
- Same-leaderboard context for scale: Opus 5.5 (High) 57.83/60, GPT-6.1-Sol (Medium) 57.3/60, Qwen 3.8 27B (Xhigh) 45.05/60, Muse Spark 1.3 (Xhigh) 45.22/60, GLM-5.3-Flash (Max) 42.82/60.

Tool use:

- Tool calling and structured outputs are verified as supported capabilities (models.dev, Blackbox AI, NanoGPT), and the OpenCode run above required multi-step file-editing and shell tool use across six projects. No dedicated tool-use benchmark (Terminal-Bench, τ-bench, GDPval-AA, Toolathlon, Claw-Eval): **no verified public score found**.

Reasoning / knowledge:

- Configurable reasoning effort with interleaved reasoning traces is verified (TensorFeed.ai, models.dev); Blackbox lists `reasoning` as a supported parameter and `include_reasoning` as accepted.
- GPQA Diamond, HLE, CritPt, AA-LCR, Artificial Analysis Intelligence Index: **no verified public score found** for this exact model. The LongCat provider page on Artificial Analysis reports no evaluated models.

Long context:

- 1,000,000-token window verified from provider metadata. Long-context retrieval measurement: **no verified public score found** — Orcarouter's 2026-09-26 comparison makes this the central gap ("LongCat-2.5-Preview has no equivalent number, from anyone", against GLM-5.2's Artificial Analysis Long-Context Recall of 78.33).

Multimodal:

- Native image input verified. No image-specific benchmark (MMMU, CharXiv, MathVista): **no verified public score found**.

Predecessor (LongCat-2.0, **a different model** — do not attribute these to 2.5 Preview): Meituan self-reported SWE-bench Pro 59.5, SWE-bench Multilingual 77.3, Terminal-Bench 2.1 70.8, RWSearch 78.8, FORTE 73.2, BrowseComp 79.9, GPQA Diamond 88.9.

### Normalized scores (1–100)

- **Tool use: 68/100.** Tool calling, structured outputs and interleaved reasoning are verified, and the one end-to-end agentic run available completed six real multi-file projects through the OpenCode harness. That is genuine agentic evidence, but there is no Terminal-Bench / τ-bench / GDPval figure to place it in the methodology's frontier (TB2.1 ≈ 88%+) or mid (TB2.1 45–60%) bands, which is what caps this score.
- **Reasoning: 60/100.** Configurable reasoning effort and interleaved traces are verified, but zero reasoning benchmarks exist for this exact model — no GPQA, HLE, CritPt, LCR or Intelligence Index. Scored at the methodology's mid band on capability evidence alone; the predecessor's self-reported GPQA-D 88.9 belongs to LongCat-2.0 and is deliberately not carried over.
- **Context window: 95/100.** 1,000,000 verified tokens sits in the ≥1M band (95–100). It is not 100 because the methodology reserves that for ≥98% measured retrieval at 512K+, and no recall test at any depth has been published for this model.
- **Multimodal: 65/100.** Verified native image input with text-only output places it in the +image band (60–70). No audio input, no video input and no non-text output keep it well below 90.
- **Coding: 70/100.** 44.25/60 (73.75%) on a six-project real-code rubric, with strong PHP/TS results (Laravel 84.9%, React-TS 83.4%) but a clear weakness on the Go project (18%). No SWE-bench, Terminal-Bench, LiveCodeBench or SciCode figure exists for this model, so it cannot be tested against the frontier reference (DeepSWE 74%+, SciCode 55%+).
- **Cost efficiency: 100/100.** The evaluated tier is the OpenCode Zen / OpenCode Go free route `meituan/longcat-2.5-preview-free` at `$0.00` input / `$0.00` output per 1M — `$0 = 100` under the methodology. Paid fallback is Meituan's promotional `$0.30`/`$1.20`, which would land near 92, with the standard rate at `$0.75`/`$2.95` landing near 88. The free tier is time-limited and its data-usage terms were not documented in any source found, so do not put confidential code on it.
- **Overall Score: 71.6/100.** (68 + 60 + 95 + 65 + 70) / 5 = 71.6. Best fit as a free 1M-context image-capable workhorse for multi-file coding and agent workflows; every quality score except context rests on a single third-party run, so treat the numbers as provisional until Meituan or an independent lab publishes a table.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-30
- Method: public internet research — models.dev, CloudPrice, Blackbox AI, NanoGPT, TensorFeed.ai, Orcarouter, TechNode and the AI Coding Daily LLM Coding Leaderboard (evaluation dated 2026-09-28); Artificial Analysis's LongCat provider page was checked and lists no evaluated model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `LongCat_2.5_Preview_Independent.md`, using the same headings.