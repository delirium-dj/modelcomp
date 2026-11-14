- Source: OpenAI/GPT-5.2 Pro
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** The professional tier of OpenAI's GPT-5.2 series (2025-12-11), supporting `xhigh` reasoning for scientific research, mathematical proof and critical decision support. Famous for independently proving an Erdős conjecture in Jan 2026, verified by Terence Tao. A distinct variant; GPT-5.2 Instant / Thinking and GPT-5.2-Codex are separate.
- **Provider / access:** OpenAI Responses API (commercial), ChatGPT Pro tier.
- **Release / knowledge:** 2025-12-11; knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.2-pro` family ID as cited. No free Zen ID verified.
- **Context window:** no Pro-specific figure in the retrieved pages — the GPT-5.2 generation is third-party-reported at 400K; no verified public score found for a Pro-specific window.
- **Modalities:** text in, text out; deep reasoning, mathematics, scientific research and critical decision support; `xhigh` reasoning effort. No verified image/audio/video input for this exact variant.
- **Pricing (as of 2026-11-14):** no Pro-specific rate card in the retrieved pages — no verified public price found. The GPT-5.2 generation's $14 / 1M output is a generation-level figure, not attributed as a Pro rate.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Extended `xhigh` reasoning budget.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **93.2%**
- ARC-AGI-2 (Verified): **54.2%**
- January 2026: independently proved an **Erdős conjecture**, verified by Fields Medalist Terence Tao and described as "the clearest first-category result (AI primary contribution) to date" — a research result, not a benchmark score
- GPT-5.2 series (generation-level, not Pro): SWE-bench Pro **55.6%**, ~**70.9%** of tasks at or above human-expert level, 256K-character long-document accuracy near 100% (a third-party "活力百科" summary, labelled secondary/generation-level)
- HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Agent / tool use:

- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Coding:

- No Pro-specific coding benchmark in the retrieved pages; the generation-level SWE-bench Pro 55.6% above is not attributed as a Pro score
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 256K-character long-document accuracy near 100% (generation-level, secondary) — not a Pro-specific retrieval benchmark; MRCR / RULER / GraphWalks: no verified public score found

Controversy (context, not scored): December 2025 coverage alleged GPT-5.2 used >2x Gemini 3's tokens to score similarly on HLE/MMMU-Pro/Video-MMMU/Frontier Math Tier 4 — a generation-level claim, kept as context.

### Normalized scores (1–100)

- **Tool use: 78/100.** Scored conservatively: the retrieved primary sources document reasoning and research capability, not agent/tool harness results; no scored agent benchmark exists for this variant.
- **Reasoning: 92/100.** GPQA Diamond 93.2%, ARC-AGI-2 (Verified) 54.2% and an expert-verified original Erdős proof — exceptional reasoning evidence; capped by no HLE/ARC-AGI-3 figure and by the generation-level token-efficiency controversy.
- **Context window: 82/100.** Generation-level 400K window (third-party) and ~100% 256K-character document accuracy (secondary); capped by no Pro-specific verified figure and no retrieval benchmark.
- **Multimodal: 72/100.** Scored conservatively: no verified image/audio/video input is documented for the Pro variant in the retrieved sources.
- **Coding: 78/100.** General GPT-5.2 coding lineage; capped by zero published Pro-specific coding benchmark scores.
- **Cost efficiency: 65/100.** A premium Pro tier with an `xhigh` reasoning budget and generation-level $14 / 1M output; capped by no Pro-specific rate card and documented high token consumption. Excluded from Overall.
- **Overall Score: 80/100.** Half-up mean of 78, 92, 82, 72, 78 = 80.4 → 80. Best fit: hard scientific reasoning and mathematical proof assistance; not agentic, multimodal or cost-sensitive workloads.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.2 Pro article retrieved via public web search excerpt (release, xhigh reasoning, GPQA Diamond 93.2%, ARC-AGI-2 Verified 54.2%, Erdős proof verified by Terence Tao, Responses API), plus the Baidu Baike GPT-5.2 article (already fetched) for generation-level context and a third-party "活力百科" summary for SWE-bench Pro 55.6% / 70.9% human-expert / 256K-document figures — explicitly labelled secondary and generation-level, never merged into Pro's own rows. The token-efficiency controversy is context, not a score. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [GPT-5.2 Pro — 百度百科 (retrieved via search excerpt; GPQA, ARC-AGI-2, Erdős proof)](https://baike.baidu.com/item/GPT-5.2%20Pro/67258433)
  - [GPT-5.2 — 百度百科 (generation-level context, already fetched)](https://baike.baidu.com/item/GPT-5.2/67081827)
