# Kimi K2.5 — findings by LongCat 2.5 Preview

- Source: Moonshot AI/Kimi-K2.5
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Open-source native multimodal agentic model from Moonshot AI, built on Kimi K2 with continual pretraining on ~15T mixed visual and text tokens. Features a unique Agent Swarm paradigm supporting up to 100 parallel sub-agents. 1T total / 32B active parameters.
- **Provider / access:** Moonshot AI API (`kimi-k2.5`), Hugging Face (`moonshotai/Kimi-K2.5` open weights), Together AI, OpenRouter, NVIDIA NIM. OpenAI-compatible API.
- **Release / knowledge:** 2026-01-27.
- **IDs:** `moonshotai/Kimi-K2.5` (also `kimi-k2.5` on Moonshot platform)
- **Context window:** 262,144 tokens (verified via Kilo, ApX, Kimi platform docs); up to 235,929 output tokens.
- **Modalities:** Text, Image, Video input; Text output. Reasoning: yes (thinking and non-thinking modes). Tool calling: yes (ToolCalls, JSON Mode, Partial Mode, web search).
- **Pricing (as of 2026-10-09):** $0.60/1M input, $3.00/1M output, $0.10/1M cached input (Moonshot AI). Together AI: $0.50/$2.80. Modified MIT license for self-hosting.
- **Architecture:** 1T total / 32B active MoE, 61 layers (1 dense + 60 MoE), 384 experts with 8 active + 1 shared, Multi-head Latent Attention (MLA), MoonViT-3D 400M vision encoder, YaRN position encoding. Trained on NVIDIA H800 clusters.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **60.6%** single-agent / **78.4%** with Agent Swarm (rits.shanghai.nyu.edu — outperforms GPT-5.2 Pro)
- WideSearch F1: **72.7%** single-agent / **79.0%** with Agent Swarm (exceeds Claude Opus 4.5)
- Claw-Eval: **52.3%** (BenchLM)
- Terminal-Bench 2.0: **50.8%** (BenchLM)
- Agent Swarm: up to 100 parallel sub-agents, 1,500+ tool calls, 4.5× speedup (kimi-k25.com)
- PinchBench: **72.1% / #38 of 50** (Kilo Code)
- Function calling: supported (Kimi platform docs)

Reasoning / knowledge:

- AIME 2025: **96.1%** (rits.shanghai.nyu.edu)
- HMMT 2025 (February): **95.4%** (rits.shanghai.nyu.edu)
- GPQA-Diamond: **87.6%** (rits.shanghai.nyu.edu, BenchLM)
- HLE-Full (with tools): **50.2%** (rits.shanghai.nyu.edu — above GPT-5.2's 45.5%)
- SuperGPQA: **69.2%** (BenchLM)
- LongBench v2: **61%** (BenchLM)
- Intelligence Index (ApX): **0.23 / #133**
- MMLU Pro: **0.871 / #4** (ApX)

Coding:

- SWE-bench Verified: **76.8%** (rits.shanghai.nyu.edu, BenchLM)
- LiveCodeBench v6: **85.0%** (rits.shanghai.nyu.edu)
- Coding Index (ApX): **0.47 / #94**
- Coding Index (CloudPrice): **46.8 / #4**

Long context:

- Context window: **262,144 tokens** (verified via Kilo, ApX, Kimi platform docs)
- LongBench v2: **61%** (BenchLM)

Multimodal:

- MMMU-Pro: **78.5%** (BenchLM)
- Video-MME: **87.4%** (BenchLM)
- MMVU: **80.4%** (BenchLM)
- VideoMMMU: **86.6%** (BenchLM)
- OCRBench: **92.3%** (rits.shanghai.nyu.edu)
- MathVista: **90.1%** (rits.shanghai.nyu.edu)
- Multimodal & Grounded (BenchLM): **66.8 / #25/50**

### Normalized scores (1–100)

- **Tool use: 78/100.** Agent Swarm with 100 parallel agents, BrowseComp 78.4% (with swarm), Claw-Eval 52.3%, Terminal-Bench 2.0 50.8%. Unique multi-agent paradigm, strong on browser/search tasks.
- **Reasoning: 85/100.** AIME 96.1%, GPQA 87.6%, HLE 50.2%, SuperGPQA 69.2%. Excellent math reasoning, strong general reasoning. Above GPT-5.2 on HLE.
- **Context window: 82/100.** 256K token context. Good long-context capability, though not the largest available.
- **Multimodal: 85/100.** Text, Image, Video input. MMMU-Pro 78.5%, VideoMME 87.4%, OCRBench 92.3%. Strong native multimodal understanding.
- **Coding: 82/100.** SWE-bench Verified 76.8%, LiveCodeBench 85.0%. Strong coding for open weights, competitive with GPT-5.2 and Claude Opus 4.5.
- **Cost efficiency: 92/100.** $0.60/$3.00 per 1M tokens — very affordable for a 1T-parameter model. Modified MIT open weights license.
- **Overall Score: 82/100.** Mean of Tool (78), Reasoning (85), Context (82), Multimodal (85), Coding (82) = 412/5 = 82.4 → 82. Strong open-weight model with unique Agent Swarm paradigm and excellent cost efficiency.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
