# MiniMax M2.7 — findings by Iceman

- Source: MiniMaxAI/MiniMax-M2.7
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.7
- **Short description:** MiniMax M2.7 is a self-evolving 228.7B/10B-active MoE model (205K context) for coding, agentic workflows, and complex task execution, released under a non-commercial license.
- **Provider / access:** Open weights on Hugging Face (`MiniMaxAI/MiniMax-M2.7`, non-commercial license) and hosted providers. Local metadata lists `opencode/minimax-m2.7`, pricing $0.30/$1.20 per 1M, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `MiniMax-M2.7`, `opencode/minimax-m2.7`.
- **Context window:** ~204,800 tokens (205K class) / 131K output per metadata.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Paid ~$0.30/$1.20 per 1M in/out (cached $0.06) per local metadata. Open weights available under non-commercial terms.
- **Architecture:** Sparse MoE transformer, 228.7B total / 10B active parameters (HF card/metadata), self-evolving RL/scaffold iteration focus.

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark tables for `MiniMaxAI/MiniMax-M2.7`.

Agent / tool use:

- SWE-bench Verified: **76.5%**
- SWE-bench Pro: **56.2%**
- Terminal-Bench 2.0: **57.0%**
- GDPval-AA: **1,487** (Elo/score as reported)

Reasoning / knowledge:

- AIME 2026: **92.7%**
- HMMT Feb 2025: **85.8%**
- GPQA Diamond: **87.6%**
- HLE: **21.6%**
- AA-Omniscience: **22.9%**

Coding:

- SWE-bench Verified: **76.5%**
- SWE-bench Pro: **56.2%**
- Terminal-Bench 2.0: **57.0%**

Long context:

- ~205K context supported. No standalone numeric long-context retrieval benchmark extracted from reviewed card.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 84/100.** Strong coding-agent performance (SWE-bench Verified 76.5%, SWE-bench Pro 56.2%, Terminal-Bench 2.0 57.0%, GDPval-AA 1,487).
- **Reasoning: 84/100.** Strong math and good science reasoning (AIME 2026 92.7%, HMMT Feb 2025 85.8%, GPQA Diamond 87.6%) with weaker HLE/omniscience.
- **Context window: 84/100.** 205K-class context suitable for long coding/agent sessions.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 84/100.** Strong software engineering and terminal coding results across SWE-bench/Terminal-Bench.
- **Cost efficiency: 84/100.** Competitive hosted pricing and efficient active parameter count (10B active), offset by non-commercial open-weight license restrictions.
- **Overall Score: 75/100.** Mean of the five non-cost dims (84, 84, 84, 40, 84) = 75.2 → 75. Best fit for text-only agentic coding and self-improving workflow research where license permits.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [MiniMax-M2.7 model card (Hugging Face)](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)
  - Local repository metadata consulted: `model/minimax-m2.7/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
