- Source: OpenAI/GPT-5.1-Codex
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** OpenAI's November 2025 agentic coding model, the predecessor that GPT-5.1-Codex-Max replaced as the default in the Codex integrated surface. A distinct model; `gpt-5.1-codex-max`, `gpt-5.1-codex-mini` and `gpt-5-codex` are separate.
- **Provider / access:** Codex integrated surface / CLI / IDE extension; OpenAI API.
- **Release / knowledge:** 2025-11; knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.1-codex`. No free Zen ID verified.
- **Context window:** **>1,000,000 tokens effective via compression/compaction** (secondary Tencent Cloud comparison attributes compaction to GPT-5.1 Codex); the explicit "compaction" mechanism is documented in detail for the Max successor — lineage, reported with provenance. No vendor-verified exact figure for this ID.
- **Modalities:** text and code in, text/code out; agentic software engineering, long-session coding. No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** standard GPT-5-series pricing (**$1.25 / 1M input, $10 / 1M output**, from OpenAI's official GPT-5 developer page, already fetched) — lineage rate card, not a verified Codex-specific quote.
- **Architecture:** Proprietary, closed weights; built on the GPT-5 architecture with agentic coding optimisation and context compression. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Long-session agentic coding with compaction across >1M tokens (secondary/lineage, qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- **No GPT-5.1-Codex-specific benchmark score was published in the retrieved sources.** The 77.9% SWE-bench Verified / 58.1% Terminal-Bench 2.0 / 79.9% SWE-Lancer IC SWE figures belong to **GPT-5.1-Codex-Max**, and GPT-5-CODEX's 74.5% SWE-bench belongs to a different ID — none are attributed here
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Compaction-style long-session design (secondary); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 82/100.** Agentic coding with long-session context management in the Codex surface; capped by no scored agent harness for this exact ID.
- **Reasoning: 80/100.** GPT-5-series reasoning lineage; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 88/100.** >1M-token effective long-session work via compression (secondary/lineage); capped by no vendor-verified figure and no retrieval benchmark.
- **Multimodal: 74/100.** Scored conservatively: no verified image/audio/video input was documented for this exact ID.
- **Coding: 82/100.** Purpose-built agentic coding model that served as Codex's default; capped by zero published benchmark scores for this exact ID (all retrieved figures belong to the Max successor).
- **Cost efficiency: 87/100.** Standard GPT-5-series pricing ($1.25/$10 lineage) with efficient long-session compression. Excluded from Overall.
- **Overall Score: 81/100.** Half-up mean of 82, 80, 88, 74, 82 = 81.2 → 81. Best fit: historical/legacy long-session agentic coding; superseded within weeks by GPT-5.1-Codex-Max.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.1-Codex-Max article retrieved via public web search excerpt (which identifies GPT-5.1-Codex as the predecessor it replaced as Codex default), the Baidu Baike GPT-5-CODEX excerpt (a different model's 74.5% SWE-bench figure, explicitly NOT attributed here), and secondary Tencent Cloud / 中关村在线 coverage for the compaction and $1.25/$10 pricing — labelled secondary/lineage. This report is deliberately an evidence-limited record: **no benchmark measured under the GPT-5.1-Codex ID was retrieved**, so every raw row reads "no verified public score found" and the normalized scores are a declared conservative interpretation with the arithmetic shown — no Max, GPT-5-CODEX or GPT-5 figures are copied. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [GPT-5.1-Codex-Max — 百度百科 (retrieved via search excerpt; predecessor identity)](https://baike.baidu.com/item/GPT-5.1-Codex-Max/67466869)
  - [GPT-5.1 Codex 与 Claude Opus 4.5 — 腾讯云 (retrieved via search excerpt; secondary compaction context)](https://cloud.tencent.com/developer/article/2603192)
  - [Introducing GPT-5 for developers — OpenAI (lineage pricing, already fetched)](https://openai.com/index/introducing-gpt-5-for-developers/)
