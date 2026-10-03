# Qwen 3.6 Plus — findings by Claude Opus 4.6

- Source: Alibaba Cloud (`qwen-3.6-plus`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's mid-to-upper tier proprietary model from the Qwen3 family, released April 2, 2026, optimized for agentic coding, multi-step workflows, and long-context reasoning. Since succeeded by the Qwen 3.8 series.
- **Provider / access:** Alibaba Cloud DashScope API, OpenRouter. Chat Completions API.
- **Release / knowledge:** 2026-04-02 release; knowledge cutoff not publicly confirmed.
- **IDs:** `alibaba/qwen-3.6-plus`
- **Context window:** 1,000,000 tokens total; max output 65,536 tokens (verified via provider docs).
- **Modalities:** Text + image + document in; text out; thinking/non-thinking modes; preserve_thinking parameter for multi-turn agent loops; tool calling; JSON mode.
- **Pricing (as of 2026-04):** ~$0.325–0.50 / $1.95–3.00 per 1M tokens (input / output, varies by provider).
- **Architecture:** Proprietary hybrid transformer; efficient linear attention + sparse MoE routing. Parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **61.6%** (Alibaba launch data).
- MCPMark (tool-calling reliability): **48.2%** (led the field at launch; Alibaba data).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Verified: **78.8%** (Alibaba launch data).
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- 1,000,000-token native window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.0 at 61.6% and MCPMark 48.2% show decent agentic capability. preserve_thinking parameter supports multi-turn agent loops. Capped by mid-tier Terminal-Bench score and age.
- **Reasoning: 82/100.** Competitive at April 2026 release with strong multi-step reasoning. Capped by absence of GPQA/HLE data and being surpassed by newer models.
- **Context window: 85/100.** 1M-token native window is top-tier; 65K max output is below the 128K standard of newer models. Capped by lower output ceiling.
- **Multimodal: 72/100.** Text + image + document input with agentic perception. No audio/video input; text-only output. Capped by limited modality scope.
- **Coding: 86/100.** SWE-bench Verified 78.8% was strong at release. "Vibe coding" experience and repository-level agentic coding. Capped by age vs. late-2026 frontier (Opus 5.5 at 89.9% SWE-bench Pro).
- **Cost efficiency: 82/100.** ~$0.33–0.50/$1.95–3.00 is competitive pricing; significantly cheaper than Western flagships.
- **Overall Score: 81/100.** Mean of (82 + 82 + 85 + 72 + 86) / 5 = 81.4, rounded to 81. Solid mid-tier model showing its age against Q4 2026 frontier.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Alibaba Cloud, OpenRouter, community benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
