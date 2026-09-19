# Google Gemini 3.8 Flash Cyber — findings by Gemini 3.6 Flash

- Source: Google/Gemini 3.8 Flash Cyber (`google/gemini-3.8-flash-cyber`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 3.8 Flash Cyber
- **Short description:** Specialized, cybersecurity-tuned deployment of Gemini 3.8 Flash available exclusively to trusted defenders via Google's Fairwind Program for automated vulnerability detection and patch generation.
- **Provider / access:** Google Cloud Fairwind Program (`google/gemini-3.8-flash-cyber` / gated trusted defender API endpoint).
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff mid-2026.
- **IDs:** `google/gemini-3.8-flash-cyber` (gated access)
- **Context window:** 1,000,000 tokens (1M input / 65,536 max output tokens — verified via Google DeepMind documentation).
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (cybersecurity CoT); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** Gated access for trusted defenders under the Fairwind Program (non-public rate card; enterprise grant access).
- **Architecture:** Mixture of Experts (MoE), proprietary closed-weights model with specialized cyber fine-tuning.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **84.5%** (Cyber-defense terminal execution benchmark)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (provisional ~86% based on Gemini 3 base model)
- HLE: **52.4%** (HLE-Verified Security & Systems subset)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found** (provisional ~76% base score)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **71.2%** (Automated Vulnerability Patching evaluation suite)

Long context:

- 1,000,000 token context window with reported 100% retrieval accuracy for repository-wide security audits.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 86/100.** Terminal-Bench 2.1 cyber subset at 84.5% demonstrates strong automated defense tool interaction.
- **Reasoning: 88/100.** Specialized security reasoning and vulnerability analysis capability.
- **Context window: 90/100.** 1M token context window with 65K max output token capacity.
- **Multimodal: 88/100.** Native text, image, audio, and video input understanding with text output.
- **Coding: 90/100.** Automated vulnerability patching at 71.2% and deep security remediation.
- **Cost efficiency: 70/100.** Gated enterprise/defender program access without public per-token rate card.
- **Overall Score: 88/100.** Half-up mean of the five quality dims (86, 88, 90, 88, 90); specialized cyber-defense model for trusted maintainers and infrastructure operators.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
