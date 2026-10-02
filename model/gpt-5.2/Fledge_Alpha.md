# GPT-5.2 — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's Dec 11, 2025 GPT-5-family release (Instant/Thinking/Pro tiers), first GPT-5 with 400K context; deprecated from the API May 8, 2026.
- **Provider / access:** Retired — ChatGPT June 12, 2026; API deprecated May 8, 2026; Copilot code-review only.
- **Release / knowledge:** 2025-12-11.
- **IDs:** `openai/gpt-5.2`, `gpt-5.2-pro`
- **Context window:** 400,000 tokens; 128K max output.
- **Modalities:** text + image in; text out; reasoning effort none→xhigh (Thinking tier).
- **Pricing (at deprecation):** $1.75/M in, $0.175/M cache, $14/M out; Pro $21/$168.
- **Architecture:** MoE Transformer (per HokAI), proprietary.

### Raw benchmarks found

Agent / tool use:

- GDPval (wins/ties): **70.9%** (Thinking); GPT-5.2 Pro **74.1%** (#1 at the time)
- SWE-Lancer IC Diamond: **74.6%**
- Terminal-Bench 2.0: 47.6–69.4% reported range by tier (Awesome agents table shows ~47.6 for GPT-5.1-equivalent — treat GPT-5.2's own Terminal-Bench as unverified)

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** (Thinking); Pro **93.2%**
- HLE (no tools): **34.5%**; with search/Python: **45.5%**; Pro **36.6%/50.0%**
- AIME 2025: **100%**; HMMT Feb 2025: **99.4%**
- FrontierMath Tier 1–3: **40.3%**; Tier 4: **14.6%**
- ARC-AGI-2 (Verified): **52.9%**

Coding:

- SWE-bench Verified: **80.0%** (OpenAI) / 75.4% (vals.ai standardized)
- SWE-Bench Pro (public): **55.6%** (SOTA at launch); SWE-bench Multilingual: **66.7%**
- LiveCodeBench Pro: 23rd-percentile-class Elo per evals.report (no clean number)

Long context:

- MRCRv2 8-needle: **98.2%** @4–8K, **85.6%** @128–256K, **77.0%** @128–256K band per OpenAI's table.

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval 70.9% and SWE-Lancer 74.6% are strong; no GDPval-Pro-tier Terminal-Bench verified.
- **Reasoning: 80/100.** GPQA 92.4%, AIME 100%, HLE-with-tools 45.5% were frontier at launch, now mid-pack.
- **Context window: 72/100.** 400K window with 77% MRCR at 256K — respectable, but below the 1M-class successors.
- **Multimodal: 65/100.** Text + image input; no audio/video.
- **Coding: 78/100.** SWE-bench Verified 80.0% and SWE-Bench Pro SOTA 55.6% at launch; since superseded.
- **Cost efficiency: 78/100.** $1.75/$14 with 90% cache discount — reasonable, but model is deprecated.
- **Overall Score: 75/100.** Mean of the five quality dims; historical marker release — superseded by GPT-5.5/GPT-5.6 and deprecated from the API.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI launch post, HokAI, evals.report, vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
