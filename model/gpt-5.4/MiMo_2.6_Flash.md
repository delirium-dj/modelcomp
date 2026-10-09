# GPT-5.4 — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's "most capable and efficient frontier model for professional work" (released 2026-03-05 alongside GPT-5.4 Pro) — the first mainline GPT-5 with **native computer use** (code + screenshot modes; OSWorld-Verified 75.0 beats the 72.4 human baseline and nearly doubles GPT-5.2's 47.3), tool search (−47% tokens in agent workflows), and OpenAI's first 1M-token context (experimental in Codex/API). Three variants: standard, Thinking (ChatGPT default), and Pro ($30/$180). Positioned as GPT-5.3-Codex's coding strength plus breadth: SWE-Pro 57.7 matches/beats Codex at lower latency, GDPval 83.0 (+12 over 5.2), and a big HLE jump (52.1 with tools vs 45.5).
- **Provider / access:** OpenAI API (`gpt-5.4`, snapshot `gpt-5.4-2026-03-05`), ChatGPT (Plus/Team/Pro "GPT-5.4 Thinking"), Codex, Azure; GPT-5.4 Pro gated to Pro/Enterprise + API.
- **Release / knowledge:** released 2026-03-05; knowledge cutoff **2025-08-31**.
- **IDs:** `gpt-5.4` / `gpt-5.4-pro` / `gpt-5.4-2026-03-05`.
- **Context window:** **1,050,000 tokens** (1M experimental via `model_context_window`); **standard billed window 272K — above it the entire session bills 2× input / 1.5× output**; max output 28,000 per current API docs (128K cited by trackers). Context compaction/trajectory pruning supported.
- **Modalities:** text + images in, text out; reasoning yes (effort: none/low/medium/**high/xhigh** — xhigh used for launch evals); tool calls yes (tool search, computer use, code execution, web search; computer-use tool calls carry per-call fees).
- **Pricing (as of 2026-10-07):** **$2.50 in / $15.00 out** per 1M, cached input **$0.25** (90% off); Batch/Flex **50% off** ($1.25/$7.50); Priority 2×; regional endpoints +10%; >272K surcharge as above; GPT-5.4 Pro $30/$180 (12× the base). Priced above GPT-5.2's $1.75/$14 but below Claude Opus 4.6's $5/$25.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **75.0** (vendor) — **clears the 75% ref exactly**, above human baseline 72.4 (Opus 4.6 72.7)
- GDPval: **83.0** (vendor; vs 70.9 for 5.2) — best-in-class knowledge-work row; GDPval-AA-style comparisons show it beating Opus 4.6's 78.0
- BrowseComp: **82.7** (Pro: 89.3; Gemini 3.1 Pro 85.9); WebArena-Verified: 67.3; Toolathlon: **54.6** (vs Opus 4.6 44.8)
- Terminal-Bench 2.0: **75.1** (vendor; GPT-5.3-Codex 77.3 specialized); Terminal-Bench 2.1: **78.3** / TB-Hard 57.6 (ARMES aggregation — **under the 85% ref**)
- MCP-Atlas / ALE: no rows found

Reasoning / knowledge:

- GPQA Diamond: **92.8** (vendor xhigh; OpenRouter 90.3, ARMES 92.0 independent) — **clears the 90%+ ref** on all readings (Pro 94.4; Gemini 3.1 Pro 94.3 edges it)
- Humanity's Last Exam **with tools**: **52.1** — **clears the 40%+ ref** (Pro 58.7; note: tools variant)
- AA Intelligence Index: **39** (modelscale, independent) — **under the 60+ ref**
- ARC-AGI-2 (Verified): **73.3** (vs Gemini 3.1 Pro 77.1, Opus 4.6 68.8); ARC-AGI-1: 93.7; FrontierMath T1-3 47.6 / T4 27.1; LMArena 1,355

Coding (vendor unless noted):

- SWE-bench Verified: **77.2** (vendor; userightai 74.9 independent) — behind Opus 4.6 (80.8) and Gemini 3.1 Pro (80.6)
- SWE-bench Pro (Public): **57.7** (+0.9 over GPT-5.3-Codex); LiveCodeBench Pro: **87.5** (independent); no DeepSWE / SciCode / TB4.0 / coding-index rows
- Computer use angle: native computer use, −33% claimed error rate vs 5.2; Spreadsheet modeling 87.5

Long context (vendor-published, real retrieval rows):

- MRCR: **86.0% at 128K**, **36.6% at 512K–1M**; Graphwalks BFS: 93.0 (0–128K) → **21.4 (256K–1M)**, Graphwalks parents 32.4 — retrieval collapses past 256K, typical of the generation but far below any "≥98% at 512K" bar.

Multimodal:

- Text + image in; MMMU-Pro **81.2** (vendor); no video/audio/PDF rows.

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld 75.0 clears its ref, GDPval 83.0 and BrowseComp 82.7 are best-in-class, TB2.0 75.1 strong; TB2.1 78.3 misses the 85 ref and MCP-Atlas/ALE are absent.
- **Reasoning: 87/100.** Two of three refs clear with margin — GPQA 92.8 (all readings ≥90) and HLE 52.1 (with tools) — plus elite ARC-AGI-2 73.3; the AA Index of 39 (under 60) is the drag.
- **Context window: 95/100.** 1.05M capacity hits the ≥1M floor, and uniquely the model publishes honest retrieval rows — MRCR 86% at 128K collapsing to 36.6% at 512K–1M, Graphwalks 21–32% in-band — which are informative but far too weak to lift above the floor.
- **Multimodal: 69/100.** Text + image in → image band (60–70); MMMU-Pro 81.2 is a strong vision row and screenshot-driven computer use exercises it constantly, but no video/audio keeps it in-band.
- **Coding: 84/100.** SWE-Pro 57.7 beats Codex, LCB Pro 87.5 is elite, TB2.0 75.1 excellent; SWE-V 77.2 trails its era's leaders, TB2.1 78.3 misses the 85 ref, and no DeepSWE/SciCode/TB4.0/coding-index rows exist to verify further.
- **Cost efficiency: 66/100.** $2.50/$15 with 90% cache and 50% batch undercuts Opus 4.6 by ~2× and sits just under the $3/$15 anchor; discounted for the >272K whole-session 2×/1.5× surcharge (the 1M window is expensive to actually use), computer-use per-call fees, and a 12× pricier Pro sibling.
- **Overall Score: 84/100.** (86+87+95+69+84)/5 = 84.2 → 84 — the breadth release: OSWorld above human baseline, ref-clearing GPQA and HLE, elite long-context *disclosure*, at near-anchor pricing, held out of the upper 80s by a below-ref Terminal-Bench 2.1, an AA Index in the 30s, coding that trails Gemini/Claude of its quarter, and a 272K billing wall in front of its own headline window.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (OpenAI launch post, API model docs, Digital Applied, Awesome Agents, MetricNexus, ARMES Docs, UseRightAI, ModelScale); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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

