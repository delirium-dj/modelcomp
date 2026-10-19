# GLM-5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: docs.z.ai/guides/llm/glm-5.md (official Z.AI docs), z.ai/blog/glm-5 (official launch blog, 2026-02-11), huggingface.co/zai-org/GLM-5 (official HF card + benchmark table), ollama.com/library/glm-5 (Ollama card; retired 2026-07-15), build.nvidia.com/z-ai/glm5 (NVIDIA NIM page), benchlm.ai/models/glm-5 (aggregator), benchlm.ai comparisons (vs GLM-4.7, Qwen3.6-35B-A3B, GPT-5.2, GPT-5.2-Codex), artificialanalysis.ai/models/glm-5 (AA model page), awesomeagents.ai
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5 (Z.AI / Zhipu AI)
- **Short description:** Z.AI's new-generation foundation model for agentic engineering and long-horizon tasks; 744B total / 40B active MoE (DeepSeek Sparse Attention DSA); 200K context (DSA-optimized); MIT License; released 2026-02-11; open weights on Hugging Face and ModelScope; available via api.z.ai and BigModel.cn; retired from Ollama 2026-07-15 but weights remain. Claimed SOTA among open-weight models for coding/agentic, approaching Claude Opus 4.5.
- **Provider / access:** Z.AI API (api.z.ai), BigModel.cn, Hugging Face (zai-org/GLM-5), ModelScope; compatible with Claude Code and OpenClaw; free on Z.ai.
- **Release / knowledge:** Released 2026-02-11; knowledge cutoff not stated.
- **IDs:** `zai-org/GLM-5` (HF), `glm-5` (benchlm/ollama/NVIDIA). Ollama entry retired.
- **Context window:** 200,000 tokens (official docs/blog; benchlm.ai lists 200K; Ollama says 128K+ via DSA). Use 200K as authoritative.
- **Modalities:** Text in, text out (text-only per official docs table); reasoning yes; tool calls yes; structured output not explicitly advertised. (Multimodal came later in GLM-5.3-Flash — GLM-5 itself is text-only.)
- **Pricing (as of 2026-10-16):** benchlm.ai lists $1.00/M input, $3.20/M output; MIT open weights (self-host effectively $0).
- **Architecture:** 744B total / 40B active MoE, DeepSeek Sparse Attention (DSA), asynchronous RL ("Slime") post-training; 100K Huawei Ascend chips training per awesomeagents.

### Raw benchmarks found

Official Z.AI blog benchmark table (GLM-5 Thinking vs GLM-4.7, DeepSeek-V3.2, Kimi K2.5, Claude Opus 4.5, Gemini 3.0 Pro, GPT-5.2), corroborated by Ollama card, benchlm.ai, Artificial Analysis.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2): **56.2%** / **60.7%** (verified, official Z.AI blog)
- Terminal-Bench 2.0 (Claude Code): **56.2%** / **61.1%** (verified)
- CyberGym: **43.2%** (official)
- BrowseComp: **62.0%** (official) / **75.9%** w/ context manage / **72.7%** BrowseComp-Zh
- τ²-bench: **89.7%** (official)
- MCP-Atlas Public Set: **67.8%** (official)
- Tool-Decathlon: **39.2%** (official)
- Vending Bench 2: **$4,432.12** final balance (official)
- SWE-bench Verified: **77.8%** (official; benchlm)
- SWE-bench Multilingual: **73.3%** (official)

Reasoning / knowledge:

- Humanity's Last Exam: **30.5%** (official) / **50.4%** w/ tools (official)
- AIME 2026 I: **92.7%** (official)
- HMMT Nov. 2025: **96.9%** (official)
- IMOAnswerBench: **82.5%** (official)
- GPQA-Diamond: **86.0%** (official) / **86.0%** (GPQA-D)
- MMLU-Pro: **85.7%** (benchlm.ai via Qwen3.6-Plus table)
- SuperGPQA: **66.8%** (benchlm.ai)
- HLE: **30.5%** — see above
- Artificial Analysis Intelligence Index: **27.9%** (benchlm.ai)
- AA-GPQA Diamond: **82.0%** (benchlm.ai)
- AA-HLE: **29.3%** (benchlm.ai)
- AA-Omniscience: index 0.3%, accuracy 26.3%, hallucination rate 35.3% (benchlm.ai)
- AA-LCR: **75.7%** (benchlm.ai)
- CritPt: **2.0%** (benchlm.ai)

Coding:

- SWE-bench Verified: **77.8%** (official; benchlm)
- SWE-bench Multilingual: **73.3%** (official)
- SWE-bench Pro: **55.1%** (benchlm.ai via Qwen3.6-Plus table)
- NL2Repo: **35.9%** (benchlm.ai via GLM-5.1 card)
- Design Arena Website: **1249** (OpenRouter via benchlm)

Multimodal & grounded:

- Text-only (GLM-5 is text per official docs); no vision benchmarks. Multimodal dimension reflects text-only reality.

Long context:

- AA-LCR: **75.7%** (benchlm); 200K context DSA-optimized; no public needle-recall curve beyond 200K.

Instruction following:

- IFEval: **92.6%** (benchlm.ai public-lane #35/148) — from GLM-5 vs GLM-4.7 comparison table
- MMLU-ProX: **83.1%** (benchlm.ai)
- NOVA-63: **55.1%** (benchlm.ai)

### Conflicting results noted

- Terminal-Bench 2.0: 56.2% (official blog) vs Ollama card 56.2% — consistent; the "60.7† / 61.1†" verified variants are noted.
- HLE: 30.5% (official text-only) vs 50.4% (w/ tools) — both cited with condition labeled.
- SWE-bench Verified: 77.8% (official Z.AI) — benchlm.ai shows it; no conflicting third-party number found.
- benchlm.ai overall 54.83 (#69/954) is conservative (50 of 639 benchmarks covered).

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Terminal-Bench 2.0 56.2/60.7, CyberGym 43.2, BrowseComp 62.0, τ²-bench 89.7, MCP-Atlas 67.8, Tool-Decathlon 39.2, Vending Bench 2 $4432 — strong agentic profile; capped by Tool-Decathlon 39.2 and no public OSWorld/SWE-agent score beyond SWE-bench.
- **Reasoning: 72/100.** GPQA-D 86.0, MMLU-Pro 85.7, AIME 92.7, HMMT 96.9, IMOAnswerBench 82.5 are excellent; capped by HLE 30.5 (30.5% text-only), CritPt 2.0, AA-Omniscience accuracy 26.3 / hallucination 35.3.
- **Context window: 80/100.** Declared 200K DSA-optimized; AA-LCR 75.7 moderate; no public retrieval curve beyond 200K.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal (multimodal arrived with GLM-5.3-Flash).
- **Coding: 78/100.** SWE-bench Verified 77.8 (top open-weight per Z.AI), SWE Multilingual 73.3, SWE-bench Pro 55.1, NL2Repo 35.9, Design Arena 1249; strong open-weight coder, below Opus 4.5/4.8 on some agentic coding.
- **Cost efficiency: 80/100.** MIT open weights (self-host ~$0), $1.00/$3.20 per M hosted (mid-range); 40B-active MoE efficient; not counted toward Overall.
- **Overall Score: 70/100.** Half-up mean of (72 + 72 + 80 + 50 + 78) / 5 = 70.4 → 70. Best-fit recommendation: strong open-weight agentic/coding model; text-only (no vision), HLE and omniscience weaknesses noted.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Z.AI docs + launch blog + HF card + Ollama + NVIDIA NIM + benchlm.ai + Artificial Analysis + awesomeagents); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
