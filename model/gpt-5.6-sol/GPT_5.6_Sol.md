# GPT-5.6 Sol — findings by ChatGPT (openai/gpt-5.6-sol)

- Source: OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (flagship tier of the GPT-5.6 family; no Free‑tier wording found on any provider page checked).
- **Short description:** OpenAI’s flagship reasoning model, positioned for complex professional work, agentic coding, cybersecurity, and scientific research. It is the successor to the unsuffixed GPT‑5 tier and is offered alongside the lower‑cost Terra and Luna variants.
- **Provider / access:** Available via OpenAI API (`gpt-5.6-sol`), Amazon Bedrock (`openai.gpt-5.6-sol`), OpenCode Zen (`opencode/gpt-5.6-sol`), and other gateways. Both Chat Completions and Responses API endpoints are supported. OpenCode Zen lists the model ID `gpt-5.6-sol`.
- **Release / knowledge:** Public launch 2026‑07‑09 (UTC). AWS model card states launch date 2026‑07‑13. Knowledge cutoff: **Feb 16, 2026**.
- **IDs:** `openai/gpt-5.6-sol` (primary); `gpt-5.6-sol` (OpenAI); `openai.gpt-5.6-sol` (Bedrock); `opencode/gpt-5.6-sol` (OpenCode Zen). No Free‑tier ID exists on Zen.
- **Context window:** **1,050,000 tokens** total; **128,000** max output tokens. Verified by OpenAI API docs, AWS Bedrock model card, and models.dev snapshot.
- **Modalities:** Text and image input; text output. Reasoning supported (effort levels: none, low, medium, high, xhigh, max). Tool calls, structured outputs, streaming, and function calling supported. Audio and video not supported.
- **Pricing (as of 2026-09-25):** Input $4.00 / 1M tokens; cached input $0.40 / 1M; output $20.00 / 1M tokens. Promotional pricing available through at least 2026‑11‑21. Prompts exceeding 272K input tokens are priced at 2× input and 1.5× output. No free tier.
- **Architecture:** Proprietary, closed‑weights model from OpenAI. Exact parameter count not disclosed. Supports configurable reasoning effort and is served as a reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (OpenAI launch day, reported by devby.io and others).
- Tau3-Banking: **44.3%** (BenchLM leaderboard, September 2026).
- GDPval-AA: **no verified public score found** for GPT‑5.6 Sol specifically.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (BenchLM, September 2026).
- HLE: **68.0%** (Parallel.ai search leaderboard).
- LCR / MLCR: **84.0%** on AA‑LCR (Inferbase).
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index: **47** (AA model page, max reasoning).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified: **96.2%** (thinkllm.dev).
- SWE-bench Pro: **64.6%** (OpenAI launch chart, reported by multiple sources).
- LiveCodeBench: **82.6%** (thinkllm.dev).
- SciCode: **57.1%** (thinkllm.dev).
- DeepSWE: **73%** (DeepSWE leaderboard, `gpt-5.6-sol[max]`).
- Vibe Code Bench: **no verified public score found**.

Long context:

- MRCR v2 (8‑needle, 512K‑1M): **0.738** (llm-stats.com).
- MRCR v2 (8‑needle, 256K‑512K): **91.5%** (LayerLens).

### Normalized scores (1-100)

- **Tool use: 92/100.** Terminal‑Bench 2.1 at 88.8% meets the frontier threshold (≥88%), and Tau3‑Banking at 44.3% sits in the upper‑mid band. Caps: GDPval‑AA and other agentic tool benchmarks are unverified.
- **Reasoning: 90/100.** GPQA Diamond 94.6% and HLE 68.0% are both in the frontier band (GPQA ≥90%, HLE ≥40%). AA Intelligence Index of 47 is below the 60+ frontier threshold, which caps the score.
- **Context window: 96/100.** Verified 1.05M‑token total. MRCR retrieval at 512K–1M is 0.738 (73.8%), below the 98% threshold required for a 100.
- **Multimodal: 65/100.** Text and image input, text output. Maps to the “+image in = 60–70” band.
- **Coding: 95/100.** SWE‑bench Verified 96.2%, LiveCodeBench 82.6%, and SciCode 57.1% all exceed frontier thresholds. DeepSWE at 73% is just under the 74% frontier mark.
- **Cost efficiency: 55/100.** $4.00 input / $20.00 output per 1M tokens sits between the $3/$15 (~60) and $10/$50 (~30) anchors.
- **Overall Score: 87.6/100.** Mean of five non‑cost dims (92 + 90 + 96 + 65 + 95) / 5 = 87.6. Best‑fit recommendation: high‑throughput agentic coding, long‑context document analysis, and frontier reasoning tasks where cost is secondary to capability.

---

## Signature

- Provided by: **ChatGPT (openai/gpt-5.6-sol)** — 2026-09-25
- Method: Public internet research via vendor docs (OpenAI API, AWS Bedrock), Artificial Analysis, BenchLM, llm‑stats, DeepSWE, and other public leaderboards. Scores are normalized 1‑100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
