# GPT-6.1 Sol — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's late-September-2026 GPT-6 refresh — "an upgrade to GPT-6 Sol that nearly matches GPT-6 Astra's intelligence on agentic coding, computer use, and professional work at one-fifth of Astra's standard input". It is a **new model id** (`gpt-6.1-sol`), not a tier of `gpt-6-sol` or `gpt-6-astra`, and it is the value pick in the GPT-6 line: it holds Astra-level agentic results at a fifth of the input price, while cutting factual error rates from 11.4% to 7.7%.
- **Provider / access:** OpenAI API `gpt-6.1-sol` (Responses API and Chat Completions — "Chat Completions is supported without tool calling" — plus Batch; no Realtime, no fine-tuning, no embeddings); OpenRouter `openai/gpt-6.1-sol` (also `openai/gpt-6.1-sol-pro`, "served with `reasoning.mode` set to `pro`", and `:batch`); OpenCode Zen `opencode/gpt-6.1-sol` (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** released **2026-09-29** (launch blog; system-card addendum published 2026-09-29; OpenRouter `created=1790702882`). Knowledge cutoff **April 30, 2026**.
- **IDs:** `gpt-6.1-sol` (OpenAI API), `openai/gpt-6.1-sol` / `openai/gpt-6.1-sol-pro` (OpenRouter), `opencode/gpt-6.1-sol` (Zen).
- **Context window:** **1,050,000 tokens**, with **922,000 max input tokens** and **128,000 max output tokens** (OpenAI docs; OpenRouter agrees: context 1,050,000, `max_completion_tokens` 128,000).
- **Modalities:** text and image in, text out ("Input modalities: text, image" / "Output modalities: text"; audio and video unsupported). Tools (Responses API): web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search. Reasoning: "`reasoning.effort` supports `low`, `medium` (default), `high`, `xhigh`, and `max`" (none/minimal unsupported). Rate limits: Build 5,000 RPM / 1,000,000 TPM; Launch 10,000 / 4,000,000; Grow 15,000 / 40,000,000. US and EU data residency; `service_tier: "ultrafast"` available.
- **Pricing (as of 2026-10-19, per 1M tokens):** Standard input **$2.00**, cached input **$0.10**, cache writes **$2.50**, output **$10.00**; long context (>272K) **$4.00 / $0.20 / $5.00 / $15.00** — "Prompts with more than 272K input tokens are priced at 2x input and cache rates and 1.5x output for the full request"; Batch & Flex 50% lower; Fast 2×; Ultrafast 6× (short context $12 / $0.60 / $15 / $60); regional routing +10%. **OpenCode Zen lists $2.00 in / $10.00 out / $0.20 cached read / $2.50 cached write** (>272K: $4.00 / $15.00 / $0.40 / $5.00) — note Zen's cached-read price is double OpenAI's $0.10.
- **Architecture:** proprietary, closed weights; parameter count not disclosed. System-card addendum: **critical cyber risk, high bio/chem risk**, same safeguards as GPT-6 Astra.

### Raw benchmarks found

> OpenAI's launch-blog and system-card numbers are marked "vendor"; Artificial Analysis, the official Terminal-Bench board, ARC Prize, Epoch AI's hosted CSVs and the BenchLM ledger are independent.

Agent / tool use:

- Terminal-Bench 4.0: **58.18%** (official tbench.ai board, Codex harness, max effort, **rank 3**, 330 trials, total cost $634.24, 31.3M output tokens) / **56.06%** (AA, mini-swe-agent) / 57.0% (via BenchLM). AA's article frames the change as "a 12 point jump in Terminal-Bench 4.0" over GPT-6 Sol
- Terminal-Bench 2.1: **no verified public score found** for GPT-6.1 Sol
- AutomationBench: **36.1%** (OpenAI blog, Zapier AutomationBench 1.0.6, medium effort) / **64.87%** (AA AutomationBench-AA objective-share) / 36.1% (via BenchLM) — "scores 2.2 percentage points above Opus 5.5 at medium reasoning effort" and "+4.8 percentage points from GPT-6 Sol"
- OSWorld 2.0: **no absolute Sol figure published**; the blog claims "+7 points over GPT-6 Sol at maximum reasoning effort" and "within 2.1 points of Astra"
- APEX-Agents: **60% pass@1** (±5.6), mean 73.2% (Epoch hosted CSV)
- Hermes Index 57.1% and Hermes Bench 73.9% (via BenchLM); ExploitGym 35.1% intended-vuln success (Astra 42.4%, GPT-6 Sol 22.1%); ExploitBench **99.7%** at max effort (Astra 100%, GPT-6 Sol 81.7%); SEC-Bench Pro pass@1 **78.8%** (Astra 85.4%, GPT-6 Sol 66.3%); MentalHealthBench 57.9 ± 1.0 (Astra 58.7)
- GDP.pdf: **35.0%** all-pass (Surge, via Epoch) / 31.0% (AA) / "+6" over GPT-6 Sol (AA article) — "higher than Opus 5.5 (w/ fallbacks) at <½ cost/task"
- Tau2 / Tau3-Banking: **not measured** (AA fields null); Claw-Eval / ClawProBench: **no verified public score found**
- IPI, Toolathlon, MCP-Atlas, JobBench: **no verified public score found** for Sol

Reasoning / knowledge:

- HLE: **52.92%** (AA) / 52.9% (via BenchLM); "a 5 point jump in Humanity's Last Exam" over GPT-6 Sol (AA article)
- LCR / MLCR: AA-LCR v1.1 **83.0%** (AA); MLCR-AA **33.89%** (AA)
- CritPt: **31.71%** (AA; also confirmed via Epoch's AA-sourced CSV: max 31.71%, xhigh 31.71%, high 30.0%)
- GPQA Diamond: **no verified public score found** for GPT-6.1 Sol (AA `gpqa: null`)
- Artificial Analysis Intelligence Index: **52** (rank **#12 / 217**; "gains 4 points in the Intelligence Index vs GPT-6 Sol") / 51.8 (OpenRouter-embedded AA mirror)
- FrontierMath v2: Tiers 1–3 **93.684%** (tied best in the catalog) and Tier 4 **100.000%** (best) — Epoch AI values as relayed by the BenchLM ledger; the Epoch leaderboard page itself is chart-rendered and was not directly readable
- ARC-AGI (ARC Prize, verified): ARC-AGI-1 max **96.5%** / xhigh 98.5% / high 98.5% / medium 95.5% / low 93.5%; ARC-AGI-2 max **94.2%** / xhigh 91.7% / high 91.7% / medium 86.7% / low 76.7%; ARC-AGI-3 standard harness max **52.7%** / xhigh 39.9 / high 26.7 / medium 10.6 / low 3.9; provider-adapter max **96.2%** / xhigh 96.4 / high 95.0 / medium 91.0 / low 82.8
- HealthBench (max effort): Professional **64.2** (raw 67.2), HealthBench **58.5** (raw 56.7), Hard **36.2** (raw 33.4), Consensus **96.0** (OpenAI system card)
- STEMBench120 2.76 (via BenchLM); Omniscience index 41.53, accuracy **62.1%**, hallucination rate **54.27%** (AA) — "hallucination falling from 60% to 54%"

Coding:

- DeepSWE v1.1: **71.9%** (via the OpenAI blog / BenchLM attribution) — "eclipsing GPT-6 Sol's best score by 6.4 percentage points"; no absolute figure appears in the blog's text (only the delta), and no independent DeepSWE-leaderboard row was found for Sol
- Terminal-Bench 4.0 58.18% (official board) / 56.06% (AA); Terminal-Bench-Science 0.1 **58.10%** (AA) / 57.0% (via BenchLM) — "more than doubles GPT-6 Sol's score at maximum reasoning effort" (Astra best at 68.1%)
- SciCode **54.17%** at max (confirmed via Epoch's AA-sourced CSV) — but **55.79% at high and 55.67% at xhigh** exceed the max-effort run
- FrontierCode 1.1: **49.12%** (AA) / **50.23%** (Cognition's own run, medium effort, Mean@5, codex harness)
- Bug Hunt Bench **44.3 fixes** (via BenchLM); ExploitGym 35.1%; GDP.pdf 35.0% (Surge)
- SWE-bench Verified, LiveCodeBench, Vibe Code Bench, CursorBench: **no verified public score found** for Sol

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for GPT-6.1 Sol. AA-LCR v1.1 83.0% covers the short band only. 1,050,000-token context, 922,000 max input, 128,000 max output.

Performance profile (AA, Max): Index 52 (#12/217), output **55.3 t/s** (#150/185), cost per Index task **$0.72** (#40/114 — among the cheapest of the top-20 index models), 67M output tokens (#49/116), TTFT 239.97s, 10 API providers, blended $1.47/1M. Design Arena (OpenRouter): 3d Elo **1458** (#2), gamedev 1387 (#3), website 1321 (#7).

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 83/100.** Terminal-Bench 4.0 **58.18%** on the official board (rank 3) and 56.06% on AA — the strongest Terminal-Bench 4.0 result of any model in this batch — plus APEX-Agents 60% pass@1, Hermes Index 57.1%, ExploitBench 99.7%, SEC-Bench Pro 78.8%, ExploitGym 35.1% and GDP.pdf 35.0%. Capped below 90 by the rubric's frontier anchors (Terminal-Bench 2.1 not published, τ-bench not measured, GDPval-AA 1593.85 below the ~1750 anchor), by AutomationBench at 36.1% in OpenAI's own Zapier run, and by no published Claw-Eval, Toolathlon, MCP-Atlas or JobBench row.
- **Reasoning: 90/100.** FrontierMath v2 **93.684% (T1–3, tied best) and 100.000% (Tier 4, best)**, ARC-AGI-1 96.5–98.5% and ARC-AGI-2 94.2% (ARC Prize, verified, with a full effort ladder), CritPt 31.71%, HLE 52.92% (+5 points over GPT-6 Sol), AA-LCR 83.0%, HealthBench Professional 64.2 and Consensus 96.0, STEMBench120 2.76, Omniscience accuracy 62.1% with hallucination down to 54.27%. Held below 93 because the current Artificial Analysis Intelligence Index is **52** (under the rubric's 60+ anchor), because **GPQA Diamond is unmeasured** for this model, and because ARC-AGI-3 on the standard harness is only 52.7% at max (the 96.2% figure comes from the provider-adapter harness).
- **Context window: 95/100.** 1,050,000-token context with 922,000 max input and 128,000 max output — the rubric's top tier (≥1M = 95–100), with the output cap above the 64K line. Not 100: no long-context retrieval measurement exists for Sol (no MRCR / RULER / GraphWalks) and AA-LCR 83.0% covers only the short band.
- **Multimodal: 70/100.** Text and image in, text out, with real vision evidence — MMMU-Pro 85.95% (AA), the computer_use tool, and Design Arena 3d Elo 1458 (#2) plus gamedev 1387 (#3) on OpenRouter, which are 3D/graphics-heavy design tasks. The rubric's "+image in = 60–70" band is the ceiling: no video or audio input is supported, and there is no non-text output.
- **Coding: 86/100.** Terminal-Bench 4.0 58.18% (official board) / 56.06% (AA), Terminal-Bench-Science 58.10%, SciCode 54.17% at max — though 55.79% at high and 55.67% at xhigh beat it — FrontierCode 1.1 49.12% (AA) / 50.23% (Cognition, medium), DeepSWE 71.9%, Bug Hunt 44.3 fixes. Capped by the lack of SWE-bench Verified, LiveCodeBench, CursorBench and Vibe Code Bench numbers, by DeepSWE sitting under the rubric's 74% anchor, and by Terminal-Bench 4.0 at ~56–58% versus the frontier's 70%+.
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/gpt-6.1-sol` — is billed at **$2.00 in / $10.00 out** per 1M for requests up to 272K input tokens, **$4.00 / $15.00** above it, cache read $0.20 (Zen) and cache write $2.50. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) bracket that at roughly 78. Artificial Analysis measures **$0.72 per Intelligence Index task** — the cheapest of the top-20 index models and ~4.5× cheaper than GPT-6 Astra's $3.26 — and Batch/Flex halve the rates again. The 2×/1.5× long-context premium and Zen's double cache-read price are the deductions.
- **Overall Score: 84.8/100.** (83 + 90 + 95 + 70 + 86) / 5 = 84.8 — best-fit: the best price/performance frontier reasoning-and-agentic model in this batch — GPT-6 Astra-class Terminal-Bench 4.0 and FrontierMath results at a fifth of Astra's input price, with measurably better factuality (7.7% vs 11.4% response error rate) — and the natural default OpenAI pick unless you need the absolute top index score or the image-generation/computer-use tooling depth of the very top tier.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AutomationBench — 36.1% (OpenAI blog, Zapier 1.0.6, medium effort) vs 64.87% (AA AutomationBench-AA).** Different benchmark and metric (task pass rate vs share of task objectives); not comparable. The strict 36.1% is used.
2. **Terminal-Bench 4.0 — 58.18% (official board, Codex) vs 56.06% (AA, mini-swe-agent) vs the AA article's "12 point jump"** over GPT-6 Sol. Two harnesses agree within ~2 points; the official board is the anchor.
3. **ARC-AGI-3 — 52.7% (standard harness, max) vs 96.2–96.4% (provider adapter).** The harness, not the model, drives the gap; the standard-harness number informs Reasoning. OpenAI's supposed "62.7%" for Sol was **not found in any page fetched** and is not used.
4. **GDP.pdf — 31.0% (AA) vs 35.0% (Surge, via Epoch) vs OpenAI's relative claim** ("higher than Opus 5.5 (w/ fallbacks) at <½ cost/task", no absolute Sol number in the blog text). Both absolutes listed.
5. **SciCode — 54.17% at max vs 55.79% at high and 55.67% at xhigh.** A rare case where the *lower* effort scores higher; the max figure is used and the anomaly noted.
6. **FrontierCode — 49.12% (AA) vs 50.23% (Cognition, medium effort, Mean@5).** Close; AA used.
7. **Index — 52 (AA) vs 51.8 (OpenRouter-embedded AA mirror).** Rounding. OpenAI published no AA index of its own, so there is no vendor-vs-AA index conflict; all quoted deltas are AA-vs-AA.
8. **ExploitBench — OpenAI's framing "99.7% … compared with … 100% for GPT-6 Astra"**; some aggregators list "100% (best)" for Sol. The correct ordering is Astra 100% > Sol 99.7% > GPT-6 Sol 81.7%.
9. **Cache read — $0.10 (OpenAI, 95% discount) vs $0.20 (OpenCode Zen, which reuses GPT-6 Sol's rate).** The OpenAI figure is used; Zen's deviation is recorded.
10. **DeepSWE 71.9% is a blog/aggregator attribution**, not a board-verified row; it is labelled as such and is not used to claim a frontier anchor.
11. **FrontierMath 93.684% / 100.000%** are Epoch values relayed through the BenchLM ledger; the Epoch leaderboard page renders client-side and could not be read directly, so they are labelled as relayed.

### Notes on identity

- `gpt-6.1-sol` is a distinct model id from `gpt-6-sol` (its direct predecessor) and from `gpt-6-astra` (a separate, more expensive model: $10/$50, AA index 53, 66.5 t/s). OpenAI positions Sol as "an upgrade to GPT-6 Sol that nearly matches GPT-6 Astra's intelligence … at one-fifth of Astra's standard input".
- `openai/gpt-6.1-sol-pro` on OpenRouter is "served with `reasoning.mode` set to `pro`" — a serving mode of the same model, not a separate checkpoint, and it is not scored separately here.
- Effort levels (low/medium/high/xhigh/max) are parameters; the ARC-AGI ladder (ARC-AGI-2 94.2% max → 76.7% low) shows how much an unlabelled number depends on effort.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model docs, pricing page, launch blog and the GPT-6.1 Sol system-card addendum; independent trackers Artificial Analysis (model page + launch article, with two per-eval values confirmed against Epoch's hosted AA CSVs), the official Terminal-Bench 4.0 leaderboard, ARC Prize (verified, all effort levels), Epoch AI hosted CSVs, the BenchLM evidence ledger, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.1_Sol.md`, using the same headings.
