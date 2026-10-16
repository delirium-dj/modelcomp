# GPT-5.4 mini — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gpt-5-4-mini (OpenAI GPT-5.4 mini and nano launch page), Artificial Analysis (`artificialanalysis.ai/models/gpt-5-4-mini`), Vals AI, Epoch AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's proprietary reasoning model (released March 17, 2026 per AA); deprecated by GPT-5.6 Terra; 400K context / text+image in → text out; $0.75/$4.50 per MTok; knowledge cutoff Aug 2025; sibling models: GPT-5.4 Pro, GPT-5.4, GPT-5.4 nano.
- **Provider / access:** OpenAI API (`gpt-5.4-mini`), 2 API providers per AA; proprietary (weights not public).
- **Release / knowledge:** Released March 17, 2026 (AA); knowledge cutoff Aug 2025.
- **IDs:** `gpt-5.4-mini` (OpenAI API). No Free ID confirmed.
- **Context window:** 400K tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text+image in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.75/M input, $4.50/M output (AA; cache discount 90%, cost per task $0.45).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **60%** (OpenAI GPT-5.4 mini and nano launch page)
- OSWorld-Verified: **72.1%** (OpenAI GPT-5.4 mini and nano launch page)
- MCP Atlas: **57.7%** (OpenAI GPT-5.4 mini and nano launch page)
- Toolathlon: **42.9%** (OpenAI GPT-5.4 mini and nano launch page)
- τ²-bench results: **93.4%** (OpenAI GPT-5.4 mini and nano launch page)
- APEX-Agents-AA: **28.2%** (Artificial Analysis)
- GDPval-AA: **1095 Elo** (Artificial Analysis); normalized **25.6%**
- AA Agentic Index: **19.6%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **54.7%** (Vals AI)

Reasoning / knowledge:

- GPQA: **88%** (OpenAI GPT-5.4 mini and nano launch page)
- HLE: **41.5%** (OpenAI GPT-5.4 mini and nano launch page)
- HLE w/o tools: **28.2%** (OpenAI GPT-5.4 mini and nano launch page)
- MMLU-Pro: **84.6%** (Vals AI)
- ARC-AGI-1: **63.70%** (ARC Prize official leaderboard)
- ARC-AGI-2: **18.9%** (ARC Prize official leaderboard)
- Artificial Analysis Intelligence Index: **24.1%** (#130 of 216; median 27)
- AA-GPQA Diamond: **87.5%** (Artificial Analysis)
- AA-HLE: **28.1%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **77.0%** (Artificial Analysis)
- CritPt: **10.0%** (Artificial Analysis)
- AA-Omniscience Index **-18.9%**; Accuracy **37.5%**; Hallucination rate **90.2%** (AA)
- GPQA Diamond (Vals): **83.1%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **51.228%** (Epoch AI)
- FrontierMath v2 Tier 4: **9.756%** (Epoch AI)

Coding:

- AA-SciCode: **52.1%** (Artificial Analysis)
- FrontierCode 1.1 Main: **27.0%** (Cognition)
- LiveCodeBench v6: **81.5%** (Vals AI)
- SWE-bench (Vals): **73.0%** (Vals AI)
- Vibe Code Bench: **47.97%** (Vals AI)
- AA Coding Index: **56.1%** (Artificial Analysis)

Multimodal & grounded:

- MMMU-Pro: **76.6%** (OpenAI GPT-5.4 mini and nano launch page); AA-MMMU-Pro **73.3%**
- MMMU-Pro w/ Python: **78%** (OpenAI GPT-5.4 mini and nano launch page)

Long context:

- AA-LCR: **77.0%** (Artificial Analysis); declared 400K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** Terminal-Bench 2.0 (60%), OSWorld-Verified (72.1%), MCP Atlas (57.7%), τ²-bench (93.4%), Terminal-Bench 2.1 Vals (54.7%); capped by weak AA Agentic Index (19.6%), GDPval-AA normalized (25.6%), APEX-Agents-AA (28.2%), Toolathlon (42.9%). Moderate agentic tool-use profile.
- **Reasoning: 64/100.** GPQA 88%, MMLU-Pro 84.6%, AA-LCR (77.0%), FrontierMath T1-3 (51.228%); capped by CritPt (10.0%), HLE (41.5%), AA-HLE (28.1%), Intelligence Index (24.1%), ARC-AGI-2 (18.9%). Strong knowledge reasoning.
- **Context window: 78/100.** Verified 400K tokens (benchlm.ai + AA); AA-LCR 77.0%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 70/100.** Text+image in, text out per AA; MMMU-Pro (76.6%), AA-MMMU-Pro (73.3%), MMMU-Pro w/ Python (78%); capped by text-only output.
- **Coding: 60/100.** AA-SciCode (52.1%), LiveCodeBench v6 (81.5%), SWE-bench Vals (73.0%), Vibe Code Bench (47.97%); capped by FrontierCode 1.1 Main (27.0%), AA Coding Index (56.1%). Moderate coding.
- **Cost efficiency: 75/100.** $0.75/$4.50 competitive pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 65/100.** Half-up mean of (55 + 64 + 78 + 70 + 60) / 5 = 65.4 → 65. Best-fit recommendation: strong knowledge reasoning and MMMU-Pro at 400K context with competitive pricing and fast output (275 t/s); verify on HLE-class and agentic tasks given weak results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + OpenAI GPT-5.4 mini and nano launch page + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
