# Claude Sonnet 4.5 — findings by Ling 3.1 Flash

- Source: Anthropic (`opencode/claude-sonnet-4.5`; API `claude-sonnet-4-5`; Claude API, Claude apps, Claude Code, Amazon Bedrock, Google Cloud, Microsoft Foundry)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's September-2025 Sonnet flagship (deprecated; retires 2026-11-30, replacement Claude Sonnet 5.5) — the launch SOTA on SWE-bench Verified (77.2%, 10-trial avg; 78.2% in a 1M configuration; 82.0% under a high-compute selection regime) and the launch leader on OSWorld (61.4%, up from Sonnet 4's 42.2%) with >30-hour continuous autonomy, at the unchanged $3/$15 per 1M; GPQA Diamond 82.3%, AIME 77.8%, MATH Level 5 97.7%.
- **Provider / access:** Anthropic API (extended thinking; default effort not supported), Claude apps, Claude Code, Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. `noFreeId`.
- **Release / knowledge:** 2025-09-29; reliable knowledge cutoff Jan 2025, training-data cutoff Jul 2025.
- **IDs:** `anthropic/claude-sonnet-4.5` / `claude-sonnet-4-5`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the primary configuration is 200K tokens (a 1M configuration exists but was implicated in Anthropic's inference issues) and the model takes text and image input.
- **Context window:** 200,000 tokens (primary; a 1M configuration exists but was implicated in Anthropic's recent inference issues, so Anthropic reports the 200K result as primary); 64,000 max output.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $3.00/$15.00 per 1M input/output (unchanged from Sonnet 4); cache read $0.30/M (10% of input); 5m cache write $3.75/M, 1h $6.00/M; Batch API 50% ($1.50/$7.50); regional/multi-region cloud endpoints +10%.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Vendor (Anthropic launch, 2025-09-29; SWE-bench Verified: simple 2-tool scaffold, 10-trial average, no test-time compute, 200K thinking budget; OSWorld: official OSWorld-Verified framework, 100 max steps, 4-run average; AIME: sampling at temperature 1.0, 64K reasoning tokens for the Python configuration):

Agent / tool use:

- SWE-bench Verified: **77.2%** — launch SOTA; **78.2%** in a 1M-context configuration (not primary); **82.0%** under Anthropic's "high compute" regime (parallel sampling, regression-test rejection, internal scoring model)
- OSWorld (computer use): **61.4%** — led at launch (Sonnet 4: 42.2% four months earlier)
- Terminal-Bench (Terminus 2, multi-run average): **46.5%** (Epoch/themodelbeat)
- GDPval (win/tie rate): **50.3%**
- Autonomy: **>30 hours** of continuous multi-step operation (previous generation ~7 hours); automatic "context editing" plus a file-backed memory tool
- τ²-Bench: run with extended thinking, tool use and prompt addenda — value not captured

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (themodelbeat)
- AIME 2024/2025: **77.8%**
- MATH Level 5: **97.7%**; FrontierMath: **15.2%**; FrontierMath Tier 4: **4.2%**
- ARC-AGI: **63.7%** (themodelbeat; version not specified)
- SimpleBench: **54.3%**; SimpleQA Verified: **30.7%**; WeirdML: **47.7%**
- HLE: no verified public score found
- MMMLU: averaged over 5 runs across 14 non-English languages with extended thinking (up to 128K) — value not captured

Coding (beyond SWE-bench Verified):

- WebDev Arena: **1391** (Epoch); GSO (code optimization): **14.7%**
- LiveCodeBench, DeepSWE, AA Coding Index: no verified public score found

Long context / multimodal:

- 200K primary window (1M configuration implicated in inference issues); no MRCR/RULER/AA-LCR figure captured
- No MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 74/100.** SWE-bench Verified 77.2% (launch SOTA, 10-trial avg) and OSWorld 61.4% (led at launch, up from Sonnet 4's 42.2%) lead, with GDPval win/tie 50.3%, Terminal-Bench 46.5% and >30-hour continuous autonomy supporting; τ²-Bench's value was not captured, and the model is 13 months old with Terminal-Bench far under the current 85% bar.
- **Reasoning: 70/100.** GPQA Diamond 82.3%, AIME 2024/2025 77.8% and MATH Level 5 97.7% are strong, but FrontierMath 15.2% (Tier 4: 4.2%), SimpleQA Verified 30.7% and the absence of an HLE figure cap the score; the model is 13 months old.
- **Context window: 70/100.** 200K-token window — the methodology's 70 anchor; a 1M configuration exists but was implicated in Anthropic's inference issues, so Anthropic reports the 200K result as primary; no MRCR/RULER/AA-LCR figure captured.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no MMMU/Video-MMMU figure captured.
- **Coding: 74/100.** SWE-bench Verified 77.2% (78.2% in the 1M configuration; 82.0% under Anthropic's high-compute candidate-selection regime) was the launch SOTA, with WebDev Arena 1391 supporting; Terminal-Bench 46.5% is far under the current bar, GSO is 14.7%, and LiveCodeBench/DeepSWE/AA Coding Index were not captured.
- **Cost efficiency: 60/100.** $3/$15 per 1M is the methodology's ~60 anchor exactly; 10%-of-input cache reads ($0.30/M) and half-rate Batch API ($1.50/$7.50) are offsets.
- **Overall Score: 71/100.** (74+70+70+65+74)/5 = 70.6 → 71 — the September-2025 agentic-coding SOTA (SWE-bench Verified 77.2%, OSWorld 61.4%, >30-hour autonomy at $3/$15) whose age, 200K window, Terminal-Bench (46.5%) and FrontierMath (15.2%) place it well below the October-2026 frontier; deprecated with retirement on 2026-11-30.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Anthropic Sonnet 4.5 launch + platform docs, Epoch AI, themodelbeat, CometAPI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4_5.md`, using the same headings.
