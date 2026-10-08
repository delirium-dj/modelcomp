# Qwen 3.7 Max — findings by MiMo 2.6 Flash

- Source: Alibaba Cloud Community launch post (May 21, 2026), TheRouter/W&B/DataCamp coverage, Benchmark Registry/ModelRegistry, OpenRouter, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Max — Alibaba's **proprietary flagship of the Qwen3.7 series**, announced at Alibaba Cloud Summit **2026-05-20** (blog 2026-05-21: "Qwen3.7: The Agent Frontier"); preview had appeared on Arena AI / Qwen Chat a day earlier. Sits above Qwen 3.7 Plus in the line.
- **Short description:** **Agent-era flagship**: "text input and output, designed for agent-centric workloads, with particular strengths in coding, office and productivity tasks, and long-horizon autonomous execution" with "notable gains in coding and agentic performance over prior Qwen generations" (OpenRouter) and explicit prompt caching. Launch demo: **35-hour continuous autonomous kernel-optimization run on an unseen T-Head ZW-M890 PPU** — 1,158 tool calls, 10× geometric-mean speedup over the Triton reference. First domestic model on Arena AI at release. **Text-only** (unlike the multimodal 3.7-Plus).
- **Provider / access:** Alibaba Cloud Model Studio / Qwen ecosystem + OpenRouter `qwen/qwen3.7-max` (created 2026-05-21) and other OpenAI-compatible routers. Proprietary.
- **Release / knowledge:** 2026-05-19/21.
- **Context window:** **1,000,000 in / 131,072 max out** (meta; OpenRouter 1.0M).
- **Modalities:** **text in, text out** (+ reasoning traces and tool calls; no image input).
- **Pricing:** **$1.48 / $4.43 per 1M** (OpenRouter $1.475/$4.425; meta), **cached ~$0.25**; ModelRegistry lists an official-looking $2.5/$7.5 tier — price-registry conflict flagged, OpenRouter used.

### Raw benchmarks found

> Primary: Alibaba launch post (self-reported, May 2026; methodology footnotes: TB2.0
> Harbor/Terminus-2 5-run avg, 256K ctx; SWE series internal scaffold, 200K ctx).
> **No AA, BenchLM, Epoch or Vals entry exists for this model** — every row below is
> vendor-run or third-party transcribed (TheRouter, W&B, DataCamp, Benchmark Registry).

Agentic / tool use:

- **Terminal-Bench 2.0 (Terminus): 69.7** — leads DeepSeek-V4-Pro Max 67.9, K2.6 Thinking 66.7, Opus-4.6 Max 65.4.
- **MCP Atlas: 76.4** — near-top per W&B ("leads or near-top on MCP-Mark, Apex").
- CoWorkBench (long-horizon CS/finance/legal/medical/productivity), SkillsBench (78 tasks via OpenCode), QwenWorldBench, VITA-Bench evaluated — values not disclosed in fetched coverage; YC-Bench startup sim **$2.08M revenue** (2× Qwen3.6-Plus's $1.05M).
- Not present: OSWorld, τ², BrowseComp, GDPval, Toolathlon.

Coding:

- **SWE-bench Verified: 80.4** (par with Opus-4.6 Max 80.8, DS-V4-Pro Max 80.6).
- **SWE-bench Pro: 60.6** — highest in the launch comparison (K2.6 59.5, DS-V4-Pro 59.0).
- **SWE-bench Multilingual: 78.3** (beats Opus-4.6 Max 77.5). **SciCode: 53.5** — just under the 55 reference (Opus-4.6 Max 51.9).
- NL2Repo 47.2; QwenSVG 1608; Kernel-Bench L3 10× speedup (35-h run).

Reasoning & knowledge:

- **GPQA Diamond: 92.4** ✓ — tops Opus-4.6 (91.3), K2.6 (90.5), DS-V4-Pro (90.1).
- **HLE: 41.4** ✓ — clears 40 (Opus-4.6: 40.0). **HMMT Feb-2026: 97.1** (Opus-4.6: 96.2); IMOAnswerBench 90; **APEX 44.5** (DS-V4-Pro 38.3); xhigh-effort reasoning mode at launch.
- No AA Intelligence Index, no Omniscience, no ARC row (model absent from AA).

Multimodal / long context:

- Text-only — no image/video rows at all (multimodal scored on the text-only band).
- **MRCR-v2 128K subset evaluated** at launch — score not published in fetched sources; no other retrieval row.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.0 69.7 and MCP Atlas 76.4 are leading agentic rows with strong cowork/skills/world-model demos; no OSWorld/τ²/BrowseComp-class independent coverage holds it under 90.
- **Reasoning: 89/100.** GPQA 92.4, HLE 41.4, HMMT 97.1, APEX 44.5 all clear their references — capped below 90 because every row is vendor-run with zero independent evaluation (AA/BenchLM/Epoch absence).
- **Context window: 94/100.** 1M/131K on two registries — 1M-class but with no published retrieval/LCR value (MRCR-v2 run, number withheld).
- **Multimodal: 55/100.** Text-only model → baseline text band, despite the sibling 3.7-Plus being video-capable.
- **Coding: 86/100.** SWE-Pro 60.6 (best in class at launch), SWE-Multi 78.3, SWE-V 80.4 par-with-frontier, TB2.0 69.7; SciCode 53.5 misses 55 and SWE-V is 5 points under the 85 ref.
- **Cost efficiency: 85/100** (excluded from Overall). $1.48/$4.43 with ~$0.25 cache sits a touch above the $1.25/$4.25 ≈ 88 anchor (registry $2.5/$7.5 conflict flagged); 65% cheaper than $5/$25-class Opus tiers for par-on-SWE-V capability.
- **Overall Score: 82/100.** (87+89+94+55+86)/5 = 82.2 → 82 — the text-only agent flagship: launch-leading TB2.0/MCP Atlas/SWE-Pro and reference-clearing GPQA/HLE/HMMT, held down by single-source vendor evidence, no long-context proof, and a hard 55 on multimodal that its image+video sibling 3.7-Plus does not share.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — alibabacloud.com/blog/qwen3-7-the-agent-frontier_603154 (launch rows + eval footnotes), OpenRouter API/model page (release date, pricing, positioning), TheRouter.ai, W&B ml-news, DataCamp, explainx.ai (comparison-table rows vs Opus-4.6 Max / DS-V4-Pro Max / K2.6), Benchmark Registry + ModelRegistry (row provenance, price conflict), web search for coverage; direct BenchLM/AA/llm-stats checks all 404 (model untracked). Scores are normalized 1–100 interpretations, not official vendor scores; family ordering checked against own Qwen 3.7-Plus (83, multimodal) and 3.8-Max (88) reports — text-only band enforced here.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
