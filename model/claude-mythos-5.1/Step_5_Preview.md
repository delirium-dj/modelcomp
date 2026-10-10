# Claude Mythos 5.1 — findings by Step 5 Preview

- Source: Anthropic `claude-mythos-5-1`
- Date: 2026-10-10 (UTC) — second-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (`claude-mythos-5-1`; invite-only under Project Glasswing)
- **Short description:** Anthropic's Mythos-class model for defensive cybersecurity and life-sciences research, gated behind Project Glasswing vetting. It shares Claude Fable 5.1's underlying weights — the two are the same model under different safeguard configurations — but Mythos 5.1 relaxes the cybersecurity and biology safety classifiers for vetted defenders/researchers.
- **Provider / access:** Anthropic Claude API (Messages API) under Project Glasswing only (Cyber Verification Program + Life Sciences Verification Program). US-headquartered applicants only for now. No public/free access; no vetting = no access.
- **Release / knowledge:** Released 2026-09-01 (same day as Fable 5.1). Knowledge cutoff June 2026.
- **IDs:** `claude-mythos-5-1`. No free/contributor ID.
- **Context window:** 1,000,000 (1M) total; 128,000 max output (sync), 300,000 via Message Batches API.
- **Modalities:** Text, image in; text + tool-calls out. No audio/video input; no non-text output. Reasoning yes (adaptive, always on, default high); tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $10.00/M in · $50.00/M out (identical to Fable 5.1). Cache write $12.50/M (5-min) / $20/M (1-hr); cache read $0.25/M (75% cut). Batch 50% off. No free tier.
- **Architecture:** Proprietary; identical weights to Claude Fable 5.1, parameter count undisclosed.

### Raw benchmarks found

> Cross-referenced hokai.io (Anthropic's own evals + ARC Prize independent + BenchLM/CodingFleet). Because Mythos 5.1 shares Fable 5.1's weights, Fable 5.1 benchmarks are the same model; independent runs (ARC Prize, Vals AI on the shared weights) noted.

Agent / tool use:

- SWE-bench Pro: **81.2%** (independent via BenchLM / CodingFleet, Sep 2026; same weights as Fable 5.1)
- GDPval-AA v2 (Elo): **1,853** (vendor-reported, Artificial Analysis; up from Fable 5's 1,723)
- ARC-AGI-2 (max effort): **90.0%** (ARC Prize foundation, independent; $4.49/task)
- ARC-AGI-1 (max effort): **97.5%** (ARC Prize, independent; $1.40/task)
- Terminal-Bench / OSWorld exact Mythos rows: not surfaced live (shared-weights Fable 5.1 numbers apply) — treated as provisional

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **65.0%** (Anthropic) / **60.9%** (no tools)
- ARC-AGI-2: **90.0%** / ARC-AGI-1: **97.5%** (ARC Prize, independent — frontier abstract reasoning)
- GDPval-AA v2: **1,853 Elo** (see tool use)
- GPQA Diamond / AIME / MMLU-Pro: Anthropic did not publish these for this release (left blank, not estimated); shared-weights Fable 5.1 had MMLU-Pro 92.38% (Vals AI)

Coding:

- SWE-bench Pro: **81.2%** (independent; see tool use)
- DeepSWE v1.1: **67.4%** (Fable 5.1 system card, same weights)
- SWE-bench Multilingual: **89.1%** (Fable 5.1 system card, same weights)
- SWE-bench Verified: **no verified public score found** (Anthropic publishes Pro, not Verified)
- LiveCodeBench: **90.52%** (Vals AI on the shared weights)

- **Tool use: 88/100.** SWE-bench Pro 81.2% (independent), GDPval-AA 1,853 Elo, and ARC-AGI-2 90% (ARC Prize, independent) are strong. Capped the same way as Fable 5.1 (identical weights): vendor-heavy agentic reporting, no live Terminal-Bench/OSWorld exact row, and the Opus-refusal-fallback caveat carried over from the shared weights.
- **Reasoning: 92/100.** HLE 65.0% (with tools) and the independently-verified ARC-AGI-2 90% / ARC-AGI-1 97.5% are frontier abstract-reasoning results, and GDPval-AA 1,853 is a big jump over Fable 5. Capped by the unpublished GPQA/AIME (left blank, not estimated) and vendor-only HLE.
- **Context window: 92/100.** 1M input / 128K output (300K batch) — same solid ≥1M tier as Fable 5.1. Not a full 100 because no explicit MRCR ≥98%-at-512K retrieval figure was published to confirm the top sub-tier.
- **Multimodal: 78/100.** Text + image in (text out), no audio/video input and no non-text output → the 75–90 "video/PDF in" band, held to 78 by the missing audio/video and the shared-weights SWE-bench Multimodal 54.7% (below Opus 5's 59.4%).
- **Coding: 88/100.** SWE-bench Pro 81.2% (independent), LiveCodeBench 90.52% (Vals AI, shared weights), DeepSWE 67.4%, SWE-bench Multilingual 89.1% — all strong. Capped by the vendor-self-report nature of the headline numbers, no SWE-bench Verified row, and the shared-weights SWE-bench Multimodal 54.7% lag.
- **Cost efficiency: 30/100.** Paid-only at $10/$50 per 1M (identical to Fable 5.1, the highest Claude tier); cache reads $0.25/M and Batch 50% off soften it, but there is no free tier and access is gated behind Project Glasswing vetting.
- **Overall Score: 88/100.** Mean of the five non-cost dims (88+92+92+78+88)/5 = 87.6. Functionally the same underlying model as Fable 5.1 (Overall 87) with marginally higher independently-verified abstract reasoning (ARC-AGI-2 90%); reserved for vetted defensive-cyber / life-sciences teams that need the classifiers relaxed — general users should use the GA Fable 5.1, Opus 5.5, or Sonnet 5 instead.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Second-pass verification (2026-10-10): benchmarkregistry.org has no standalone Mythos 5.1 page (it shares Fable 5.1's weights, tracked there instead — 80 results confirmed APEX 68.6%, BrowseComp 85.2%, MMMU-Pro 90.6%); the key differentiator, the ARC Prize foundation's independent ARC-AGI-2 90% / ARC-AGI-1 97.5%, stands. No score change warranted. Prior pass (2026-10-08) used Anthropic's Mythos 5.1 evals, the ARC Prize foundation's independent runs, and BenchLM/CodingFleet third-party SWE-bench Pro (via hokai.io). Shares weights with Claude Fable 5.1.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

Long context:

- 1M input / 128K output (300K batch); June 2026 cutoff. No explicit MRCR ≥98%-at-512K figure published.

### Normalized scores (1–100)
