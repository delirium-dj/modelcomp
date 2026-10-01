# Gemini 3.1 Pro — findings by Google Gemini (google/gemini-1.5-pro)

- Source: Google DeepMind (`gemini-3.1-pro-preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's flagship mid-cycle update prioritizing reasoning depth, agentic tool workflows, and massive long-context retrieval. Serves as the core intelligence behind Google's Deep Think and introduces a dynamic 3-tier thinking mechanism.
- **Provider / access:** Google Cloud Vertex AI, Google AI Studio, and Gemini CLI with exact API IDs `gemini-3.1-pro-preview` and `gemini-3.1-pro-preview-customtools`. Chat Completions/Responses API supported.
- **Release / knowledge:** 2026-02-19 release; knowledge cutoff not publicly confirmed.
- **IDs:** `google/gemini-3.1-pro-preview` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 total; 1,048,576 in / 65,536 out — verified via official Google API specifications and DeepMind model card.
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (Low, Medium, High); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 in / $12.00 out per 1M tokens (≤200K window), rising to $4.00 / $18.00 beyond 200K; cached input $0.20-$0.40 per 1M. Paid $.
- **Architecture:** Proprietary Transformer-based Mixture-of-Experts (MoE) optimized for deep reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (verified independent score)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **67.3%**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.2%** (MCP Atlas)
  Reasoning / knowledge:
- GPQA Diamond: **94.3%**
- HLE: **44.4%** (no tools)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **65.05 / 31st**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
  Coding:
- SWE-bench Verified / SWE-Pro: **80.6% / 54.2%**
- LiveCodeBench: **2887 Elo**
- SciCode / AA-SciCode: **59.0%**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**
  Long context:
- MRCR v2 at 1M window length is 26.3% (degrades from 84.9% at 128K).

### Normalized scores (1-100)

- **Tool use: 76/100.** Terminal-Bench 2.1 at 68.5% and MCP-Atlas at 69.2% reflect strong multi-turn reliability, capped by falling short of the absolute ~88% frontier ceiling.
- **Reasoning: 95/100.** With 94.3% on GPQA Diamond and a massive 44.4% on Humanity's Last Exam, it is securely in the frontier bracket, capped only by not fully resolving novel unmapped dataset domains.
- **Context window: 95/100.** Maps to the highest tier given its verified 1M input capacity, though capped slightly from a perfect 100 due to MRCR multi-needle degradation at the 1M extremity.
- **Multimodal: 95/100.** Unmatched native input modality spread (audio, video, images, text, code); capped solely because outputs are restricted to text/code structures rather than raw media generation.
- **Coding: 94/100.** Exceptional 80.6% on SWE-bench Verified and 59% on SciCode; caps slightly below 100 due to its SWE-Pro score of 54.2% being outpaced by specialized agents.
- **Cost efficiency: 70/100.** At $2.00 / $12.00 per 1M (≤200K), it places favorably compared to $15-$25 output models, settling in the upper-mid pricing tier.
- **Overall Score: 91.0/100.** Mean of the five non-cost dimensions. A highly capable reasoning flagship with best-in-class multi-modal context parsing.

---

## Signature

- Provided by: **Google Gemini (google/gemini-1.5-pro)** — 2026-10-01
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
