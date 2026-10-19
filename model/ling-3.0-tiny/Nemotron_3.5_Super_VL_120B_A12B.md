# Ling 3.0 Tiny — findings by Nemotron 3.5 Super VL 120B A12B

- Source: huggingface.co/inclusionAI/Ling-3.0-tiny (model card + README), huggingface.co/inclusionAI/Ling-3.0-tiny-GGUF (GGUF variants), benchlm.ai/models/ling-3-0-tiny (aggregator), benchlm.ai comparisons (vs ZAYA1-8B, MiniCPM-o 2.6, Ling 3.1 Flash, Ling 3.0 Flash Fin, Claude Sonnet 4.6, o1, o3), artificialanalysis.ai/models/ling-3-0-tiny (AA Intelligence Index), modelscope.cn (mirror), ingloryon/Ling-3.0-tiny GGUF (Ollama community port), arxiv 2606.15079 (Ling and Ring 2.6 technical report family context)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny (InclusionAI)
- **Short description:** Lightweight hybrid-reasoning MoE instruct model, 7.9B total / 1.3B active parameters per token, 262K context; MIT license; designed for local/edge deployment (validated on NVIDIA DGX Spark, Apple Silicon MacBook, Mac mini); BF16/FP8/INT4/GGUF weights; strong reasoning and agentic capability relative to its tiny activated footprint.
- **Provider / access:** Hugging Face (inclusionAI/Ling-3.0-tiny, inclusionAI/Ling-3.0-tiny-GGUF), Ollama community ports (ingloryon/Ling-3.0-tiny), OpenRouter, ModelScope.
- **Release / knowledge:** Released 2026-08 (part of Ling 3.0 family, same month as Ling 3.0 Flash); knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.0-tiny` (HF), `inclusionAI/Ling-3.0-tiny-GGUF` (GGUF), `ingloryon/Ling-3.0-tiny` (Ollama community).
- **Context window:** 262,000 tokens (HF model card; benchlm.ai). Verified.
- **Modalities:** Text in, text out (text-only — NOT multimodal); reasoning yes (thinking enabled by default, temperature=1.0, top_p=0.95, top_k=20); tool calls yes (agent-eval harness); structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** $0.00/$0.00 (benchlm compare tables list free for open-weight local models); MIT open weights (self-host effectively $0).
- **Architecture:** 7.9B total / 1.3B active per token, 3:1 KDA–MLA architecture (3 Kimi Delta Attention + 1 MLA per 4-layer block), sparse MoE FFN with 128 routed experts (8 activated + 1 shared), inherits Ling-3.0 hybrid-linear architecture.

### Raw benchmarks found

InclusionAI HF model card + benchlm.ai aggregator (Artificial Analysis) + community GGUF evaluation benchmarks (tanishq-dubey/macos-laguna-s2.1 style, applied to Ling-3.0-tiny-GGUF by community).

Agent / tool use:

- Terminal-Bench 2.1: evaluated under the Artificial Analysis (AA) protocol using default Terminus 2 harness, unified 2-hour timeout, preserve-thinking mode, 3 runs per task (mean), 256K context — score not isolated in fetched sources.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25** (v4.1.1) (HF model card)
- Artificial Analysis Agentic Index: **16** (HF model card)

Coding: Not isolated beyond agentic eval harness mention.

Multimodal & grounded: Text-only — NOT multimodal.

Long context: Declared 262K; Terminal-Bench 2.1 evaluated at 256K context; no public needle-recall curve beyond.

Instruction following: Not isolated.

### Conflicting results noted

- AA Intelligence Index 25 vs AA Agentic Index 16 — different composites; both cited.
- benchlm.ai lists Ling 3.0 Tiny as "Not computed (unranked)" with 10 source-displayable rows but no numeric scores isolated in fetched pages.
- Community GGUF ports (ingloryon, Ninnix96) are third-party quantizations — not official benchmarks.

### Normalized scores (1–100)

Jev-style small model; evidence is sparse (AA indices + HF card claims). Scores are low-confidence directional estimates.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** Agent-eval capable (Terminal-Bench 2.1 under AA protocol); no isolated tool-use benchmark scores; low confidence.
- **Reasoning: 55/100.** AA Intelligence Index 25 (below median 8 scale? AA index is 0-100ish where 25 is modest), AA Agentic Index 16; strong for a 1.3B-active model but absolute levels modest; low confidence.
- **Context window: 75/100.** Declared 262K; evaluated at 256K in Terminal-Bench; no public retrieval curve.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 50/100.** Agentic coding capability claimed; no isolated coding benchmark scores; low confidence floor estimate.
- **Cost efficiency: 95/100.** MIT open weights, 1.3B-active, runs on MacBook/DGX Spark (~86-105 tok/s FP8); not counted toward Overall.
- **Overall Score: 57/100.** Half-up mean of (55 + 55 + 75 + 50 + 50) / 5 = 57.0 → 57, low confidence; treat as directional — a capable tiny local agent/reasoning model, not a general benchmark competitor.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (inclusionAI HF model card + README + benchlm.ai + Artificial Analysis + community GGUF ports + arxiv 2606.15079 family report); scores are normalized 1–100 interpretations, not official vendor scores. Evidence is sparse — scores are low-confidence estimates.
- Future sources: if full benchmark tables are published, add a new file next to this one using the same headings.
