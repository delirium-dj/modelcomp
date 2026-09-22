# GPT-5.6 Sol — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5-6-sol`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI flagship tier of the GPT-5.6 family (preview 2026-07-09): #1 AA Coding Agent Index (80), SOTA Terminal-Bench 2.1 (88.8%; Ultra 91.9%), DeepSWE 72.7%, GPQA 94.6%, ARC-AGI 97.5%; `max`/`ultra` (4-agent parallel) reasoning modes. Promo API price cut ≥20% through 2026-11-21.
- **Provider / access:** OpenAI API `gpt-5.6-sol` (alias `gpt-5.6` routes here); ChatGPT / Codex; Fast mode (2.5× speed, 2× price) replaces Priority Processing. Closed API — no open weights.
- **Release / knowledge:** 2026-07-09; knowledge cutoff **2026-02-16** (API model docs; Benchgen's "Sep 2025 estimated" superseded).
- **IDs:** `gpt-5.6-sol`, alias `gpt-5.6`.
- **Context window:** **1,050,000** input (API docs); ~1.1M cited by Benchgen; 128,000 max output.
- **Modalities:** text + image in; text out; reasoning.effort `none|low|medium|high|xhigh|max` (+ `ultra` multi-agent); tool calls yes; JSON mode yes; prompt caching with explicit breakpoints, 30-min min cache life; cache write 1.25× input, cache read 90% off.
- **Pricing (as of 2026-09-22):** list **$5.00 in / $30.00 out per 1M** (launch); **current promo $4.00 / $20.00** (≥20% in / 33% out cut, available at least through 2026-11-21 per API docs); cached input $0.40; Fast mode 2× standard. Paid API.
- **Architecture:** proprietary (GPT-5.6 family; params undisclosed).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (OpenAI; **SOTA**; Sol Ultra **91.9%**; vs GPT-5.5 85.6, Fable 5 83.1, Opus 4.8 78.9)
- BrowseComp: **90.84%** (OpenAI)
- MCP Atlas: **81.8%** (Benchgen eval)
- Agent's Last Exam: **52.7%** (Benchgen/OpenAI; top in 5.6 lineup)
- Artificial Analysis Coding Agent Index v1.1: **80** (#1; Codex harness — ties/leads DeepSWE, TB2, SWE-Atlas-QnA; ~40% cheaper per task than Fable 5 max, ~10% cheaper than Opus 4.8 max)
- OSWorld / Toolathlon / Tau3 / Claw-Eval / Finance Agent: no verified public score found for Sol in sources read

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (OpenAI technical report via Benchgen)
- ARC-AGI: **97.5%** (Benchgen evaluation — label as ARC-AGI; near-ceiling abstract reasoning)
- AIME 2026: **99.9%** (OpenAI)
- SimpleQA: **71.6%** (OpenAI)
- Artificial Analysis Intelligence Index: **58.9–59** (AA max-effort; 1 pt below Claude Fable 5 max, ~⅓ cost)
- HLE / FrontierMath / CritPt: no verified public score found for Sol specifically

Coding:

- Terminal-Bench 2.1: **88.8%** (SOTA; see agent row)
- DeepSWE v1.1: **72.7%** (OpenAI; vs Terra 69.6, Luna 67.2, Fable 5 69.7, Opus 4.8 59)
- SWE-Bench Pro: **64.6%** (OpenAI; vs Fable 5 80, Opus 4.8 69.2, Terra 63.4 — trails Anthropic Fable/Opus on Pro despite TB/DeepSWE leads)
- LiveCodeBench / SWE-bench Verified: no verified public score found for Sol

Long context:

- OpenAI MRCR v2 8-needle 256K–512K: **91.5%** (OpenAI)
- OpenAI MRCR v2 8-needle 512K–1M: **73.8%** (OpenAI; vs GPT-5.5 74% flat, strong at full window)
- GraphWalks BFS 256k F1: **90.7%** (OpenAI; vs Opus 4.8 85.9, Fable 5 91.1)
- GraphWalks BFS 1mil F1: **77.1%** (OpenAI; #1 in table vs Fable 5 79.4 close, Opus 4.8 68.1, GPT-5.5 45.4)

Multimodal:

- Text + image in (multimodal per Benchgen); no video/audio; no MMMU/CharXiv row for Sol: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 95/100.** TB2.1 88.8% SOTA (Ultra 91.9), BrowseComp 90.84, ALE 52.7, MCP 81.8, AA Coding Agent Index 80 #1; capped by missing OSWorld/Tau3/Claw rows.
- **Reasoning: 96/100.** GPQA 94.6, ARC-AGI 97.5, AIME 99.9, AA Intelligence Index 59 (near-Fable); capped only by missing HLE/FrontierMath rows for this id.
- **Context window: 95/100.** 1.05M window; MRCR 91.5% @256–512K and 73.8% @512K–1M + GraphWalks 77.1% @1M — among the best published full-window retrieval; short of ≥98% @512K+ bar → 95.
- **Multimodal: 65/100.** Text + image in only → 60–70 band → 65 (no video/audio, no MMMU row).
- **Coding: 96/100.** TB2.1 88.8 SOTA, DeepSWE 72.7 leading, Coding Agent Index 80 #1 with lower $/task than Fable/Opus; capped by SWE-Pro 64.6 trailing Fable 5 (80) and Opus 4.8 (69.2).
- **Cost efficiency: 55/100.** Promo $4/$20 (list $5/$30) — mid-premium; cache read 90% off helps, cache write 1.25× and Fast mode 2× push spend up on heavy loops.
- **Overall Score: 89/100.** Mean of five quality dims (95+96+95+65+96)/5 = 89.4 → 89. Best-fit: terminal/long-horizon coding + high-stakes scientific reasoning where TB/DeepSWE/ARC matter more than SWE-Pro or audio/video modalities; `ultra` multi-agent for hardest BrowseComp/SEC-Bench class tasks.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (OpenAI GPT-5.6 preview + family launch + price-performance posts, OpenAI API model docs, Artificial Analysis GPT-5.6 article, Benchgen model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
