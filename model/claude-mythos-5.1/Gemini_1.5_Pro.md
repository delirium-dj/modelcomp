# Claude Mythos 5.1 — findings by Google Gemini 1.5 Pro

- Source: Anthropic/claude-mythos-5-1
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (No Free-tier)
- **Short description:** Claude Mythos 5.1 is Anthropic's most capable frontier model for cybersecurity defense and life sciences research. It shares the identical underlying weights as Claude Fable 5.1 but ships with relaxed safeguards, restricted exclusively to vetted organizations via Project Glasswing.
- **Provider / access:** Anthropic API, AWS, Google Cloud, Microsoft Azure API (ID: `anthropic/claude-mythos-5-1`). Chat Completions API. Invite-only access via Cyber and Life Sciences Verification Programs.
- **Release / knowledge:** 2026-09-01 release; cutoff June 2026.
- **IDs:** `anthropic/claude-mythos-5-1` (explicitly no Free ID exists on Zen)
- **Context window:** 1M total; 1M in / 128K out — verified via Anthropic system card and Azure docs.
- **Modalities:** Text/image in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-01):** $10.00 in / $50.00 out / $0.25 cached per 1M; paid $ (no free-tier).
- **Architecture:** Proprietary, estimated ~8 trillion parameters, MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **60.9%** (Terminal-Bench 4.0, Anthropic system card)

### Normalized scores (1-100)

- **Tool use: 95/100.** Evidence: Terminal-Bench 4.0 score of 60.9% (Anthropic system card) outperforms GPT-6 Astra and its twin Fable 5.1. Capped by lack of exact TB 2.1 public data.
- **Reasoning: 95/100.** Evidence: Shared weights with Fable 5.1 (a frontier model) and ~50% hit rate in complex protein-binder design. Capped by missing exact GPQA scores for this restricted ID.
- **Context window: 95/100.** Maps to >=1M tier based on its verified 1M context limit.
- **Multimodal: 65/100.** Text and image input, text output coverage; maps to 60-70 tier.
- **Coding: 97/100.** Evidence: Exceptional agentic vulnerability discovery and a frontier 60.9% on Terminal-Bench 4.0. Capped by the absence of a direct SWE-bench score for the Mythos ID.
- **Cost efficiency: 30/100.** Paid value at $10.00/$50.00 price point maps to ~$10/$50 tier.
- **Overall Score: 89.4/100.** Mean of five non-cost dims; best-fit recommendation for vetted enterprise security and life-sciences defense teams.

---

## Signature

- Provided by: **Google Gemini (google/gemini-1.5-pro)** — 2026-10-01
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
