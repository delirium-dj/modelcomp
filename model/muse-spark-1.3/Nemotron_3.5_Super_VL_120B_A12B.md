# Muse Spark 1.3 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Meta (`dev.meta.ai/models/muse-spark`), Artificial Analysis (`artificialanalysis.ai/models/muse-spark-1-3`), llm-stats.com
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary reasoning model (released 2 Sept 2026) trained for long-horizon agentic workflows and competitive coding; native multimodal perception (video/images/documents); 1M-token context; same weights across Contributor/Standard/Max tiers — only price and training-data consent differ.
- **Provider / access:** Meta Model API (OpenAI-compatible Chat Completions); also available on OpenRouter (`meta/muse-spark-1.2` route family). Contributor tier $0 (Meta trains on prompts); Standard tier $1.25/$4.25.
- **Release / knowledge:** Released 2026-09-02; proprietary, parameter count not disclosed.
- **IDs:** `meta/muse-spark-1.3` (Standard/paid), `meta/muse-spark-1.3-contributor` (Free/Contributor). No separate Free ID on Zen beyond the Contributor tier.
- **Context window:** 1M tokens (verified on Meta model card Model Summary and Artificial Analysis); prompt, visual inputs, conversation history share this window.
- **Modalities:** Text, image, and video in; text out; reasoning yes (max reasoning mode for challenging tasks); tool calls yes (agentic workflows, computer use, GitHub agent, search grounding); JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-16):** muse-spark-1.3: $1.25/M input, $0.15/M cached input, $4.25/M output; muse-spark-1.3-contributor: $0.10/M input, $0.002/M cached, $0.20/M output (up to 21x cheaper; Meta trains on your prompts).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model with extended thinking.

### Raw benchmarks found

All measured numbers below come from Meta's official model card (dev.meta.ai/models/muse-spark) benchmark table unless noted; Artificial Analysis provides an independent composite Intelligence Index.

Agent / tool use:

- GDPVal-AA v2 (Knowledge work, Elo): **1754** (Meta model card) vs 1824 Opus 5 (max), 1710 GPT 5.6 Sol (max)
- JobBench (Professional tool use): **64.9%** (Meta model card)
- OSWorld 2.0 (Agentic computer use): **66.9% partial / 32.0% binary** (Meta model card)
- DeepSearchQA (Agentic browsing): **90.3%** (Meta model card)
- Agentic IF Index (Instruction following): **57.8%** (Meta model card, internal)
- AutomationBench (E2E business workflows): **49.6%** (Meta model card)
- SWEAtlas CodeBase QnA (Codebase understanding): **59.4%** (Meta model card)
- Terminal-Bench 2.1 (Agentic terminal coding): **88.8%** (Meta model card)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **48** (#24 of 217 models; median 27) (Artificial Analysis, independent)
- MRCR 256K–512K (Long context): **98.5%** (Meta model card)
- MRCR 512K–1M (Long context): **98.1%** (Meta model card)

Coding:

- DeepSWE v1.1 (Long-horizon agentic coding): **75.4%** (Meta model card)
- Terminal-Bench 2.1 (Agentic terminal coding): **88.8%** (Meta model card)

Long context:

- MRCR 256K–512K: **98.5%**; MRCR 512K–1M: **98.1%** (Meta model card)
- Declared 1M-token context; long-context retrieval measured via MRCR up to 1M window.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Strong on DeepSearchQA (90.3), Terminal-Bench 2.1 (88.8), GDPVal-AA v2 Elo (1754); capped by moderate JobBench (64.9), AutomationBench (49.6), Agentic IF (57.8), SWEAtlas (59.4). Tier-leading agentic tool use but not the top across every agentic axis.
- **Reasoning: 80/100.** AA Intelligence Index 48 (#24/217, well above median 27) plus MRCR 98.5/98.1 long-context reasoning; capped by no public GPQA/HLE/CritPt scores to test the hard-reasoning ceiling.
- **Context window: 90/100.** Declared 1M tokens (verified on Meta card + AA), with MRCR retrieval measured at 256K–512K and 512K–1M; capped because no full-depth needle recall is published at the full 1M window.
- **Multimodal: 85/100.** Text + image + video in, text out; visual reasoning runs through a real execution environment (screenshots/clips → build); capped by text-only output and no image/audio output.
- **Coding: 82/100.** Competitive coding performance per Meta; strong Terminal-Bench 2.1 (88.8) and DeepSWE v1.1 (75.4); capped by absence of public SWE-bench/LiveCodeBench numbers.
- **Cost efficiency: 85/100.** $1.25/$4.25 Standard is competitively priced (median in $2.00/out $10.00); Contributor tier $0.10/$0.20 up to 21x cheaper; not counted toward Overall.
- **Overall Score: 82/100.** Half-up mean of (75 + 80 + 90 + 85 + 82) / 5 = 82.4 → 82. Best-fit recommendation: strong all-round agentic coding and long-horizon workflow model; Contributor tier offers exceptional value if training-data consent is acceptable.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Meta dev page + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
