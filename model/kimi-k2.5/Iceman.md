# Kimi K2.5 — findings by Iceman

- Source: Moonshot AI/Kimi K2.5
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI’s open-weight multimodal Mixture-of-Experts model (1T total / 32B active) for long-context agentic, coding, reasoning, and visual tasks.
- **Provider / access:** Open weights on Hugging Face (`moonshotai/Kimi-K2.5`, Modified MIT License) and hosted APIs/providers. Local metadata lists `opencode/kimi-k2.5` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10 (Kimi K2.5 release). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `Kimi-K2.5`, `moonshotai/Kimi-K2.5`.
- **Context window:** 256K tokens (262,144 total in local metadata; 65,536 max output per metadata).
- **Modalities:** Text, image, and video input; text output (native multimodal model).
- **Pricing (as of 2026-11-10):** Open weights available (license as on HF). Hosted pricing varies (local metadata cites OpenCode Zen $0.60/$3.00 per 1M in/out, cached $0.08).
- **Architecture:** Sparse MoE, 1T total parameters / 32B active parameters (HF card/metadata).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `moonshotai/Kimi-K2.5` unless noted.

Agent / tool use:

- Tau2-Bench (Telecom, reported in K2.5 card context/comparisons): **95.9** (local metadata claim consistent with widely reported K2.5 telecom agent result; exact row not fully re-extracted from truncated card text in this pass)
- BrowseComp (agentic search): **74.9** (Agent Swarm context in card) / strong agentic performance reported
- HLE-Full (w/ tools, Agent Swarm): **50.2**

Reasoning / knowledge:

- AIME 2025: **96.1**
- HMMT 2025 (Feb): **95.4**
- GPQA-Diamond: **87.6**
- MMLU-Pro: **87.1**

Coding:

- SWE-bench Verified: **76.8**
- SWE-bench Multilingual: **73.0**
- LiveCodeBench (v6): **85.0**
- Terminal Bench 2: **50.8**
- PaperBench (CodeDev): **63.5**
- CyberGym: **41.3**
- SciCode: **48.7**

Multimodal / vision:

- MMMU-Pro: **78.5**
- MathVision: **84.2**
- MathVista (mini): **90.1**
- OCRBench: **92.3**
- OmniDocBench 1.5: **88.8**
- VideoMME: **87.4**
- LongVideoBench: **79.8**

Long context:

- 256K context documented; no standalone MRCR/RULER/GraphWalks numeric score extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 87/100.** Strong agentic/tool-use evidence (HLE-Full w/ tools 50.2 with Agent Swarm, BrowseComp 74.9, reported high Tau2 telecom performance) indicates capable long-horizon agent operation, with some variance by harness.
- **Reasoning: 90/100.** Excellent reasoning/math/knowledge results (AIME 2025 96.1, HMMT 95.4, GPQA-Diamond 87.6, MMLU-Pro 87.1).
- **Context window: 86/100.** 256K context is good for many agent/coding tasks but below 1M-class leaders for very long-context workflows.
- **Multimodal: 90/100.** Strong native multimodal performance (MMMU-Pro 78.5, MathVista 90.1, MathVision 84.2, OCRBench 92.3, VideoMME 87.4, OmniDocBench 88.8).
- **Coding: 88/100.** Strong coding results (LiveCodeBench v6 85.0, SWE-bench Verified 76.8, SWE-bench Multilingual 73.0, Terminal Bench 2 50.8) support high-end software engineering capability.
- **Cost efficiency: 89/100.** Open weights plus competitive hosted pricing improve cost efficiency relative to closed frontier models.
- **Overall Score: 88/100.** Mean of the five non-cost dims (87, 90, 86, 90, 88) = 88.2 → 88. Best fit for open-weight multimodal agentic coding/reasoning and long-ish context workflows (256K).

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Kimi K2.5 model card (Hugging Face)](https://huggingface.co/moonshotai/Kimi-K2.5)
  - Local repository metadata consulted: `model/kimi-k2.5/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
