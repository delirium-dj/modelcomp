- Source: SpaceXAI/Grok 4.7
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's 2026-09-22 model for programming and knowledge work, built on a larger base with a longer RL cycle and stronger long-horizon/self-check/long-context management. Part of a "parallel model" strategy shipping a new Grok generation roughly every two weeks. A distinct model; Grok 4.6 is its predecessor and Grok Bot is an agent product.
- **Provider / access:** API, Cursor and other third-party tools, Grok Build coding agent; new safety protection system at launch. A next-generation **2.5T-parameter Grok 4.8** was already trained at release.
- **Release / knowledge:** officially 2026-09-22 (Musk had confirmed a planned 2026-08-21 date on 2026-07-24); knowledge cutoff: no verified public score found.
- **IDs:** `grok-4.7` family ID as cited. No free Zen ID verified.
- **Context window:** **500,000 tokens** in Cursor and other third-party tools, up from Grok 4.6's **256K** in those tools (the Grok 4.6 Baike article states 500K overall for 4.6 — a source discrepancy; both figures reported separately, not merged).
- **Modalities:** text and image in, text out (creative/design strength noted in a third-party evaluation); native understanding of the Grok Bot runtime framework; programming and knowledge work. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$2 / 1M input, $6 / 1M output** ($3.00 blended 3:1), **63 tok/s** (third-party evaluation page, data as of ~2026-11-11).
- **Architecture:** **2.1 trillion parameters**, **+40%** over Grok 4.6; longer RL training with emphasis on long tasks, self-checking and long-context management. Parameter count disclosed, activation count not.

### Raw benchmarks found

Agent / tool use:

- Intelligence index: **46** (Baike); a third-party evaluation page lists AA Intelligence Index v5 **35.5**, global **#13** — different index versions, reported separately, not merged
- Coding agent index: **56**, ranked **#4**
- CursorBench 4.0: **46.3%**
- LiveBench design score reported above Gemini 4 Argon (third-party, directional)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Baike intelligence index **46** and third-party AA v5 **35.5 (#13)** as above — launch coverage described the benchmark results as disappointing relative to the price cut
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found for this exact ID

Coding:

- Coding agent index **56 (#4)** and CursorBench 4.0 **46.3%** as above
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 500K context in third-party tools, with training emphasis on long-context management; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 86/100.** A #4 coding-agent index (56), 46.3% CursorBench 4.0, native Grok Bot framework understanding and a 500K window with long-task/self-check training; capped by no τ-bench/OSWorld/GDPval figure.
- **Reasoning: 82/100.** 2.1T params (+40%) with an extended RL cycle; capped by an intelligence index of 46 / AA v5 35.5 (#13), launch coverage calling the scores disappointing, and no GPQA/HLE numbers.
- **Context window: 87/100.** 500K in third-party tools (2x its predecessor's 256K there) with explicit long-context-management training; capped by conflicting published window figures and no retrieval benchmark.
- **Multimodal: 82/100.** Text + image input with a reported design/creativity strength (LiveBench design above Gemini 4 Argon); capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 86/100.** Coding agent index 56 at #4 and CursorBench 4.0 46.3%; capped by no SWE-bench/Terminal-Bench figure and the modest index scores.
- **Cost efficiency: 84/100.** $2/$6 per 1M at 63 tok/s — same price as Grok 4.6 with more parameters; capped by a third-party verdict that 12 index points per dollar is only middling and only 500K context. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 86, 82, 87, 82, 86 = 84.6 → 85. Best fit: Cursor/Grok Build coding-agent workloads at a low price point; not a frontier-reasoning choice.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Grok 4.7 article retrieved via public web search excerpt (2.1T params, 500K context, intelligence index 46, coding agent index 56/#4, CursorBench 4.0 46.3%, release timeline), the Baidu Baike Grok 4.6 article (already fetched) for the predecessor context figure, and a third-party evaluation page for pricing/speed/AA v5 — explicitly labelled third-party. The conflicting 46 / 35.5 index figures and 256K / 500K context figures are reported separately by source, never merged. Grok Bot and Grok 4.8 are treated as separate product/model entities. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [Grok 4.7 — 百度百科 (retrieved via search excerpt; specs and benchmarks)](https://baike.baidu.com/item/Grok%204.7/68773312)
  - [Grok 4.6 — 百度百科 (predecessor context/pricing, already fetched)](https://baike.baidu.com/item/Grok%204.6/68439175)
  - [Grok 4.7 评测 — 皮皮 AI 评测榜 (third-party price, speed, AA v5)](https://www.ppv9.com/model/grok-4-7/)
