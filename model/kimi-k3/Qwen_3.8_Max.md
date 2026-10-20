# Kimi K3 — findings by Qwen 3.8 Max

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship open-weight multimodal reasoning model — a 2.8T-parameter MoE (896 experts, 16 active per token) with Kimi Delta Attention (KDA) hybrid linear attention. Its performance shape is endurance- and automation-leading (Program Bench, SWE Marathon, BrowseComp, Automation Bench, Frontend Code Arena, OmniDocBench all #1) but weaker on single-pass deep reasoning (HLE) and deep repo comprehension (DeepSWE). #4 of 189 on the Artificial Analysis Intelligence Index at launch, on par with Opus 4.8 / GPT-5.5.
- **Provider / access:** Moonshot hosted service (`platform.moonshot.cn`, kimi.com free tier); open weights released 2026-07-27 (largest open-weight model at 2.8T). OpenRouter / third-party gateways.
- **Release / knowledge:** Released 2026-07-16 (hosted); knowledge cutoff not published.
- **IDs:** `moonshotai/kimi-k3` (vendor + open-weight).
- **Context window:** 1,000,000 tokens (confirmed); BrowseComp verified at 300K (with compaction) and on the full 1M span. No independent needle-in-a-haystack scores published at 500K/1M — the extreme-length claim is unverified. Max output not separately published.
- **Modalities:** text + image + video in → text out; reasoning yes (`reasoning_effort` tunable, only `max` at launch); tool calls yes (web search $0.015/call, browsing, automation).
- **Pricing (as of 2026-10-20):** $3.00 / 1M input (cache miss), $0.30 / 1M cached input, $15.00 / 1M output; $0.015 per web-search call. 3–4x the pre-release leak, but still 70–80% cheaper than Opus 4.8 on output.
- **Architecture:** MoE, 2.8T total params, 896 experts / 16 active per token; Kimi Delta Attention (evolved hybrid linear attention) enables the 1M window at ~62 tok/s (1.99s TTFT, claimed 6.3x decoding speedup).

### Raw benchmarks found

Agent / tool use:

- BrowseComp (web browsing comprehension): **91.2** (#1 — GPT-5.6 Sol 90.4, Fable 5 88.0, Opus 4.8 84.3); **90.4** on the full 1M window without compaction
- Automation Bench: **30.8** (#1 — GPT-5.6 29.7, Fable 5 29.1, Opus 4.8 27.2, GLM-5.2 12.9)
- SpreadsheetBench 2: **34.8** (#1, edges Fable 5 34.7); JobBench: **52.9** (behind Fable 5 57.4)
- GDPval-AA v2 (Elo): **1,668** (behind Fable 5 1,760, GPT-5.6 1,748, ahead of Opus 4.8 1,600); AA-Briefcase (Elo): **1,548**
- Artificial Analysis Agentic Index: **50.07**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (frontier-competitive — between GPT-5.6 94.1% and Fable 5 92.6%; ahead of Opus 4.8 91.0%)
- AIME 2025: **96.1%** (strong math, carried over from K2.6's 96.4%)
- HLE-Full: **43.5** (weak point — Fable 5 53.3, GPT-5.6 44.5, Opus 4.8 49.8); Humanity's Last Exam (separate format): **56%**
- Artificial Analysis Intelligence Index: **57.11** (#4 of 189, on par with Opus 4.8 / GPT-5.5)

Coding:

- SWE-bench Verified: **76.8%** (K2.6 was 80.2%; likely a version/harness change, not a regression)
- Program Bench: **77.8** (#1 of all models — GPT-5.6 77.6, Fable 5 76.8)
- SWE Marathon (longest-running SWE): **42.0** (#1 — Opus 4.8 40.0, GPT-5.6 39.0, Fable 5 35.0)
- Terminal-Bench 2.1: **88.3** (a hair behind GPT-5.6 88.8; ahead of Fable 5 / Opus 4.8 84.6)
- FrontierSWE: **81.2** (#2 behind Fable 5 86.6, ahead of GPT-5.6 71.3); DeepSWE: **67.5** (behind GPT-5.6 73.0, Fable 5 70.0)
- Kimi Code Bench 2.0: **72.9**; Frontend Code Arena (Elo, human-pref): **1,679** (#1 — Fable 5 1,631, GPT-5.6 1,618); Artificial Analysis Coding Index: **76.24**

Multimodal:

- OmniDocBench (document understanding): **91.1** (#1 — Fable 5 89.8, Opus 4.8 87.9, GPT-5.6 85.8)
- MMMU-Pro: **81.6** (#2 behind GPT-5.6 83.0, ahead of Fable 5 81.2)
- CharXiv Reasoning: **91.3**; MathVision (w/ Python): **97.8**

Long context:

- 1M-token window (KDA hybrid linear attention); BrowseComp **91.2** at 300K (compaction) and **90.4** on the full 1M span — but no published needle-in-a-haystack / MRCR scores at extreme lengths.

> Provenance: figures compiled by Wan 2.7 (July 2026) from Moonshot's official release table, BenchLM's tracker, Artificial Analysis composite indexes and the Arena.ai leaderboard, cross-referenced with discrepancies noted. BenchLM coverage was incomplete at launch (52 of 313 tracked benchmarks); the table reflects Moonshot's chosen suite, and LMArena text Elo (1,486 ±10.8) was still stabilizing.

### Normalized scores (1–100)

- **Tool use: 88/100.** Three genuine agentic firsts (BrowseComp 91.2, Automation Bench 30.8, SpreadsheetBench 2 34.8) plus web search/browsing tooling; capped because general-purpose GDPval-AA (1,668) trails Fable 5 by 92 Elo and the Agentic Index (50.07) is only mid-pack.
- **Reasoning: 86/100.** GPQA Diamond 93.5% and AIME 2025 96.1% are frontier-competitive and the Intelligence Index is #4 of 189; held back decisively by HLE-Full 43.5 (~10 points behind Fable 5) — strong execution, weaker on the hardest single-pass reasoning.
- **Context window: 92/100.** A confirmed 1M-token window that BrowseComp validates at 300K–1M via KDA; discounted because no independent needle-in-a-haystack scores exist at 500K/1M and the max-output cap is unpublished.
- **Multimodal: 88/100.** #1 OmniDocBench 91.1 (document understanding), CharXiv 91.3 and MathVision 97.8, with text/image/video input; capped by MMMU-Pro only #2 (81.6) and no published video benchmark (LVBench) despite video input.
- **Coding: 90/100.** Best-in-class endurance — Program Bench 77.8, SWE Marathon 42.0 and Frontend Code Arena 1,679 Elo all #1, Terminal-Bench 2.1 88.3, Coding Index 76.24; capped because DeepSWE 67.5 trails GPT-5.6/Fable 5 and SWE-bench Verified 76.8% is well below Fable 5's 95% (depth, not just endurance).
- **Cost efficiency: 72/100.** $3/$15 with a $0.30 cache-hit rate is 70–80% cheaper than Opus 4.8 on output and includes open weights — good value for a top-5 model with 1M context; not higher because it is 3–4x the leaked price and 2–7x dearer than GLM-5.2 / DeepSeek V4 Pro, and every call pays for max reasoning.
- **Overall Score: 89/100.** Mean of Tool 88 + Reasoning 86 + Context 92 + Multimodal 88 + Coding 90 = 88.8 → 89. Best fit: long agentic coding loops, frontend/UI generation, web browsing/automation pipelines and document-heavy multimodal work where 1M context and sub-Opus pricing pay off; single-shot hard reasoning (HLE) and deep single-pass repo analysis still favor Fable 5 / GPT-5.6 Sol.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (Wan 2.7's Kimi K3 benchmark compilation drawing on Moonshot's release table, BenchLM, Artificial Analysis composite indexes and Arena.ai; corroborated by whatllm.org and nxcode.io for specs/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
