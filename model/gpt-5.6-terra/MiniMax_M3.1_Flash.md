# GPT-5.6 Terra — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's July-2026 mid-tier GPT-5.6 model — OpenAI's own docs note it "roughly corresponds to the mini model tier used in earlier GPT-5 families", yet it ships with 1M context, a 128K output cap, the full GPT-6 tool stack and a deliberate cyber/science research emphasis (CTF 91.8%, ExploitBench 52.9%). It was **repriced down 20% on 2026-07-30** ($2.50/$15 → $2/$12) and is distinct from `gpt-5.6-sol` (the coding-weighted sibling) and from `gpt-6-sol`.
- **Provider / access:** OpenAI API `gpt-5.6-terra` (Chat Completions, Responses, Batch; no realtime/assistants/fine-tuning); OpenRouter `openai/gpt-5.6-terra` (+ `gpt-5.6-terra-pro`, `:batch`); OpenCode Zen `opencode/gpt-5.6-terra` (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** released **2026-07-09** (launch blog + system card "Published July 9, 2026"). Knowledge cutoff **Feb 16, 2026**.
- **IDs:** `gpt-5.6-terra` (OpenAI API; only snapshot), `openai/gpt-5.6-terra` / `openai/gpt-5.6-terra-pro` / `:batch` (OpenRouter), `opencode/gpt-5.6-terra` (Zen).
- **Context window:** **1,050,000 tokens**, **922,000 max input**, **128,000 max output**. Reasoning effort: "none, low, medium (default), high, xhigh, and max". Tools: web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search. Rate limits: Build 5,000 RPM / 1M TPM; Launch 10,000 / 4M; Grow 15,000 / 40M.
- **Pricing (as of 2026-10-19, per 1M tokens):** **$2.00 in / $0.20 cached / $2.50 cache write / $12.00 out** (≤272K); >272K **$4.00 / $0.40 / $5.00 / $18.00** — "Prompts with more than 272K input tokens are priced at 2x input and cache rates and 1.5x output"; Batch & Flex $1.00/$0.10/$1.25/$6.00; Fast $4.00/$0.40/$5.00/$24.00. Launch price was **$2.50 / $15** ("Starting July 30, API pricing is $2 per million input tokens and $12 per million output tokens for Terra"). Regional (data-residency) endpoints +10%. OpenCode Zen lists the same two tiers; OpenRouter's EU/Azure route is $2.20/$13.20.
- **Architecture:** proprietary, closed weights; parameter count not disclosed. System card: cyber and bio capability rated **High** (not Critical) — "GPT-5.6 Sol and Terra can find vulnerabilities and pieces of exploits".

### Raw benchmarks found

> OpenAI's launch-table numbers are marked "vendor"; Artificial Analysis, Vals AI, ARC Prize, the BenchLM ledger and the OpenAI system card's own rows are independent readings of the same release.

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (vendor) / **88.01%** (AA) / **77.5%** (Vals AI, per BenchLM); Terminal-Bench 4.0: **35.35%** (AA) / **22.73%** (Vals AI, #25/50); Terminal-Bench 3.0 **20.8%** (via BenchLM); Terminal-Bench-Hard **57.58%** (AA)
- Toolathlon **53.1%** (vendor); AutomationBench **15.2%** (vendor, Zapier) / **59.65%** (AA objective-share); Agents' Last Exam **50.4%** (vendor); IFBench **71.22%** (AA); APEX-Agents **38.94%** (AA); ITBench-AA **51.04%** (AA); GDPval-AA **1593 Elo** (vendor) / **1451.58** (AA); Tau2-bench **86.26%** (AA) / Tau3-Banking **40.21%** (AA)
- OSWorld 2.0 **50.2%** (vendor); BrowseComp **87.5%** (vendor); BenchCAD **62.3%** (78.2% with the python tool); CTF **91.8%** (vendor)
- Cyber suite: ExploitBench **52.9%** (vendor) / 53% (via BenchLM), ExploitGym **23.2%**, SEC-Bench Pro **57.7%** (vendor) / 71.2% (via BenchLM)
- Claw-Eval / MCP-Atlas / Toolathon (non-Verified): **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (vendor) / **92.53%** (AA) / **90.91%** (Vals)
- HLE: **42.91%** (AA) / 51.1% HLE-Verified (via BenchLM); MLCR-AA 31.67%; CritPt **30.0%** (AA)
- FrontierMath v2: Tiers 1–3 **84.900%**, Tier 4 **68.300%** (vendor) — 8.8 / 31.7 points behind GPT-6 Astra and GPT-6.1 Sol
- ARC-AGI (ARC Prize, verified, per effort): ARC-AGI-1 / -2 / -3 — Max **96.5 / 83.9 / 0.8**, XHigh 94.0/74.2/0.7, High 92.0/67.1/0.5, Medium 77.0/37.5/0.1, Low 60.2/18.8/0.0 — "averaging 2.3% on Public and 0.80% on ARC‑AGI‑3 Semi‑Private"
- HealthBench (system card, length-adjusted): Professional **57.7** (unadjusted 62.4), HealthBench 57.0, Hard 32.7 (34.3), Consensus 95.1; GeneBench Pro 23.3%, LifeSciBench 56%, MedChemBench 35%
- Artificial Analysis Intelligence Index: **42** (#49/217) / 42.9 (BenchLM's AA mirror); OpenAI's launch claim was **55** on the older AA index v4.1
- Self-improvement research rows (vendor): RSI Index 56.3%, Internal Research Debugging 67.8%, KernelGen 1P 49.2%, NanoGPT 14.5%, PostTrainBench Lite 51.5%

Coding:

- SWE-bench Pro **63.4%** (vendor) / SWE-bench **95.40%** (Vals AI, #5/88) / 95.4% (via BenchLM) — and OpenAI's own caveat, quoted by Simon Willison: "we estimate that ~30% of SWE-bench Pro tasks are broken"
- DeepSWE v1.1 **69.6%** (vendor); Terminal-Bench 2.1 87.4/88.01%; LiveCodeBench **85.93%** (Vals) / 85.9% (via BenchLM); FrontierCode 1.1 Extended **55.8%** (via BenchLM); CursorBench 3.2 **64.9%** / 4.0 41.3% (via BenchLM); AA Coding Agent Index v1.1 77.4% (vendor)
- ProgramBench **0.50%** (Vals); Terminal-Bench-Science 0.1 10.00% (Vals) / 13.81% (AA); no Vibe Code Bench figure for Terra

Long context:

- MRCR v2 8-needle: 256K–512K **89.6%**, 512K–1M **72.5%** (vendor); GraphWalks BFS 256k **76.9%**, 1M **71.2%** (vendor) — the Graphwalks fall-off is unusually small (76.9 → 71.2), the best 1M retention among the GPT-5.6 family
- No independent MRCR/Graphwalks replication; 1.05M context, 128K max output

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 82/100.** A well-rounded agentic/computer-use profile — Terminal-Bench 2.1 87.4% (vendor) / 88.01% (AA) / 77.5% (Vals), BrowseComp 87.5%, tau2-bench 86.26%, GDPval-AA 1593 (vendor) / 1451.58 (AA), Toolathlon 53.1%, OSWorld 2.0 50.2%, IFBench 71.22%, CTF 91.8%, ExploitBench 52.9%, SEC-Bench Pro 57.7%, BenchCAD 62.3%. Capped below 88 by the rubric's anchors (TB2.1 ~88%+ → 88.01% met; tau3 ~50%+ → 40.21% short; GDPval ~1750+ → 1593 short), by AutomationBench at 15.2% in OpenAI's own Zapier run, by Terminal-Bench 4.0 at 22.73–35.35%, and by Agents' Last Exam 50.4% and APEX-Agents 38.94%.
- **Reasoning: 86/100.** GPQA Diamond 92.53–92.9%, FrontierMath v2 84.900% (T1–3) / 68.300% (T4), ARC-AGI-1 96.5% and ARC-AGI-2 83.9% at max (ARC Prize, verified), IFBench 71.22%, HealthBench Professional 57.7%, GeneBench Pro 23.3%, FrontierMath legacy 84.9%, MLCR-AA 31.67%. Held below 90 because the current AA Intelligence Index is **42** (OpenAI's launch-day 55 was the older v4.1 index), because **ARC-AGI-3 is 0.8%** even at max effort, and because the Omniscience profile is poor — **accuracy 46.8% with an 87.88% hallucination rate** and an index of 0.05, the weakest among the 2026 GPT-5.6/6 models measured.
- **Context window: 96/100.** 1,050,000 tokens with a 922,000 max input and a 128,000 max output — the rubric's top tier (≥1M = 95–100) with the output cap above the 64K line. Not 100: the rubric's extra condition is "≥98% retrieval at 512K+", and OpenAI's own MRCR v2 figure falls to **72.5% at 512K–1M** (89.6% at 256K–512K), with Graphwalks BFS at 71.2% at 1M.
- **Multimodal: 70/100.** Text and image in, text out, with real vision evidence — MMMU-Pro 80.69% (AA) / 82% with Python (vendor) / 86.47% (Vals), BenchCAD 62.3% (78.2% with the python tool), GDP.pdf 24.7%. The rubric's "+image in = 60–70" band is the ceiling and is met at its top: no video or audio input is documented, and there is no non-text output.
- **Coding: 82/100.** Terminal-Bench 2.1 87.4% (vendor) / 88.01% (AA) — above the rubric's 85% anchor — SWE-bench 95.40% (Vals, #5/88), DeepSWE 69.6%, LiveCodeBench 85.93%, FrontierCode 1.1 Extended 55.8%, CursorBench 3.2 64.9%, AA Coding Agent Index 77.4%. Capped by DeepSWE 69.6% (under the 74% anchor), Terminal-Bench 4.0 at 22.73–35.35%, Terminal-Bench-Science 10–13.81%, CursorBench 4.0 at 41.3%, ProgramBench 0.50%, and by the 63.4%-vs-95.4% SWE-bench spread (vendor Pro self-report vs Vals' Verified run, on a benchmark OpenAI itself says is ~30% broken).
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/gpt-5.6-terra` — is billed at **$2.00 in / $12.00 out** per 1M (≤272K) and $4.00/$18.00 above it, with a $0.20 cached read and $2.50 cache write (OpenAI bills writes at 1.25× input). The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $2/$12 at roughly 78; Artificial Analysis measures **$1.40 per Index task** and Batch/Flex halve the rates again, while the launch price was $2.50/$15 — so today's price is already the discounted one.
- **Overall Score: 83.2/100.** (82 + 86 + 96 + 70 + 82) / 5 = 83.2 — best-fit: the best-value member of the GPT-5.6 line after the July price cut — 1M context, 87%+ Terminal-Bench 2.1, a cyber/research bench (CTF 91.8%, ExploitGym 23.2%) and 135 t/s at $2/$12; the caveats are ARC-AGI-3 (0.8%), Terminal-Bench 4.0 (~22–35%) and an 87.9% hallucination rate, so it is a strong workhorse rather than a reasoning flagship.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AA index 42 (current, v4.3.2) vs 55 (OpenAI's launch claim, AA v4.1).** Index-version change; the current value is scored and the launch claim recorded.
2. **SWE-bench Pro 63.4% (OpenAI) vs SWE-bench Verified 95.40% (Vals).** Different benchmarks and harnesses — and OpenAI's own estimate that "~30% of SWE-bench Pro tasks are broken" — so not a like-for-like contradiction; both are labelled.
3. **Terminal-Bench 2.1 — 87.4% (OpenAI) vs 88.01% (AA) vs 77.5% (Vals).** Harness spread; AA is the anchor. Terminal-Bench 4.0 — 35.35% (AA) vs 22.73% (Vals) — a 12.6-point spread on the same benchmark, with no official-board row retrievable.
4. **Pricing $2/$12 (current docs, Zen, OpenRouter, Vals) vs $2.50/$15 (launch blog, ARC Prize page, Simon Willison).** Resolved by the documented 2026-07-30 20% cut.
5. **ARC-AGI-3 0.8%** — identical in OpenAI's blog and ARC Prize (max), but ARC's own prose claims "more reasoning effort does not help it" while its own table shows max > xhigh; the table is used and the inconsistency noted.
6. **Omniscience 46.8% accuracy / 87.88% hallucination / index 0.05** is the weakest knowledge-reliability profile among the 2026 OpenAI models in this batch — recorded explicitly.
7. **BenchLM cross-model mis-attribution.** Its HLE-Verified 51.1% and LABBench2 81.2% rows are sourced to a **Gemini 3.8 Flash** model card, and its CyberGym 81.8% has no counterpart in OpenAI's cyber table (which lists ExploitBench, ExploitGym, SEC-Bench Pro and CTF only). These rows are excluded.
8. **OpenRouter's `gpt-5.6-terra-pro` route is priced identically to base Terra** ($2/$12) — an unexpected "Pro" premium of zero, noted so nobody budgets for a difference that isn't there.
9. **Community signal.** A Hacker News comment reports "GPT-5.6-terra used 48.5% more context than Mimo-2.5-pro" — an anecdote, recorded but not scored.

### Notes on identity

- `gpt-5.6-terra` is a distinct model from `gpt-5.6-sol` (the coding/computer-use specialist, scored separately) and from `gpt-6-sol` (its September successor). OpenAI's own docs position Terra as "roughly correspond[ing] to the mini model tier used in earlier GPT-5 families" — despite the 1M context and the full GPT-6 tool stack.
- `gpt-5.6-terra-pro` on OpenRouter is the same model with `reasoning.mode: pro`, priced identically — a serving route, not a separate checkpoint.
- Effort levels (none/low/medium/high/xhigh/max) are parameters; the AA page is the "max" variant and the official evals are max-effort.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, launch blog (Terra column) and the 2026-07-09 system card; independent trackers Artificial Analysis (model page, per-evaluation payload), ARC Prize (verified, five effort levels), Vals AI, the BenchLM evidence ledger, OpenRouter and OpenCode Zen catalogs, and Simon Willison's launch-day pricing note. Vendor-vs-independent conflicts — including the SWE-bench spread, the Terminal-Bench 4.0 gap, the AA index re-baselining and BenchLM's cross-model rows — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
