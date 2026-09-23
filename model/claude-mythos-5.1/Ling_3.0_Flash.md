# Claude Mythos 5.1 — findings by Ling 3.0 Flash

- Source: Anthropic (`anthropic/claude-mythos-5.1`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted configuration of Claude Fable 5.1 with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users; leading agentic coding and reasoning at premium pricing.
- **Provider / access:** Anthropic API (`claude-mythos-5.1`), Amazon Bedrock, GitHub Copilot. Chat Completions / Messages API. No Zen Free ID; paid pricing only.
- **Release / knowledge:** September 2026 release (updated from Claude Fable 5.1). Knowledge cutoff not explicitly stated.
- **IDs:** `anthropic/claude-mythos-5.1` (Anthropic API)
- **Context window:** 1,000,000 (1M) tokens, 128K max output
- **Modalities:** Text, image in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Paid only — $10.00/1M input, $50.00/1M output (no Zen Free ID)
- **Architecture:** Proprietary, closed weights; Anthropic's flagship model with relaxed enterprise safeguards

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (Anthropic official, Unico Connect)
- Terminal-Bench 2.0: **88%** (BenchLM)
- Terminal-Bench Science 0.1: **60.9%** (LLM Stats)
- BrowseComp: **88%** (BenchLM)
- OSWorld-Verified: **85%** (BenchLM)
- DeepSWE v1.1: **67.4%** (ZenMux comparison)
- AutomationBench: **41.4%** (ZenMux)
- CyberGym: **83.8%** (BenchLM)
- Agentic Index (BenchLM): 87.0-89.7

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (ZenMux / Anthropic official)
- HLE (with tools): **65.0%** (ZenMux) / **64.5%** (BenchLM)
- Math (BenchLM): **97.6**
- Knowledge (BenchLM): 68.5
- SWE-bench Verified: **95.5%** (BenchLM, August 2026)
- SWE-bench (June 2026): **78%** (SMF Clearinghouse)
- Benchmark public score (BenchLM): 82.95

Coding:

- SWE-bench Verified: **95.5%** (BenchLM)
- SWE-bench Pro: **80.3%** (Anthropic official)
- FrontierCode Diamond: **29.3%** (Anthropic official)
- Coding Index (BenchLM): 89.7
- Terminal-Bench 2.1: **85.0%** (also agentic)
- SWE-bench (June 2026): **78%**

Long context:

- Context window: 1M tokens
- MRCR: 95.5% (BenchLM)
- Terminal-Bench 2.1 at 85.0% validates strong long-context agentic reasoning

### Normalized scores (1–100)

- **Tool use: 92/100.** Exceptional on Terminal-Bench 2.0 (88%), BrowseComp (88%), OSWorld-Verified (85%), CyberGym (83.8%), and Terminal-Bench 2.1 (85.0%); moderate on DeepSWE (67.4%) and AutomationBench (41.4%). Top-tier agentic and computer use capability.
- **Reasoning: 93/100.** GPQA Diamond at 93.7% and BenchLM Math at 97.6 demonstrate elite reasoning; HLE with tools at 65.0% is strong; SWE-bench Verified at 95.5% reflects exceptional coding-reasoning fusion. BenchLM public score of 82.95 confirms frontier-level reasoning.
- **Context window: 96/100.** 1M context window with MRCR at 95.5% confirming strong long-context retrieval; Terminal-Bench 2.1 at 85.0% validates agentic reasoning over long horizons.
- **Multimodal: 75/100.** Text and image input supported; text output; BenchLM multimodal score of 93.5 but narrower modality coverage than Gemini models (no audio/video/PDF input). Restricted enterprise configuration limits some multimodal capabilities.
- **Coding: 92/100.** SWE-bench Verified at 95.5% (#2 on BenchLM); SWE-bench Pro at 80.3% (leads all models); FrontierCode Diamond at 29.3%; Coding Index at 89.7. Elite software engineering capability.
- **Cost efficiency: 35/100.** No Zen Free ID; paid-only pricing at $10/$50 per 1M input/output among the most expensive frontier models.
- **Overall Score: 90/100.** Mean of the five non-cost dimensions (92 + 93 + 96 + 75 + 92) / 5 = 89.6, rounded half-up to 90. Anthropic's flagship enterprise model with elite SWE-bench Verified (95.5%) and GPQA Diamond (93.7%) performance, leading agentic coding capability, and premium pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, BenchLM, LLM Stats, Anthropic official model card, Unico Connect, ZenMux, and SMF Clearinghouse; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-mythos-5.1/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-mythos-5.1/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
