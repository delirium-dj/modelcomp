# GPT-5.5 Pro — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** The higher-accuracy API variant of GPT-5.5 (OpenAI's first fully retrained base model since GPT-4.5, codename "Spud"). It spends materially more reasoning compute than base GPT-5.5 to push the hardest reasoning/agentic benchmarks higher — measurably stronger on FrontierMath, BrowseComp and Humanity's Last Exam — at 6x the token price. Natively omnimodal (text/image/audio/video in one unified architecture) with a 1M-token API window.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`, "all API users — coming soon" at launch); ChatGPT Pro/Business/Enterprise tiers. Not the default Codex/ChatGPT model.
- **Release / knowledge:** Released 2026-04-23 alongside GPT-5.5; knowledge cutoff not published.
- **IDs:** `openai/gpt-5.5-pro`.
- **Context window:** 1,000,000 tokens (API; base GPT-5.5 is 400K in Codex). MRCR v2 retrieval: 74.0% at 512K–1M, 87.5% at 128K–256K (base-5.5 figures; Pro shares the architecture). Max output not separately published.
- **Modalities:** natively omnimodal — text + image + audio + video in → text out (single unified architecture, not stitched-together sub-models); reasoning yes (enhanced/high compute budget); tool calls yes (browsing, computer use, MCP tools).
- **Pricing (as of 2026-10-20):** $30.00 / 1M input, $180.00 / 1M output — 6x base GPT-5.5's $5/$30 and "off-scale" vs the frontier; Batch/Flex at half rate, Priority at 2.5x.
- **Architecture:** proprietary (closed weights); hardware co-designed with NVIDIA GB200/GB300 NVL72 rack-scale systems (matches GPT-5.4 per-token latency despite higher capability).

### Raw benchmarks found

Agent / tool use (Pro-specific where published):

- BrowseComp (autonomous web research): **90.1%** (Pro — up from base GPT-5.5's 84.4%; ahead of Gemini 3.1 Pro 85.9%, near Kimi K3's 91.2)
- GDPval (44 real occupations): **82.3%** (Pro; base 5.5 84.9%, GPT-5.4 83.0%, Claude Opus 4.7 80.3%)
- Inherited from base GPT-5.5 (not separately re-reported for Pro): OSWorld-Verified **78.7%** (computer use, edges Opus 4.7 78.0%), Tau2-bench Telecom **98.0%**, MCP Atlas **75.3%** (behind Opus 4.7 79.1%)

Reasoning / knowledge (Pro's core upgrade):

- FrontierMath T1–3: **52.4%** (Pro; base 5.5 51.7%, Opus 4.7 43.8%, Gemini 3.1 Pro 36.9%)
- FrontierMath T4 (hardest): **39.6%** (Pro; base 5.5 35.4%, Opus 4.7 22.9%) — SOTA
- Humanity's Last Exam (no tools): **43.1%** (Pro; base 5.5 41.4%; still behind Claude Opus 4.7 46.9% and Gemini 3.1 Pro 44.4%)
- Inherited base-5.5 reasoning: GPQA Diamond **93.6%**, ARC-AGI-2 (Verified) **85.0%** (ahead of Opus 4.7 75.8% and Gemini 3.1 Pro 77.1%); CyberGym **81.8%** (cyber, "High" capability rating)

Coding:

- Not separately re-reported for Pro; inherits base GPT-5.5's profile with added reasoning compute — Terminal-Bench 2.0 **82.7%** (SOTA, +13.3 over Claude Opus 4.7 69.4%), Expert-SWE (internal, ~20h-median long-horizon) **73.1%**, SWE-bench Pro **58.6%** (behind Opus 4.7 64.3%), CyberGym **81.8%**

Multimodal:

- Natively omnimodal (text/image/audio/video unified); OSWorld-Verified 78.7% confirms computer-use vision. No MMMU-Pro / Video-MMMU figures separately published for Pro in accessible sources.

Long context:

- 1M-token API window; MRCR v2 **74.0%** at 512K–1M (base 5.5, a +37-pt leap over GPT-5.4's 36.6%) and **87.5%** at 128K–256K (vs Claude's 59.2%).

> Provenance: figures from OpenAI's "Introducing GPT-5.5" announcement and ~100-page system card (2026-04-23), tabulated by Vellum. Pro-specific cells are those OpenAI published for `gpt-5.5-pro` (BrowseComp, GDPval, FrontierMath, HLE); dashes in OpenAI's table mean Pro was not separately re-run, so it inherits base GPT-5.5's architecture and scores plus extra reasoning compute. All vendor-reported.

### Normalized scores (1–100)

- **Tool use: 90/100.** Pro's BrowseComp 90.1% (up from base 84.4%) plus inherited OSWorld-Verified 78.7% and Tau2-Telecom 98.0% make it a top-tier autonomous agent; capped because MCP Atlas 75.3% trails Claude Opus 4.7 (79.1%) on chained tool orchestration.
- **Reasoning: 93/100.** The Pro variant's reason to exist — FrontierMath T4 39.6% (SOTA) and T1–3 52.4%, inherited ARC-AGI-2 85.0% and GPQA Diamond 93.6%, all with more reasoning compute; held below the ceiling because HLE no-tools (43.1%) still trails Opus 4.7's 46.9%.
- **Context window: 94/100.** A 1M-token window with best-in-class retrieval (MRCR v2 74.0% at 512K–1M, 87.5% at 128K–256K — a generational leap over GPT-5.4); discounted only by the unpublished max-output cap and 400K Codex limit.
- **Multimodal: 90/100.** Genuinely native omnimodality (text/image/audio/video in one unified architecture) with validated computer-use vision (OSWorld 78.7%); capped because no MMMU-Pro / Video-MMMU benchmark is separately published for Pro.
- **Coding: 90/100.** Inherits base GPT-5.5's SOTA Terminal-Bench 2.0 82.7% (+13.3 over Opus 4.7), Expert-SWE 73.1% and CyberGym 81.8%, with extra reasoning compute; capped by SWE-bench Pro 58.6% trailing Opus 4.7 (64.3%) and the absence of a Pro-specific coding re-run.
- **Cost efficiency: 40/100.** The weakest axis by design — $30/$180 is 6x base GPT-5.5 and the most expensive per-token model in its comparison set ("off-scale"); Batch/Flex halve it, but for raw cost-per-token this is a premium reasoning-compute product, not a value play.
- **Overall Score: 91/100.** Mean of Tool 90 + Reasoning 93 + Context 94 + Multimodal 90 + Coding 90 = 91.4 → 91. Best fit: maximum-accuracy reasoning, math, long-horizon agentic and browsing workloads where the ~6x token premium is justified by SOTA FrontierMath/ARC-AGI-2 and 1M-context retrieval; cost-sensitive or PR-resolution coding still favors base GPT-5.5 or Claude Opus 4.7.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (OpenAI's "Introducing GPT-5.5" announcement and system card via Vellum's full comparison table; GPT-5.5 Pro pricing/specs corroborated by llm-stats, kingy.ai and tryfriday.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
