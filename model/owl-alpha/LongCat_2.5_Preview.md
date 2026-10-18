# Owl Alpha — findings by LongCat 2.5 Preview

- Source: Meituan/LongCat-2.0 (revealed; previously stealth on OpenRouter)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha (now known as LongCat-2.0)
- **Short description:** A 1.6T total / ~48B active MoE model that ran anonymously on OpenRouter as "Owl Alpha" (April–June 2026) before being revealed as Meituan's LongCat-2.0. MIT-licensed open weights. Text-only. Trained on 50,000+ Chinese ASICs.
- **Provider / access:** OpenRouter `openrouter/owl-alpha` (no longer available as of late 2026); LongCat API `meituan/longcat-2.0`; open weights on Hugging Face (MIT license). No Zen Free ID.
- **Release / knowledge:** Released 2026-04-28 (stealth); revealed 2026-06-30; knowledge cutoff not disclosed.
- **IDs:** `openrouter/owl-alpha`, `meituan/longcat-2.0` (no Free ID on Zen; was free, now paid)
- **Context window:** 1,048,576 tokens (1M native via LongCat Sparse Attention); max output 262,144 tokens.
- **Modalities:** Text only (no image/audio/video); tool calls; structured outputs; reasoning (medium default, high recommended for coding).
- **Pricing (as of 2026-10-18):** $0.75/MTok input, $2.95/MTok output (standard); $0.30/$1.20 (promo); cached reads free. Was free during stealth period. Open weights can be self-hosted.
- **Architecture:** 1.6T total / ~48B active MoE (33-56B dynamic range); LongCat Sparse Attention (LSA) for linear-complexity long context; N-gram embeddings (135B additional params, 5-gram); MOPD post-training (Agent/Reasoning/Interaction expert groups). MIT license.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **79.9%** (Meituan vendor-reported)
- RWSearch: **78.8%** (Meituan vendor-reported)
- FORTE: **73.2%** (Meituan vendor-reported / vs GPT-5.5 77.8%)
- Tool Calling (AI Benchy): **10.0/10** (1/1 tests correct)
- Tool-call error rate: **4.73%** (RoboRhythms)

Reasoning / knowledge:

- MMLU: **91.0%** (Longshot AI, 50Q sample)
- GSM8K: **95.0%** (Longshot AI, 50Q sample)
- ARC-Challenge: **94%** (Longshot AI)
- StealthMark General Intelligence: **16.9/100** (rank 33/37)

Coding:

- SWE-bench Pro: **59.5%** (Meituan vendor-reported / vs GPT-5.5 58.6%, GLM-5.2 62.1%)
- SWE-bench Multilingual: **77.3%** (Meituan vendor-reported)
- Terminal-Bench 2.1: **70.8%** (Meituan vendor-reported)
- AI Benchy Coding: **5.4/10** (rank 1)

Long context:

- 1M token context window with LSA (linear complexity)
- 262K max output tokens

### Normalized scores (1–100)

- **Tool use: 72/100.** Tool Calling 10.0/10 (AI Benchy) and BrowseComp 79.9% are strong. Capped by 4.73% tool-call error rate (compounds in multi-step chains) and FORTE 73.2% trailing GPT-5.5.
- **Reasoning: 78/100.** MMLU 91.0%, GSM8K 95.0%, ARC 94.0% are strong for an open model. Capped by StealthMark General Intelligence 16.9/100 (very low) and all official benchmarks being vendor-reported.
- **Context window: 95/100.** 1M tokens native with LSA (linear complexity). Matches frontier models. 262K max output is exceptional.
- **Multimodal: 15/100.** Text-only model; no image/audio/video input. Scores minimum per methodology.
- **Coding: 72/100.** SWE-bench Pro 59.5% is near-frontier (but behind GLM-5.2 62.1%); Terminal-Bench 70.8% is solid. Capped by AI Benchy Coding 5.4/10 and all benchmarks being vendor-reported.
- **Cost efficiency: 90/100.** Was free during stealth period; now $0.75/$2.95 (standard) or $0.30/$1.20 (promo). MIT open weights enable self-hosting. Free cached reads. Outstanding value.
- **Overall Score: 66/100.** Mean of (72+78+95+15+72)/5 = 66.4 → 66. A technically impressive open-weights model with 1M context, near-frontier SWE-bench Pro, and excellent cost efficiency. Best for long-context coding and batch agentic workloads. Text-only is a significant limitation. All official benchmarks are vendor-reported; independent verification is limited. No longer available on OpenRouter.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-18
- Method: Public internet research (OpenRouter, Stealth Models, Longshot AI, AI Benchy, RoboRhythms, AlphaSignal/Tabbit, Awesome Agents, FelloAI, LMRank, DigitalToday, Upend, SandBase, JustOBorn, Vijayasimha BR); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
