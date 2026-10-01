# Gemini 3.1 Pro — findings by Grok 4.5 (xAI/grok-4)

- Source: Google DeepMind / Gemini (`gemini-3.1-pro-preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Preview)
- **Short description:** Google DeepMind’s flagship Pro-tier multimodal reasoning model in the Gemini 3 series, released as a point upgrade to Gemini 3 Pro. Optimized for complex multi-step reasoning, agentic workflows, software engineering, and long-context multimodal tasks.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.1-pro-preview`, also `gemini-3.1-pro-preview-customtools`); Vertex AI / Gemini Enterprise Agent Platform; Gemini app / NotebookLM. Chat Completions-style generateContent / Interactions API.
- **Release / knowledge:** 2026-02-19 (preview); knowledge cutoff reported as Jan 2025 in developer docs.
- **IDs:** `google/gemini-3.1-pro-preview` (no separate Free-tier ID on OpenCode Zen; paid/preview only).
- **Context window:** 1,048,576 input / 65,536 output tokens (verified via official Gemini API model page and Google Cloud docs).
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning/thinking yes (with adjustable levels including MEDIUM); tool/function calling yes; structured/JSON output yes; code execution yes.
- **Pricing (as of 2026-10-01):** ≤200k context: $2.00 input / $12.00 output per 1M tokens; >200k: $4.00 / $18.00. Cached input: $0.20 / $0.40. Batch/Flex lower rates available. Paid only (no free API tier for this model ID); free-tier consumer surfaces (Gemini app) may apply data-use caveats.
- **Architecture:** Proprietary (based on Gemini 3 Pro); params/active MoE details not publicly disclosed; closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (official model card reports Terminal-Bench 2.0)
- Terminal-Bench 2.0: **68.5%** (DeepMind model card, Terminus-2 harness)
- Tau3-Banking / Tau2-Bench: **Retail 90.8% / Telecom 99.3%** (DeepMind model card, τ2-bench)
- GDPval-AA: **1317** Elo (DeepMind model card)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas **69.2%** (DeepMind model card); Toolathlon **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (DeepMind model card, no tools, Thinking High)
- HLE: **44.4%** (no tools) / **51.4%** (search + code) (DeepMind model card, Humanity’s Last Exam)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- ARC-AGI-2: **77.1%** (DeepMind model card, ARC Prize Verified)

Coding:

- SWE-bench Verified / SWE-Pro: **80.6%** Verified / **54.2%** Pro (DeepMind model card, single attempt)
- LiveCodeBench: **2887** Elo (LiveCodeBench Pro, DeepMind model card)
- SciCode / AA-SciCode: **59%** (DeepMind model card)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR v2 (8-needle): **84.9%** average at 128k; **26.3%** pointwise at 1M (DeepMind model card)

### Normalized scores (1-100)

- **Tool use: 72/100.** Terminal-Bench 2.0 68.5% and strong τ2-bench / MCP Atlas place it solidly mid-to-upper; GDPval-AA 1317 Elo is well below frontier (~1750+), capping the score.
- **Reasoning: 95/100.** GPQA Diamond 94.3% and HLE 44.4% (no tools) both meet or exceed frontier thresholds (GPQA 90%+, HLE 40%+); ARC-AGI-2 77.1% further supports near-ceiling placement.
- **Context window: 92/100.** Verified 1M total maps to 95-100 tier, but measured MRCR retrieval drops to 26.3% at full 1M (vs 84.9% at 128k), preventing a perfect 100.
- **Multimodal: 90/100.** Native text + image + video + audio + PDF input with text output and reasoning/tool support; no non-text generation.
- **Coding: 88/100.** SWE-bench Verified 80.6% and SciCode 59% are strong/frontier-adjacent; LiveCodeBench Pro Elo leadership helps, but SWE-Pro 54.2% and lack of higher DeepSWE keep it just below pure frontier.
- **Cost efficiency: 85/100.** Standard tier ~$2/$12 per 1M (≤200k) sits between the ~$1.25/$4.25 (~88) and $3/$15 (~60) reference points on the supplied scale.
- **Overall Score: 87.4/100.** Mean of the five non-cost dimensions (half-up). Best fit for complex multimodal reasoning, long-document synthesis, and agentic coding where quality outweighs pure token cost; pair with a Flash tier for high-volume work.

---

## Signature

- Provided by: **Grok 4.5 (xAI/grok-4)** — 2026-10-01
- Method: Fresh public internet research limited to official DeepMind model card, Google AI / Cloud docs, and contemporaneous verified secondary reports of those numbers; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
