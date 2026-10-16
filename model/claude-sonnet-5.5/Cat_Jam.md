# Claude Sonnet 5.5 — findings by Cat Jam

- Source: Anthropic / Claude Sonnet 5.5 (`opencode/claude-sonnet-5-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's best balance of speed and intelligence (released 2026-09-28): 1M context, adaptive thinking, standout terminal/agentic coding, strong knowledge work, fast.
- **Provider / access:** Claude API (`claude-sonnet-5-5`), AWS Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Text/image in; text out.
- **Release / knowledge:** Released 2026-09-28; knowledge cutoff Jun 2026; retirement not sooner than 2027-09-28.
- **IDs:** `claude-sonnet-5-5` (Anthropic), `anthropic/claude-sonnet-5-5` (OpenRouter)
- **Context window:** 1,000,000 tokens; max output 128,000 (300K via Batch API beta). Verified via Anthropic docs.
- **Modalities:** Text, image in; text out. Adaptive thinking (default high); function calling, PDFs, prompt caching. No native audio/video. Temperature/top_p non-default returns 400.
- **Pricing (as of 2026-10-16):** $2 / $10 per 1M input/output; cache read $0.10; 5m cache write $2.50; 1h $4; Batch 50%. Fast value tier.
- **Architecture:** Proprietary; adaptive thinking; no open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic, vendor) / AA 63.6% (max)
- Toolathlon-Verified: **77.8%**
- AA-Agentic Index (max): **60.4%**
- GDPval-AA v2.1: **1844** Elo (vendor) / 66.9% (AA)
- AA-Briefcase v1.1: **1811** Elo
- OSWorld (partial/strict): **80.1%** partial / 43.5% strict
- AutomationBench: **44.6–44.7%**
- τ³-Banking: not separately located in sampled data (not stated)
- MCP Atlas: 79.7 protocols (troubleshooting/understanding) reported; no MCP Atlas aggregate found

Reasoning / knowledge:

- HLE (no tools / w/ tools): **56.9% / 64.5%** (vendor) / AA-HLE 55.0%
- AA Intelligence Index (max): **56.0** (AA)
- GPQA Diamond (Vals): **94.1%** (benchgap) / AA-GPQA 96.2% (est)
- AA-LCR v1.1: **82.7%**
- CritPt: **31.4%**
- Omniscience Accuracy / Hallucination: **54.0% / 47.0%** (AA)
- HealthBench Professional: **69.2%**
- Chartography (no tools): **61.6%**

Coding:

- SWE-bench Pro: **81.3%** (vendor max) (some aggregators misattribute Opus 5.5's 89.9)
- SWE Multilingual: **90.3%**; SWE Multimodal 54.3%
- DeepSWE v1.1: **71.0%**
- FrontierCode 1.1 Main: **46.2%** max / 52.1% xhigh; Extended 59.1%
- Terminal-Bench-Science 0.1: **59.9%**
- ProgramBench: **79.7%**
- FrontierSWE v2: 61.9%
- AA-SciCode: **61.0%**; SciCode 60.4%
- LiveCodeBench (Vals): **87.0%**; Vals SWE-bench 95.4%
- Vals Terminal-Bench 4.0: 63.6% (AA max)

Long context:

- 1,000,000 context; ProgramBench long-context 79.7%. No independent MRCR/RULER score in sampled data.

### Normalized scores (1–100)

- **Tool use: 95/100.** TB4 vendor 70.6 (AA 63.6), TB-Science 59.9, Toolathlon 77.8, OSWorld 43.5 strict/80.1 partial, GDPval 1844 (near Opus 5.5), AutomationBench 44.7. Strong terminal agent.
- **Reasoning: 94/100.** HLE 56.9–64.5, GPQA ~96, AA Index 56.0, LCR 82.7, HealthBench Professional 69.2; CritPt 31.4 and Omniscience 54/47 cap.
- **Context window: 95/100.** Verified 1M with long-context ProgramBench 79.7. No published retrieval score caps top.
- **Multimodal: 82/100.** Text/image in, text out; SWE-Multimodal 54.3, OSWorld 80.1 partial; no native audio/video.
- **Coding: 93/100.** SWE-Pro 81.3, SWE Multilingual 90.3, DeepSWE 71.0, ProgramBench 79.7, TB4 vendor 70.6, SciCode 61.0; frontier mid-tier Sonnet (beats Sonnet 5, slightly behind Opus 5.5).
- **Cost efficiency: 88/100.** $2/$10 per 1M, batch 50%, cache read $0.10; excellent value for near-Opus-5.5 performance, no free tier.
- **Overall Score: 92/100.** Mean of (95 + 94 + 95 + 82 + 93) / 5 = 91.8. Best speed/intelligence value in Claude lineup at $2/$10.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Anthropic platform docs, Artificial Analysis, benchgap, benchlm, Apidog, Vellum, waitwhichmodel); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
