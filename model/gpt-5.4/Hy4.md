- Source: OpenAI/GPT-5.4
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's 2026-03-05 unified frontier model that merged GPT-5.3-Codex's coding, GPT-5.2's general reasoning and **native Computer Use** into one system — the "digital employee" generation. A distinct model; GPT-5.4 Pro, Thinking, mini and nano are separate variants.
- **Provider / access:** ChatGPT, OpenAI API and Codex; Thinking mode for Plus/Team/Pro, Pro tier for Pro/Enterprise, mini as a low-cost fallback (Free/Go users get mini via the "Thinking" menu), nano API-only.
- **Release / knowledge:** 2026-03-05 (mini/nano 2026-03-18); knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.4` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (the Baike article states 1M for the series and explicitly for the Pro version); long-context requests above a threshold may incur higher rates.
- **Modalities:** text and image in, text out; **native Computer Use** (screenshot → analyse → act → verify closed loop, emitting mouse/keyboard actions in the same inference), end-to-end visual understanding of spatial relations and chart data; spreadsheets, presentations and documents; deep reasoning with visible thinking paths and deep web search. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the Baike article — no verified public price found. A third-party tracker (BenchGecko, data as of 2026-11-08) lists **$2.50 / 1M input, $15 / 1M output** for the standard variant and $1.25/$7.50 for batch — labelled third-party.
- **Architecture:** MoE with dynamic sparse activation — reportedly **16 experts, ~1.8T total parameters, ~280B (~15%) active** per inference (technical estimate, not a vendor disclosure). `reasoning_effort` adjustable across low/medium/high/very-high. **Tool Search** fetches tool definitions on demand, cutting total tokens on multi-tool tasks by **47%**; Codex `/fast` mode ~**1.5x** token generation speed.

### Raw benchmarks found

Agent / tool use:

- Native Computer Use closed-loop operation with visual UI understanding (qualitative; no OSWorld figure in the Baike article)
- Tool Search: **47% fewer total tokens** on multi-tool tasks at unchanged accuracy
- Multi-hour workflows with better retention of user requests and runtime parameters, lower error rates (qualitative)
- Third-party BenchGecko (34 benchmarks, avg **64.8**, rank #59): Terminal-Bench **81.8**, SWE-bench Verified **76.9**, Chatbot Arena Elo Overall **1464.8**, Coding **1395.0**, OTIS Mock AIME 2024-25 **97.8**, ARC-AGI **93.7**, ARC-AGI-2 **74.0**, FrontierMath Tiers 1-3 **82.7**, Tier 4 **49.0**, WeirdML **57.4** — labelled third-party aggregator
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- ARC-AGI **93.7%**, ARC-AGI-2 **74.0%**, OTIS Mock AIME **97.8%** (third-party aggregator)
- SWE-bench Pro **57.7%** — cited in the Claude Opus 4.7 comparison as GPT-5.4's figure (comparison row, labelled by harness)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified **76.9%** and Terminal-Bench **81.8%** (third-party aggregator)
- SWE-bench Pro **57.7%** as above
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M-token window with long-context rate tiers; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 92/100.** First native Computer Use in an OpenAI unified model, 47% fewer multi-tool tokens, strong Terminal-Bench 81.8 and multi-hour workflow stability; capped by no OSWorld/AutomationBench figure and no vendor-published agent score.
- **Reasoning: 90/100.** ARC-AGI 93.7%, ARC-AGI-2 74.0%, OTIS AIME 97.8% and adjustable reasoning effort; capped by FrontierMath Tier 4 49.0% and no GPQA/HLE figure.
- **Context window: 92/100.** A 1M-token window with long-context pricing tiers and durable parameter retention across hours-long workflows; capped by no long-context retrieval benchmark and higher long-context rates.
- **Multimodal: 87/100.** End-to-end visual/spatial/chart understanding driving native computer actions; capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 91/100.** SWE-bench Verified 76.9%, Terminal-Bench 81.8% and inherited GPT-5.3-Codex coding; capped by SWE-bench Pro 57.7% and no LiveCodeBench figure.
- **Cost efficiency: 78/100.** $2.50/$15 per 1M (third-party), 47% token savings via Tool Search, a 1.5x fast mode and cheap mini/nano fallbacks; capped by no official rate card and long-context surcharges. Excluded from Overall.
- **Overall Score: 90/100.** Half-up mean of 92, 90, 92, 87, 91 = 90.4 → 90. Best fit: desktop-automation "digital employee" workflows and long-horizon coding where native Computer Use and a 1M window matter.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.4 article (release, unified architecture, native Computer Use, 1M context, reasoning_effort, Tool Search 47%, /fast 1.5x, variant lineup), cross-checked against the Baidu Baike GPT-5.4 Pro and Claude Opus 4.7 articles for the Pro-tier identity and the SWE-bench Pro 57.7% comparison row. Third-party aggregator figures (BenchGecko) and the ~1.8T/280B MoE technical estimate are explicitly labelled as such, not vendor disclosures. GPT-5.4 Pro / Thinking / mini / nano are treated as separate variants. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [GPT-5.4 — 百度百科 (architecture, Computer Use, 1M context, Tool Search, variants)](https://baike.baidu.com/item/GPT-5.4/67448260)
  - [GPT-5.4 Pro — 百度百科 (distinct Pro variant identity)](https://baike.baidu.com/item/GPT-5.4%20Pro/67451275)
  - [Claude Opus 4.7 — 百度百科 (SWE-bench Pro 57.7% comparison row)](https://baike.baidu.com/item/Claude%20Opus%204.7/67623873)
