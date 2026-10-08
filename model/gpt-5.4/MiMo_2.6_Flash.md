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
