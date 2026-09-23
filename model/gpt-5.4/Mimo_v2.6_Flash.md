# GPT-5.4 — findings by Mimo v2.6 Flash

- Source: OpenAI / GPT-5.4 (`gpt-5.4`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (API `gpt-5.4`; ChatGPT ships as GPT-5.4 Thinking)
- **Short description:** OpenAI's March 2026 professional-work frontier that unified Codex-class coding, agentic tool use, and native computer-use into one model; pairs with `gpt-5.4-pro` for max-effort tasks. Not an alias of `gpt-5.5` / `gpt-5.6-*`.
- **Provider / access:** OpenAI API (Chat Completions + Responses), Azure OpenAI, Codex, ChatGPT Plus/Team/Pro/Enterprise. `opencode/gpt-5.4` referenced by folder meta.
- **Release / knowledge:** **2026-03-05** (OpenAI product release); mini/nano siblings 2026-03-17; knowledge cutoff **2025-08-31**.
- **IDs:** `gpt-5.4` (OpenAI). Paid API only for scoring — no $0 Free ID used.
- **Context window:** up to **1.05M** tokens (standard billed window **272K**; requests over 272K count at **2×** input rate; Codex experimental 1M via `model_context_window`). Max output **128K** (Vals/Requesty).
- **Modalities:** text / image / file in; text out; native computer use; tool search, agentic tool calling, web search, code execution, structured outputs, prompt caching; reasoning efforts up to xhigh.
- **Pricing (as of 2026-09-23):** **$2.50 / $15.00** per 1M in/out under 272K; cached input **$0.25** (−90%); above 272K input effectively **$5.00**; Batch/Flex half rate, Priority 2×. Pro tier $30/$180 is a separate SKU.
- **Architecture:** proprietary (undisclosed params).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** at xhigh (OpenAI); Known Good index cites Terminal-Bench **82** (composite row — harness label differs)
- Terminal-Bench 2.1: no verified public score found under the 2.1 label for this ID in reviewed rows
- Tau2 / τ²-bench (telecom): **98.9%** at xhigh (OpenAI launch table)
- Tau3-Banking: no verified public score found
- GDPval: **83.0%** (OpenAI knowledge-work eval; vs 70.9% GPT-5.2)
- OSWorld-Verified: **75%** (OpenAI / BenchLM)
- MCP Atlas: **67.2%** (OpenAI mini-launch table) / **70.6%** (BenchLM)
- Toolathlon: **54.6%** (OpenAI)
- Claw-Eval: **60.3%** (BenchLM — first non-null Claw row in this agent's queue so far)
- BrowseComp: **82.7%**; CyberGym **79.0%**; Gert Labs 64.89%; JobBench 38.9%; DeepSearchQA 73.6%
- Agentic public-lane composite: **56.4 (#35/151)** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.0%** at xhigh (OpenAI mini/nano comparison table); BenchLM **92.8%**; Known Good **93**; AA low-effort run **87**
- HLE with tools: **52.1%**; HLE without tools: **39.8%** (OpenAI)
- ARC-AGI-2: **74.0%** (BenchLM) / **83.3%** on Pro-tier row (not this SKU)
- LCR / CritPt: no verified public score found as standalone rows for `gpt-5.4`
- Mock AIME 2024–25: **98** (Known Good / Epoch ingest); FrontierMath v2 T1–3 on Pro 50% (Pro SKU — not counted as base)
- Known Good Index: **91 (#9 of 65)** composite (GPQA, Mock AIME, MATH L5, SWE-V, LiveBench, HLE, Terminal-Bench)
- AA Intelligence Index: **39.1** at low effort (44B/AA mirror); higher efforts not pinned in reviewed rows
- Omniscience Accuracy / Hallucination Rate: no verified public score found for this ID
- Text Arena Elo: **1453** (Known Good ingest)

Coding:

- SWE-bench Pro (Public, xhigh): **57.7%** (OpenAI); Scale standardized public **59.1%** (Morph/Scale leaderboard, ±3.56 CI)
- SWE-bench Verified: **77** (Known Good/Epoch; ~80% cited in guide wrap-ups vs Opus 4.6 80.8%)
- LiveCodeBench Pro: **87.5%** (BenchLM)
- Vibe Code Bench: **67.42%** (BenchLM; Vals notes #1 on Vibe at launch)
- Terminal-Bench 2.0: **75.1%** (doubles as coding+agent row)
- SciCode / AA-SciCode: no verified public standalone % for `gpt-5.4` in reviewed rows (mini has 52.1 AA-SciCode — not reused)
- DeepSWE: no verified public score found for this ID
- Spreadsheet modeling (internal): **87.3%** mean vs 68.4% GPT-5.2 (OpenAI — internal, listed as vendor claim)

Long context (OpenAI launch long-context table):

- MRCR v2 8-needle: **97.3%** 4–8K; **91.4%** 8–16K; **97.2%** 16–32K; **90.5%** 32–64K; **86.0%** 64–128K; **79.3%** 128–256K (higher buckets truncated in capture — trend declines toward 1M)
- Graphwalks BFS 0–128K: **93.0%**; 256K–1M: **21.4%**; parents 0–128K **89.8%**; parents 256K–1M **32.4%**
- Net: excellent mid-context retrieval, steep drop in the 256K–1M band despite 1.05M window

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.0 75.1%, OSWorld 75%, τ² 98.9%, Claw-Eval 60.3%, MCP Atlas ~70%, GDPval 83% clear the mid band and approach frontier (TB2.1 ~88 / Tau3 ~50+ refs) but TB2.0 short of 88+ and no TB2.1/Tau3 row caps the low-90s.
- **Reasoning: 90/100.** GPQA Diamond 93% and HLE 52.1% (tools) / 39.8% (no tools) hit the frontier references (GPQA 90+, HLE 40+); missing CritPt/LCR rows and lower AA Index at low effort keep it at the bottom of the 90–100 band rather than mid-90s.
- **Context window: 90/100.** 1.05M window is ≥1M tier material, but Graphwalks collapses to 21–32% in the 256K–1M band and MRCR degrades past 128K — well short of the ≥98%-at-512K+ bar for 100.
- **Multimodal: 72/100.** Text/image/file in with MMMU-Pro 81.2% and CharXiv 82.8% sit above the basic image-in 60–70 band (vision quality), but no audio/video/PDF-native pipeline and text-only output block the 75+ video/PDF band.
- **Coding: 82/100.** SWE-Pro 57.7–59.1%, SWE-Verified ~77–80%, LiveCodeBench Pro 87.5%, Vibe 67.4% are solid upper-mid; still short of DeepSWE 74%+ / Coding Index 70%+ frontier refs, and no DeepSWE row for this ID.
- **Cost efficiency: 62/100.** $2.50/$15 sits on the methodology's ~$3/$15 ≈60 tier (with −90% cache helping repetitive agents); the 2× surcharge above 272K makes true 1M usage expensive — no Free ID.
- **Overall Score: 83.8/100.** Mean of (85 + 90 + 90 + 72 + 82) / 5 = 83.8; best-fit as OpenAI's balanced professional agent/coder when computer-use breadth matters and 272K+ pricing is acceptable.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-23
- Method: fresh public web research (OpenAI launch posts, BenchLM, Known Good/Epoch ingest, Scale/Morph SWE-Pro board, Vals, Requesty, Simon Willison summary); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
