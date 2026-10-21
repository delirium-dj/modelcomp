# MAI-Code-1.1-Flash — findings by Step 5 Preview

- Source: Microsoft AI / MAI-Code-1.1-Flash (`microsoft/mai-code-1.1-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's successor to MAI-Code-1-Flash — a 138B-total / 5B-active sparse MoE coding model with 256K context, native vision and production-harness scores of SWE-bench Verified 72.6% and Terminal-Bench 2.1 62.9% at just 8.6K output tokens per solved task, inside GitHub Copilot at $0.20/$1.20.
- **Provider / access:** GitHub Copilot (all paid tiers), Copilot CLI/VS Code; Microsoft AI API (`microsoft/mai-code-1.1-flash`); quantized local build (120GB+ RAM recommended by Microsoft). Not on OpenCode Zen.
- **Release / knowledge:** launched 2026-08-11 in GitHub Copilot (LLM Reference); knowledge cutoff 2025-12 (LLM Reference); weights not released (proprietary, restricted commercial use).
- **IDs:** `microsoft/mai-code-1.1-flash`, `MAI-Code-1.1-Flash` (API).
- **Context window:** 256K total; 128K max output (folder meta).
- **Modalities:** text and image in; text out; reasoning (thinking); tool/JSON calling; prompt caching.
- **Pricing (as of 2026-10-21):** $0.20/$1.20 per 1M in/out via GitHub Copilot's models-and-pricing page, $0.02 cached input (LLM Reference, llm-stats) — about a quarter of the June 2026 MAI-Code-1-Flash launch cost.
- **Architecture:** sparse MoE, 138B total / 5B active per token (Microsoft model card via LLM Reference); fine-tuned for the Copilot coding stack.

### Raw benchmarks found

Microsoft AI MAI-Code-1.1-Flash model card (August 2026; VS Code-based production Copilot harness with repository context, tool calls and end-to-end verification) via LLM Reference and BenchLM:

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (Microsoft model card, Copilot harness; 17.0K tokens per task)
- Tau2 / Tau3 / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas / Toolathlon / BFCL: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / AA Intelligence Index / LCR / CritPt: no verified public score found — Microsoft's card is coding-scoped and publishes no general-reasoning rows

Coding:

- SWE-bench Verified: **72.6%** (Microsoft model card, Copilot harness; 8.6K tokens per solved task — extreme token efficiency; rank 59/101 on LLM Reference's peer bar, ref: Claude Fable 5 96.0%, Opus 4.8 88.6%)
- Terminal-Bench 2.1: **62.9%** (listed above)
- Token efficiency: **~25% better** than MAI-Code-1-Flash (Microsoft model post)
- SWE-bench Pro / LiveCodeBench / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 256K native window; no MRCR / RULER / GraphWalks / LCR retrieval-at-length figure published.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 62.9% measured end-to-end in the production Copilot harness (repository context + tool calls + verification included) is a genuinely agentic result for a 5B-active model; capped by no Tau/GDPval/OSWorld/Claw numbers and the harness being Microsoft's own.
- **Reasoning: 62/100.** No GPQA/HLE/MMLU/Index figure is published for this ID — the score is a provisional mid-band interpretation from the coding profile (8.6K tokens per solved SWE-bench task implies efficient, not deep, reasoning); any general-reasoning number would be fabricated, so none is claimed.
- **Context window: 78/100.** 256K with 128K max output lands in the 200K–500K tier (65–84, above the 200K=70 floor); no retrieval-at-length measurement exists.
- **Multimodal: 68/100.** Text + image input (native vision added in 1.1) with text out (image-in tier 60–70); no MMMU-class score published; no video/audio input and no non-text output.
- **Coding: 80/100.** SWE-bench Verified 72.6% at 8.6K output tokens/task and Terminal-Bench 2.1 62.9% are strong upper-mid results — the token efficiency (25% better than 1-Flash) is the real story; capped by no SWE-bench Pro, SciCode, LiveCodeBench or Vibe Code Bench numbers on any harness.
- **Cost efficiency: 95/100.** $0.20/$1.20 with $0.02 cached input sits near the ~$0.10/$0.20 ≈ 97–99 reference band; the local quantized build (free, 120GB+ RAM) adds a $0 self-host lane with vendor-reported comparable coding performance.
- **Overall Score: 72/100.** Mean of (74 + 62 + 78 + 68 + 80) / 5 = 72.4 → 72. Best fit: GitHub Copilot users wanting an extremely token-efficient coding model at budget rates — the cheapest real agentic coder in the Copilot lineup, but its reasoning depth is unproven outside the coding harness.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Microsoft model card figures via LLM Reference and BenchLM, hokai.io, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
