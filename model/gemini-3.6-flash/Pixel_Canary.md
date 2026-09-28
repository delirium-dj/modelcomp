# Gemini 3.6 Flash — findings by Pixel Canary

- Source: Google / Gemini 3.6 Flash (`google/gemini-3.6-flash`, `gemini-3.6-flash` on routers)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash — Google's mid-2026 multimodal reasoning Flash model for agentic coding, knowledge work and spatial reasoning.
- **Short description:** The speed/cost sweet spot of the 3.x Flash line: 178.96 tok/s at $0.75 / $3.75, with a real (if unspectacular) 83.00% OSWorld-Verified computer-use score. Sits between Gemini 3.5 Flash (75.95) and 3.7 Flash (80.41) on the tracker.
- **Provider / access:** Google AI Studio / Vertex (`gemini-3.6-flash`); 25 tracked offerings incl. Pioneer, Abacus, 302.AI and AIHubMix at $1.50 / $7.50; cheapest tracked route $0.375 / $1.88 (Kilo Gateway).
- **Release / knowledge:** released 2026-07-21; knowledge cutoff **2026-03-31** (LLMBoard specification block).
- **IDs:** `google/gemini-3.6-flash`, `gemini-3.6-flash`. Free tier: yes — Google AI Studio and OpenCode Zen free tier with standard rate limits.
- **Context window:** 1M input / **65,536 max output** tokens (runtime row: Max Input 1M, Max Output 65.5K) — the output ceiling, not the input window, is this model's binding constraint for long agent turns.
- **Modalities:** audio, image, text and video in; text out. PDF input also documented on the product blurb; tool use and vision supported; no generation output.
- **Pricing (as of 2026-09-27):** official Google $0.75 / 1M input, $3.75 / 1M output; routers typically $1.50 / $7.50; floor $0.375 / $1.88 (Kilo Gateway). Cache-read and batch rates not published for this ID (no verified public figure). Free tier available on AI Studio and OpenCode Zen.
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-13 → 2026-09-27): 30 rows published, coverage flagged as **80% over only 6 benchmark families** — a wide table built on a narrow evidence base; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **75.1**.

Agent / tool use:

- OSWorld-Verified (computer use): **83.00%** (#5/26) — the strongest measured agentic row for this ID
- LM Arena Agent Tool Hallucination: **0.31%** (#21/39, lower is better) — rarely invents tools
- MLE-Bench: **63.90%** (#1/2 — two-model field, no ranking value)
- GDPval-AA, Terminal-Bench, tau-bench family, DeepSWE, MCP Atlas, BrowseComp: no verified public score found

Reasoning / knowledge:

- AA GPQA Diamond: **92.83%** (#15/199) — high absolute score in a very large pool
- LiveBench reasoning (2026-06-25): **85.15** (#21/41); LiveBench instruction **75.37** (#8/41)
- AA Omniscience Accuracy: **49.97%** (#17/201) — mid-field abstention behaviour
- LM Arena Text: **1478.32** (#17/218); Text Factuality **1470.08** (#20/128); Text Style Control **1481.93** (#17/218)
- HLE / ARC-AGI / CritPt rows for this ID: not present — no verified public score found

Coding:

- SWE-Bench Pro: **58.70%** (#22/59) — the only repo-scale coding row, mid-pack in a large field
- SWE-bench Verified / DeepSWE / LiveCodeBench / Terminal-Bench / SciCode: no verified public score found

Long context:

- MRCR v2 (8-needle): **54.00%** (#10/25) — measured, but well below Muse Spark 1.3's 98.50% on the same test; the 1M window is real, the retrieval is middling.

Vision: CharXiv-R **89.40%** (#8/58); LM Arena Vision **1299.76** (#13/111); Vision Style Control **1282.72** (#17/111); Document **1456.06** (#19/38).

Runtime: **178.96 tok/s** with **2.52 s** catalog latency on Google — the fastest measured endpoint in the entire dataset.

### Normalized scores (1-100)

- **Tool use: 80/100.** OSWorld-Verified 83.00% (#5/26) is genuine desktop-control ability and LM Arena Agent Tool Hallucination 0.31% (#21/39) means it rarely fabricates tools; capped because GDPval-AA, Terminal-Bench, tau and MCP-class rows do not exist for this ID and MLE-Bench's 63.90% is a two-model field.
- **Reasoning: 84/100.** AA GPQA Diamond 92.83% across 199 models (#15) and LiveBench reasoning 85.15 (#21/41) are solid for a Flash-class model, but Omniscience accuracy 49.97% (#17/201) shows weak abstention and Text Factuality 1470.08 is only #20/128.
- **Context window: 78/100.** 1M input is competitive, but MRCR v2 (8-needle) 54.00% (#10/25) is a mediocre measured retrieval result and the 65.5K output ceiling is half the current frontier - a long agent transcript can be read but not written.
- **Multimodal: 84/100.** Audio, image, video, PDF and text input with CharXiv-R 89.40% (#8/58) and LM Arena Vision 1299.76 (#13/111) as real measured evidence; capped by text-only output.
- **Coding: 70/100.** SWE-Bench Pro 58.70% (#22/59) is the only repo-scale datapoint and it is mid-pack; no SWE-bench Verified, DeepSWE, Terminal-Bench or LiveCodeBench row exists, so agentic coding is unverified beyond one test.
- **Cost efficiency: 94/100.** $0.75 / $3.75 official with a $0.375 / $1.88 router floor, a genuine AI Studio / Zen free tier, and 178.96 tok/s at 2.52 s - the best cost-per-token-per-second combination measured in this dataset; docked only for unquantified cache economics.
- **Overall Score: 79.2/100.** Half-up mean of (80 + 84 + 78 + 84 + 70) = 396 / 5 = 79.2, Cost excluded. Cross-check: the independent LLMBoard composite is 75.1, within 4 points. Note the divergence from this folder's `average.md` queue value - the published averages here cluster higher than the external evidence supports, largely because they include self-reported vendor numbers. Best fit: high-throughput multimodal agents, GUI/computer-use loops and cheap bulk classification where output length stays short.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables + local `meta.json` for free-tier notes); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
