# GPT-5.4 — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March-2026 flagship — "5.4 beats coding specialist GPT-5.3-Codex on all of the relevant benchmarks" (Simon Willison) — the first GPT-5 generation to pair a **1M context window** with a native reasoning stack, and the month in which OpenAI published both `gpt-5.4` and the far costlier `gpt-5.4-pro` (which "solved a frontier math open problem", per Epoch AI's FrontierMath confirmation, and Erdős problem #1196). It is superseded by GPT-5.5; note that **OpenAI's own deprecations page does not list `gpt-5.4`** — only Artificial Analysis marks it deprecated.
- **Provider / access:** OpenAI API `gpt-5.4` (snapshot `gpt-5.4-2026-03-05`) — Chat Completions, Responses and Batch; OpenRouter `openai/gpt-5.4`; OpenCode Zen `opencode/gpt-5.4` (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** released **2026-03-05** (launch blog "Introducing GPT-5.4"). Knowledge cutoff **Aug 31, 2025**.
- **IDs:** `gpt-5.4` (OpenAI API, snapshot `gpt-5.4-2026-03-05`), `openai/gpt-5.4` (OpenRouter), `opencode/gpt-5.4` (Zen). The Pro configuration is a separate id (`gpt-5.4-pro` / `gpt-5.4-pro-2026-03-05`), scored separately in `model/gpt-5.4-pro/`.
- **Context window:** **1,050,000 tokens**, **128,000 max output**.
- **Modalities:** text and image in, text out. Reasoning effort: "none (default), low, medium, high and xhigh" (the Pro configuration offers medium/high/xhigh). Tools: function_calling, web_search, file_search, tool_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp.
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$2.50**, cached input **$0.25**, output **$15.00**; >272K input **$5.00 / $22.50 / $0.50** ("prompts with more than 272K input tokens are priced at 2x input and 1.5x output for the full session"); regional (data-residency) endpoints +10%. OpenCode Zen lists the same two tiers.
- **Rate limits:** standard — Build 5,000 RPM / 1M TPM; Launch 10,000 / 4M; Grow 15,000 / 40M; Long-context (>272K) — Build 500 / 1M, Launch 2,000 / 10M, Grow 8,000 / 20M.
- **Architecture:** proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

> OpenAI's launch-blog numbers are marked "vendor"; Artificial Analysis, Vals AI and the BenchLM ledger are independent. The launch blog's headline GPT-5.4 Pro column is noted for contrast only.

Agent / tool use:

- GDPval **83.0%** (wins/ties, vendor); BrowseComp **82.7%** (Pro 89.3%); WebArena-Verified **67.3%**; Online-Mind2Web 92.8%; Toolathlon **54.6%**; MCP Atlas **67.2%** (the later GPT-5.5 blog revises it to 70.6% after an April-2026 Scale update); Tau2-bench Telecom **98.9%**; OSWorld-Verified **75.0%** (human 72.4%)
- Terminal-Bench 2.0 **75.1%** (vendor) / **78.28%** (AA) — no Terminal-Bench 2.1 or 4.0 figure for GPT-5.4 exists on the official board (the table renders client-side and BenchLM's 35-model Terminal-Bench 4.0 snapshot has no GPT-5.4 row)
- Bench Tool-Agent-User Evaluation **98.9%** (best-verified, via BenchLM); JobBench 38.9%; Claw-Eval 60.3%; Gert Labs 64.89%; ResearchClawBench 15.3%; DeepSearchQA 73.6%; IPI: not published; τ²-bench **87.13%** (AA) / τ³-Banking 39.59% (AA); APEX-Agents 33.26% (AA)
- Cyber suite: CyberGym **79.0%** (via BenchLM), ExploitGym **6.0%** (via BenchLM); tool search "reduced total token usage by 47% while achieving the same accuracy"

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (vendor) / **92.02%** (AA) / 92.8% (via BenchLM)
- HLE: **39.8%** without tools / **52.1%** with tools (vendor) / **43.74%** (AA) / 52.1% and 39.8% (via BenchLM)
- FrontierMath: T1–3 **47.6%** (vendor, v1) / T4 **27.1%**; BenchLM relays Epoch's **v2** figures 78.596% / 49.0%
- Frontier Science Research **33.0%** (Pro 36.7%); ARC-AGI-1 **93.7%** (Pro 94.5%), ARC-AGI-2 **73.3%** (Pro 83.3%); SuperGPQA 92.8% (GPQA row)
- Artificial Analysis Intelligence Index: **39\*** — an **estimate** (#63/217), 106.4 t/s, TTFT 134.16s, $2.50/$15
- Omniscience: index 5.78, accuracy **50.85%**, hallucination rate **91.69%** (AA); IFBench 73.95% (AA); LCR 82.0% (AA); CritPt 23.43% (AA); HealthBench Professional 48.1% (via BenchLM), HealthBench Hard 40.1%; MathVision not published; no MMLU-Pro, DeepSWE or ITBench figure published by OpenAI
- No verified public score found for: LMArena placement (403 blocked), official swebench.com and livecodebench.github.io rows, Epoch's own leaderboard values, or the ARC Prize primary table for GPT-5.4 (BenchLM's 93.67%/74.0% are second-hand)

Coding:

- SWE-bench Pro (Public) **57.7%** (vendor) / 57.7% (via BenchLM); **no SWE-bench Verified figure published by OpenAI for GPT-5.4** (the GPT-5.5 blog lists 58.6% for GPT-5.5 and the benchlm row for GPT-5.4 shows the Pro figure only)
- LiveCodeBench Pro **87.5%** (via BenchLM); Vibe Code Bench v1.1 **67.42%** (Vals AI, OpenHands, xhigh) / 48.47% (Codex harness)
- React Native Evals 85.3%; PostTrainBench 19.0%; FrontierMath v2 78.596% / 49.0% (Epoch, relayed)
- No DeepSWE, FrontierSWE, CursorBench, Terminal-Bench 4.0 or SWE-bench Verified row for GPT-5.4

Long context:

- **Graphwalks BFS 256K–1M: 21.4%** (vendor) and **MRCR v2 512K–1M: 36.6%** (vendor) — OpenAI's own numbers show a 1M-window model with weak long-range retrieval
- OmniDocBench NED 0.109; no independent long-context measurement; 1,050,000 tokens with a 128,000 max output

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 80/100.** Strong general-agent numbers — Toolathlon 54.6%, MCP Atlas 67.2–70.6%, Tau2-bench Telecom 98.9% / τ² 87.13%, BrowseComp 82.7%, WebArena-Verified 67.3%, Online-Mind2Web 92.8%, OSWorld-Verified 75.0%, GDPval 83.0%, Bench Tool-Agent-User Evaluation 98.9% (best-verified), CyberGym 79.0%. Capped by the rubric's anchors (TB2.1 ~88%+ → not published; τ3 ~50%+ → 39.59%; GDPval ~1750+ → not published for GPT-5.4), by Terminal-Bench 4.0 having **no public score at all**, by JobBench 38.9%, ResearchClawBench 15.3%, ExploitGym 6.0% and Claw-Eval 60.3%.
- **Reasoning: 85/100.** GPQA Diamond 92.02–92.8%, FrontierMath v2 78.596% (T1–3) / 49.0% (T4) on Epoch's board, ARC-AGI-1 93.7% / ARC-AGI-2 73.3%, HLE 39.8% / 52.1% with tools, IFBench 73.95%, LCR 82.0%, CritPt 23.43%, HealthBench Pro 48.1%, Omniscience accuracy 50.85%. Capped by the AA Intelligence Index being an **estimate of 39\*** (under the rubric's 60+ anchor), by the **91.69% hallucination rate**, by Frontier Science Research at 33.0%, and by FrontierMath Tier 4 at 49.0%.
- **Context window: 88/100.** The nominal 1,050,000-token window with a 128,000 max output would sit in the rubric's top tier (≥1M = 95–100) — but OpenAI's own published long-context numbers are **Graphwalks BFS 21.4% (256K–1M)** and **MRCR v2 36.6% (512K–1M)**, so the model demonstrably does not retrieve reliably at the top of its own window. 88 reflects a large window with a measured end-of-window collapse, which is the substance of the score rather than a rounding choice.
- **Multimodal: 72/100.** Text and image in with text out, with solid vision evidence — MMMU-Pro **81.2%** without tools / 82.1% with tools, ScreenSpot-Pro **85.4%**, OfficeQA 68.1%, ZeroBench 41.0%, MedXpertQA Multimodal 77.1%, OmniDocBench NED 0.109. The rubric's "+image in = 60–70" band is the ceiling; the two points above it reflect the measured strength of the image and screen benchmarks.
- **Coding: 78/100.** SWE-bench Pro 57.7%, LiveCodeBench Pro 87.5%, Terminal-Bench 2.0 75.1% / 2.1 78.28% (AA), Vibe Code Bench 67.42%, FrontierMath v2 78.596%. Capped by SWE-bench Pro at 57.7% (well under the rubric's 74% DeepSWE-class bar), by the **absence of any SWE-bench Verified, DeepSWE, FrontierSWE or CursorBench figure**, by PostTrainBench 19.0%, and by Terminal-Bench 4.0 being unmeasured.
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/gpt-5.4` — is billed at **$2.50 in / $15.00 out** per 1M with a $0.25 cached read, and $5.00/$22.50 above 272K. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $2.50/$15 at roughly 78. The 47% token reduction from tool search is a genuine efficiency lever on long agentic runs, and Batch halves the rate again.
- **Overall Score: 80.6/100.** (80 + 85 + 88 + 72 + 78) / 5 = 80.6 — best-fit: a capable March-2026 generalist with a 1M window and strong agentic-tool scores, undone for long-context work by its own published 21–37% retrieval at the top of that window and by the $2.50/$15 price — GPT-5.5 and GPT-5.6 Sol are both cheaper *and* stronger on Terminal-Bench 4.0, and OpenAI's own deprecations page still listing `gpt-5.4` should not be read as a recommendation.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **MCP Atlas — 67.2% (GPT-5.4 launch blog) vs 70.6% (GPT-5.5 blog and BenchLM).** A post-launch Scale update, not a contradiction; both are listed.
2. **Tau2-bench Telecom — 98.9% (launch blog) vs 92.8% (GPT-5.5 blog, "original prompts") vs 87.13% (AA).** Prompt-set differences; both are listed.
3. **ARC-AGI-2 — 73.3% (OpenAI) vs 74.0% (BenchLM/ARC-Prize-sourced).** Minor; OpenAI's figure is used.
4. **FrontierMath — 47.6%/27.1% (OpenAI, benchmark v1, April 2026) vs 78.596%/49.0% (Epoch v2, relayed via BenchLM).** Different benchmark versions; the v2 numbers are used with the April figures kept for traceability. (The same version shift explains the FrontierMath pair in `model/gpt-5.4-pro/`.)
5. **Context — 1,050,000 (OpenAI) vs "1M"/"1.1M tokens" (AA).** The OpenAI figure is used.
6. **Vibe Code Bench — 67.42% (xhigh, OpenHands) vs 48.47% (Codex harness).** Harness-dependent; the higher OpenAI-harness figure is used and the Codex one listed.
7. **Deprecation status — AA says "This model is deprecated… OpenAI has launched a newer release, GPT-5.5", but OpenAI's own deprecations page does not list `gpt-5.4`** (it lists `gpt-5.4-nano` → shutdown 2027-04-01 and `gpt-5.4-cyber` → 2026-10-01), and Zen's deprecated list omits it. Recorded as a tracker-vs-vendor status conflict.
8. **The launch blog's headline table inconsistency** — GPT-5.2 Toolathlon 46.3% in the headline vs 45.7% in the evaluations table — is a small documentation inconsistency inside OpenAI's own material, noted for completeness.
9. **No public MMLU-Pro, DeepSWE, ITBench, Terminal-Bench 4.0 or LMArena number exists** for GPT-5.4, and the ARC-AGI/Epoch numbers are BenchLM-attributed rather than read from the primary leaderboards — which is why Reasoning and Coding are capped where they are.

### Notes on identity

- `gpt-5.4` is a distinct model from `gpt-5.4-pro` (the same context and cutoff, 12× the price, Responses-only, higher effort ceilings, materially different scores: ARC-AGI-2 83.3% vs 73.3%, FrontierMath T4 38.0% vs 27.1%, BrowseComp 89.3% vs 82.7%) — scored separately in `model/gpt-5.4-pro/`.
- Effort levels are parameters (none default / low / medium / high / xhigh); the AA entry is the "(Xhigh)" variant, and OpenAI's published evals ran at a stated effort with the label given per row.
- The March 2026 launch is also where OpenAI's frontier-math generation peaked in public attention: Epoch AI confirmed "A solution was first elicited by Kevin Barreto and Liam Price, using GPT-5.4 Pro", and a separate report has Pro finding Erdős problem #1196 "in about 80 minutes" with a Terence Tao comment in the thread — high-quality corroboration of capability, but not a benchmark score.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, the "Introducing GPT-5.4" launch blog and the later GPT-5.5 blog's comparison table; independent trackers Artificial Analysis (model page with its per-evaluation payload, index marked as an estimate), Vals AI (Vibe Code Bench at two harnesses), the BenchLM evidence ledger, and OpenRouter / OpenCode Zen catalogs, plus Simon Willison's launch notes, the Epoch AI frontier-math confirmation and the Erdős #1196 thread. Vendor-vs-independent conflicts — including the MCP Atlas, Tau2, FrontierMath-version and deprecation-status discrepancies — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.4.md`, using the same headings.
