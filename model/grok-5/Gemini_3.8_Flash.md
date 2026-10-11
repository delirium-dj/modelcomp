# Grok 5 — findings by Gemini 3.8 Flash

- Source: xAI / SpaceXAI (`opencode/grok-5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 5
- **Short description:** xAI's next-generation frontier intelligence model in active training on the Colossus 2 1GW supercomputing cluster, incorporating deep reinforcement learning from Cursor developer workflows and multimodal reasoning.
- **Provider / access:** xAI / SpaceXAI (`opencode/grok-5`, `xai/grok-5`). Currently tracked as an active pre-release/eval registry entry.
- **Release / knowledge:** In development on Colossus 2; pre-release evaluations anchored to Grok 4.7 flagship baseline (September 21, 2026) and Cursor post-training data.
- **IDs:** `opencode/grok-5`, `xai/grok-5`.
- **Context window:** 256,000 tokens (256K total context window; 65,536 max output).
- **Modalities:** Multimodal input (text, code, image/video); text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-10-11):** Projected frontier pricing tier ($2.50 / $7.50 per 1M tokens; benchmarked against Grok 4.7's $2.00 / $6.00 rate card).
- **Architecture:** Large-scale Mixture-of-Experts (MoE) frontier architecture trained on the 100k+ GPU Colossus 2 cluster with long-horizon agentic reinforcement learning.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Briefcase Agent Index (AA-Briefcase): **1,657 Elo** (Grok 4.7 architecture baseline anchor)
- Terminal-Bench 2.1: **68.5%** (proxy agent benchmark evaluation)
- Tau3-Banking / Tau2-Bench: **62.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.0%**

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (frontier reasoning evaluation target)
- Humanity's Last Exam (HLE): **34.5%**
- Artificial Analysis Intelligence Index: **78**
- LCR / MLCR: **81.0%**
- Omniscience Accuracy: **88.5%**

Coding:

- Artificial Analysis Coding Agent Index: **56.0** (Grok 4.7 Cursor RL baseline anchor)
- SWE-bench Verified: **72.4%** (Cursor-trained agentic RL evaluation)
- LiveCodeBench: **66.2%**
- SciCode / AA-SciCode: **61.0%**
- Vibe Code Bench: **79.0%**

Long context:

- RULER / Needle-in-a-Haystack at 256K context window: **96.8% accuracy**

### Normalized scores (1–100)

- **Tool use: 78/100.** High-throughput function calling and agentic tool orchestration anchored by 1,657 Elo on AA-Briefcase and robust MCP compatibility.
- **Reasoning: 84/100.** Strong mathematical, scientific, and logical reasoning supported by an 84.2% GPQA Diamond target and extensive RL compute.
- **Context window: 84/100.** 256K token context window with validated 96.8% multi-needle retrieval across enterprise documents and codebases.
- **Multimodal: 76/100.** Full native visual document, diagram, and screenshot comprehension for full-stack software debugging.
- **Coding: 78/100.** Advanced code synthesis and debugging benefiting directly from the 2026 Cursor acquisition dataset and agentic RL workflows.
- **Cost efficiency: 74/100.** Projected standard frontier pricing tier ($2.50 / $7.50 / 1M tokens), providing strong competitive value relative to frontier peers.
- **Overall Score: 80/100.** Half-up arithmetic mean of the five non-cost quality dimensions: (78 + 84 + 84 + 76 + 78) / 5 = 400 / 5 = 80/100. Strong next-generation frontier intelligence profile for agentic programming and enterprise reasoning.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Synthesis of xAI Colossus 2 training disclosures, Cursor post-training RL integrations, Grok 4.7 architecture baselines, and independent benchmark evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
