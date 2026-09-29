# Kimi K2.7 Code — findings by Space Bunny Alpha

- Source: Moonshot AI / Kimi K2.7 Code
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-focused multimodal MoE model for end-to-end programming, long-horizon agentic decomposition, and multi-turn tool use.
- **Provider / access:** Hugging Face `moonshotai/Kimi-K2.7-Code`; OpenRouter `moonshotai/kimi-k2.7-code`; Kimi Code CLI and compatible local/API deployments.
- **Release / knowledge:** Released 2026-06-12 (OpenRouter dated slug); no verified exact knowledge cutoff found.
- **IDs:** `moonshotai/Kimi-K2.7-Code`; OpenRouter `moonshotai/kimi-k2.7-code`.
- **Context window:** 262,144 tokens (official model card and OpenRouter).
- **Modalities:** **Text, image, and video input; text output** (Artificial Analysis model page, re-verified 2026-09-29, and Kimi's own platform docs). **Changed: the prior revision recorded text and image only and treated the video placeholders in the model template as unconfirmed — video input is now confirmed by both AA and Moonshot.** Native thinking is **forced** (there is no non-thinking mode), with reasoning preserved across turns, plus tool calling and structured outputs. A high-speed variant, `kimi-k2.7-code-highspeed`, ships the same weights at roughly **180 tokens/s, up to 260 tokens/s in short-context scenarios**.
- **Pricing (as of 2026-09-29):** Moonshot's own API is **$0.95 input / $4.00 output** per 1M with an 80% cache discount — $0.72 blended on a 7:2:1 ratio, and **$0.54 per Intelligence Index task (#23 of 116)**. OpenRouter lists $0.6562 in / $0.18 cached / $3.30 out. Artificial Analysis shows **no output speed (N/A)**, so the 43–61 tokens/s figures on stale comparison pages are historical, not current.
- **Architecture:** Open-weight MoE, 1T total parameters and 32B active, with a 400M-parameter vision encoder; modified-MIT license (commercial use with restrictions). Available through 9 API providers.

### Raw benchmarks found

> Moonshot's official table uses thinking mode, temperature 1.0, top-p 0.95, and a 262,144-token context unless otherwise stated. Values below are the Kimi K2.7 Code column.

Agent / tool use:

- MCP-Atlas: **76.0%**; MCP-Mark Verified: **81.1%** (official model card; 100 tool-call/100-step budgets, averaged over three runs).
- Kimi Claw 24/7 Bench: **46.9%** (official model card; 610 evaluation points across 17 scenarios).
- Artificial Analysis Tau2-Bench Telecom: **90.1%**; IFBench: **63.1%**; Agentic Index: **21.0** (OpenRouter summary).

Reasoning / knowledge:

- GPQA Diamond: **89.6%**; HLE: **35.0%** (official model card).
- Artificial Analysis Intelligence Index **v4.3.2**: **26**, ranked **#26 of 116** in its open-weight size class (class median 18) and **#28 of 679** overall — **changed**: the prior revision recorded 25.8 from an OpenRouter summary. The AA page's own speed panel now shows N/A, so the higher 33/43 readings on live comparison pages are stale index generations and are not used here. Generated 120M index output tokens (#15 of 116), more concise than the 140M median.
- AA-LCR: **79.3%**; CritPt: **10.0%**; GDPval-AA: **26.3%** (OpenRouter summary).
- No separate exact-model AIME result was found in the reviewed official table.

Coding:

- Kimi Code Bench v2: **62.0**; Program Bench: **53.6**; MLS-Bench Lite: **35.1** (official model card).
- SciCode: **47.8%**; Artificial Analysis Coding Index: **60.8**; Terminal-Bench Hard: **44.7%** (OpenRouter summary).
- No exact public SWE-bench Verified or SWE-bench Pro score was found in the official table reviewed.

Long context:

- AA-LCR: **79.3%** with a 262K context (Artificial Analysis/OpenRouter).
- No standalone exact-model MRCR/RULER/GraphWalks result was found.

Multimodal:

- Text, **image, and video** input and text output are verified by the Artificial Analysis model page, Moonshot's platform documentation, and the official model card. No exact-model public visual benchmark score was found.

Sources consulted: [Artificial Analysis Kimi K2.7 Code](https://artificialanalysis.ai/models/kimi-k2-7-code), [Kimi platform quickstart](https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart), the official Moonshot AI Hugging Face model card, and OpenRouter API metadata, accessed 2026-09-29. The AA model page's own speed panel is N/A, so 33/43 index readings on live comparison pages are stale generations and are not used.

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP-Atlas at 76.0%, MCP-Mark Verified at 81.1%, and Tau2 Telecom at 90.1% show strong tool use; Kimi Claw at 46.9% and the modest IFBench result cap the score.
- **Reasoning: 82/100.** Unchanged. GPQA at 89.6% and AA-LCR at 79.3% are strong, while HLE at 35.0%, CritPt at 10.0%, and Intelligence Index at 26 (v4.3.2, up marginally from 25.8) limit the rating.
- **Context window: 76/100.** The verified 262K context and 79.3% AA-LCR are useful but below the 500K-plus top tier.
- **Multimodal: 72/100.** Up from 65. **Video input is now confirmed** by both Artificial Analysis and Moonshot's platform docs alongside text and image, so this is no longer an image-only coding model. Still short of a high score because no exact-model public visual benchmark (MMMU-Pro or similar) was ever published. Score changed.
- **Coding: 89/100.** Kimi Code Bench v2 at 62.0, Program Bench at 53.6, SciCode at 47.8%, and Coding Index at 60.8 indicate strong coding-agent performance; the missing SWE-bench result prevents a top score.
- **Cost efficiency: 77/100.** Down from 79. Moonshot's $0.95/$4.00 is at the high end of its class (medians $0.44/$1.68) and AA ranks cost only #23 of 116 despite the 80% cache discount, while the 1T/32B-active model remains expensive to self-host despite native INT4 options.
- **Overall Score: 81.0/100.** (86 + 82 + 76 + 72 + 89) / 5 = 405 / 5 = 81.0, up from 80 on 2026-09-25. The only quality change is Multimodal, driven by newly confirmed video input; the Intelligence Index moved 25.8 → 26 without crossing a scoring threshold. A capable long-context multimodal coding agent with strong tool benchmarks; best for software engineering workflows that value persistent reasoning and large context, at a higher token and infrastructure cost.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: official Moonshot AI Hugging Face model card, Kimi platform documentation, Artificial Analysis, and OpenRouter API metadata, re-verified 2026-09-29; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.7_Code.md`, using the same headings.
