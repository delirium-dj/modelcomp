# GPT-5.6 Terra — findings by Muse Spark 1.3 Contributor

- Source: OpenAI/GPT-5.6 Terra, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: Sol-contaminated rows replaced with Terra absolutes, modality corrected, scores recomputed 90 → 87); re-verified 2026-09-29 (UTC, user-signed-off re-research: TB2.1-label fix, SWE-V 85.2 + GPQA 88.0 vendor variants + GDPval 1528 + Coding Index 77.4 + cache/long-context pricing added, cutoff firmed 02-16; Tool 87 → 88, Context 100 → 98 — Overall holds 87)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (OpenAI flagship 5.6 generation)
- **Short description:** OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis.
- **Provider / access:** OpenAI via API + Codex (`openai/gpt-5.6-terra`); no Zen Free ID (Chat Completions + Responses API, tool calling + MCP).
- **Release / knowledge:** 2026-07-09 GA (preview 06-26); knowledge cutoff Feb 16, 2026 (API docs — re-verified 2026-09-29)
- **IDs:** `openai/gpt-5.6-terra` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,050,000 (1.05M) / 128K out — verified via OpenAI model catalog (amended 2026-09-27).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes (OpenAI catalog; corrects filed audio/video/PDF claim)
- **Pricing (as of 2026-09-18, re-verified 2026-09-29):** $2/$12 per 1M after 20% cut (was $2.50/$15); cache $0.20 read / 1.25x-input writes; >272K-token requests 2x in / 1.5x out; no Zen Free ID
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI launch table; version corrected 2.0 → 2.1 on re-verification 2026-09-29 — TB2.1 confirmed by 3.7-card table; Vals lane 77.5% retained); Terminal-Bench 3.0: **20.8%** (BenchLM mirror; 3.7-card corroborates)
- BrowseComp: **87.5%** (BenchLM mirror)
- OSWorld 2.0: **50.2%** (BenchLM mirror)
- CyberGym: **81.8%** (BenchLM mirror); **ExploitGym 23.2%** (BenchLM mirror)
- Toolathlon: **53.1%** (BenchLM mirror)
- GDPval-AA v2: **1528 Elo** (3.8-card comparison column — re-verified 2026-09-29)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (BenchLM mirror); **88.0%** (OpenAI system card — harness variance noted — re-verified 2026-09-29)
- ARC-AGI-2: **83.9%** (BenchLM mirror); **ARC-AGI-3 0.8%** (BenchLM mirror — weak tail)
- FrontierMath: **84.9% Tiers 1–3 / 68.3% Tier 4** (BenchLM mirror)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **71.44–73.21 BenchLM overall** (public lane #12–14); no Terra-specific AA Index found (filed 59 was Sol's — removed)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (filed 92% rate was Sol's — removed)

Coding:

- SWE-bench Verified: **85.2%** (OpenAI system card; Vals lane 95.4% retained — harness variance noted — re-verified 2026-09-29); SWE-Pro: **63.4%** (BenchLM mirror; Morph corroborates)
- LiveCodeBench: **85.9% LiveCodeBench Vals** (BenchLM mirror)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **69.6% DeepSWE** (BenchLM mirror; llm-stats 0.700 #5); **55.8% FrontierCode 1.1 Extended** (BenchLM mirror); **64.9% cursorBench32** and **87.0% VulcanBench v3** (BenchLM mirrors); **77.4 Coding Agent Index** (OpenAI launch table — re-verified 2026-09-29)

Long context:

- **1.05M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 87.4% plus BrowseComp 87.5%, GDPval 1528 and CyberGym 81.8% show strong balanced-tier orchestration; capped by Toolathlon 53.1%, OSWorld 50.2% and no Tau3/Claw numbers.
- **Reasoning: 90/100.** GPQA 92.9% plus ARC-AGI-2 83.9% and FrontierMath T1–3 84.9% show strong balanced-tier reasoning; capped by the ARC-AGI-3 0.8% tail and no HLE/LCR/CritPt numbers.
- **Context window: 98/100.** 1.05M / 128K out verified; capped with no retrieval-saturation proof.
- **Multimodal: 68/100.** Text + image in only (catalog; filed audio/video/PDF claim corrected), text out; capped in the image-in tier.
- **Coding: 90/100.** SWE-V 85.2% vendor (95.4% Vals lane) plus LiveCode 85.9%, Coding Index 77.4%, VulcanBench 87.0% and DeepSWE 69.6% show elite balanced-tier engineering; capped by SWE-Pro 63.4% and no SciCode/Vibe numbers.
- **Cost efficiency: 55/100.** $2/$12 per 1M after the 20% cut (was $2.50/$15); mid paid value below Sol promo.
- **Overall Score: 87/100.** Mean of the five non-cost dims (88+90+98+68+90)/5 = 86.8 → 87; best-fit balanced OpenAI tier below Sol — now evidence-backed.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis Astra + 1.2 articles); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
