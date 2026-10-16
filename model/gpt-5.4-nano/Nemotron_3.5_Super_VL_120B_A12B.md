# GPT-5.4 nano — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gpt-5-4-nano (OpenAI GPT-5.4 mini and nano launch page), Artificial Analysis (`artificialanalysis.ai/models/gpt-5-4-nano`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's proprietary reasoning model (released March 17, 2026 per AA); 400K context / text+image in → text out; sibling models: GPT-5.4 Pro, GPT-5.4, GPT-5.4 mini; related: GPT-5 nano.
- **Provider / access:** OpenAI API (`gpt-5-4-nano`); proprietary (weights not public).
- **Release / knowledge:** Released March 17, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `gpt-5-4-nano` (OpenAI API). No Free ID confirmed.
- **Context window:** 400K tokens (benchlm.ai). Verified.
- **Modalities:** Text+image in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46.3%** (OpenAI GPT-5.4 mini and nano launch page)
- OSWorld-Verified: **39%** (OpenAI GPT-5.4 mini and nano launch page)
- MCP Atlas: **56.1%** (OpenAI GPT-5.4 mini and nano launch page)
- Toolathlon: **35.5%** (OpenAI GPT-5.4 mini and nano launch page)
- τ²-bench results: **92.5%** (OpenAI GPT-5.4 mini and nano launch page)
- APEX-Agents-AA: **24.9%** (Artificial Analysis)
- GDPval-AA: **1035 Elo** (Artificial Analysis); normalized **22.4%**
- AA Agentic Index: **17.7%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **41.6%** (Vals AI)

Reasoning / knowledge:

- GPQA: **82.8%** (OpenAI GPT-5.4 mini and nano launch page)
- HLE: **37.7%** (OpenAI GPT-5.4 mini and nano launch page)
- HLE w/o tools: **24.3%** (OpenAI GPT-5.4 mini and nano launch page)
- MMLU-Pro: **77.2%** (Vals AI)
- ARC-AGI-1: **51.50%** (ARC Prize official leaderboard)
- ARC-AGI-2: **5.7%** (ARC Prize official leaderboard)
- Artificial Analysis Intelligence Index: **20.7%** (Artificial Analysis)
- AA-GPQA Diamond: **81.7%** (Artificial Analysis)
- AA-HLE: **28.3%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **76.7%** (Artificial Analysis)
- CritPt: **9.3%** (Artificial Analysis)
- AA-Omniscience Index **-29.5%**; Accuracy **25.7%**; Hallucination rate **74.2%** (AA)
- GPQA Diamond (Vals): **77.5%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **44.912%** (Epoch AI)
- FrontierMath v2 Tier 4: **12.195%** (Epoch AI)

Coding:

- AA-SciCode: **47.2%** (Artificial Analysis)
- LiveCodeBench v6: **84.0%** (Vals AI)
- SWE-bench (Vals): **69.8%** (Vals AI)
- Vibe Code Bench: **26.10%** (Vals AI)
- AA Coding Index: **56.1%** (Artificial Analysis)

Multimodal & grounded:

- MMMU-Pro: **66.1%** (OpenAI GPT-5.4 mini and nano launch page); AA-MMMU-Pro **65.4%**
- MMMU-Pro w/ Python: **69.5%** (OpenAI GPT-5.4 mini and nano launch page)

Long context:

- AA-LCR: **76.7%** (Artificial Analysis); declared 400K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 50/100.** Terminal-Bench 2.0 (46.3%), MCP Atlas (56.1%), τ²-bench (92.5%); capped by weak Terminal-Bench 2.1 (41.6%), Toolathlon (35.5%), AA Agentic Index (17.7%), GDPval-AA normalized (22.4%), GDPval-AA (1035 Elo). Moderate agentic tool-use profile.
- **Reasoning: 64/100.** GPQA 82.8%, MMLU-Pro 77.2%, ARC-AGI-1 (51.50%), AA-LCR (76.7%), FrontierMath T1-3 (44.912%); capped by ARC-AGI-2 (5.7%), CritPt (9.3%), HLE (37.7%), AA-HLE (28.3%), AA-Omniscience accuracy (25.7%), Intelligence Index (20.7%). Moderate reasoning.
- **Context window: 78/100.** Verified 400K tokens (benchlm.ai); AA-LCR 76.7%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 60/100.** Text+image in, text out per AA; MMMU-Pro (66.1%), AA-MMMU-Pro (65.4%), MMMU-Pro w/ Python (69.5%); capped by text-only output.
- **Coding: 60/100.** LiveCodeBench v6 (84.0%), SWE-bench Vals (69.8%), Vibe Code Bench (26.10%), AA-SciCode (47.2%), AA Coding Index (56.1%); moderate coding.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 62.4/100.** Half-up mean of (50 + 64 + 78 + 60 + 60) / 5 = 62.4 → 62. Best-fit recommendation: strong LiveCodeBench coding at 400K context; verify on HLE-class and agentic tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + OpenAI GPT-5.4 mini and nano launch page + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
