# Claude 3.5 Sonnet — findings by Nemotron 3.5 Super VL 120B A12B

- Source: anthropic.com Claude 3.5 Sonnet Model Card Addendum (official PDF, 2024-06-20), anthropic.com news "Introducing Claude 3.5 Sonnet" (2024-06-21), anthropic.com engineering "Raising the bar on SWE-bench Verified with Claude 3.5 Sonnet" (2025-01-06), Vertex AI Google Cloud model page, benchlm.ai comparisons (vs jeff, VITA 1.0, Ministral 3 14B, Decision 4B v1.1), llm-stats.com compare (vs Claude Opus 4), Artificial Analysis comparison (vs Claude 4.5 Sonnet), Ars Technica / TechCrunch / VentureBeat press
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet (Anthropic)
- **Short description:** Anthropic's mid-tier Claude 3.5 family model, announced 2024-06-20, outperforming Claude 3 Opus on most evaluations with the speed/cost of Claude 3 Sonnet; hybrid reasoning not applicable (standard dense model, non-reasoning per benchlm); 200K context; proprietary.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud Vertex AI; free on Claude.ai with rate limits.
- **Release / knowledge:** Released 2024-06-20; knowledge cutoff not explicitly stated for this variant (Claude 3 family cutoff August 2023 per main card; upgraded version April 2024 per Oct 2024 addendum).
- **IDs:** `claude-3-5-sonnet@20240620` (Vertex GA), `claude-3-5-sonnet-20241022` (upgraded variant), `claude-3-5-sonnet` (benchlm/llm-stats).
- **Context window:** 200,000 tokens (Anthropic news + model card + Vertex AI + benchlm). Verified across sources.
- **Modalities:** Text + image in, text out (vision-capable); reasoning yes (non-reasoning classifier per benchlm but standard LLM); tool calls yes; JSON/structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** $3.00/M input, $15.00/M output (Anthropic; same as Claude 3 Sonnet).
- **Architecture:** Dense Transformer (Claude 3 family); parameter count undisclosed by Anthropic.

### Raw benchmarks found

Official Anthropic model card addendum (Table 1) plus independent aggregators. Two variants exist: original (June 2024) and "new"/upgraded (Oct 2024) — scores differ materially (e.g. SWE-bench Verified 33% vs 49%); both cited where version is identifiable.

Agent / tool use:

- Internal agentic coding evaluation: **64%** (Anthropic addendum; vs 38% Claude 3 Opus)
- SWE-bench Verified: **49%** (new/upgraded, Oct 2024, Anthropic engineering post) / **33%** (original) / **49%** (benchlm.ai vs jeff/VITA/Ministral/Decision comparisons)
- TAU-bench Airline: **46.0%** (llm-stats vs Claude Opus 4)
- TAU-bench Retail: **69.2%** (llm-stats vs Claude Opus 4)

Reasoning / knowledge:

- GPQA Diamond: **59.4%** (0-shot CoT, Anthropic addendum) / **67.2%** (Maj@32 5-shot CoT) / **59.4%** (Artificial Analysis vs Claude 4.5 Sonnet; llm-stats vs Opus 4 reports 67.2%)
- MMLU: **90.4%** (5-shot CoT) / **88.7%** (5-shot) / **88.3%** (0-shot CoT) (Anthropic addendum)
- MMLU-Pro: **77.6%** (llm-stats implied via Opus 4 comparison context)
- BBH: **93.1%** (3-shot CoT, Anthropic addendum)
- DROP: **87.1** (F1, 3-shot, Anthropic addendum)
- MATH: **71.1%** (0-shot CoT, Anthropic addendum)
- GSM8K: **96.4%** (0-shot CoT, Anthropic addendum)
- MGSM: **91.6%** (0-shot CoT, Anthropic addendum)
- HLE: not found for 3.5 Sonnet in fetched sources
- Artificial Analysis Intelligence Index: **8 (estimated)** (vs Claude 4.5 Sonnet 21)
- benchlm.ai independent public score: **28.27** (4 benchmarks covered)

Coding:

- HumanEval: **92.0%** (0-shot, Anthropic addendum) / **93.7%** (llm-stats)
- SWE-bench Verified: **49%** (new) / **33%** (original) — see conflict note below
- LiveCodeBench: not found for 3.5 Sonnet in fetched sources

Multimodal & grounded:

- MMMU (validation): **68.3%** (Anthropic addendum)
- MathVista (testmini): **67.7%**
- AI2D (test): **94.7%**
- ChartQA (test, relaxed): **90.8%**
- DocVQA (test, ANLS): **95.2%**
- Vision: Claude 3 family card states all Claude 3 models process images and return text

Long context:

- Needle In A Haystack: near-perfect recall up to 200K (Anthropic addendum Table 5, Figure 1); context 200K; no public retrieval curve beyond 200K.

### Conflicting results noted

- **Variant conflict:** Original Claude 3.5 Sonnet (June 2024) vs upgraded "new" Claude 3.5 Sonnet (Oct 2024). SWE-bench Verified differs: 33% (original) vs 49% (new). GPQA 59.4% is from the addendum (applies to the family update). Where version is ambiguous, both are noted.
- **SWE-bench Verified:** Anthropic engineering post (49%, new) vs benchlm.ai comparisons (49%) vs llm-stats (49.0%) — consistent for the new variant; original 33% is the older number.
- **GPQA:** Anthropic 59.4% (0-shot CoT) vs llm-stats/Artificial Analysis 67.2% (Maj@32 5-shot) — different prompting, both cited.
- **MMLU:** 90.4% (5-shot CoT) vs 88.7% (5-shot) vs 88.3% (0-shot CoT) — different prompting methods, all from Anthropic addendum.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. model-queue curated Overall for claude-sonnet-5 is 87.8 (different model); this file scores Claude 3.5 Sonnet independently.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** Strong agentic coding (64% internal), SWE-bench Verified 49% (new variant), TAU-bench Retail 69.2 / Airline 46.0; capped by no public Terminal-Bench/BrowseComp/MCP Atlas scores.
- **Reasoning: 72/100.** Strong on GPQA Diamond (59.4–67.2), MMLU (88.7–90.4), BBH (93.1), GSM8K (96.4), MGSM (91.6); capped by HLE not found and Intelligence Index 8 (estimated) being modest.
- **Context window: 80/100.** Declared and verified 200K tokens with strong Needle In A Haystack recall; capped by no public retrieval curve beyond 200K and smaller than 1M-context peers.
- **Multimodal: 80/100.** Vision-capable with strong MMMU (68.3), MathVista (67.7), AI2D (94.7), ChartQA (90.8), DocVQA (95.2); no public MMMU-Proc/Chartography beyond these.
- **Coding: 78/100.** HumanEval 92.0/93.7, SWE-bench Verified 49% (new), internal agentic coding 64%; capped by no LiveCodeBench/Codeforces found and SWE-bench below frontier (Opus 4 72.5%).
- **Cost efficiency: 55/100.** $3/$15 per M is mid-range for its capability tier; not counted toward Overall.
- **Overall Score: 76/100.** Half-up mean of (68 + 72 + 80 + 80 + 78) / 5 = 75.6 → 76. Best-fit recommendation: capable mid-tier generalist with strong vision and coding; superseded by Claude 3.7/4 Sonnet for frontier reasoning.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Anthropic model card addendum + news + engineering post + Vertex AI + benchlm.ai + llm-stats + Artificial Analysis + press); scores are normalized 1–100 interpretations, not official vendor scores. Original (June 2024) and upgraded (Oct 2024) variants distinguished where version is identifiable.
- Future sources: add a new file next to this one, using the same headings.
