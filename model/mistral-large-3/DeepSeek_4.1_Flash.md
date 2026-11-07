# Mistral Large 3 — findings by DeepSeek 4.1 Flash

- Source: Mistral/Mistral Large 3 (`mistral-large-2512`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral AI's open-weights (Apache 2.0) sparse-MoE flagship from the Mistral 3 generation — 675B total / 41B active, native image+text input — now superseded by Mistral Large 4.
- **Provider / access:** Mistral AI La Plateforme (`mistral-large-2512`), OpenRouter, Bedrock/Azure/Vertex-style hosts; OpenAI-compatible Chat Completions. Dataset route: `opencode/mistral-large-3`.
- **Release / knowledge:** 2025-12-02 (Mistral 3 launch); knowledge cutoff not disclosed.
- **IDs:** `mistralai/mistral-large-2512` (Mistral API); weights `mistralai/Mistral-Large-3-675B-Instruct-2512` (+ NVFP4 checkpoint).
- **Context window:** 262,144 total (256K); sourced from HF card/docs.
- **Modalities:** text and image in; text out; reasoning: none (non-reasoning instruct; a reasoning variant was announced but did not ship under this folder's ID); tool calls yes.
- **Pricing (as of 2026-11-07):** $0.50 / $1.50 per 1M in/out (Mistral direct; EU lane $0.55/$1.65); blended ~$0.75; cache ~90% off. Apache-2.0 weights self-host free.
- **Architecture:** sparse MoE + vision encoder, 675B total / 41B active; trained on 3000 H200 GPUs; open weights (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **24.6%** (Artificial Analysis, via BenchLM)
- GDPval-AA: **588 Elo** (v2.1, Artificial Analysis, via BenchLM)
- AA Agentic Index: **2.4** (Artificial Analysis, via BenchLM)
- Terminal-Bench / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **68.0%** (AA-GPQA, via BenchLM)
- HLE: **4.2%** (AA-HLE, via BenchLM)
- AA-LCR: **36.0%** (via BenchLM)
- CritPt: **0.0%** (via BenchLM)
- AA Intelligence Index: **9.3** (normalized score on BenchLM's AA page; AA marks the model deprecated after Large 4)
- AA-Omniscience: accuracy **25.0%**, hallucination rate **86.0%** (via BenchLM)
- BenchLM overall: **34.11/100** (rank #161 of 1016, partial coverage, Nov 7 2026); Gradually Meta-Score v4: **38.8** (rank 92/92 in their index — non-reasoning configuration)
- LMArena Text Arena: **~1,414 Elo** (style-controlled, Oct 30 2026 snapshot)

Coding:

- AA-SciCode: **36.6%**; AA Coding Index: **20.1** (via BenchLM)
- WebDev Arena: **~1,233 Elo** (LMArena snapshot)
- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found

Long context:

- 256K declared; no MRCR/RULER retrieval figures published; AA-LCR 36.0% is the closest measured long-context signal

### Normalized scores (1–100)

- **Tool use: 46/100.** Tool calling supported and open-weight, but τ²-bench 24.6% and an agentic index of 2.4 put it among the weakest agentic options of the current cohort.
- **Reasoning: 56/100.** GPQA 68% is serviceable, but HLE 4.2%, CritPt 0 and an 86% hallucination rate cap it; no reasoning mode.
- **Context window: 80/100.** Full 256K admission with mid-high tier value; no measured retrieval at the window keeps it from the top band.
- **Multimodal: 48/100.** Native image+text input with MMMU-Pro 55.7% — real vision, capped by lack of audio/video and text-only output.
- **Coding: 48/100.** SciCode 36.6% and Coding Index 20.1 with a 1,233 WebDev Elo are well below the current mid-tier; the Devstral-derived coding strength shipped in later models.
- **Cost efficiency: 78/100.** $0.50/$1.50 hosted with 90% cache discount is fair, and Apache-2.0 weights allow free self-hosting; not a $0 API lane.
- **Overall Score: 55.6/100.** Best-fit: sovereign/Apache-licensed deployments needing a capable multimodal instruct model at moderate cost — superseded for frontier work by Mistral Large 4.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-07
- Method: public internet research (official Mistral launch post, BenchLM AA-fed tables, Gradually.ai, LLM-Stats, HF references); conflicting stale listing (`mistral-large-3-2509` on LLM-Stats describing a Sep 2025/Sep 2025-priced 128K model) was discarded in favor of the official Dec 2, 2025 launch facts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mistral 3 (official launch post)](https://mistral.ai/news/mistral-3/)
  - [Mistral docs — Mistral Large 3](https://docs.mistral.ai/models/mistral-large-3-25-12)
  - [BenchLM — Mistral Large 3 benchmark scores](https://benchlm.ai/models/mistral-large-3)
  - [Gradually.ai — Mistral Large 3 profile](https://www.gradually.ai/en/ai-models/mistral-large-3/)
  - [Artificial Analysis — Mistral Large 3](https://artificialanalysis.ai/models/mistral-large-3)
  - [LLM-Stats — Mistral Large 3 (675B Base 2512)](https://llm-stats.com/models/mistral-large-3-675b-base-2512)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
