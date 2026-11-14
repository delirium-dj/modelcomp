- Source: xAI/SpaceXAI/Grok 4.5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI (later SpaceXAI) and Cursor's jointly developed 2026-07-09 productivity model for programming, agent tasks and knowledge work; Musk described it as "Opus-level" but faster, more token-efficient and cheaper. A distinct model; Grok 4.3 precedes it and Grok 4.6 follows it.
- **Provider / access:** API, Cursor and the Grok/xAI ecosystem; part of a stated monthly-release cadence for 2026.
- **Release / knowledge:** 2026-07-09 (announced 2026-07-08); knowledge cutoff: no verified public score found.
- **IDs:** `grok-4.5` family ID as cited. No free Zen ID verified.
- **Context window:** **500,000 tokens** per a secondary CSDN spec table (which lists grok-4.5 500K / $2 / $6 / 1.5T vs grok-4.3 1M / $1.25 / $2.50 / 0.5T); other launch coverage claims 1M. Reported as a source discrepancy, not merged — the 500K third-party table is used with its provenance.
- **Modalities:** text and image in, text out; coding, agent tasks, knowledge work, dual reasoning modes. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$2 / 1M input, $6 / 1M output** (Baidu Baike, vendor launch price).
- **Architecture:** **1.5 trillion parameters** (secondary spec table); ~**80 tokens/s** inference speed (secondary CSDN analysis, vs Opus 4.8's ~30–40 tok/s); a full architectural rebuild per launch coverage, labelled secondary. No vendor-disclosed activation count.

### Raw benchmarks found

Agent / tool use:

- Described as "Opus-level" with higher speed and token efficiency at lower cost (vendor positioning via Baike, qualitative)
- ~**80 tokens/s** output (secondary CSDN analysis; Opus 4.8 ~30–40 tok/s) — a speed figure, not a benchmark score
- Dual reasoning modes and agent-native design (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Intelligence index **53** is cited for DeepSeek V4 Pro in the Grok 4.6 comparison, not Grok 4.5 — not attributed here. AA index **53** in the Baike Grok 4.3 article belongs to Grok 4.3 — not attributed here.
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Co-developed with Cursor for production coding workflows; benchmark scores described as "not comprehensively dominant" in secondary analysis (directional)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 500K third-party-reported window (1M in some launch coverage); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** Agent-native dual reasoning modes, Cursor co-development and ~80 tok/s responsiveness (2x Opus 4.8); capped by no scored agent harness figure for this exact ID.
- **Reasoning: 84/100.** "Opus-level" positioning with 1.5T params and a full rebuild; capped by zero published numeric reasoning benchmarks for Grok 4.5 and by secondary analysis calling the benchmark results non-dominant.
- **Context window: 87/100.** 500K (third-party) / 1M (launch coverage) window with long-text enterprise positioning; capped by conflicting figures and no retrieval benchmark.
- **Multimodal: 80/100.** Text and image input for coding/knowledge work; capped by text-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 84/100.** Purpose-built with Cursor for engineering workflows; capped by no published SWE-bench / Terminal-Bench figure.
- **Cost efficiency: 88/100.** $2/$6 per 1M — half of Opus 4.8's $5/$25 while roughly 2x faster, with high token efficiency; excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 85, 84, 87, 80, 84 = 84.0 → 84. Best fit: high-throughput, cost-sensitive coding and agent workloads inside Cursor; Grok 4.6 supersedes it on measured agent benchmarks.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Grok 4.5 article retrieved via public web search excerpt (release, $2/$6 pricing, "Opus-level" positioning, monthly cadence), with secondary CSDN spec/analysis pages for the 500K context, 1.5T params and ~80 tok/s — explicitly labelled secondary. AA-index figures of 53 belong to Grok 4.3 and DeepSeek V4 Pro respectively and are explicitly NOT attributed to Grok 4.5. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Grok 4.5 — 百度百科 (retrieved via search excerpt; release and vendor pricing)](https://baike.baidu.com/item/Grok%204.5/68611808)
  - [Grok 4.5 技术解析 — CSDN (retrieved via search excerpt; secondary 500K/1.5T spec table)](https://blog.csdn.net/m0_65682055/article/details/162729321)
