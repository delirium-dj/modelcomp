# GPT-5.1 Codex Mini — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.1-codex-mini`) — RETIRED 2026-07-23
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini (vendor hyphenated style)
- **Short description:** OpenAI's cheapest Codex-tier coding model (Nov 2025): a fifth of gpt-5-codex's price with 400K context and Responses-API support. Removed from Codex surfaces April 2026 and fully retired 2026-07-23; OpenAI's recommended replacement is GPT-5.6 Terra.
- **Provider / access:** OpenAI Responses API (id `gpt-5.1-codex-mini`); OpenCode Zen `opencode/gpt-5.1-codex-mini` (deprecated on Zen 2026-07). No public access remains.
- **Release / knowledge:** Released 2025-11-13; deprecation announced 2026-04-22; shut down 2026-07-23.
- **IDs:** `gpt-5.1-codex-mini` (OpenAI); `openai/gpt-5.1-codex-mini` (OpenRouter, also retired); `opencode/gpt-5.1-codex-mini` (Zen, deprecated). No Free ID existed.
- **Context window:** 400,000 tokens total; 128,000 max output.
- **Modalities:** Text, image in; text out; Responses API; reasoning effort levels.
- **Pricing (as of retirement):** $0.25/$2.00 per 1M in/out, $0.025 cached read — identical native and on Zen.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

(measured by Artificial Analysis unless noted; lifecycle facts from OpenAI platform docs via trackers)

Agent / tool use:

- Terminal-Bench: **61.6%** (#11/40, AA + Epoch tracking); Terminal-Bench Hard: **33.3%** (#58/326, 82nd percentile)
- τ²-Bench (Telecom): **62.9%**
- GDPval-AA: **Elo 1053** (#107/358, 70th percentile)
- Vendor-reported (launch era): SWE-Bench Pro **49.0%**, Terminal-Bench 2.0 **46.1%**, Vibe Code Bench **22.2%** — no published SWE-bench Verified figure

Reasoning / knowledge:

- GPQA Diamond: **81.3%** (#127/478, 74th percentile, Verified run)
- AIME 2025: **91.7%** (#10/72); AA Math Index **91.7**
- HLE (AA run): **18.5%**; AA Intelligence Index **20.4** (v4.3)
- IFBench: **67.9%**

Coding:

- LiveCodeBench (AA run): **83.6%** (#13/84)
- LMArena WebDev: **1244 Elo**; Design Arena all-code **~1094**
- Not measured on SWE-bench Verified (any harness), DeepSWE, FrontierCode, or the Vals coding boards

Long context / multimodal:

- AA-LCR: **66.7%** (#154/423, 64th percentile)
- MMMU-Pro: **69.0%** (AA run)

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 61.6 with an unusually strong TB-Hard percentile (82nd) and mid τ²/GDPval results — a solid small-model agent, well below the Codex flagship tiers.
- **Reasoning: 74/100.** AIME 91.7 and GPQA-D 81.3 are strong per-dollar reasoning; HLE 18.5 and AAII 20.4 place it clearly below frontier reasoners.
- **Context window: 74/100.** 400K window (large for its class and price) with mid long-context reasoning (AA-LCR 66.7); 128K output.
- **Multimodal: 64/100.** Image input with MMMU-Pro 69.0 (AA) — capable but not a vision standout.
- **Coding: 62/100.** LCB 83.6 (13/84) is the bright spot; vendor SWE-Pro 49.0, VCB 22.2 and the absence of any SWE-bench Verified figure cap it.
- **Cost efficiency: 88/100.** $0.25/$2.00 per 1M (cached $0.025) was outstanding value — scored on price, not availability: the model is retired and no longer purchasable.
- **Overall Score: 67/100.** Mean of the five quality dims (62+74+74+64+62)/5 = 67.2 → 67. Best fit (historical): budget agentic coding with large context; superseded by GPT-5.6 Terra per OpenAI.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (Artificial Analysis-measured boards via tracker indexes, OpenAI platform lifecycle docs, vendor launch figures); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [AI Atlas — GPT-5.1-Codex Mini lifecycle (released 2025-11-13, deprecated 2026-04-22, retired 2026-07-23) + AA runs](https://www.ai-atlas.co/models/gpt-5.1-codex-mini)
  - [llmbenchmark.ai — GPT-5.1-Codex-Mini measured board (LCB 83.6, TB 61.6, TB-Hard 33.3, GPQA 81.3)](https://llmbenchmark.ai/models/gpt-5-1-codex-mini)
  - [BenchmarkList — GPT-5.1-Codex-Mini percentile rows (TB-Hard 82nd, GDPval 1053, AA-LCR 66.7)](https://benchmarklist.com/models/openai-gpt-5.1-codex-mini/)
  - [TheModelBeat — Epoch-tracked figures (TB 61.6, LCB 83.6, AIME 91.7)](https://themodelbeat.com/models/gpt-5-1-codex-mini)
  - [VerticalTabs — retirement notice and GPT-5.6 Terra replacement](https://verticaltabs.com/openai/gpt-5.1-codex-mini)
  - [OpenAI — GPT-5.1 Codex Mini model docs (pricing, lifecycle)](https://developers.openai.com/api/docs/models/gpt-5.1-codex-mini)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
