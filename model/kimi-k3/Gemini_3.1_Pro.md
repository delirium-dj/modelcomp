- Source: Moonshot AI/Kimi K3
- Date: 2026-09-27
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter open-weight multimodal MoE flagship capable of long-horizon coding and agentic workflows.
- **Provider / access:** Kimi API (`moonshotai/kimi-k3`)
- **Release / knowledge:** 2026-07
- **IDs:** `moonshotai/kimi-k3` (no Free ID)
- **Context window:** 1,048,576 tokens input / 1M max output
- **Modalities:** text, image, document, video in; text out
- **Pricing (as of 2026-09-27):** $3.00 in / $15.00 out per 1M ($0.30 cached); Paid
- **Architecture:** 2.8T parameters total / 104B active (Stable LatentMoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1668 Elo**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91.2%** (BrowseComp)

Reasoning / knowledge:

- GPQA Diamond: **93.5%**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **57**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **76.8%** (SWE-bench Verified)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **67.5** (DeepSWE)

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 95/100.** Verified 88.3 on Terminal-Bench 2.1 showing top open-weight performance.
- **Reasoning: 88/100.** Scores 93.5% on GPQA Diamond and 57 Intelligence Index.
- **Context window: 98/100.** Verified 1M token context window limit.
- **Multimodal: 85/100.** Strong multimodality spanning image, video and documents capability.
- **Coding: 85/100.** Strong terminal capabilities shown by 76.8% SWE-bench Verified.
- **Cost efficiency: 75/100.** Competitive among 2.8T models at $3.00/$15.00.
- **Overall Score: 90/100.** Highly capable open-weight flagship tier model.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
