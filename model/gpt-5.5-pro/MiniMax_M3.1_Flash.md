# GPT-5.5 Pro — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's April-2026 high-compute configuration of GPT-5.5 — **not a bigger model**: "GPT‑5.5 Pro, which is the same underlying model using a setting that makes use of parallel test time compute." It is the API twin of the ChatGPT "Pro" tier, sold at roughly 6× the base price for the same weights. It is a *serving configuration*, not a separate checkpoint, and it is a sibling of `gpt-5.5` (the base model) and of `gpt-5.5-pro`'s own `xhigh` effort label.
- **Provider / access:** OpenAI API `gpt-5.5-pro` (snapshot `gpt-5.5-pro-2026-04-23`) — **Responses and Batch only; Chat Completions is not supported**; OpenRouter `openai/gpt-5.5-pro` (+ `:batch`); OpenCode Zen `opencode/gpt-5.5-pro` (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** released **2026-04-23** (launch blog, updated 2026-04-24: "GPT‑5.5 and GPT‑5.5 Pro are now available in the API"). Knowledge cutoff **Dec 01, 2025**.
- **IDs:** `gpt-5.5-pro` (OpenAI API, snapshot `gpt-5.5-pro-2026-04-23`), `openai/gpt-5.5-pro` (+ `:batch`) (OpenRouter), `opencode/gpt-5.5-pro` (Zen).
- **Context window:** **1,050,000 tokens**, **128,000 max output** (OpenAI docs; OpenRouter agrees: context 1,050,000, `max_completion_tokens` 128,000). Artificial Analysis displays **922k**, which is the max *input* figure (1,050,000 − 128,000) applied to plain `gpt-5.5` as well — an accounting difference, not a Pro limitation.
- **Modalities:** text and image in, text out. Reasoning: "Reasoning.effort supports: medium, high (default) and xhigh." Endpoints: Responses + Batch (no realtime, fine-tuning or embeddings). Tools: function_calling, web_search, file_search, image_generation, code_interpreter, hosted_shell, mcp. Rate limits: Build 500 RPM / 200K TPM; Launch 1,000 / 1,000,000; Grow 2,000 / 4,000,000. "Since GPT-5.5 Pro is designed to tackle tough problems, some requests may take several minutes to finish" — OpenAI recommends background mode.
- **Pricing (as of 2026-10-19, per 1M tokens):** **$30 input / $180 output** (≤272K context), **$60 / $270** (>272K); **no cached-input discount and no cache-write price** ("GPT‑5.5 Pro does not offer a cached input discount"), regional (data-residency) endpoints +10%. Batch/Flex $15/$90 (short context only). OpenCode Zen lists $30.00 / $180.00 with a $30.00 cached-read column.
- **Architecture:** proprietary, closed weights; parameter count not disclosed; identical underlying model to `gpt-5.5`, differing only by parallel test-time compute.

### Raw benchmarks found

> OpenAI's launch-table numbers are marked "vendor" and were run "with reasoning effort set to xhigh"; Artificial Analysis, Vals AI, ARC Prize, Epoch AI and the BenchLM ledger are independent. OpenAI's own table prints "-" for SWE-bench Pro, Terminal-Bench, OSWorld, MMMU-Pro, GPQA, ARC-AGI and long-context rows **for the Pro configuration**.

Agent / tool use:

- BrowseComp: **90.1%** (vendor) — the strongest number for this configuration; the plain GPT-5.5 scores 84.4%
- GDPval (wins-or-ties): **82.3%** (vendor) vs 84.9% for plain GPT-5.5 — the Pro configuration is *worse* here
- GeneBench: **33.2%** (vendor) vs 25.0% for plain GPT-5.5; IB Modeling (internal) **88.6%** vs 88.5%
- FrontierMath legacy aggregate: **52.4%** (T1–3) / **39.6%** (T4) (vendor, April 2026 benchmark version)
- Terminal-Bench, Tau-bench, AutomationBench, Toolathlon, MCP-Atlas, OSWorld, Claw-Eval: **no verified public score found** for the Pro configuration
- AA Artificial Analysis Intelligence Index: **null / not published** for this model

Reasoning / knowledge:

- HLE: **43.1%** without tools / **57.2%** with tools (vendor) / 43.1% without tools (BenchLM, same source) — versus 41.4% / 52.2% for plain GPT-5.5
- FrontierMath v2 (Epoch AI, June-2026 benchmark): Tiers 1–3 **87.719%**, Tier 4 **78.049%** (via the BenchLM ledger) — far above OpenAI's April-era 52.4%/39.6%, because the benchmark was revised ("corrected 123 problems in Tiers 1-3")
- CritPt: **30.57%** (the only per-eval value Artificial Analysis publishes for this model)
- ARC-AGI-1 **95.0%** / ARC-AGI-2 **84.2%** (via BenchLM, attributed to ARC Prize — the ARC Prize page itself is JS-rendered, so this is not independently verified); OpenAI's own table prints "-" for Pro on the ARC rows
- No GPQA Diamond, no FrontierMath legacy split by tier, no MRCR/Graphwalks long-context figure published for Pro

Coding:

- **OpenAI's own table publishes no coding numbers for GPT-5.5 Pro** ("SWE-Bench Pro, Terminal-Bench 2.0, OSWorld, MMMU Pro, GPQA, ARC-AGI-1/2, long-context (MRCR/Graphwalks)" are all "-" for Pro).
- The underlying GPT-5.5 model provides the nearest available capability proxy (same weights): SWE-bench Pro 58.6%, SWE-bench Verified 82.60% (Vals, #1 of 88), Terminal-Bench 2.0 82.7%, LiveCodeBench 85.30% (Vals), FrontierCode 1.1 Main 43.0%, CursorBench 3.2 58.4%, Terminal-Bench 2.1 76.4% (Vals), Terminal-Bench 4.0 14.65%, Vibe Code Bench 69.85%
- AA Coding Agent Index / terminal-bench row for Pro: **no verified public score found**

Long context:

- **No long-context measurement exists for the Pro configuration** (OpenAI's table row is "-"; no MRCR or Graphwalks figure is published). The base model's own published ladder is MRCR v2 8-needle 4K–8K 98.1% → 64K–128K 83.1% → 128K–256K 87.5% → 256K–512K 81.5% → 512K–1M 74.0%, and Graphwalks BFS 256k 73.7 / 1M 45.4, parents 256k 90.1 / 1M 58.5.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Because OpenAI publishes almost no capability numbers for the Pro configuration, the scores lean on the shared-weights base model where Pro has no number of its own, and every such line says so.

- **Tool use: 78/100.** BrowseComp **90.1%** is a real frontier-tier agentic-web number, and GeneBench 33.2% plus IB Modeling 88.6% show the extra test-time compute paying off on hard knowledge work. Capped by the absence of *any* Terminal-Bench, τ-bench, AutomationBench, Toolathlon, MCP-Atlas or Claw-Eval figure for this configuration, by GDPval **82.3% wins-or-ties — worse than the plain GPT-5.5's 84.9%**, and by the pricing-driven caution that nobody runs this configuration as a routine agent.
- **Reasoning: 88/100.** FrontierMath v2 87.719% (T1–3) and 78.049% (T4) on Epoch AI's revised benchmark, HLE 43.1% without tools / 57.2% with tools, CritPt 30.57% (the strongest CritPt in this batch), GeneBench 33.2% and IB Modeling 88.6%. Held below 90 because the AA Intelligence Index is **not published** for this model, GPQA Diamond is unmeasured, and the ARC-AGI figures are second-hand.
- **Context window: 95/100.** 1,050,000 tokens with a 128,000 max output — the rubric's top tier (≥1M = 95–100), clearing the 64K output line. Not higher: no long-context retrieval measurement exists for the Pro configuration itself, and the base model's own 1M-band retrieval is 74.0% (MRCR) / 45.4% (Graphwalks BFS), far from the rubric's 98% condition.
- **Multimodal: 70/100.** Text and image in, text out, on the same weights as GPT-5.5 (MMMU-Pro 81.2% without tools / 83.2% with tools, OfficeQA Pro 54.1%, image input supported). The rubric's "+image in = 60–70" band is the ceiling and is met at the top: no video or audio input is documented, and OpenAI's Pro table prints "-" for MMMU-Pro, so the number is inherited from the base model rather than measured for Pro.
- **Coding: 80/100.** The base model's coding profile — SWE-bench Verified 82.60% (Vals, #1 of 88), Terminal-Bench 2.0 82.7%, LiveCodeBench 85.30%, Vibe Code Bench 69.85% — is what this configuration exposes, since "Pro" changes only the test-time compute, not the weights. Capped by SWE-bench Pro 58.6%, Terminal-Bench 4.0 14.65%, FrontierCode 43.0%, and the fact that **OpenAI publishes no Pro-specific coding numbers at all**.
- **Cost efficiency: 10/100.** The evaluated route — OpenCode Zen `opencode/gpt-5.5-pro` — is billed at **$30.00 in / $180.00 out** per 1M, with **no cached-input discount** ("GPT‑5.5 Pro does not offer a cached input discount"), regional endpoints +10% and Batch halving to $15/$90. The rubric's highest anchor is "~$10/$50 = ~30"; this is 3× that output price with the cache discount removed, so it scores at the floor. This is the whole point of the configuration — maximum accuracy per request, minimum cost efficiency — and it is why the score is a floor rather than a mid-range value.
- **Overall Score: 82.2/100.** (78 + 88 + 95 + 70 + 80) / 5 = 82.2 — best-fit: a **config** rather than a model — the same GPT-5.5 weights with parallel test-time compute, worth it for a handful of very hard one-off questions (FrontierMath, GeneBench, BrowseComp) and indefensible as a default: at $30/$180 with no cache discount it is ~12× the price of plain GPT-5.5 for a comparable answer.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **"Pro" is a configuration, not a model.** OpenAI's system card: "GPT‑5.5 Pro, which is the same underlying model using a setting that makes use of parallel test time compute" — and "Evals of GPT were run with reasoning effort set to xhigh". This resolves the naming question that would otherwise make this folder look like a separate SKU: it is GPT-5.5 at maximum test-time compute, with a 6× price.
2. **Context 1,050,000 (OpenAI/OpenRouter) vs 922k (AA).** Resolved: AA's figure is the max-input number (1,050,000 − 128,000 output) and applies to plain `gpt-5.5` as well.
3. **FrontierMath 52.4% (OpenAI, April) vs 87.719% (Epoch v2, June).** Different benchmark versions — Epoch released v2 on 2026-06-12 and "corrected 123 problems in Tiers 1-3". Both are reported; the v2 figure is used because it is the current benchmark, and the legacy figure is kept for traceability.
4. **AA's "Omniscience 18.22% accuracy / 90.24% hallucination" for this model is misattributed** — those values belong to GLM-4.5 in AA's embedded comparison array; AA's own `gpt-5-5-pro` record has `omniscience: null`. Not scored.
5. **ARC-AGI: OpenAI reports 95.0%/85.0% for plain GPT-5.5 and "-" for Pro**, while BenchLM lists 95.00/84.2 for Pro from ARC Prize. The second-hand rows are labelled as such and the vendor's own "-" is reported.
6. **Chat Completions:** OpenAI lists Chat Completions as "Not supported" for `gpt-5.5-pro`, while OpenRouter's `llms.txt` documents calling it via `/api/v1/chat/completions` — a gateway-compatibility difference, recorded.
7. **GDPval is the one place the Pro configuration loses to the base model** (82.3% vs 84.9% wins-or-ties) — recorded as published, and it is why Tool use is scored on BrowseComp/agentic evidence rather than on the GDPval row.
8. **Independent coverage is thin by construction:** no Terminal-Bench 4.0 row on the official board, no swebench.com entry, no LiveCodeBench row, no Vals AI model page, and AA publishes no index, no speed and no price for this model. That thinness — not a weak model — is what caps the Confidence of the scores above.

### Notes on identity

- `gpt-5.5-pro` is the **same weights as `gpt-5.5`**, differing by a parallel-test-time-compute serving setting and a 6× price. It is not a separate checkpoint, not a larger model, and not the ChatGPT "Pro" subscription tier (which is the same configuration surfaced in the product).
- The `xhigh` label on AA's page is an *effort* level available on plain GPT-5.5 as well; the "Pro" designation is orthogonal to effort.
- OpenCode Zen exposes `gpt-5.5-pro` at $30/$180 but omits OpenAI's >272K tier ($60/$270) from its price table — a gateway gap worth knowing before routing long-context work through it.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, GPT-5.5 launch blog and system card (for the "parallel test time compute" definition and the vendor eval table); independent trackers Artificial Analysis (model page — CritPt and the empty index record), the BenchLM evidence ledger, Vals AI and the official Terminal-Bench board (both negative for this configuration), and OpenRouter / OpenCode Zen catalogs. Conflicting figures — including the misattributed AA Omniscience row and the two FrontierMath benchmark versions — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.5_Pro.md`, using the same headings.
