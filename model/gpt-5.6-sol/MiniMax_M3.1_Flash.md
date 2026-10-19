# GPT-5.6 Sol — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's July-2026 GPT-6-family model — a coding-and-computer-use specialist sold as the mid-tier of the GPT-6 line (below GPT-6 Astra in intelligence, a fifth of its input price, and far cheaper than GPT-5.6 Sol's own launch price). It has a "Sol Ultra" sibling configuration that runs four parallel agents, and a `gpt-5.6-sol-pro` OpenRouter route. **Not** a tier alias of `gpt-5.6-sol`'s predecessors: it is a distinct model id, superseded in turn by GPT-6 Sol.
- **Provider / access:** OpenAI API `gpt-5.6-sol` (alias `gpt-5.6` routes to it) — Chat Completions, Responses and Batch; no realtime/assistants/fine-tuning; OpenRouter `openai/gpt-5.6-sol` (+ `gpt-5.6-sol-pro`, `:batch`); OpenCode Zen `opencode/gpt-5.6-sol` (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** preview 2026-06-26, launched **2026-07-09** (blog + system card). Knowledge cutoff **Feb 16, 2026**.
- **IDs:** `gpt-5.6-sol` (OpenAI API; alias `gpt-5.6`), `openai/gpt-5.6-sol` / `openai/gpt-5.6-sol-pro` / `:batch` (OpenRouter), `opencode/gpt-5.6-sol` (Zen).
- **Context window:** **1,050,000 tokens**, **922,000 max input tokens**, **128,000 max output tokens** (OpenAI docs; OpenRouter agrees). Reason effort: "supports: none, low, medium (default), high, xhigh, and max". Tools: web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search. Rate limits: Build 5,000 RPM / 1M TPM; Launch 10,000 / 4M; Grow 15,000 / 40M. "ultra" = four parallel agents (ChatGPT/Codex; a `multi-agent` beta in the Responses API).
- **Pricing (as of 2026-10-19, per 1M tokens):** launched at $5/$30, cut on 2026-08-21 — "OpenAI dropped the API and credit pricing of GPT‑5.6 Sol by over 20% for the next 3 months" — to **$4 in / $20 out**; cached input $0.40; "Cache writes are billed at 1.25x the uncached input token rate"; prompts >272K priced at 2× input and 1.5× output; Batch/Flex $2/$10; Fast $8/$40 (>272K: $16/$60). Promotional pricing "at least through November 21, 2026". OpenCode Zen: $4.00/$20.00/$0.40 read/$5.00 write (>272K: $8.00/$30.00/$0.80/$10.00).
- **Architecture:** proprietary, closed weights; parameter count not disclosed. System card (2026-07-09): Sol/Terra/Luna rated **High** capability in Cyber and Bio, none reaching Critical.

### Raw benchmarks found

> OpenAI's launch-blog numbers are marked "vendor"; Artificial Analysis, the official Terminal-Bench board, Vals AI, ARC Prize and the BenchLM ledger are independent. Note the launch table has **two columns — Sol and Sol Ultra** — and several aggregator rows conflate them.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (vendor, Sol) / **91.9%** (vendor, Sol **Ultra** — the number aggregators often attach to Sol) / **88.01%** (AA) / **85.77%** (Vals AI, #1/50)
- Terminal-Bench 4.0: **39.90%** (AA) / **37.88%** (Vals AI); no official-board row was retrievable
- Terminal-Bench 3.0: **34.6%** (via BenchLM); Terminal-Bench-Hard **65.91%** (AA)
- Toolathlon **58%** (vendor) / 58% (via BenchLM); AutomationBench **18.1%** (vendor) / **60.08%** (AA AutomationBench-AA objective-share)
- BrowseComp: **90.4%** (vendor, Sol) / **92.2%** (Sol Ultra) — the blog's prose ("sets new state-of-the-art results on BrowseComp at 92.2%") refers to Ultra
- OSWorld 2.0 **62.6%** (vendor); GDPval-AA **1608.63** (AA); τ²-bench **85.09%**, τ³-Banking **44.33%** (AA); APEX-Agents null; IPI attack success **27.0%** (via BenchLM — sourced to Google's Gemini 4 Argon launch chart, an image)
- Agents' Last Exam: prose "sets a new high of 53.6" vs table **52.7**; ProofBench 77.00% (Vals); IFBench **72.65%** (AA); ITBench-AA **56.21%** (AA); CyberGym 84.5%, ExploitGym 33.7%, ExploitBench 73.5% (vendor) / 74% (BenchLM), SEC-Bench Pro 71.2%
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (vendor) / **94.14%** (AA) / **95.20%** (Vals AI)
- HLE: **49.49%** (AA) / 49.5% (via BenchLM); "a 5 point jump in Humanity's Last Exam" over GPT-6 Sol (AA article); HLE-Verified 54.5% (via BenchLM)
- FrontierMath v2: Tiers 1–3 **89.000%**, Tier 4 **83.000%** (vendor) — 3.7 points / 17 points behind GPT-6 Astra and GPT-6.1 Sol
- ARC-AGI (ARC Prize, verified, per effort): ARC-AGI-1 max 96.5 / xhigh 97.5 / high 97.0 / medium 92.5 / low 74.5; ARC-AGI-2 max **92.5** / xhigh 90.0 / high 85.4 / medium 67.1 / low 42.5; ARC-AGI-3 max **7.8** / xhigh 7.0 / high 2.1 / medium 1.1 / low 0.3 — "averaging 13.33% on Public and 7.78% on Semi-Private"; first model to win an ARC‑AGI‑3 public game (ft09, 87%)
- MMLU-Pro 89.10% (Vals) / 89.1% (via BenchLM); ScienceQA 82.1%; MMMU-Pro **83.41%** (AA) / 88.84% (Vals) / 83%–84.6% (vendor)
- HealthBench Pro **60.5%** length-adjusted (unadjusted 64.1) / 60.5% (via BenchLM); HealthBench 57.0; Hard 33.1; Consensus 95.5; Omniscience accuracy **59.4%** with a **92.2% hallucination rate** (AA)

Coding:

- SWE-bench Pro: **64.6%** (vendor) — but Vals AI's SWE-bench Verified run for the same model reports **96.20%** (#3 of 88)
- SWE-bench (Vals): **96.20%**; DeepSWE v1.1 **72.7%** (vendor); LiveCodeBench **82.60%** (Vals) / 82.6% (via BenchLM)
- Terminal-Bench 2.1 88.8% (vendor) / 88.01% (AA) / 85.77% (Vals); Terminal-Bench 4.0 39.90% (AA) / 37.88% (Vals); Terminal-Bench-Science 0.1 **22.38%** (AA) / 20.00% (Vals)
- FrontierCode 1.1 **Extended 60.6%** (via BenchLM); FrontierSWE v2 **32.2%** (via BenchLM); CursorBench 3.2 **67.2%** / 4.0 41.7%; VulcanBench v3 87.0%; VulcanBench Coding Intelligence Index v1 86.5%; PostTrainBench 36.2%; Bug Hunt Bench 42.0 fixes; GeneBench-Pro 28.7%
- MRCR v2 256K–512K **91.5%**, 512K–1M **73.8%** (vendor)
- Vibe Code Bench / SWE-bench Verified official board: **no verified public score found**

Performance profile (AA, Max): Intelligence Index **47** (#27/217), output **87.7 t/s** (#86/186; Azure 110.8, Bedrock 113.7), cost per Index task **$1.99** (#82/114), 90M output tokens (#63/116), TTFA 91.80s, blended $3.08/1M. Effort variants: Max 47, Xhigh 44, High 42, Medium 39, Low 33, Non-reasoning 28 (TTFA 0.94s). AA's launch-day index was **58.9** on index v4.1 — the current 47 reflects the v4.3.2 re-baselining.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 85/100.** Frontier-adjacent agentic profile — Terminal-Bench 2.1 88.8% (vendor) / 88.01% (AA) / 85.77% (Vals, #1 of 50), BrowseComp 90.4%, τ²-bench 85.09%, Toolathlon 58%, OSWorld 2.0 62.6%, GDPval-AA 1608.63, IFBench 72.65%, ITBench 56.21%, ProofBench 77.0%, Agents' Last Exam 52.7%, plus a strong cyber suite (ExploitBench 73.5%, SEC-Bench Pro 71.2%). Capped below 90 by the rubric's anchors (TB2.1 ~88%+ met, but τ3 ~50%+ → 44.33% and GDPval ~1750+ → 1608.63 both short), by AutomationBench 18.1% in OpenAI's own Zapier run, by the **27.0% indirect-prompt-injection attack-success rate**, and by the fact that Terminal-Bench 4.0 is only 37.9–39.9%.
- **Reasoning: 89/100.** GPQA Diamond 94.14–95.20%, FrontierMath v2 89.000% (T1–3) / 83.000% (T4), ARC-AGI-2 92.5% at max with a full effort ladder, MMLU-Pro 89.10%, ScienceQA 82.1%, IFBench 72.65%, HealthBench Pro 60.5% and Consensus 95.5%, ProofBench 77.0%. Held below 90 because the current Artificial Analysis Intelligence Index is **47** (under the rubric's 60+ anchor; OpenAI's 58.9 is the older v4.1 index), because **ARC-AGI-3 is only 7.8%** even at max effort, and because of the **92.2% hallucination rate** on Omniscience despite 59.4% accuracy.
- **Context window: 96/100.** 1,050,000 tokens with a 922,000 max input and a 128,000 max output — the rubric's top tier (≥1M = 95–100), with the output cap above the 64K line. Not 100: the rubric's extra condition is "≥98% retrieval at 512K+", and OpenAI's own MRCR v2 numbers are **91.5% at 256K–512K and 73.8% at 512K–1M** — a visible fall-off at the top of the window.
- **Multimodal: 70/100.** Text and image in, text out, with credible vision evidence — MMMU-Pro 83.41% (AA) / 88.84% (Vals) / 84.6% with tools (vendor), plus a full computer-use toolchain (ScreenSpot-class agent work, hosted_shell, apply_patch). The rubric's "+image in = 60–70" band is the ceiling and is met at its top: no video or audio input is documented, and there is no non-text output.
- **Coding: 85/100.** Terminal-Bench 2.1 88.8% (vendor) / 88.01% (AA) — above the rubric's 85% anchor — DeepSWE 72.7%, SciCode 57.06%, LiveCodeBench 82.60%, FrontierCode 1.1 Extended 60.6%, CursorBench 3.2 67.2%, VulcanBench 86.5%, SWE-bench 96.20% (Vals). Capped by Terminal-Bench 4.0 at only 37.9–39.9%, Terminal-Bench-Science 22.38%, FrontierSWE v2 32.2%, CursorBench 4.0 41.7%, PostTrainBench 36.2%, and the unresolved 64.6%-vs-96.2% SWE-bench Pro spread (vendor self-report vs Vals' run).
- **Cost efficiency: 62/100.** The evaluated route — OpenCode Zen `opencode/gpt-5.6-sol` — is billed at **$4.00 in / $20.00 out** per 1M (≤272K), **$8.00 / $30.00** above 272K, cache read $0.40, cache write $5.00 (OpenAI bills writes at 1.25× input). The rubric's anchors (~$3/$15 ≈ 60, ~$1.25/$4.25 ≈ 88) put $4/$20 just above the 60 mark; Artificial Analysis measures $1.99 per Index task, and Batch/Flex halve the rates again, while the promotional price is "at least through November 21, 2026".
- **Overall Score: 85/100.** (85 + 89 + 96 + 70 + 85) / 5 = 85 — best-fit: the strongest mid-price agentic/coding model of the 2026 GPT line — Terminal-Bench 2.1 #1 on Vals, ExploitBench 73.5%, FrontierMath T1–3 89.0% — at $4/$20 after the August price cut; the weak spots are Terminal-Bench 4.0 (~38%), ARC-AGI-3 (7.8%) and a 92.2% hallucination rate, so it is a strong workhorse rather than a frontier reasoning pick.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Sol vs Sol Ultra row confusion.** OpenAI's table has two columns: Terminal-Bench 2.1 88.8% (Sol) vs 91.9% (Ultra), BrowseComp 90.4% vs 92.2%, Agents' Last Exam 53.6 (prose) vs 52.7 (table). Several aggregator rows attach the Ultra figures to plain Sol — BenchLM's "Terminal-Bench 2.1 = 91.9%" and "BrowseComp 92.2%" are Ultra numbers. The Sol column is used throughout.
2. **SWE-bench — 64.6% Pro (vendor) vs 96.20% Verified (Vals).** Different benchmarks (Pro vs Verified) *and* different harnesses; both are labelled, and the Verified figure is not read as a Pro result.
3. **AA Intelligence Index — 58.9 (OpenAI, v4.1) vs 47 (current AA, v4.3.2).** Index-version re-baselining; BenchLM carries the 58.9. The current 47 is scored.
4. **AutomationBench — 18.1% (OpenAI, Zapier 1.0.6) vs 60.08% (AA AutomationBench-AA).** Different benchmarks and metrics (task pass rate vs share of task objectives); the strict 18.1% is used.
5. **Terminal-Bench 2.1 — 88.8 (vendor) / 88.01 (AA) / 85.77 (Vals, #1).** Harness variance; AA is the anchor.
6. **Terminal-Bench 4.0 — 39.90% (AA) / 37.88% (Vals).** Close agreement; no official-board row retrievable.
7. **GPQA — 94.6 (OpenAI) / 94.14 (AA) / 95.20 (Vals); MMMU-Pro 83%–84.6% (OpenAI) / 83.41% (AA) / 88.84% (Vals).** Vendor under-reports vision, Vals over-reports; AA is the anchor.
8. **HealthBench Pro 60.5% is length-adjusted** (unadjusted 64.1) — both are recorded so the two are not confused.
9. **IPI 27.0%** is sourced by BenchLM to *Google's* Gemini 4 Argon launch chart (an image), not to OpenAI — recorded with that provenance, and it is a poor showing for this model on prompt-injection resistance.
10. **Deprecation status.** Artificial Analysis marks the model deprecated ("OpenAI has launched a newer release, GPT-6 Sol"), but **OpenAI's own deprecations page does not list `gpt-5.6-sol`** and still names it as a substitute for gpt-4, gpt-5-pro and o3. The live, still-sold model is the one scored here; the AA label is a tracker convention, not a vendor deprecation.

### Notes on identity

- `gpt-5.6-sol` is a distinct model id (July 2026) from `gpt-5.6-sol-pro` (an OpenRouter route) and from `gpt-6-sol` (its successor). The undated alias `gpt-5.6` points to `gpt-5.6-sol`.
- "Sol **Ultra**" is a four-parallel-agent configuration of the same model (ChatGPT/Codex, `multi-agent` beta in the Responses API) — a serving mode, not a separate checkpoint, and it is not the folder's model.
- Effort levels (none/low/medium/high/xhigh/max) are parameters: the AA ladder runs 47 → 28 from max to non-reasoning.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, launch blog (Sol vs Sol Ultra tables) and the 2026-07-09 system card; independent trackers Artificial Analysis (model page with all six effort variants, plus the launch article's deltas), the official Terminal-Bench board (no row), Vals AI, ARC Prize (verified, full effort ladder), the BenchLM evidence ledger, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts — including the Ultra-column mix-ups, the AutomationBench metric mismatch and the AA index re-baselining — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Sol.md`, using the same headings.
