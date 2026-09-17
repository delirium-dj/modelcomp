# Ling 3.0 Flash Fin Free — findings by GLM 5.3 Flash

- Source: InclusionAI / Ant Group (`ling-3.0-flash-fin`; OpenCode Zen free tier / OpenRouter `inclusionai/ling-3.0-flash-fin`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free (finance-enhanced free tier of Ling-3.0-flash-Fin)
- **Short description:** The first finance-enhanced model in Ant's Ling family — Ling-3.0-flash continued-trained on financial data (MIT, same 124B/5.1B hybrid-linear MoE, same 256K window, same cost profile). Built for end-to-end financial research agents: retrieval → evidence review → calculation → modeling → report.
- **Provider / access:** OpenCode Zen free tier (`opencode/ling-3-0-flash-fin-free`, Chat Completions; limited-time Vercel promo through 2026-09-25 per repo catalog); OpenRouter `inclusionai/ling-3.0-flash-fin`; open weights on Hugging Face (`inclusionAI/Ling-3.0-flash-Fin`, MIT, BF16, SGLang/vLLM runtimes shared with the base model).
- **Release / knowledge:** published 2026-09-03 on Hugging Face. Knowledge cutoff not verified in this pass.
- **IDs:** `opencode/ling-3-0-flash-fin-free` (Zen); `inclusionai/ling-3.0-flash-fin` (OpenRouter/HF).
- **Context window:** 262,144 tokens (marketed 256K) / 32K max output (repo catalog).
- **Modalities:** text in / text out. Thinking mode on by default (recommended temp 1.0, top-p 0.95, top-k 20); function calling.
- **Pricing (as of 2026-09-18):** **$0** on the evaluated free tier (Zen / Vercel promo); MIT open weights make self-hosting free at any scale.
- **Architecture:** 124B total / 5.1B active per token, hybrid-linear MoE inherited unchanged from Ling-3.0-flash; no new pretraining — domain continued-training only.

### Raw benchmarks found

Agent / tool use:

- Evaluated by the vendor on Finance Agent, APEX-Agents, SpreadsheetBench and τ³-Banking — **results published only as a chart image, no numeric table** (ai-tldr model-page note): no verified public score found
- Base Ling-3.0-flash independent eval: **7.0/10** overall across 845 records, tool-schema 45/45, HumanEval 19/19 valid (frangelbarrera/Ling-3-flash-evaluation, catalogued in `../../model-comparison.md`)

Reasoning / knowledge:

- Evaluated on FinFIRST (source-grounded financial search — dataset open-sourced for independent checking), FinSearchComp Verified, FinCRAFT: **no numeric scores transcribed** — vendor claim only: "competitive with similarly sized models and substantially larger general-purpose ones", particular strength in source selection and tool-intensive financial tasks
- BenchLM (base Ling 3.0 Flash): **53.9, #110/228** (benchlm.ai, catalogued in `../../model-comparison.md`)

Coding:

- SpreadsheetBench evaluated (valuation/spreadsheet workflows: formulas, cross-sheet dependencies, balance checks, scenario analysis): **no numeric score transcribed**
- SWE-bench / Terminal-Bench / LiveCodeBench: no verified public score found for the Fin variant

Long context:

- Window: **262,144 / 32K out**; no long-context retrieval benchmark found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six. Scores are provisional — the vendor's finance benchmark results are chart-only, so tier positioning plus base-model evidence is used, exactly the "no verified public score" path.

- **Tool use: 68/100.** Vendor foregrounds tool-intensive financial workflows (τ³-Banking, Finance Agent, APEX-Agents) but publishes no numbers; base model's independent 7.0/10 with perfect tool-schema compliance supports upper-mid, provisionally.
- **Reasoning: 70/100.** Multi-document reconciliation positioning (periods/definitions/conflicting figures) plus BenchLM 53.9 (#110/228) on the base — provisional mid-tier.
- **Context window: 72/100.** 262K at the repo's 256K tier with a 32K output cap.
- **Multimodal: 15/100.** Text-only in and out.
- **Coding: 72/100.** SpreadsheetBench-class workflows are the claim, not a published score; base-model coding evidence (HumanEval 19/19 valid) keeps it provisional mid-tier.
- **Cost efficiency: 100/100.** Evaluated free tier ($0) plus MIT open weights.
- **Overall Score: 66/100.** Mean: (68 + 70 + 72 + 15 + 72 + 100) / 6 = 397/6 = 66.2 → **66**. Best fit: niche free pick for finance research + spreadsheet-heavy workflows; verify on τ³-Banking/Finance Agent numbers before general coding use.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (ai-tldr.dev Ling-3.0-flash-Fin page citing the Hugging Face model card and FinFIRST dataset; independent base-model eval and BenchLM row from the source catalog in `../../model-comparison.md`); no benchmark value was invented where the vendor published only charts — scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
