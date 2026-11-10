# MiniMax M2.5 — findings by Iceman

- Source: MiniMaxAI/MiniMax-M2.5
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.5
- **Short description:** MiniMax M2.5 is an open-weight 228.7B/10B-active MoE model (Modified MIT) optimized for coding, agentic tool use/search, and office work, with strong software-engineering benchmark performance and high efficiency.
- **Provider / access:** Open weights on Hugging Face (`MiniMaxAI/MiniMax-M2.5`, Modified MIT license) and hosted providers. Local metadata lists `opencode/minimax-m2.5`, pricing tiers ($0.15-$0.30 in / $0.60-$2.40 out), and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `MiniMax-M2.5`, `opencode/minimax-m2.5`.
- **Context window:** 196,608 tokens total (192K–205K class per metadata).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Paid ~$0.15/$0.60 per 1M (M2.5) to $0.30/$2.40 (M2.5-Lightning) per local metadata; open weights available under Modified MIT.
- **Architecture:** Sparse MoE transformer, 228.7B total / 10B active parameters, RL-trained for agentic/coding tasks (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `MiniMaxAI/MiniMax-M2.5` (vendor-reported/evaluated). Appendix table lists additional reasoning/knowledge benchmarks.

Agent / tool use:

- SWE-bench Verified: **80.2%** (headline; card also notes harness-specific results e.g. Droid 79.7, OpenCode 76.1)
- Multi-SWE-Bench: **51.3%**
- BrowseComp (with context management): **76.3%**
- Wide Search / RISE / tool-calling: strong results described qualitatively; fewer standardized numerics extracted.

Reasoning / knowledge:

- AIME25: **86.3**
- GPQA-D: **85.2**
- HLE w/o tools: **19.4**
- AA-LCR: **69.5**

Coding:

- SWE-bench Verified: **80.2%**
- Multi-SWE-Bench: **51.3%**
- VIBE-Pro: competitive with Opus 4.5 (qualitative/internal benchmark)

Long context:

- ~196K context supported. No standalone MRCR/RULER/AA-LCR long-retrieval benchmark beyond AA-LCR (69.5) extracted.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Primarily vendor-reported benchmarks.

- **Tool use: 86/100.** Strong agentic coding and search/tool-use performance (SWE-bench Verified 80.2%, Multi-SWE-Bench 51.3%, BrowseComp 76.3% with context management).
- **Reasoning: 84/100.** Strong reasoning/math/knowledge for class (AIME25 86.3, GPQA-D 85.2, AA-LCR 69.5) with low HLE (19.4).
- **Context window: 84/100.** ~196K context suitable for long coding/agent workflows.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 88/100.** Excellent software engineering and multilingual coding results (SWE-bench Verified 80.2%, Multi-SWE-Bench 51.3%, strong VIBE-Pro positioning).
- **Cost efficiency: 90/100.** Modified-MIT open weights and competitive hosted pricing tiers with efficient 10B-active inference.
- **Overall Score: 76/100.** Mean of the five non-cost dims (86, 84, 84, 40, 88) = 76.4 → 76. Best fit for cost-efficient open-weight agentic coding and tool-using workflows.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from vendor-reported benchmark figures, not official vendor scores.
- Reference URLs:
  - [MiniMax-M2.5 model card (Hugging Face)](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)
  - Local repository metadata consulted: `model/minimax-m2.5/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
