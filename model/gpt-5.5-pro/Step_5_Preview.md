# GPT-5.5 Pro — findings by Step 5 Preview

- Source: OpenAI `gpt-5.5-pro`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro (`gpt-5.5-pro`; highest-accuracy inference setting in the GPT-5.5 family)
- **Short description:** OpenAI's highest-accuracy inference setting — the SAME Mixture-of-Experts weights as standard GPT-5.5 but with parallel test-time compute (explores multiple reasoning paths before answering). Positioned for correctness-critical work (hard code reviews, multi-file refactors), not everyday chat. 6× standard GPT-5.5's price.
- **Provider / access:** OpenAI API (Responses API), AWS Bedrock, Azure OpenAI Service; ChatGPT Pro/Business/Enterprise only. No free/Plus tier.
- **Release / knowledge:** Released 2026-04-23 (API 2026-04-24). Knowledge cutoff not explicitly disclosed (GPT-5.5 family).
- **IDs:** `gpt-5.5-pro` (+ `high`/`xhigh` effort). No free/contributor ID.
- **Context window:** 1,000,000 (1M) input; 128,000 max output. Codex caps at 400K — full 1M needs the Responses API. Context surcharge (2× in / 1.5× out) once input exceeds 272,000 tokens.
- **Modalities:** Text, image, audio, video in; text, tool-calls out. Reasoning yes (parallel test-time compute); tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $30.00/M in · $180.00/M out (6× standard GPT-5.5's $5/$30 — the most expensive tier tracked). No confirmed Pro-specific cached price (~$3/M if the 90% discount applies). No free tier.
- **Architecture:** Same MoE transformer as GPT-5.5 (128 expert routing groups, sparse activation); parallel test-time compute is the only difference from standard GPT-5.5.

### Raw benchmarks found

> Cross-referenced hokai.io (OpenAI) and vectorwire.ai (16 results/14 benchmarks, 9 independent). Because Pro shares GPT-5.5's weights, standard GPT-5.5 benchmark results apply to Pro.

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (vendor-reported; ahead of Gemini 3.1 Pro 68.5% and Claude ~65%)
- BrowseComp (agentic search): **90.1%** (vendor-reported)
- Vector Wire capability: Agentic **not rated** (too few results) — no live OSWorld/Tau-bench exact row for Pro
- Does not add Sol-style ultra multi-agent mode (that is a GPT-5.6 feature)

Reasoning / knowledge:

- Humanity's Last Exam: **41.4%** (vendor-reported; behind Claude Opus 4.7 46.9% and Gemini 3.1 Pro 44.4% — raw academic-recall reasoning is NOT where the Pro premium pays off)
- FrontierMath Tiers 1–3: **51.7%** / Tier 4: **35.4%** (vendor) — but an epoch.ai independent run shows FrontierMath Tier 4 at **78.05%** (xHigh), a large discrepancy vs the 39.6% FrontierMath figure elsewhere (harness/version differs)
- ARC-AGI-1: **95.0%** (xHigh) / **96.5%** (High) (ARC Prize, independent)
- MMLU: **92.4%** (vendor-reported)
- SimpleQA Verified: **64.5%** (epoch.ai, independent, xHigh)
- Vector Wire capability: **Reasoning "Capable"** (−10.6% vs leader, 4/6); **Math "Capable"** (−21.7%)
- GPQA Diamond / AIME 2025: OpenAI did not publish separate Pro-setting scores (shares GPT-5.5's) — treated as provisional

Coding:

- SWE-bench Verified: **88.7%** (vendor-reported; rank #4/32 — the clearest differentiator, ahead of Gemini 3.1 Pro 80.6% and Claude Sonnet 4.6 79.6%)
- Terminal-Bench 2.0: **82.7%** (see tool use)
- Vector Wire capability: Coding **not rated** (too few results for the Pro setting specifically)
- LiveCodeBench / SciCode exact rows: not surfaced live for Pro — treated as provisional

Multimodal:

- Text + image + audio + video in; text out.
- Vector Wire: Multimodal **not rated** (too few results) — no live MMMU row surfaced for Pro

Long context:

- 1M input / 128K output (Codex caps at 400K; surcharge >272K). Vector Wire: Long Context **not rated** (too few results). No explicit MRCR ≥98%-at-512K figure published.
- **Tool use: 84/100.** Terminal-Bench 2.0 82.7% (ahead of Gemini 3.1 Pro and Claude) and BrowseComp 90.1% are strong. Capped by Vector Wire not rating Agentic (too few Pro-specific results), no live OSWorld/Tau-bench row, and the vendor-only nature of the headline tool numbers.
- **Reasoning: 88/100.** ARC-AGI-1 95–96.5% (independent, ARC Prize), SimpleQA 64.5% (independent), and MMLU 92.4% are strong. Capped by HLE 41.4% (trailing Opus 4.7 and Gemini 3.1 Pro), the FrontierMath discrepancy (35.4% vendor vs 78% epoch for Tier 4), and Vector Wire's Reasoning "Capable" (−10.6%) / Math "Capable" (−21.7%) — raw academic recall is not where Pro pays off.
- **Context window: 92/100.** 1M input / 128K output — solid ≥1M tier. Held from the top by the Codex 400K cap, the 2× surcharge above 272K input, Vector Wire not rating Long Context (too few results), and no explicit MRCR ≥98%-at-512K figure.
- **Multimodal: 88/100.** Text + image + audio + video in (text out) hits the 90–100 input band; held to 88 because Vector Wire has not rated Multimodal (too few results) and output is text-only.
- **Coding: 90/100.** SWE-bench Verified 88.7% (rank #4/32) and Terminal-Bench 2.0 82.7% are Pro's clearest differentiator — a clear coding lead over Gemini 3.1 Pro and Claude Sonnet 4.6. Capped by the vendor-only reporting, no live SWE-bench Pro/LiveCodeBench/SciCode row for the Pro setting, and Vector Wire not rating Coding for Pro specifically.
- **Cost efficiency: 25/100.** Paid-only at $30/$180 per 1M (6× standard GPT-5.5, the most expensive tier tracked — >99% of models); a 2× context surcharge above 272K input and no free tier make it the costliest option. Reserve it for escalations that fail a confidence check.
- **Overall Score: 88/100.** Mean of the five non-cost dims (84+88+92+88+90)/5 = 88.4. Best fit for correctness-critical agentic coding where a wrong answer is expensive and the 6× premium is justified; route everyday work to standard GPT-5.5 (a sixth of the price) and deep academic reasoning to Claude Opus 4.7 or Gemini 3.1 Pro.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Cross-referenced OpenAI (via hokai.io) and vectorwire.ai (16 results, 9 independently verified). GPT-5.5 Pro shares standard GPT-5.5's weights (parallel test-time compute is the only difference).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


### Normalized scores (1–100)
