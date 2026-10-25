# Mistral Medium 3.5 — findings by Muse Glimmer 30B

- Source: Mistral / mistral-medium-3.5
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI’s first flagship merged dense model unifying instruction-following, reasoning and coding with multimodal input. Released as open weights under Modified MIT for agentic and long-horizon coding workflows; configurable reasoning effort per request.
- **Provider / access:** Mistral AI API `mistral-medium-3-5-26-04` / `mistral-medium-3.5` via Chat Completions and Conversations APIs; also via NVIDIA NIM / build.nvidia.com and HuggingFace `mistralai/Mistral-Medium-3.5-128B`.
- **Release / knowledge:** 2026-04-28 model card; public preview announced 2026-05-22; knowledge cutoff not publicly disclosed.
- **IDs:** `mistral/mistral-medium-3-5-26-04` ; open-weights `mistralai/Mistral-Medium-3.5-128B` Modified MIT.
- **Context window:** 256k tokens total, 262,144 verified by docs and HuggingFace. No independent RULER/GraphWalks public score found.
- **Modalities:** Input text, image; Output text. Reasoning yes, configurable effort; tool calls yes; JSON mode supported; structured outputs / function calling supported.
- **Pricing (as of 2026-10-25):** $1.5 / 1M input tokens, $7.5 / 1M output tokens via Mistral API. Open-weights self-hostable ~4 GPUs. Free tier not offered on Zen.
- **Architecture:** Dense 128B parameters, transformer with vision encoder trained from scratch. Open-weights Modified MIT license.

### Raw benchmarks found

> Sources: Mistral model card 2026-04-28, Mistral blog “Remote agents in Vibe. Powered by Mistral Medium 3.5” 2026-05-22, HuggingFace model card `mistralai/Mistral-Medium-3.5-128B` 2026-04-29, NVIDIA build.nvidia.com card 2026-04-29.

Agent / tool use:

- τ³-Telecom: **91.4%** — Mistral blog / HuggingFace model card, agentic telecom harness
- SWE-Bench Verified: **77.6%** — HuggingFace eval results extracted from model card
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for this exact ID
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **77.6%** SWE-Bench Verified — HuggingFace
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval benchmark published; 256k context verified by docs; AA-LCR v1.1 / RULER / GraphWalks not found.

### Normalized scores (1–100)

- **Tool use: 88/100.** τ³-Telecom 91.4% and strong SWE-Bench Verified agentic signal indicate high agentic tool reliability. Capped by absence of Terminal-Bench / Claw-Eval public numbers.
- **Reasoning: 72/100.** Configurable reasoning effort and strong agentic performance suggest competent reasoning; no independent GPQA/HLE/CritPt scores published, so score is provisional and capped by lack of verified reasoning benchmarks.
- **Context window: 72/100.** 256k tokens verified. Maps to 200K–500K tier per methodology; no public RULER/GraphWalks retrieval score to raise tier.
- **Multimodal: 65/100.** Text + image in, text out with vision encoder trained from scratch. No independent MMMU-Pro / visual reasoning numbers published.
- **Coding: 83/100.** SWE-Bench Verified 77.6% exceeds Devstral 2 and Qwen3.5 397B A17B per vendor claim; strong agentic coding signal. Capped by absence of LiveCodeBench / SciCode / DeepSWE public scores.
- **Cost efficiency: 70/100.** $1.5/$7.5 per 1M tokens; paid model, no free tier. Mid-range paid efficiency relative to frontier dense models.
- **Overall Score: 76/100.** Mean of five quality dims (88 + 72 + 72 + 65 + 83)/5 = 76.0. Best-fit: capable open-weight merged model for agentic coding and multimodal tasks, limited by lack of independent reasoning/long-context benchmarks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
