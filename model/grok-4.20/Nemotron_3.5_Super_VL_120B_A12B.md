# Grok 4.20 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/grok-4-20-beta (Meta AI Muse Spark comparison chart), Artificial Analysis, Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's proprietary reasoning model (reasoning variant); 2M context / text+in → text out; sibling: Grok 4.20 Multi-agent; related: Grok 4.1.
- **Provider / access:** xAI API (`grok-4.20-0309-reasoning` per Vals AI); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per xAI; knowledge cutoff not stated.
- **IDs:** `grok-4.20` / `grok-4.20-0309-reasoning` (xAI API). No Free ID confirmed.
- **Context window:** 2M tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out; reasoning type: Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **47.1%** (Meta AI Muse Spark comparison chart — cross-ref)
- DeepSearchQA: **62.8%** (Meta AI Muse Spark comparison chart — cross-ref)
- Gert Labs: **38.36%** (Gert Labs rankings)
- Terminal-Bench 2.1 (Vals): **44.2%** (Vals AI)
- MazeBench: **0%** (MazeBench leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (Meta AI Muse Spark comparison chart — cross-ref); GPQA Diamond (Vals) **88.6%**
- HLE w/o tools: **31.6%** (Meta AI Muse Spark comparison chart — cross-ref)
- MMLU-Pro: **86.3%** (Vals AI)
- ARC-AGI-2: **53.3%** (Meta AI Muse Spark comparison chart — cross-ref)
- ARC-AGI-3: **0.1%** (ARC Prize official leaderboard)
- HealthBench Hard: **20.3%** (Meta AI Muse Spark comparison chart — cross-ref)
- MedXpertQA (Text): **50.2%** (Meta AI Muse Spark comparison chart — cross-ref)
- MedXpertQA (MM): **65.8%** (Meta AI Muse Spark comparison chart — cross-ref)

Coding:

- LiveCodeBench Pro: **74.2%** (Meta AI Muse Spark comparison chart — cross-ref)
- SWE-bench Verified: **76.7%** (Meta AI Muse Spark comparison chart — cross-ref)
- SWE-bench Pro: **51.8%** (Meta AI Muse Spark comparison chart — cross-ref)
- Vibe Code Bench: **4.06%** (Vals AI)
- LiveCodeBench v6: **84.3%** (Vals AI)
- SWE-bench (Vals): **72.2%** (Vals AI)

Multimodal & grounded:

- MMMU-Pro: **75.2%** (Meta AI Muse Spark comparison chart — cross-ref)
- CharXiv: **60.9%** (Meta AI Muse Spark comparison chart — cross-ref)
- ERQA: **54.1%** (Meta AI Muse Spark comparison chart — cross-ref)
- SimpleVQA: **57.4%** (Meta AI Muse Spark comparison chart — cross-ref)
- Design Arena Website: **1231** (OpenRouter)

Long context:

- Declared 2M context (benchlm.ai); no public needle-recall score found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 50/100.** Terminal-Bench 2.0 (47.1%), Terminal-Bench 2.1 Vals (44.2%); capped by weak MazeBench (0%), Gert Labs (38.36%), DeepSearchQA (62.8%). Moderate agentic tool-use profile.
- **Reasoning: 65/100.** GPQA Diamond 88.5%, MMLU-Pro 86.3%, ARC-AGI-2 (53.3%); capped by ARC-AGI-3 (0.1%), HLE w/o tools (31.6%), HealthBench Hard (20.3%). Strong knowledge reasoning.
- **Context window: 90/100.** Verified 2M tokens (benchlm.ai); capped because no public full-depth needle-recall score found.
- **Multimodal: 60/100.** Text+in → text out assumed; MMMU-Pro (75.2%), CharXiv (60.9%), ERQA (54.1%), SimpleVQA (57.4%), MedXpertQA MM (65.8%); capped by text-only output assumption.
- **Coding: 60/100.** LiveCodeBench Pro (74.2%), SWE-bench Verified (76.7%), LiveCodeBench v6 (84.3%), SWE-bench Vals (72.2%); capped by Vibe Code Bench (4.06%), SWE-bench Pro (51.8%). Strong verified coding.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 65/100.** Half-up mean of (50 + 65 + 90 + 60 + 60) / 5 = 65.0 → 65. Best-fit recommendation: large context window (2M) and strong GPQA/SWE-Verified coding; verify on HLE-class tasks given weak results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Grok 4.20 model page + Meta AI Muse Spark comparison chart + Vals AI + ARC Prize independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
